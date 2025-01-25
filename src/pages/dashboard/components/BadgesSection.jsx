import { useRarities } from '@/hooks/useRarities';
import { ReusableTable } from '@ui/ReusableTable';

export function BadgesSection() {
  const { getRarityColor } = useRarities();

  const rechargeColumns = [
    { label: 'DISCOUNT TIME', accessor: 'discountTime' },
    { label: 'NUMBER', accessor: 'number', lighting: true },
    { label: 'ACTION(S)', accessor: 'actions' }
  ];

  const rechargeData = [
    { discountTime: '5%', number: '1' },
    { discountTime: '10%', number: '3' },
    { discountTime: '15%', number: '1' },
    { discountTime: '20%', number: '0' },
    { discountTime: '25%', number: '0' }
  ];

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-[#FFD32A] font-bold text-xl mb-4">
          RECHARGE DISCOUNT(S)
        </h2>
        <div className="flex items-center gap-4">
          <ReusableTable 
            columns={rechargeColumns} 
            data={rechargeData} 
          />
          <div className="flex items-center justify-center w-32 h-32 bg-black/50 rounded-xl border border-gray-800">
            <div className="text-center">
              <span className="text-[#FFD32A] text-5xl font-bold">5</span>
              <p className="text-gray-300 text-sm mt-2">Badge Recharge<br/>Discount(s)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 