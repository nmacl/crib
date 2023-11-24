import React, { useState, useEffect } from 'react';

function CurrencyInput(props) {
  // We'll start with a regular number as the value
  const [value, setValue] = useState('');

  // This effect will format the external value as currency
  // whenever the external value changes
  useEffect(() => {
    if (props.value != null) {
      setValue(formatAsCurrency(props.value));
    }
  }, [props.value]);

  const handleChange = (event) => {
    let inputVal = event.target.value;

    // We're stripping out anything that isn't a number
    inputVal = inputVal.replace(/[^0-9.]/g, '');

    // If the value is not empty, we format it as currency
    if (inputVal !== '') {
      inputVal = formatAsCurrency(inputVal);
    }

    setValue(inputVal);

    // Here we would call some prop like 'onChange' to lift the state
    // We should lift the unformatted value, so we'll parse it as a float first
    const unformattedValue = parseFloat(inputVal.replace(/[$,]/g, ''));
    if (!isNaN(unformattedValue)) {
      props.onChange(unformattedValue);
    }
  };

  const formatAsCurrency = (amount) => {
    // We're going to want to turn our number into a string and
    // use regex to place commas in the correct place.
    return parseFloat(amount).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2, // (optional) - can set the max number of decimal places
    });
  };

  return (
    <input
    className="w-3/4 text-2xl rounded-lg p-2 text-black bg-dark-waves"
      type="text"
      value={value}
      onChange={handleChange}
      placeholder={props.placeholder}
      // Any other props you want, like className for styling
    />
  );
}

export default CurrencyInput;
