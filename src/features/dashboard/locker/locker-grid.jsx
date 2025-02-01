import { BadgesContainer, ContractsContainer, BuildsContainer, RechargeContainer, TacticContainer } from "./";

export default function LockerGrid() {
  return (
    <div className="p-8 bg-[#1A1A1A] min-h-screen rounded-lg">
      <div className="max-w-[1752px] mx-auto">
        <h1 className="text-[#FFD32A] font-bold text-4xl mb-12">LOCKER</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <TacticContainer />
            <ContractsContainer />
            <BadgesContainer />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <BuildsContainer />
            <RechargeContainer />
          </div>
        </div>
      </div>
    </div>
  );
} 