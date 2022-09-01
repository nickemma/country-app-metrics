import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCountries } from '../redux/countries/countries';
import Continents from './Continents';
import '../styles/ContinentsPage.scss';

const ContinentsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries());
  }, []);

  return (
    <>
      <div className="world-map">
        <div className="stat">
          <img src="/images/world.svg" alt="world awesome" />
          <h2>THE WORLD</h2>
        </div>
        <div className="stats">
          <h3>STATS BY CONTINENTS</h3>
        </div>
      </div>
      <Continents />
    </>
  );
};

export default ContinentsPage;
