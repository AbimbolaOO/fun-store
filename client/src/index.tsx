import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';

import App from './App';
import GlobalStyles from './globalStyles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Global styles={GlobalStyles} />
    <App />
  </BrowserRouter>
);
