import { createRoot } from 'react-dom/client'
import { results, getImages } from './data';
import { App } from './components/app/app.jsx';
import React from 'react';



const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App getImages={getImages} results={results} />
  </React.StrictMode>
)