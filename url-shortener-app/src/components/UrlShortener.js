// src/components/UrlShortener.js

import React, { useState } from 'react';
import { logEvent } from '../utils/logger';

const UrlShortener = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleShorten = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ longUrl }),
      });

      const data = await response.json();
      setShortUrl(data.shortUrl);

      // Log success event
      logEvent({
        stack: 'frontend',
        level: 'info',
        package: 'UrlShortener',
        message: 'Short URL created successfully',
      });
    } catch (error) {
      // Log error
      logEvent({
        stack: 'frontend',
        level: 'error',
        package: 'UrlShortener',
        message: `Failed to shorten URL: ${error.message}`,
      });
    }
  };

  return (
    <div>
      <input
        type="text"
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        placeholder="Enter long URL"
      />
      <button onClick={handleShorten}>Shorten URL</button>
      {shortUrl && (
        <p>
          Shortened URL: <a href={shortUrl}>{shortUrl}</a>
        </p>
      )}
    </div>
  );
};

export default UrlShortener;
