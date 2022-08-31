import React from 'react';
import { useSelector } from 'react-redux';
// import { fetchCountryDetails } from '../redux/countries/countries';

const CountryDetails = () => {
  const { countries } = useSelector((state) => state);
  // console.log(country);
  // useEffect(() => {
  //   fetchCountryDetails();
  // }, []);
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
