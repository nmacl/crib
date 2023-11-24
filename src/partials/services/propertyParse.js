// services/propertyService.js

export const parseProperty = (rawData) => {
  try {
    // Validate rawData before attempting to parse it.
    if (!rawData || Object.keys(rawData).length === 0) {
      throw new Error('No data available to parse.');
    }

    const { location: { address = {} } = {}, description = {}, list_price = {}, primary_photo = {}, rent = {}, sold = {} } = rawData; // This sets a default empty object if "address" or "description" doesn't exist.


    // Validate the essential nested data.
    if (!address || !description || !list_price) {
      throw new Error('Missing critical property information.');
    }

    // Extract and validate individual pieces of information.
    const {
      line: addressLine,
      city,
      state_code: stateCode,
      postal_code: postalCode,
    } = address;

    const {
      beds,
      baths,
      sqft,
      year_built: yearBuilt,
      lot_sqft: lotSqft,
    } = description;

    if (!addressLine || !city || !stateCode || !postalCode) {
      throw new Error('Incomplete address information.');
    }

    if (beds === undefined || baths === undefined || sqft === undefined || yearBuilt === undefined) {
      throw new Error('Incomplete property specifications.');
    }

    // Construct a singleProperty object with the cleaned data.
    const singleProperty = {
      address: {
        line: addressLine,
        city,
        state: stateCode,
        zipcode: postalCode,
      },
      details: {
        beds,
        baths,
        sqft,
        yearBuilt,
        lotSqft
      },
      // Add more fields as needed
    };
    singleProperty.list_price = list_price;
    singleProperty.primary_photo = primary_photo;
    singleProperty.rent = rent;
    singleProperty.sold = sold;
    return singleProperty; // As we're parsing a single property, we return the object directly

  } catch (error) {
    console.error("Error parsing property data: ", error);
    return null; // Return null or another indicator of failure that you can handle later.
  }
};
