import { createRoot } from 'react-dom/client'
import { getImages } from './data';
import { App } from './components/app/app.jsx';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';



const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App getImages={getImages} />
    </BrowserRouter>
  </React.StrictMode>
)