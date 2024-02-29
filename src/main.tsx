import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GlobalStyles } from './ui/GlobalStyles';
import { router } from './router/router';
import { store } from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <GlobalStyles />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>,
);
