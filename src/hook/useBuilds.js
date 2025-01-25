import { useState, useEffect } from 'react';
import { getData, postData, deleteData } from '@api/data';

export function useBuilds() {
  const [builds, setBuilds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBuilds = async () => {
    try {
      const data = await getData('/api/v1/builds');
      setBuilds(data);
    } catch (err) {
      console.error('Error fetching builds:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBuilds();
  }, []);

  const addBuild = async (buildData) => {
    try {
      const newBuild = await postData('/api/v1/builds', buildData);
      setBuilds(prev => [...prev, newBuild]);
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  const deleteBuild = async (buildId) => {
    try {
      await deleteData(`/api/v1/builds/${buildId}`);
      setBuilds(prev => prev.filter(build => build.id !== buildId));
      return true;
    } catch (err) {
      setError(err.message);
      return false;
    }
  };

  return {
    builds,
    isLoading,
    error,
    addBuild,
    deleteBuild,
    refreshBuilds: fetchBuilds
  };
} 