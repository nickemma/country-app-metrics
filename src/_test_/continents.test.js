import React from 'react';
import Renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Continents from '../components/Continents';

it('renders correctly', () => {
  const tree = Renderer.create(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Continents />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
