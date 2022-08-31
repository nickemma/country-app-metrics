import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../api';

const GET_COUNTRIES = 'GET_COUNTRIES';
// const GET_COUNTRIES_DETAILS = 'GET_COUNTRIES_DETAILS';
const initialState = [];

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COUNTRIES/fulfilled':
      return action.payload;
    // case 'GET_COUNTRIES_DETAILS/fulfilled':
    //   return action.payload;
    default:
      return state;
  }
};

export const getCountries = createAsyncThunk(GET_COUNTRIES, async (name) => {
  const response = await axios.get(api);
  return response.data.filter((country) => country.region === name);
});

// export const getCountriesDetails = createAsyncThunk(
//   GET_COUNTRIES_DETAILS,
//   async (id) => {
//     const response = await axios.get(api);
//     return response.data.filter((country) => country.name === id);
//   }
// );

export default countryReducer;
