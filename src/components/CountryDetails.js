import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchCountryDetails } from '../redux/countries/countries';

const CountryDetails = () => {
  const { country } = useSelector((state) => state.country);
  console.log(country);
  useEffect(() => {
    fetchCountryDetails();
  }, []);
  return (
    <div>
      {country.map((country) => (
        <li key={country?.name.common}>
          <h1>{country?.name.common}</h1>
          <p>{country?.capital}</p>
          <p>{country?.subregion}</p>
        </li>
      ))}
    </div>
  );
};

export default CountryDetails;
