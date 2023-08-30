import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import App from './App.tsx';

// styles
import './index.css';

// env
import ENV from '@/env_config.ts';

console.log('popup:', ENV);

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
