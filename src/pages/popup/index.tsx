import React from 'react';
import ReactDOM from 'react-dom/client';

// components
import App from './App.tsx';

// utils
import { attachTwindStyle } from '@/utils/attach-twind.ts';

const root = document.getElementById('root')!;
attachTwindStyle(root, document);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
