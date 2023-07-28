
import jsons from './firebase.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed, faRuler, faCalendar, faDollarSign, faHome, faBuilding } from '@fortawesome/free-solid-svg-icons';

import React, { useState} from 'react';
import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, increment, ref, set, child, get, onValue, push } from "firebase/database";

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

const db = getDatabase();

const animateCSS = (id, animation, prefix = 'animate__') =>
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const element = document.getElementById(id);

    if (!element) {
      reject(`Element with ID '${id}' not found.`);
      return;
    }

    element.classList.add(`${prefix}animated`, animationName);

    function handleAnimationEnd(event) {
      event.stopPropagation();
      element.classList.remove(`${prefix}animated`, animationName);
      element.style.display = 'none';
      resolve('Animation ended');
      // At resolve, do backend stuff to check if property exists from API. Then pass it to the Table property.
    }

    element.addEventListener('animationend', handleAnimationEnd, { once: true });
  });



export default function Details(props) {

  // Parent container
  animateCSS('search', 'fadeOut'); 

  console.log(props.listing_id);
  return (
    <div>
      <Dropdown listing_id={props.listing_id}/>
    </div>
  );
}

const getRandomData = () => {
  // Function to generate random data for demonstration purposes
  return Math.random().toString(36).substring(2, 15);
};

const Dropdown = (props) => {
  const [snap, setSnap] = useState({});
  const [isKeyMetricsOpen, setIsKeyMetricsOpen] = useState(false);
  const [isPropertyDetailsOpen, setIsPropertyDetailsOpen] = useState(false);

  const handleKeyMetricsClick = () => {
    setIsKeyMetricsOpen(!isKeyMetricsOpen);
  };

  const handlePropertyDetailsClick = () => {
    setIsPropertyDetailsOpen(!isPropertyDetailsOpen);
  };

  useEffect(() => {
    //listing id
    const properties = ref(db, 'properties/' + props.listing_id);
    get(properties).then((snapshot) => {
      if (snapshot.exists()) {
        //console.log(snapshot.val());
        setSnap(snapshot.val());
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });

  }, []);

  return (
    
    <div>
      <h2 className="hover:text-emerald-400 text-3xl my-8 text-emerald-100 cursor-pointer" onClick={handleKeyMetricsClick} >
        <span className={`triangle ${isKeyMetricsOpen ? 'open' : ''}`} /> 
        Key Metrics
      </h2>

      {isKeyMetricsOpen && (
        <div>
          <p className="text-3xl border-4 border-emerald-800">Random Data: {getRandomData()}</p>
          <ul>
            <h1 className="text-grainy text-3xl font-medium">
              {Object.entries(snap.price_history[0])}
            </h1>
            
            <Calculator snap={snap} listing_id={props.listing_id}/>

          </ul>
        </div>
      )}
      
      <h2 className="hover:text-slate-400 text-3xl my-8 text-slate-100 cursor-pointer" onClick={handlePropertyDetailsClick}>
        <span className={`triangle ${isPropertyDetailsOpen ? 'open' : ''}`} />
        Property Details
      </h2>

      {isPropertyDetailsOpen && (
        <ul className="flex flex-wrap overflow-auto max-w-lg text-2xl font-medium">
          {
            Object.entries(snap.prop_common).map(([property, value]) => renderProperty(property, value))
          }
          <Photos snap={snap}/>
        </ul>
      ) }

    </div>
  );
};

const Photos = (props) => {
  console.log(props.snap);
  const [photos, setPhotos] = useState([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isPreloading, setIsPreloading] = useState(true);
  const [object, setObject] = useState({});

  useEffect(() => {
    const property = ref(database, 'properties/' + props.listing_id);
    get(property).then((snapshot) => {
      let snap = props.snap;
      if (snap && snap.photos && snap.photos.length > 0) {
        setPhotos(snap.photos); // Set the photos array in the state
        setIsPreloading(false); // Mark preloading as complete
      }
    });
  }, []);

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };
  return (
    <>
      <div className="border-2 border-grainy justify-center flex-wrap flex">
        {isPreloading ? (
          <div style={{ display: 'none' }}>
            {photos.map((photo, index) => (
              <img key={index} src={photo.href} alt={`Property ${index + 1}`} />
            ))}
          </div>
        ) : (
          <>
            <img src={photos[currentPhotoIndex].href} className="p-8 w-full h-96 rounded-2xl shadow-lg" alt={`Property ${currentPhotoIndex + 1}`} />

            <div className="flex justify-center my-4 rounded-xl">
              <button className="mr-4 bg-grainy rounded-xl shadow-xl" onClick={handlePrevPhoto} disabled={photos.length === 1}>
                Previous
              </button>
              <button className="bg-grainy rounded-xl shadow-xl" onClick={handleNextPhoto} disabled={photos.length === 1}>
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}

const Calculator = async(props) => {
  const listing_id = props.listing_id;
  /*const url = 'https://us-real-estate.p.rapidapi.com/v2/for-rent?city=Westerly&state_code=RI&limit=42&offset=0&sort=recently_added&beds_min=1&beds_max=5&baths_min=1&baths_max=5&expand_search_radius=25&home_size_min=500&home_size_max=3000';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2661057b61msh8e6271d7a1763b6p12ffb0jsnc06db3ad292e',
      'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }*/
  console.log("Calculate: " + listing_id);

  return(
    <>
      
    </>
  )
}

const iconMappings = {
  baths: faBath,
  beds: faBed,
  lot_sqft: faRuler,
  sold_date: faCalendar,
  sold_price: faDollarSign,
  sqft: faRuler,
  stories: faBuilding,
  type: faHome,
  year_built: faCalendar,
};


const renderProperty = (property, value) => {
  const icon = iconMappings[property];

  if(icon == null) 
    return;
  

  let formattedValue = value;

  // Format dates
  if (property === 'sold_date' || property === 'year_built') {
    const date = new Date(value);
    formattedValue = date.getFullYear().toString();
  }

  // Format prices
  if (property === 'sold_price') {
    formattedValue = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
    formattedValue = formattedValue.substring(1, formattedValue.length);
  }

  if(property === 'lot_sqft') 
    formattedValue = 'Lot size ' + formattedValue + ' sqft';

  if(property === 'sqft')
    formattedValue = formattedValue + ' sqft';

  if(property === 'sold_date')
    formattedValue = 'Last sold ' + formattedValue;

  if(property === 'year_built')
    formattedValue = 'Built in ' + formattedValue;

  if (property === 'type') {
    formattedValue = formattedValue.replace('_', ' ');
    formattedValue = formattedValue.charAt(0).toUpperCase() + formattedValue.slice(1);
  }

  if(property === 'stories')
    formattedValue = 'Stories ' + formattedValue;
  


  return (
    <li key={property} className="text-waves my-4 w-1/2">
       <FontAwesomeIcon icon={icon} /> {formattedValue}
    </li>
  );
};
