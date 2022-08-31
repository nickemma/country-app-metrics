import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountryDetails } from '../redux/countries/countries';

const CountryDetails = () => {
  const country = useSelector((state) => state);
  console.log(country);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountryDetails(country));
  }, []);
  return <div>CountryDetails</div>;
};

export default CountryDetails;
