import React from 'react';
import ReactDOM from 'react-dom/client';

// packages
import { ConfigProvider } from 'antd';

// components
import App from './App.tsx';

// styles
import theme from '@/theme.ts';

// env
import ENV from '@/env_config.ts';

console.log('popup:', ENV);

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
