// src/components/AnalyticsPage.js
import React, { useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { logEvent } from '../utils/logger';

export default function AnalyticsPage() {
  useEffect(() => {
    logEvent('Visited Analytics Page');
  }, []);

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5">Analytics</Typography>
      <Typography sx={{ mt: 2 }}>
        Total URLs shortened today: 5<br />
        Most active user: Yuktha<br />
        Avg. shortening time: 0.2s
      </Typography>
    </Box>
  );
}
