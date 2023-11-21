import axios from 'axios';

export const suggest = async (city, state, address) => {
  const options = {
    method: 'GET',
    url: 'https://us-real-estate.p.rapidapi.com/location/suggest',
    params: {
      // Concatenate the address, city, and state with spaces
      input: `${address} ${city} ${state}`,
    },
    headers: {
      'X-RapidAPI-Key': '2661057b61msh8e6271d7a1763b6p12ffb0jsnc06db3ad292e',
      'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};



// Usage:
// suggest('Gainesville', 'FL', '1109 NE 5th Pl').then(propertyId => console.log(propertyId));
