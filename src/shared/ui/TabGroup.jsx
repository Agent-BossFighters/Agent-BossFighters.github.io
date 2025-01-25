export function TabGroup({ tabs, activeTab, onChange }) {
  return (
    <div className="flex gap-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`px-4 py-2 rounded-lg font-medium ${
            activeTab === tab.id
              ? 'bg-[#FFD32A] text-black'
              : 'bg-black/50 text-gray-300 hover:bg-black/70'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
} 