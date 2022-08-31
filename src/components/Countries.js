import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { fetchCountryDetails } from '../redux/countries/countries';

const Countries = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const handleClick = (name) => {
    dispatch(fetchCountryDetails(name));
  };
  // useEffect(() => {
  //   getCountries();
  // }, []);

  return (
    <>
      <section className="countries">
        {countries.map((country) => (
          <li key={country?.name.common}>
            <h1>{country?.name.common}</h1>
            <Link to={`/:/${country?.name.common}`}>
              <button
                type="button"
                onClick={() => handleClick(country?.name.common)}
              >
                <BsFillArrowRightCircleFill />
              </button>
            </Link>
            <img src={country?.flags.png} alt="flag" />
            <p>{country?.capital}</p>
            <p>{country?.subregion}</p>
            <p>{country?.population}</p>
          </li>
        ))}
      </section>
    </>
  );
};

export default Countries;
