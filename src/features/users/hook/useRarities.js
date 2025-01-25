import { useState, useEffect } from 'react';

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

// Données statiques pour les rarités
const STATIC_RARITIES = [
  { id: 1, name: 'Common' },
  { id: 2, name: 'Uncommon' },
  { id: 3, name: 'Rare' },
  { id: 4, name: 'Epic' },
  { id: 5, name: 'Legendary' },
  { id: 6, name: 'Mythic' },
  { id: 7, name: 'Exalted' },
  { id: 8, name: 'Exotic' },
  { id: 9, name: 'Transcendent' },
  { id: 10, name: 'Unique' }
];

export function useRarities() {
  const [rarities, setRarities] = useState(STATIC_RARITIES); // Utilisation directe des données statiques
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRarityColor = (rarity) => {
    const color = RARITY_COLORS[rarity?.toLowerCase()];
    return `border-2 border-${color || 'zinc-400'} text-slate-100`;
  };

  return { rarities, isLoading, error, getRarityColor };
} 