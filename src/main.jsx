import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Este CSS pode ou não ser necessário, mas é uma boa prática incluí-lo
// se a documentação sugerir. Vamos começar sem para ver o resultado.

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);