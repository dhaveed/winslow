import './index.css';
import '@fontsource/inter/100.css'; // Thin
import '@fontsource/inter/200.css'; // Extra Light
import '@fontsource/inter/300.css'; // Light
import '@fontsource/inter/400.css'; // Regular (Normal)
import '@fontsource/inter/500.css'; // Medium
import '@fontsource/inter/600.css'; // Semi-bold
import '@fontsource/inter/700.css'; // Bold
import '@fontsource/inter/800.css'; // Extra Bold
import '@fontsource/inter/900.css'; // Black

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
