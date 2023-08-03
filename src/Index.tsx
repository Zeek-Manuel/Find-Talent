import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/Index.css';

const element: HTMLElement = document.getElementById('playground') as HTMLElement;

ReactDOM.createRoot(element).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
)
