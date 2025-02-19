import {
  LockerContainer,
  LockerContract,
  LockerBadges,
  LockerBuilds,
  LockerRecharge,
} from "@features/dashboard/locker";

export default function LockerPage() {
  return (
    <>
      <h1 className="text-5xl font-extrabold py-4 text-primary">LOCKER</h1>
      <div className="flex flex-col lg:flex-row gap-20 flex-grow">
        <div className="flex flex-col lg:w-1/2 gap-5 h-full">
          <LockerContainer />
          <div className="flex-1 flex flex-col overflow-hidden">
            <LockerContract />
            <LockerBadges />
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2 h-full">
          <LockerBuilds />
          <LockerRecharge />
        </div>
      </div>
    </>
  );
}
