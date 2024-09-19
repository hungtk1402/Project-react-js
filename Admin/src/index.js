import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { AdminProvider } from './component/Context/AdminContext';
import { ProductProvider } from './component/Context/ProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AdminProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </AdminProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
