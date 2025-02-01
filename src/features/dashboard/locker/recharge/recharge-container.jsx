import { RechargeDiscountTable } from "./RechargeDiscountTable";

export default function RechargeContainer() {
  return (
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
  );
} 