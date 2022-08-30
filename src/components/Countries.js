import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getCountries } from '../redux/countries/countries';

const Countries = () => {
  const countries = useSelector((state) => state.countries);
  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      {countries.map((country) => (
        <div key={country?.name.common}>
          <h1>{country?.name.common}</h1>
          <img src={country?.flags.png} alt="flag" />
          <p>{country?.capital}</p>
          <p>{country?.subregion}</p>
        </div>
      ))}
    </>
  );
};

export default Countries;
