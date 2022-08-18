import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';

import App from './App';
import GlobalStyles from './globalStyles';
import { HelmetProvider } from 'react-helmet-async';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <Global styles={GlobalStyles} />
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
