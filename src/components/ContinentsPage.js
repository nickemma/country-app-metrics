import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from '../redux/countries/countries';
import Continents from './Continents';

const ContinentsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <>
      <div>
        <img src="/images/world.svg" alt="cool" />
      </div>
      <Continents />
    </>
  );
};

export default ContinentsPage;
