import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { fetchCountryDetails } from '../redux/countries/countries';
import SkeletonLoader from '../components/Loader';
import '../styles/Countries.scss';

const Countries = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  const handleClick = (name) => {
    dispatch(fetchCountryDetails(name));
  };
  if (countries.length === 0) {
    return <SkeletonLoader />;
  }
  return (
    <>
      <section className="countries">
        <ul className="row">
          {countries.map((country) => (
            <li key={country?.name.common}>
              <div className="list">
                <h2>{country?.name.common}</h2>
                <Link to={`/:/${country?.name.common}`}>
                  <BsFillArrowRightCircleFill
                    onClick={() => handleClick(country?.name.common)}
                  />
                </Link>
              </div>
              <img src={country?.flags.png} alt="flag" />
              <div className="item">
                <p>Capital:</p>
                <p>{country?.capital}</p>
              </div>
              <div className="item">
                <p>SubRegion:</p>
                <p>{country?.subregion}</p>
              </div>
              <div className="item">
                <p>Populations:</p>
                <p>{country?.population}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Countries;
