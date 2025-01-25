import { useRarities } from '@/hook/useRarities';
import { useBuilds } from '@/hook/useBuilds';
import { useState, useEffect } from 'react';

export function ApiTest() {
  const { rarities, error: raritiesError } = useRarities();
  const { builds, error: buildsError } = useBuilds();
  const [testResults, setTestResults] = useState({});

  useEffect(() => {
    const results = {
      rarities: {
        status: !raritiesError && Array.isArray(rarities),
        error: raritiesError
      },
      builds: {
        status: !buildsError && Array.isArray(builds),
        error: buildsError
      }
    };

    setTestResults(results);
  }, [rarities, builds, raritiesError, buildsError]);

  return (
    <div className="p-4 bg-black/20 rounded-lg mb-8">
      <h2 className="text-xl font-bold mb-4 text-[#FFD32A]">API Test Results</h2>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span>Rarities API:</span>
          <span className={testResults.rarities?.status ? 'text-green-500' : 'text-red-500'}>
            {testResults.rarities?.status ? '✅' : '❌'}
          </span>
          {testResults.rarities?.error && (
            <span className="text-red-500 text-sm">
              ({testResults.rarities.error})
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span>Builds API:</span>
          <span className={testResults.builds?.status ? 'text-green-500' : 'text-red-500'}>
            {testResults.builds?.status ? '✅' : '❌'}
          </span>
          {testResults.builds?.error && (
            <span className="text-red-500 text-sm">
              ({testResults.builds.error})
            </span>
          )}
        </div>
      </div>
    </div>
  );
} 