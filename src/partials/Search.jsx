import React, { useState } from 'react';
import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, increment, ref, set, child, get, onValue, push } from "firebase/database";
import { data } from 'autoprefixer';
import { useResolvedPath } from 'react-router-dom';
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import Details from './Details'
import jsons from './firebase.json';




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  databaseURL: "https://criblytics-default-rtdb.firebaseio.com/",
  apiKey: "AIzaSyCRv3YXcKBp4caX4SLDf9tOM_jf6-PgKWc",
  authDomain: "criblytics.firebaseapp.com",
  projectId: "criblytics",
  storageBucket: "criblytics.appspot.com",
  messagingSenderId: "109707951445",
  appId: "1:109707951445:web:120d9a55b9851e13bd03dc",
  measurementId: "G-VH1N6MR0RG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);



const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

const auth = getAuth();

const states = [
  "AL", "AK", "AZ", "AR", "CA",
  "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA",
  "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO",
  "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH",
  "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT",
  "VA", "WA", "WV", "WI", "WY"
  ];

function Search(props) {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [isLogin, setLogin] = useState('false');
  const [listing_id, setListing] = useState('0');

  //Property to ID resolver

  //Search to property list
    //Search by street for sale
      //Output all results to properties database
        //Select specific from street number

  
  //Properties:
    //Address

  function notLogin() {
    const signInButton = document.getElementById("signIn");
    signInButton.classList.remove("border-transparent");
    signInButton.classList.add("border-red-500");
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  const [showDetails, setShowDetails] = useState(false);

  var isDone = false;

  const handleClick = () => {
    if(isDone) {
      
      console.log("City: " + city);
      console.log("State: " + state);
      console.log("Address: " + address);
      console.log();

    } else {
      fetchProperties(city, state, address);
      //notLogin();
    }
  };

  useEffect(() => {
    setLogin(false);
  });

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2661057b61msh8e6271d7a1763b6p12ffb0jsnc06db3ad292e',
      'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
    }
  };


  const fetchProperties = (stateCode, city, location) => {

    if (stateCode === '' || city === '' || location === '') {
      alert("Invalid input");
    } else {
      const formattedAddress = `${location} ${stateCode} ${city}`;
      const perfect = encodeURIComponent(formattedAddress);

      const propID = `https://us-real-estate.p.rapidapi.com/location/suggest?input=${perfect}`;

      const properties = ref(database, 'properties');

      get(properties).then((snapshot) => {
        const propertyData = snapshot.val();
        const existingProperty = Object.values(propertyData).find(
          (property) => property.city === city && property.state === stateCode && property.address === location
        );

        if (existingProperty) {
          console.log("Property data already exists");
          setListing(existingProperty.property_id);
          setShowDetails(true);
        } else {
          console.log("Property data not found, fetching from API");

          fetch(propID, options)
            .then(response => response.json())
            .then(response => {
              const property = response.data[0].property_id;
              setListing(property);

              const propDetails = `https://us-real-estate.p.rapidapi.com/v2/property-detail?property_id=${property}`;

              fetch(propDetails, options)
                .then(details => details.json())
                .then(details => {
                  let json = details.data.property_detail;
                  delete json.product_attributes;
                  set(properties.child(property), json); // Save the data in Firebase under the property ID
                  setShowDetails(true);
                })
                .catch(err => console.error(err));
            })
            .catch(err => console.error(err));
        }
      }).catch((error) => {
        console.error(error);
      });
    }
  };

  // ... (existing code)


  return (
    <>
    <div id="search">
        <div className="p-4 flex content-center justify-center text-center">
            <div className="w-1/2 mr-2">
                <label className="text-3xl block text-grainy mb-2">City</label>
                <input 
                className="px-2 py-2 bg-dark-waves rounded-lg text-dark-bland w-full" 
                type="text" 
                value={city} 
                onChange={e => setCity(e.target.value)}
                />
            </div>
            <div className="w-1/2">
                <label className="text-3xl block text-grainy mb-2">State</label>
                <select 
                className="px-2 py-3 bg-dark-waves rounded-lg text-dark-bland w-4/5" 
                value={state} 
                onChange={e => setState(e.target.value)}
                >
                <option value="">Select a state</option>
                {states.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
            </div>
        </div>
        <div className="p-4 flex flex-col items-center">
            <label className="text-3xl block text-grainy mb-2">Address</label>
            <div className="w-3/5 mr-2 flex">
                <input 
                className="px-2 py-2 bg-dark-waves rounded-lg text-dark-bland w-full" 
                type="text" 
                value={address} 
                onChange={e => setAddress(e.target.value)}
                />
            </div>
        </div>
        <button id="search" onClick={handleClick} className="active:shadow-none shadow-2xl active:from-black active:to-black focus:bg-black w-1/3 rounded-xl text-wave duration-200 ease-in-out transition my-8 bg-gradient-to-l from-grainy to-bland ">Search</button>
        <img id="picture" src=""></img>
        <div id="details"></div>
        <div id="description"></div>
        
    </div>
    {showDetails && <Details listing_id={listing_id}/>}
    </>
  );
};

export default Search;
