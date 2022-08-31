import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../api';

const GET_COUNTRIES = 'GET_COUNTRIES';
const FETCH_COUNTRY = 'FETCH_COUNTRY';
const initialState = [];

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COUNTRIES/fulfilled':
      return action.payload;
    case 'FETCH_COUNTRY/fulfilled':
      return action.payload;
    default:
      return state;
  }
};

export const getCountries = createAsyncThunk(GET_COUNTRIES, async (name) => {
  const response = await axios.get(api);
  return response.data.filter((country) => country.region === name);
});

export const fetchCountryDetails = createAsyncThunk(
  FETCH_COUNTRY,
  async (name) => {
    const response = await axios.get(api);
    return response.data.filter((country) => country.name.common === name);
  },
);
export default countryReducer;
