import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import App from './App.tsx';

// styles
import './index.css';

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
