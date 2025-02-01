export default function TacticContainer() {
  return (
    <div className="space-y-4">
      <h2 className="text-white font-bold text-xl flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>
          <path d="M8.5 8.5v.01"/>
          <path d="M16 15.5v.01"/>
          <path d="M12 12v.01"/>
          <path d="M11 17v.01"/>
          <path d="M7 14v.01"/>
        </svg>
        MY TACTIC
      </h2>
      
      <div className="flex gap-4 items-center">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="text-white text-sm">MAX ITEM RARITY TO SHOW</div>
            <div className="bg-black rounded-full w-5 h-5 flex items-center justify-center">
              <span className="text-white text-xs">i</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white rounded p-2 cursor-pointer">
            <span className="px-3 py-1 rounded border-2 border-purple-500 text-black font-medium">Unique</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="text-white text-sm">MY FAVORITE FLEX PACK</div>
            <div className="bg-black rounded-full w-5 h-5 flex items-center justify-center">
              <span className="text-white text-xs">i</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white rounded p-2 cursor-pointer">
            <span className="text-black">$499.99 (67,330) +40%</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="text-white text-sm">BADGE SLOT(S)</div>
            <div className="bg-black rounded-full w-5 h-5 flex items-center justify-center">
              <span className="text-white text-xs">i</span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-white rounded p-2 cursor-pointer">
            <span className="text-black">4</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
} 