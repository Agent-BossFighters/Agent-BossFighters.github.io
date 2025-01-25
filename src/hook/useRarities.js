import { useState } from 'react';

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
  const [rarities] = useState(STATIC_RARITIES);

  const getRarityColor = (rarity) => {
    switch (rarity?.toLowerCase()) {
      case 'common': return 'border-2 border-gray-400 text-slate-100';
      case 'uncommon': return 'border-2 border-green-400 text-slate-100';
      case 'rare': return 'border-2 border-blue-400 text-slate-100';
      case 'epic': return 'border-2 border-purple-400 text-slate-100';
      case 'legendary': return 'border-2 border-orange-400 text-slate-100';
      case 'mythic': return 'border-2 border-yellow-400 text-slate-100';
      case 'exalted': return 'border-2 border-pink-400 text-slate-100';
      case 'exotic': return 'border-2 border-[#e879f9] text-slate-100';
      case 'transcendent': return 'border-2 border-red-400 text-slate-100';
      case 'unique': return 'border-2 border-rose-400 text-slate-100';
      default: return 'border-2 border-zinc-400 text-slate-100';
    }
  };

  return { 
    rarities, 
    isLoading: false, 
    error: null, 
    getRarityColor 
  };
} 