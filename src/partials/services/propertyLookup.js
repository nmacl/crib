// propertyLookup.js
import axios from 'axios';

export const propertyLookup = async (listing_id) => {
  const options = {
    method: 'GET',
    url: 'https://us-real-estate.p.rapidapi.com/v3/property-detail',
    params: {
        property_id: listing_id
    },
    headers: {
      'X-RapidAPI-Key': '2661057b61msh8e6271d7a1763b6p12ffb0jsnc06db3ad292e',
      'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
