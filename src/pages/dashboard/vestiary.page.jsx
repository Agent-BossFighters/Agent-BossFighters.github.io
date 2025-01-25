import { useRarities } from '../../hook/useRarities';
import { ReusableTable } from '@/shared/ui/ReusableTable';

// Données statiques extraites pour plus de clarté
const SHOWRUNNER_COLUMNS = [
  { label: 'RARITY', accessor: 'rarity' },
  { label: 'ID', accessor: 'id' },
  { label: 'PURCHASE PRICE', accessor: 'price' },
  { label: 'ACTION(S)', accessor: 'actions' }
];

const BUILDS_COLUMNS = [
  { label: 'BUILD NAME', accessor: 'name' },
  { label: 'BONUS MULTIPLIER', accessor: 'bonus', highlight: true },
  { label: 'PERKS MULTIPLIER', accessor: 'perks', highlight: true },
  { label: 'ACTION(S)', accessor: 'actions' }
];

const RECHARGE_COLUMNS = [
  { label: 'DISCOUNT TIME', accessor: 'time' },
  { label: 'NUMBER', accessor: 'number', lighting: true },
  { label: 'ACTION(S)', accessor: 'actions' }
];

export default function VestiaryPage() {
  const { rarities, isLoading } = useRarities();

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[#FFD32A] font-extrabold text-3xl tracking-wide mb-8">
          LOCKER
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Colonne de gauche */}
          <div className="space-y-8">
            {/* MY TACTIC Section */}
            <div>
              <h2 className="text-[#FFD32A] text-xl mb-4 flex items-center gap-2">
                <span className="w-5 h-5 bg-blue-500/20 rounded flex items-center justify-center">📋</span>
                MY TACTIC
              </h2>
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                <div className="w-full md:w-auto">
                  <label className="block text-xs text-gray-400 mb-1">MAX ITEM RARITY TO SHOW</label>
                  <select className="w-full md:w-48 bg-black border border-gray-800 rounded p-2 text-white">
                    {isLoading ? (
                      <option>Loading...</option>
                    ) : (
                      rarities.map((rarity) => (
                        <option key={rarity.id} value={rarity.name}>
                          {rarity.name}
                        </option>
                      ))
                    )}
                  </select>
                </div>
                <div className="w-full md:w-auto">
                  <label className="block text-xs text-gray-400 mb-1">MY FAVORITE FLEX PACK</label>
                  <select className="w-full md:w-48 bg-black border border-gray-800 rounded p-2 text-white">
                    <option>$499.99 (67,532) +40%</option>
                  </select>
                </div>
                <div className="w-full md:w-auto">
                  <label className="block text-xs text-gray-400 mb-1">BADGE SLOT(S)</label>
                  <select className="w-full md:w-24 bg-black border border-gray-800 rounded p-2 text-white">
                    {[0, 1, 2, 3, 4].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* SHOWRUNNER CONTRACT(S) Section */}
            <div className="overflow-x-auto">
              <h2 className="text-[#FFD32A] text-xl mb-4 flex items-center gap-2">
                <span className="w-5 h-5 bg-blue-500/20 rounded flex items-center justify-center">📄</span>
                SHOWRUNNER CONTRACT(S)
              </h2>
              <ReusableTable 
                columns={SHOWRUNNER_COLUMNS}
                data={[
                  { rarity: 'Rare', id: '#123', price: '$400', actions: '' },
                  { rarity: 'Epic', id: '#9999', price: '$589', actions: '' },
                  { rarity: 'Rare', id: '#10242', price: '$200', actions: '' }
                ]}
              />
            </div>

            {/* BADGE(S) Section */}
            <div>
              <h2 className="text-[#FFD32A] text-xl mb-4 flex items-center gap-2">
                <span className="w-5 h-5 bg-blue-500/20 rounded flex items-center justify-center">🏅</span>
                BADGE(S)
              </h2>
              <ReusableTable 
                columns={[
                  { label: 'RARITY', accessor: 'rarity' },
                  { label: 'ID', accessor: 'id' },
                  { label: 'PURCHASE PRICE', accessor: 'price' },
                  { label: 'ACTION(S)', accessor: 'actions' }
                ]}
                data={[
                  { rarity: 'Rare', id: '#123', price: '$400', actions: '' },
                  { rarity: 'Epic', id: '#9999', price: '$589', actions: '' },
                  { rarity: 'Rare', id: '#10242', price: '$200', actions: '' }
                ]}
              />
            </div>
          </div>

          {/* Colonne de droite */}
          <div className="space-y-8">
            {/* BUILD(S) Section */}
            <div>
              <h2 className="text-[#FFD32A] text-xl mb-4 flex items-center gap-2">
                <span className="w-5 h-5 bg-blue-500/20 rounded flex items-center justify-center">🛠️</span>
                BUILD(S)
              </h2>
              <ReusableTable 
                columns={BUILDS_COLUMNS}
                data={[
                  { name: 'Fighter Badge', bonus: '2.22', perks: '3.75', actions: '' },
                  { name: 'Fighter Striker', bonus: '2.01', perks: '3.75', actions: '' },
                  { name: 'Fighter Lobber', bonus: '2.01', perks: '3.75', actions: '' },
                  { name: 'Boss Speed Maul/Laser', bonus: '1.35', perks: '2.21', actions: '' },
                  { name: 'Boss Hammer/Toxic Gun', bonus: '1.35', perks: '2.21', actions: '' }
                ]}
              />
            </div>

            {/* RECHARGE DISCOUNT(S) Section */}
            <div>
              <h2 className="text-[#FFD32A] text-xl mb-4 flex items-center gap-2">
                <span className="w-5 h-5 bg-blue-500/20 rounded flex items-center justify-center">🔄</span>
                RECHARGE DISCOUNT(S)
              </h2>
              <div className="flex items-start gap-4">
                <ReusableTable 
                  columns={RECHARGE_COLUMNS}
                  data={[
                    { time: '5%', number: '1', actions: '' },
                    { time: '10%', number: '3', actions: '' },
                    { time: '15%', number: '1', actions: '' },
                    { time: '20%', number: '0', actions: '' },
                    { time: '25%', number: '0', actions: '' }
                  ]}
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
        </div>
      </div>
    </div>
  );
}
