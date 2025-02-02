import { Tactic } from "@img/index";

export default function TacticContainer() {
  return (
    <div className="max-w-[700px] space-y-6">
      <h2 className="text-white font-bold text-xl flex items-center gap-2">
        <img src={Tactic} alt="Tactic" className="w-5 h-5" />
        MY TACTIC
      </h2>
      
      <div className="flex gap-4 items-start">
        <div className="flex flex-col gap-1 w-[150px]">
          <div className="flex items-center gap-1 whitespace-nowrap">
            <div className="text-white text-sm uppercase">Max Item Rarity</div>
            <div className="bg-[#1E2124] rounded-full w-4 h-4 flex items-center justify-center">
              <span className="text-white text-xs">i</span>
            </div>
          </div>
          <div className="bg-white rounded-md w-full cursor-pointer">
            <div className="flex items-center justify-between px-2 py-1">
              <div className="px-2 rounded border border-purple-500 text-black text-sm">Unique</div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 w-[150px]">
          <div className="flex items-center gap-1 whitespace-nowrap">
            <div className="text-white text-sm uppercase">Flex Pack</div>
            <div className="bg-[#1E2124] rounded-full w-4 h-4 flex items-center justify-center">
              <span className="text-white text-xs">i</span>
            </div>
          </div>
          <div className="bg-white rounded-md w-full cursor-pointer">
            <div className="flex items-center justify-between px-2 py-1">
              <div className="text-black text-sm whitespace-nowrap">$499.99 (67,330) <span className="text-green-600">+40%</span></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 w-[150px]">
          <div className="flex items-center gap-1 whitespace-nowrap">
            <div className="text-white text-sm uppercase">Badge Slots</div>
            <div className="bg-[#1E2124] rounded-full w-4 h-4 flex items-center justify-center">
              <span className="text-white text-xs">i</span>
            </div>
          </div>
          <div className="bg-white rounded-md w-full cursor-pointer">
            <div className="flex items-center justify-between px-2 py-1">
              <div className="text-black text-sm">4</div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 