import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import App from './App';

// utils
import { attachTwindStyle } from '@/utils/attach-twind';

const root = document.createElement('div');
root.id = 'crx-root';
document.body.appendChild(root);

const rootIntoShadow = document.createElement('div');
rootIntoShadow.id = 'shadow-root';

const shadowRoot = root.attachShadow({ mode: 'open' });
shadowRoot.appendChild(rootIntoShadow);

attachTwindStyle(rootIntoShadow, shadowRoot);

ReactDOM.createRoot(rootIntoShadow).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
