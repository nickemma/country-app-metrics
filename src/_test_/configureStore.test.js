import store from '../redux/configureStore';

it('should render the store', () => {
  expect(store.getState().countries).toEqual([]);
});
