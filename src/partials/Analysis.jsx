import React, { useState, useEffect } from 'react';
import { propertyLookup } from './services/propertyLookup';
import './Spinner.css';


export default function Analysis(props) {
  
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    window.scrollTo(0, document.body.clientHeight/3);
  }, []); 

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const data = await propertyLookup(props.listing_id);
        setProperty(data);
        console.log(data);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (props.listing_id) {
      fetchData();
    }
  }, [props.listing_id]);

    if (loading) {
      return(
      <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
        <div className="spinner"></div>
      </div>);
    } else {
      window.scrollTo(0, document.body.clientHeight/3);
    }

    if (error) {
      return <div className="text-center text-lg text-red-500">Error loading data</div>;
    }

    return (
      <div className="p-4 space-y-4">
      {property && property.data && property.data.primary_photo && 
        <img src={property.data.photos[0].href} alt="Property" className="w-1/2 block mx-auto h-auto rounded-lg shadow-md"/>
      }

      <div className="grid grid-cols-2 gap-4">
        {property?.data?.price_per_sqft && (  
          <div className="p-2 bg-bland rounded-lg text-white">
            <p className="text-lg font-semibold">Price per Sqft:</p>
            <p>${property.data.price_per_sqft}</p>
          </div>
        )}

        {property?.data?.list_price && (
          <div className="p-2 bg-bland rounded-lg text-white">
            <p className="text-lg font-semibold">List Price:</p>
            <p>${property.data.list_price.toLocaleString()}</p>
          </div>
        )}

        {property?.data?.description?.beds && (
          <div className="p-2 bg-bland rounded-lg text-white">
            <p className="text-lg font-semibold">Beds:</p>
            <p>{property.data.description.beds}</p>
          </div>
        )}

        {property?.data?.description?.baths && (
          <div className="p-2 bg-bland rounded-lg text-white">
            <p className="text-lg font-semibold">Baths:</p>
            <p>{property.data.description.baths}</p>
          </div>
        )}

        {property?.data?.description?.lot_sqft && (
          <div className="p-2 bg-bland rounded-lg text-white">
            <p className="text-lg font-semibold">Lot Size (Sqft):</p>
            <p>{property.data.description.lot_sqft.toLocaleString()}</p>
          </div>
        )}

        {property?.data?.description?.sqft && (
          <div className="p-2 bg-bland rounded-lg text-white">
            <p className="text-lg font-semibold">Square Feet:</p>
            <p>{property.data.description.sqft.toLocaleString()}</p>
          </div>
        )}
      </div>
    </div>
  );
    
}
