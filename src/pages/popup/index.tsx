import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import App from './App.tsx';

// env
import ENV from '@/env_config.ts';
import { ConfigProvider } from 'antd';

console.log('popup:', ENV);

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorSuccess: '#80ed99',
          colorWarning: '#eefc57',
          colorError: '#ee6055',
          fontSize: 16,
          wireframe: false,
          colorPrimary: '#4895ef',
          colorInfo: '#4895ef',
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
