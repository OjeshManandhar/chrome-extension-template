import React from 'react';
import ReactDOM from 'react-dom/client';

// packages
import { ConfigProvider } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';

// components
import App from './App';

// styles
import theme from '@/theme.ts';

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

function getPopupContainer(): HTMLElement {
  return rootIntoShadow;
}

ReactDOM.createRoot(rootIntoShadow).render(
  <React.StrictMode>
    <StyleProvider container={shadowRoot}>
      <ConfigProvider getPopupContainer={getPopupContainer} theme={theme}>
        <App />
      </ConfigProvider>
    </StyleProvider>
  </React.StrictMode>,
);
