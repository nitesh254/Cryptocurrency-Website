import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CryptoProvider from './CryptoContext'; // Adjust the path as necessary

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <CryptoProvider>
      <App />
    </CryptoProvider>
  </React.StrictMode>
);
