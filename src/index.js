import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Orchesta from './components/instructment-list';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <body>
    <h1 id="title">Drum 🥁 Kit</h1>
    <Orchesta/>
  </body>
  </React.StrictMode>
);
