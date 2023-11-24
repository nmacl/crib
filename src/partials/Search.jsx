import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, increment, ref, set, child, get, onValue, push } from "firebase/database";
import CurrencyInput from './input/CurrencyInput'; 
import PropertyCarousel from './PropertyCarousel';
// Importing parsing utilities
import { parseProperty } from './services/propertyParse';
import { parseRent } from './services/rentParse'; 
import { parseSold } from './services/soldParse';

import { searchProperties } from './services/propertySearch';
import { searchRent } from './services/rentSearch'; 
import { searchSold } from './services/soldSearch'; 
import './Spinner.css';


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

const states = [
  "AL", "AK", "AZ", "AR", "CA",
  "CO", "CT", "DE", "DC", "FL", "GA",
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
  const [city, setCity] = useState('Jupiter');
  const [state, setState] = useState('FL');
  const [beds, setBeds] = useState(3);
  const [baths, setBaths] = useState(2);
  const [propertyData, setPropertyData] = useState([]); 
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(1000000);

  const [rent, setRent] = useState(0);
  const [sold, setSold] = useState(0);

  const [loading, setLoading] = useState(false);

  const useEffect = (() => {
    console.log("property data");
  }, [propertyData]);

  if(loading) {
    return(      <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
    <div className="spinner"></div>
  </div>);
  }


  async function performSearch() {
    setLoading(true);
    try {
      let averageRent = 0;
      let averageSold = 0;

      const rentResponse = await searchRent(city, state, beds, baths);
      if (rentResponse.data && rentResponse.data.home_search.results.length > 0) {
        averageRent = calculateAverage(rentResponse.data.home_search.results, parseRent);
        console.log(`Average rent: ${averageRent}`);
        setRent(averageRent);
      } else {
        setLoading(false);
        console.error('No rental data available');
      }

      const soldResponse = await searchSold(city, state, beds, baths, priceMin, priceMax);
      if (soldResponse.data && soldResponse.data.results.length > 0) {
        averageSold = calculateAverage(soldResponse.data.results, parseSold);
        console.log(`Average sold: ${averageSold}`);
        setSold(averageSold);
      } else {
        setLoading(false);
        console.error('No sold data available');
      }
  
      const propertiesResponse = await searchProperties(city, state, beds, baths, priceMin, priceMax);
      if (propertiesResponse.data && propertiesResponse.data.home_search.results.length > 0) {
        propertiesResponse.data.home_search.results.forEach(house => {
          house.rent = averageRent;
          house.sold = averageSold;
  
          const property = parseProperty(house);
          if (property) {
            setPropertyData(prev => [...prev, property]);
          }
          setLoading(false);
        });
      } else {
        alert('No property data available');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }
  
  function calculateAverage(results, parseFunction) {
    let total = 0;
    let validEntries = 0;
  
    results.forEach(house => {
      const details = parseFunction(house);
      if (details && 'list_price' in details && typeof details.list_price === 'number') {
        total += details.list_price;
        validEntries += 1;
      }
    });
  
    return validEntries > 0 ? (total / validEntries) : 0;
  }
  

  const handleClick = () => {
    setPropertyData([]);
    let login = props.login;
    if(login) {
      performSearch();
    }
  };


  const handlePriceChange = (field, newValue) => {
    // Check the field and set the appropriate state
    if (field === 'min') {
      setPriceMin(newValue);
    } else if (field === 'max') {
      setPriceMax(newValue);
    }
  };


  return (
    <>
    <div id="search">
      <div className="p-4 flex content-center justify-center text-center">
          <div className="w-1/4">
            <label className="text-3xl block text-grainy mb-2">State</label>
            <select
              className="px-2 py-3 text-2xl bg-dark-waves rounded-lg text-dark-bland w-4/5"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              <option value=""></option>
              {states.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/4 ml-2">
            <label className="text-3xl block text-grainy mb-2">City</label>
            <input
              className="px-2 py-2 bg-dark-waves text-2xl rounded-lg text-dark-bland w-full"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="w-1/4 ml-2">
            <label className="text-3xl block text-grainy mb-2">Beds</label>
            <select
              className="text-2xl px-2 py-3 bg-dark-waves rounded-lg text-dark-bland w-4/5"
              value={beds}
              onChange={(e) => setBeds(e.target.value)}
            >
              {[1, 2, 3, 4, 5].map((bed) => (
                <option key={bed} value={bed}>
                  {bed}
                </option>
              ))}
            </select>
          </div>
          <div className="w-1/4 ml-2">
            <label className="text-3xl block text-grainy mb-2">Baths</label>
            <select
              className="px-2 py-3 text-2xl bg-dark-waves rounded-lg text-dark-bland w-4/5"
              value={baths}
              onChange={(e) => setBaths(e.target.value)}
            >
              {[1, 2, 3, 4, 5].map((bath) => (
                <option key={bath} value={bath}>
                  {bath}
                </option>
              ))}
          </select>
      </div>
    </div>


    { /* HANDLE CLICK */}
      
    </div>
      <div className="flex justify-center items-center space-x-2 w-full"> {/* Container for the inputs */}
        <div className="flex flex-col items-center w-full"> {/* Container for the first input group */}
          <label htmlFor="price-min-input" className="mb-1 text-center text-2xl text-bland">Price Minimum</label>
          <CurrencyInput 
            id="price-min-input"
            value={priceMin} 
            onChange={(newValue) => handlePriceChange('min', newValue)}
            // ...other props if needed
            className="form-input w-full" // Make input full width inside its container
            placeholder="$0.00"
          />
        </div>

        <div className="flex flex-col items-center w-full"> {/* Container for the second input group */}
          <label htmlFor="price-max-input" className="mb-1 text-center text-2xl text-bland">Price Maximum</label>
          <CurrencyInput 
            id="price-max-input"
            value={priceMax} 
            onChange={(newValue) => handlePriceChange('max', newValue)}
            // ...other props if needed
            className="form-input w-full" // Make input full width inside its container
            placeholder="$200,000"
          />
        </div>
      </div>

      <button id="search" onClick={handleClick} className="active:shadow-none shadow-2xl active:from-black active:to-black focus:bg-black w-1/3 rounded-xl text-wave duration-200 ease-in-out transition my-8 bg-gradient-to-l from-grainy to-bland text-2xl">Search</button>
      <PropertyCarousel properties={propertyData} />
    </>
  );
};

export default Search;