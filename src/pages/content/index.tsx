import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import App from './App';

// env
import ENV from '@/env_config.ts';

console.log('content:', ENV);

const root = document.createElement('div');
root.id = 'crx-root';
document.body.appendChild(root);

const shadowRoot = root.attachShadow({ mode: 'open' });

const rootIntoShadow = document.createElement('div');
rootIntoShadow.id = 'shadow-root';

shadowRoot.appendChild(rootIntoShadow);

ReactDOM.createRoot(rootIntoShadow).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
