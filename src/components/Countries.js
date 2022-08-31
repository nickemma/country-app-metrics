import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import {
  getCountries,
  fetchCountryDetails,
} from '../redux/countries/countries';

const Countries = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const handleClick = (name) => {
    dispatch(fetchCountryDetails(name));
  };
  useEffect(() => {
    getCountries();
  }, []);

  return (
    <>
      <section className="countries">
        {countries.map((country) => (
          <li key={country?.name.common}>
            <h1>{country?.name.common}</h1>
            <Link to={`/${country?.name.common}`}>
              <button
                type="button"
                onClick={() => handleClick(country?.name.common)}
              >
                <BsFillArrowRightSquareFill />
              </button>
            </Link>
            <img src={country?.flags.png} alt="flag" />
            <p>{country?.capital}</p>
            <p>{country?.subregion}</p>
          </li>
        ))}
      </section>
    </>
  );
};

export default Countries;
