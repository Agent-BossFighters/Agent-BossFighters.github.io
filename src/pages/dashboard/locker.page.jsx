import { Tabs, TabsContent, TabsList, TabsTrigger } from "@ui/tabs";
import { TacticSection, BuildsSection, BadgesSection } from "@features/dashboard/locker";

export default function LockerPage() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-[#1A1A1A] min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-[#FFD32A] font-bold text-4xl mb-8">
          LOCKER
        </h1>
        
        {/* Mobile/Tablet View */}
        <div className="lg:hidden space-y-8">
          <TacticSection />
          <BuildsSection />
          <BadgesSection />
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            <TacticSection />
            <BadgesSection showRecharge={false} />
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            <BuildsSection />
            <BadgesSection showRecharge={true} showBadges={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
