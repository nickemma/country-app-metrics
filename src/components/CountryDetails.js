import React from 'react';
import { useSelector } from 'react-redux';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../styles/CountryDetail.scss';

const CountryDetails = () => {
  const { countries } = useSelector((state) => state);

  return (
    <div className="details">
      {countries.map((country) => (
        <li key={country?.name.common}>
          <div className="map">
            <MapContainer
              center={{ lat: country?.latlng[0], lng: country?.latlng[1] }}
              zoom={6}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={{ lat: country?.latlng[0], lng: country?.latlng[1] }}
              >
                <Popup>
                  {country?.name}
                  <br />
                  {country?.name}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="item">
            <p>TimesZones:</p>
            <p>
              <strong>{country?.timezones}</strong>
            </p>
          </div>
          <div className="item">
            <p>The Official name: </p>
            <p>
              <strong>{country?.name.official}</strong>
            </p>
          </div>
          <div className="item">
            <p>The languages they speak are:</p>
            <p>{Object.values(country?.languages)}</p>
          </div>
          <div className="item">
            <p>Coat Of Arms</p>
            <img src={country?.coatOfArms.svg} alt="awesome coat 0f arm" />
          </div>
        </li>
      ))}
    </div>
  );
};

export default CountryDetails;

//  <div>
//    {countries.map((country) => (
//      <li key={country?.name.common}>
//        <h1>{country?.name.common}</h1>
//        <p>{country?.capital}</p>
//        <p>{country?.subregion}</p>
//      </li>
//    ))}
//  </div>;
