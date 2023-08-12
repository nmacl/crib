
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBath, faBed, faRuler, faCalendar, faDollarSign, faHome, faBuilding } from '@fortawesome/free-solid-svg-icons';

import React, { useState} from 'react';
import { useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, increment, ref, set, child, get, onValue, push } from "firebase/database";
import CurrencyInput from "react-currency-input-field";


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
  const listing_id = props.listing_id;
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
    const properties = ref(db, 'properties/' + listing_id);
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

  const reset = () => {
    window.location.reload();
  };

  return (
    
    <div>
      <h2 className="hover:text-emerald-400 text-3xl my-8 text-emerald-100 cursor-pointer" onClick={handleKeyMetricsClick} >
        <span className={`triangle ${isKeyMetricsOpen ? 'open' : ''}`} /> 
        Key Metrics
      </h2>

      {isKeyMetricsOpen && (
        <div>
            <Calculator snap={snap} listing_id={listing_id}/>
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

      <button onClick={reset} className="hover:bg-slate-700 rounded-2xl shadow-2xl text-2xl text-dark-waves bg-gradient-to-r bg-slate-500">
        Home
      </button>

    </div>
  );
};

const Photos = (props) => {
  const [photos, setPhotos] = useState([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isPreloading, setIsPreloading] = useState(true);

  useEffect(() => {
    let snap = props.snap;
    if (snap && snap.photos && snap.photos.length > 0) {
      setPhotos(snap.photos); // Set the photos array in the state
      setIsPreloading(false); // Mark preloading as complete
    }
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

const Calculator = (props) => {
  let snap = props.snap;
  let listing_id = props.listing_id;

  const rentalProperty = ref(db, 'properties/' + listing_id + '/rental/');

  async function code(url, options) {
    const response = await fetch(url, options);
    const result = await response.json();

    let rentals = result.data.home_search.results;

    const modifiedRentals = Object.entries(rentals).map(([rentalProperty, value]) => {
      const { products, ...rest } = value;
      return [rentalProperty, rest];
    });

    console.log(modifiedRentals);

    set(rentalProperty, modifiedRentals);

  }

  let total = 0;
  let length = 0;

  useEffect(() => {
    console.log(snap.prop_common.price + 'price');
    const fetchData = async () => {
      get(rentalProperty).then((snapshot) => {  
        let m = null;

        if (snapshot.exists()) {
          m = snapshot.val();
        } else {
          console.log("No data available");
          try {
            let bed = snap.prop_common.bed;
            let bath = snap.prop_common.bath;
            let sqft = snap.prop_common.sqft;
            let city = snap.address.city;
            let state = snap.address.state;
            
            const beds_min = Math.max(1, bed - 1);  // Min number of beds with a tolerance of -1
            const beds_max = bed;               // Max number of beds with a tolerance of +1
            
            const baths_min = Math.max(1, bath - 1); // Min number of baths with a tolerance of -1
            const baths_max = bath + 1;              // Max number of baths with a tolerance of +1
            
            const home_size_min = Math.max(500, sqft - 750); // Min square footage with a tolerance of -750 sqft
            const home_size_max = sqft + 750;               // Max square footage with a tolerance of +750 sqft
            
            const url = `https://us-real-estate.p.rapidapi.com/v2/for-rent?city=${city}&state_code=${state}&limit=42&offset=0&beds_min=${beds_min}&beds_max=${beds_max}&baths_min=${baths_min}&baths_max=${baths_max}&expand_search_radius=25&home_size_min=${home_size_min}&home_size_max=${home_size_max}`;
            
            const options = {
              method: 'GET',
              headers: {
                'X-RapidAPI-Key': '2661057b61msh8e6271d7a1763b6p12ffb0jsnc06db3ad292e',
                'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
              }
            };
            
            code(url, options); 

            m = get(rentalProperty).then((snapshot) => {
              m = snapshot.val();
            });
          
          } catch (error) {
            console.error(error);
          }
        }
        let total = 0;
        let length = m.length;

        Object.entries(m).map(([rentalProperty, value]) => {
          const index = value[0];
          const juice = value[1];
          let list_price_min = 0;
          let list_price_max = 0;
          let list_price = 0;

          if(juice.list_price !== null) {
            list_price = juice.list_price;
          }

          if(juice.list_price_min !== null) {
            list_price_min = juice.list_price_min;
          }

          if(juice.list_price_max !== null) {
            list_price_max = juice.list_price_max;
          }

          if(list_price_min == null) {
            list_price_min = 0;
          }
          if(list_price_max == null) {
            list_price_max = 0;
          }

          if(list_price == null) {
            list_price = (list_price_min + list_price_max) / 2;
          }

          total = total + list_price;

        });

        total = (total/length);
        total = Math.floor(total);

        setRent(total);
        console.log(rent + 'rent')
      }).catch((error) => {
        console.error(error);
      });
    };
    

    fetchData(); // Call the async function to fetch the data when the component mounts
  }, []);


  const [rent, setRent] = useState(0);
  const [price, setPrice] = useState(snap.prop_common.price);

  const [initialDownpayment, setInitialDownpayment] = useState(20); // Default to 20% of the total price
  const [interestRate, setInterestRate] = useState('6.0'); // Default to 6.0% interest rate as a string
  const [loanTermYears, setLoanTermYears] = useState(30);

  // Calculate mortgage amount based on the initial downpayment percentage
  const propertyPrice = price;
  const downPayment = (initialDownpayment / 100) * propertyPrice;
  const mortgageAmount = propertyPrice - downPayment;

  // Convert the interest rate to a float for calculations
  const interestRateFloat = parseFloat(interestRate) / 100;
  const monthlyInterestRate = interestRateFloat / 12;

  // Calculate the monthly mortgage payment
  const totalPayments = loanTermYears * 12;
  const monthlyMortgage =
  monthlyInterestRate === 0 || monthlyInterestRate === undefined || monthlyInterestRate === ''
    ? 0
    : (mortgageAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
      (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);


  // Assuming you have additional information about expenses and rental income (e.g., monthlyRent, totalMonths)
  const monthlyRent = parseFloat(String(rent).replace(/[^0-9.-]+/g, '')) // Parse the rent to a numeric value (removing currency formatting)
  const totalMonths = 12; // Assuming 12 months of rental income for simplicity
  const totalRentalIncome = monthlyRent * totalMonths;
  const [totalExpenses, setTotalExpenses] = useState(0); // New state for total expenses
  const estimatedProfit = totalRentalIncome - monthlyMortgage * totalMonths - totalExpenses * totalMonths;

  // Styling for the income label
  const incomeLabelStyle = {
    color: estimatedProfit >= 0 ? 'green' : 'red',
  };

  const parseCurrency = (value) => {
    return parseFloat(value.replace(/[^0-9.-]+/g, ''));
  };

  const handlePriceChange = (e) => {
    let inputVal = e.target.value;
    let numericVal = parseCurrency(inputVal);
    setPrice(isNaN(numericVal) ? 0 : numericVal);
  };

  const handleRentChange = (e) => {
    let inputVal = e.target.value;
    let numericVal = parseCurrency(inputVal);
    setRent(isNaN(numericVal) ? 0 : numericVal);
  };


  return (
    <>
      <div className="max-w-sm mx-auto">
        {/* List Price */}
        <div className="p-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <div className="text-grainy text-2xl font-medium">
                <div className="flex items-center mb-4">
                  <span className="w-1/2">List Price: </span>
                  <div className="w-1/2 overflow-auto font-medium">
                      <CurrencyInput 
                        prefix={'$'}
                        name="priceInput"
                        id="priceInput"
                        data-number-to-fixed="2"
                        data-number-stepfactor="100"
                        value={price}
                        placeholder=""
                        onChange={handlePriceChange}
                        allowDecimals
                        decimalsLimit="2"
                        disableAbbreviations
                      />
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* Rent */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <div className="text-bland text-2xl font-medium">
                <div className="flex items-center mb-4">
                    <span className="w-1/2">Rent Estimate: </span>
                    <div className="w-1/2 overflow-auto font-medium">
                        <CurrencyInput 
                          prefix={'$'}
                          name="priceInput"
                          id="priceInput"
                          data-number-to-fixed="2"
                          data-number-stepfactor="100"
                          value={rent}
                          placeholder=""
                          onChange={handleRentChange}
                          allowDecimals
                          decimalsLimit="2"
                          disableAbbreviations
                        />
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sliders */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <div className="mb-4">
              <label htmlFor="downpaymentSlider" className="text-lg font-medium">Downpayment:<br/> {initialDownpayment}%</label>
              <input
                type="range"
                id="downpaymentSlider"
                className="w-full"
                min={0}
                max={100}
                value={initialDownpayment}
                onChange={(e) => setInitialDownpayment(parseInt(e.target.value))}
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-4">
              <label className="font-medium">Loan Term: <br/>{loanTermYears} years</label>
              <input
                type="range"
                min={15}
                max={30}
                className="w-full"
                value={loanTermYears}
                onChange={(e) => setLoanTermYears(parseInt(e.target.value))}
              />
            </div>
          </div>
        </div>

        {/* Interest Rate, Monthly Payment, Total Expenses */}
        <div className="grid grid-cols-3 gap-4">
          {/* Interest Rate */}
          <div className="col-span-1">
            <div className="mb-4">
              <label htmlFor="interestRateInput" className="font-medium">Interest Rate (%)</label>
              <input
                type="text"
                id="interestRateInput"
                className="w-full px-2 py-1 rounded border border-gray-300"
                value={interestRate}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  setInterestRate(inputValue);
                }}
              />
            </div>
          </div>

          {/* Monthly Payment */}
          <div className="col-span-1">
            <div className="mb-4">
              <label htmlFor="monthlyPayment" className="font-medium">Monthly Payment</label>
              <input
                type="text"
                id="monthlyPayment"
                className="w-full px-2 py-1 rounded border border-gray-300"
                value={
                  isNaN(monthlyMortgage + totalExpenses)
                    ? '-'
                    : (monthlyMortgage + totalExpenses).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 2,
                      })
                }
                readOnly
              />
            </div>
          </div>

          {/* Total Expenses */}
          <div className="col-span-1">
            <div className="mb-4">
              <label htmlFor="totalExpensesInput" className="font-medium">Monthly Expenses</label>
              <input
                type="number"
                id="totalExpensesInput"
                className="w-full px-2 py-1 rounded border border-gray-300"
                value={totalExpenses === 0 || totalExpenses === null ? 0 : totalExpenses}
                onChange={(e) => setTotalExpenses(parseFloat(e.target.value))}
              />
            </div>
          </div>
        </div>

        {/* Income */}
        <div className="flex items-center justify-center">
          <div className="text-3xl font-medium m-4 p-6 shadow-2xl border-1 rounded-xl bg-slate-800 hover:bg-slate-900">
            <label
              className={`text-3xl font-medium ${estimatedProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}
            >
              Annual Income: {
                  isNaN(estimatedProfit)
                    ? '-'
                    : estimatedProfit.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 2,
                      })
                }
            </label>
          </div>
        </div>  
      </div>

    </>


  )
};

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
