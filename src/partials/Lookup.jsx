// Lookup.jsx
import React, { useState } from 'react';
import { suggest } from './services/suggest';
import Analysis from './Analysis.jsx';

function Lookup() {
  // State to store input values
  const [address, setAddress] = useState('1109 NE 5th Pl');
  const [city, setCity] = useState('Gainesville');
  const [state, setState] = useState('FL');
  const [listing_id, setListing] = useState('');
  const [loading, setLoading] = useState(false);

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
  
  if(loading) {
    return  (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div className="spinner"></div>
    </div>);
  }


  const handleSearch = () => {
    setLoading(true);
    suggest(city, state, address).then((response) => {
        if (response.data && response.data.length > 0) {
            setListing(response.data[0].property_id);
        } else {
          setLoading(false);
            console.log('No data found');
            setListing(''); // Reset listing ID if no data is found
        }
        setLoading(false);
    }).catch((error) => {
      setLoading(false);
        console.error("Error fetching data:", error);
        setListing(''); // Reset listing ID in case of an error
    });

    console.log(address, city, state);
  };
  return (
    <div id="lookup">
      <div className="p-4 flex content-center justify-center text-center space-x-4">
        <div className="w-1/4">
          <label className="text-3xl block text-grainy mb-2">State</label>
          <select
            className="px-2 py-3 text-2xl bg-dark-waves rounded-lg text-dark-bland w-full"
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
        <div className="w-1/4">
          <label className="text-3xl block text-grainy mb-2">City</label>
          <input
            className="px-2 py-2 bg-dark-waves text-2xl rounded-lg text-dark-bland w-full"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="w-1/2">
          <label className="text-3xl block text-grainy mb-2">Address</label>
          <input
            className="px-2 py-2 bg-dark-waves text-2xl rounded-lg text-dark-bland w-full"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
      </div>

      <button 
        onClick={handleSearch} 
         className="text-2xl rounded-lg shadow-xl bg-emerald-500"
      >
        Lookup
      </button>
      {listing_id && (
        <Analysis listing_id={listing_id}/>
      )}
    </div>
  );
}

export default Lookup;
