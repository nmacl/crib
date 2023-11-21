export const parseRent = (rawData) => {
    try {
      if (!rawData || Object.keys(rawData).length === 0) {
        throw new Error('No data available to parse.');
      }
  
      const { list_price_min = 0, list_price_max = 0, list_price = 0 } = rawData; 
  
      return {
        list_price,     
        list_price_min,   
        list_price_max    
      };
  
    } catch (error) {
      console.error("Error parsing rental data: ", error);
      return null; 
    }
  };
  