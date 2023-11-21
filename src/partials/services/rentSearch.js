// searchProperty.js
import axios from 'axios';

export const searchRent = async (city, state, beds, baths) => {
  const options = {
    method: 'GET',
    url: 'https://us-real-estate.p.rapidapi.com/v2/for-rent',
    params: {
      state_code: state,
      city: city,
      sort: 'lowest_price',
      offset: '0',
      limit: '200',
      beds_min: beds,
      beds_max: beds, // Assuming beds_max is the same as beds_min
      baths_min: baths,
      baths_max: baths // Assuming baths_max is the same as baths_min
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
