import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import App from './App';

// utils
import { attachTwindStyle } from '@/utils/attach-twind';

// env
import ENV from '@/env_config.ts';

console.log('content:', ENV);

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
