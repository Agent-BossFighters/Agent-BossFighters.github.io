import { useRarities } from '@/hooks/useRarities';
import { ReusableTable } from '@ui/ReusableTable';

export function TacticSection() {
  const { getRarityColor } = useRarities();

  const columns = [
    { label: 'MAX ITEM RARITY', accessor: 'rarity' },
    { label: 'MY FAVORITE FLEX PACK', accessor: 'flexPack' },
    { label: 'BADGE SLOT(S)', accessor: 'badgeSlots', highlight: true }
  ];

  const tacticData = [
    {
      rarity: 'Mythic',
      flexPack: '$499.99 (67,532) +40%',
      badgeSlots: 'UNLOCKED'
    }
  ];

  return (
    <div className="space-y-8">
      <ReusableTable 
        columns={columns} 
        data={tacticData} 
      />
    </div>
  );
} 