import React from 'react';
import './index.css';
import App from './App';
import './i18n';

import { createRoot } from 'react-dom/client'; // 'react-dom/client' kullanımı React 18 için

const root = createRoot(document.getElementById('root'));  // root elementine 'createRoot' ile erişiyoruz
root.render(<App />);




