import { BadgesContainer, ContractsContainer, BuildsContainer, RechargeContainer, TacticContainer } from "./";

export default function LockerGrid() {
  return (
    <div className="p-8 bg-[#1A1A1A] min-h-screen">
      <div className="max-w-[1752px] mx-auto flex flex-row flex-wrap items-start content-start gap-8">
        <h1 className="text-[#FFD32A] font-bold text-4xl w-full mb-8">LOCKER</h1>
        
        {/* Left Column */}
        <div className="flex-1 space-y-8 min-w-[600px]">
          <TacticContainer />
          <ContractsContainer />
          <BadgesContainer />
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-8 min-w-[600px]">
          <BuildsContainer />
          <RechargeContainer />
        </div>
      </div>
    </div>
  );
} 