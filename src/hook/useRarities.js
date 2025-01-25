import { useState, useEffect } from 'react';
import { getData } from '@api/data';

const RARITY_COLORS = {
  common: 'gray-400',
  uncommon: 'green-400',
  rare: 'blue-400',
  epic: 'purple-400',
  legendary: 'orange-400',
  mythic: 'yellow-400',
  exalted: 'pink-400',
  exotic: '[#e879f9]',
  transcendent: 'red-400',
  unique: 'rose-400'
};

export function useRarities() {
  const [rarities, setRarities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRarities = async () => {
      try {
        const data = await getData('/api/v1/rarities');
        setRarities(data);
      } catch (err) {
        console.error('Error fetching rarities:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRarities();
  }, []);

  const getRarityColor = (rarity) => {
    const color = RARITY_COLORS[rarity?.toLowerCase()];
    return `border-2 border-${color || 'zinc-400'} text-slate-100`;
  };

  return { 
    rarities, 
    isLoading, 
    error, 
    getRarityColor 
  };
} 