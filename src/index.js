import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux';
import App from './App';
import { configureStore } from './store';

const store = configureStore();

const render = (Component) =>
  // eslint-disable-next-line react/no-render-return-value
  ReactDOM.render(
    <StoreProvider store={store}>
      <Component />
    </StoreProvider>,

    document.getElementById('root')
  );

render(App);
