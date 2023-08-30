import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = document.createElement('div');
root.id = 'crx-root';
document.body.appendChild(root);

const rootIntoShadow = document.createElement('div');
rootIntoShadow.id = 'shadow-root';

const shadowRoot = root.attachShadow({ mode: 'open' });
shadowRoot.appendChild(rootIntoShadow);

ReactDOM.createRoot(rootIntoShadow).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
