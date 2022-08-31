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
      <div className="world_map">
        <img src="/images/world.svg" alt="world awesome" />
        <div className="stats">
          <p>STATS BY CONTINENTS</p>
        </div>
      </div>
      <Continents />
    </>
  );
};

export default ContinentsPage;
