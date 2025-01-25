import { useRarities } from '@/hooks/useRarities';
import { ReusableTable } from '@ui/ReusableTable';

export function BuildsSection() {
  const columns = [
    { label: 'BUILD NAME', accessor: 'name' },
    { label: 'BONUS MULTIPLIER', accessor: 'bonusMultiplier', highlight: true },
    { label: 'PERKS MULTIPLIER', accessor: 'perksMultiplier', highlight: true },
    { label: 'ACTION(S)', accessor: 'actions' }
  ];

  const buildsData = [
    {
      name: 'Fighter Badge',
      bonusMultiplier: '2.22',
      perksMultiplier: '3.75',
      actions: ''
    },
    {
      name: 'Fighter Striker',
      bonusMultiplier: '2.01',
      perksMultiplier: '3.75',
      actions: ''
    }
  ];

  return (
    <div className="space-y-8">
      <ReusableTable 
        columns={columns} 
        data={buildsData} 
      />
    </div>
  );
} 