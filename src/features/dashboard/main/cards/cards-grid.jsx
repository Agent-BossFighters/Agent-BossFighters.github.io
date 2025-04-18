import { XPProgress } from "@/features/dashboard/main/xp/xp-progress";
import LockerCard from "./locker-card";
import TvToolsCard from "./tv-tools-card";
import DataLabCard from "./datalab-card";
import ScheduleCard from "./schedule-card";
import FightingCard from "./fighting-card";
import DailyCard from "./daily-card";
import MonthlyCard from "./monthly-card";
import PlayerMapCard from "./player-map-card";
import { useAuth } from "@context/auth.context";

const disabledCards = {
  locker: false,
  datalab: false,
  daily: false,
  schedule: true,
  monthly: false,
  tvtools: true,
  fighting: false,
  playermap: true,
  xp: false,
};

const premiumCards = {
  locker: false,
  datalab: false,
  daily: false,
  schedule: false,
  monthly: true,
  tvtools: true,
  fighting: false, // TODO: Add admin only, remove after testing revert to true
  playermap: true,
  xp: true,
};

// TODO: Add admin only, remove after testing (3 lignes)
const adminOnlyCards = {
  fighting: true,
};

const disabledStyle =
  "opacity-50 pointer-events-none cursor-not-allowed bg-[#1A1B1E]/80 rounded-2xl";

export function CardsGrid() {
  const { user } = useAuth();
  const isPremium = user?.isPremium === true;

  // TODO: Add admin only, remove after testing (1 ligne)
  const isAdmin = user?.is_admin === true;

  const isCardDisabled = (cardKey) => {
    // TODO: Add admin only, remove after testing (1 ligne)
    if (adminOnlyCards[cardKey] && !isAdmin) return true;

    if (premiumCards[cardKey] && !isPremium) return true;
    return disabledCards[cardKey];
  };

  return (
    <div className="hidden h-full py-10 lg:block p-4 my-auto">
      <div className="h-full mx-auto">
        <div className="grid h-full grid-cols-3 grid-rows-8 gap-[20px]">
          <div
            className={`row-span-6 ${isCardDisabled("locker") ? disabledStyle : ""}`}
          >
            <LockerCard />
          </div>
          <div
            className={`row-span-4 ${isCardDisabled("datalab") ? disabledStyle : ""}`}
          >
            <DataLabCard />
          </div>
          <div
            className={`row-span-3 col-start-3 row-start-2 ${isCardDisabled("daily") ? disabledStyle : ""}`}
          >
            <DailyCard />
          </div>
          <div
            className={`row-span-2 col-start-2 row-start-5 ${isCardDisabled("schedule") ? disabledStyle : ""}`}
          >
            <ScheduleCard />
          </div>
          <div
            className={`row-span-2 col-start-3 row-start-5 ${isCardDisabled("monthly") ? disabledStyle : ""}`}
          >
            <MonthlyCard />
          </div>
          <div
            className={`row-span-2 col-start-1 row-start-7 ${isCardDisabled("tvtools") ? disabledStyle : ""}`}
          >
            <TvToolsCard />
          </div>
          <div
            className={`row-span-2 col-start-2 row-start-7 ${isCardDisabled("fighting") ? disabledStyle : ""}`}
          >
            <FightingCard />
          </div>
          <div
            className={`row-span-2 col-start-3 row-start-7 ${isCardDisabled("playermap") ? disabledStyle : ""}`}
          >
            <PlayerMapCard />
          </div>
          <div
            className={`col-start-3 row-start-1 ${isCardDisabled("xp") ? disabledStyle : ""}`}
          >
            <XPProgress />
          </div>
        </div>
      </div>
    </div>
  );
}
