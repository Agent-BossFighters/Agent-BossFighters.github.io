import { ContractsTable, BuildsTable, BadgesTable, RechargeDiscountTable } from "./";

export function LockerGrid() {
  return (
    <div className="p-8 bg-[#1A1A1A] min-h-screen">
      <div className="max-w-[1752px] mx-auto flex flex-row flex-wrap items-start content-start gap-8">
        <h1 className="text-[#FFD32A] font-bold text-4xl w-full mb-8">LOCKER</h1>
        
        {/* Left Column */}
        <div className="flex-1 space-y-8 min-w-[600px]">
          {/* MY TACTIC Section */}
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

          {/* SHOWRUNNER CONTRACT(S) Section */}
          <div className="space-y-4">
            <h2 className="text-white font-bold text-xl flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              SHOWRUNNER CONTRACT(S)
            </h2>
            <ContractsTable />
          </div>

          {/* BADGE(S) Section */}
          <div className="space-y-4">
            <h2 className="text-white font-bold text-xl flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
              BADGE(S)
            </h2>
            <BadgesTable />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-8 min-w-[600px]">
          {/* BUILD(S) Section */}
          <div className="space-y-4">
            <h2 className="text-white font-bold text-xl flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
              </svg>
              BUILD(S)
            </h2>
            <BuildsTable />
          </div>

          {/* RECHARGE DISCOUNT(S) Section */}
          <div className="space-y-4">
            <h2 className="text-white font-bold text-xl flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
                <path d="M6 8h12"/>
                <path d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"/>
                <path d="M6 12v7a2 2 0 0 0 2 2h8"/>
                <path d="M5 18h7"/>
              </svg>
              RECHARGE DISCOUNT(S)
            </h2>
            <RechargeDiscountTable />
          </div>
        </div>
      </div>
    </div>
  );
} 