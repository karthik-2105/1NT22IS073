// src/App.js

import React, { useEffect } from 'react';
import './App.css';
import { logEvent } from './utils/logger';
import UrlShortener from './components/UrlShortener';

function App() {
  useEffect(() => {
    logEvent({
      stack: 'frontend',
      level: 'info',
      package: 'App',
      message: 'React App Loaded',
    });
  }, []);

  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <UrlShortener />
    </div>
  );
}

export default App;
