import { useState } from 'react';
import { api } from '../services/api';

export function useApi() {
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState(null);

  const testConnection = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/health`);
      setIsConnected(response.ok);
      return response.ok;
    } catch (err) {
      setError('Failed to connect to API');
      return false;
    }
  };

  return { isConnected, error, testConnection };
} 