import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/CountryDetail.scss';

const CountryDetails = () => {
  const { countries } = useSelector((state) => state);
  return (
    <div>
      {countries.map((country) => (
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
