import React, { useState, useEffect } from 'react';
import './Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';

const PropertyCarousel = ({ properties }) => {

  useEffect(() => {
    window.scrollTo(0, document.body.clientHeight/2);
  }, []); 

  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    if (currentIndex < properties.length - 1) {
      setCurrentIndex(prevIndex => prevIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    } else {
      setCurrentIndex(properties.length - 1);
    }
  };

  if (!properties || properties.length === 0) {
    return <p>No properties available</p>;
  }

  // Check if the property at the current index exists. If not, it returns null or some fallback UI.
  const property = properties[currentIndex];
  if (!property) {
    alert("Problem retrieving property data");
    let i = currentIndex+1;
    setCurrentIndex(i);
    console.log(currentIndex);
  }

  // Safely access the 'address' and 'details' objects. If they don't exist, default to an empty object.
  const { address = {}, details = {}, primary_photo, rent, sold } = property;
  const [isStarHovered, setIsStarHovered] = useState(false);

  // Render the information only if it exists, otherwise, leave it blank
  return (
    <div className="carousel-container mb-24">
      <button onClick={goPrev} className="text-3xl hover:bg-indigo-500 w-1/2">Prev</button>
      <button onClick={goNext} className="text-3xl hover:bg-indigo-500 w-1/2">Next ({currentIndex+1}/{properties.length})</button>
      
      <div className="carousel-card">
        <div className="flex content-center justify-center">
          <div className="flex content-center justify-center tooltip">
            <FontAwesomeIcon icon={faQuestionCircle} className="opacity-80 mr-4 w-5 h-5 ml-2" />
            <span className="tooltip-text">Add to favorites</span>
          </div>
          <a onMouseEnter={() => setIsStarHovered(true)} onMouseLeave={() => setIsStarHovered(false)}>
            <FontAwesomeIcon className="w-12 h-12 cursor-pointer hover:scale-125 duration-150 transform text-yellow-500" icon={isStarHovered ? solidStar : faStar}/>
          </a>
        </div>
        

        <h2 className="font-bold">{[address.line, address.city, address.state, address.zipcode].filter(Boolean).join(', ')}</h2>
        {/* Assuming that 'price' is provided at the same level as 'address' and 'details' */}
        {property.list_price && <p className="text-emerald-300 font-semibold">Price: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Math.round(property.list_price))}</p>}
        <p className="font-bold">
          {details.beds && `${details.beds} bd`} 
          {details.baths && ` | ${details.baths} ba`} 
          {details.sqft && ` | ${details.sqft} sqft`}
          {details.lotSqft && ` | ${Number(details.lotSqft/43560).toFixed(2)} acres`}
        </p>
        {details.yearBuilt && <p className="font-semibold">Year Built: {details.yearBuilt}</p>}
      </div>
      <div className="carousel-card flex justify-center items-center"> 
        {primary_photo && (
          <img 
            src={primary_photo.href} 
            alt="Primary Property" 
            className="object-cover h-80 w-3/4 rounded-lg shadow-xl" 
          />
        )}
      </div>
      {value(sold, property.list_price)}
      {rentYield(rent, property.list_price)}
      <h1 className="text-xl text-white text-opacity-80 m-4">Estimated Rent: {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Math.round(rent))}</h1>
      <h1 className="text-xl text-white text-opacity-80 m-4">{address.city}'s Median Home Value  {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(Math.round(sold))}</h1>
    </div>
  );
};

const rentYield = (rent, price) => {
  const annualYield = rent * 12;
  const rentYieldPercentage = (annualYield / price) * 100;

  let statusText = `${rentYieldPercentage.toFixed(2)}%`;
  let textColorClass = '';

  if (rentYieldPercentage < 3) {
    textColorClass = 'text-red-500'; 
  } else if (rentYieldPercentage >= 3 && rentYieldPercentage < 5) {
    textColorClass = 'text-orange-500';
  } else if (rentYieldPercentage >= 5 && rentYieldPercentage <= 7) {
    textColorClass = 'text-yellow-500'; 
  } else if (rentYieldPercentage > 7) {
    textColorClass = 'text-green-500';
  }

  return (
    <p className="text-3xl p-4 m-6 shadow-2xl rounded-xl bg-bland text-white">
      Rent Yield (ROI): <span className={`font-bold ${textColorClass}`}>{statusText}</span>
    </p>
  );
};

const value = (sold, price) => {
  const TOLERANCE_PERCENTAGE = 0.25;
  
  const UNDERVALUED_THRESHOLD = sold * (1 - TOLERANCE_PERCENTAGE);
  const OVERVALUED_THRESHOLD = sold * (1 + TOLERANCE_PERCENTAGE);

  let statusText = 'market value';
  let textColorClass = 'text-orange-500';
  
  if (price < UNDERVALUED_THRESHOLD) {
    statusText = 'undervalued';
    textColorClass = 'text-green-500'; // or your custom Tailwind green class
  } else if (price > OVERVALUED_THRESHOLD) {
    statusText = 'overvalued';
    textColorClass = 'text-red-500'; // or your custom Tailwind red class
  }

  return (
    <p className="text-3xl p-4 m-6 shadow-2xl rounded-xl bg-indigo-900 text-white">
      This property is <span className={`font-bold ${textColorClass}`}>{statusText}</span>
    </p>
  );
};

export default PropertyCarousel;
