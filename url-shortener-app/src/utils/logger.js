// src/utils/logger.js

export const logEvent = async (logData) => {
  try {
    const response = await fetch('http://localhost:3000/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(logData),
    });

    if (!response.ok) {
      console.error('❌ Logging failed with status:', response.status);
    }
  } catch (error) {
    console.error('❌ Error while logging:', error);
  }
};
