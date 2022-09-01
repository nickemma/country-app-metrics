import countries from '../redux/countries/countries';

it('should return the initial state', () => {
  expect(countries(undefined, {})).toEqual([]);
});
