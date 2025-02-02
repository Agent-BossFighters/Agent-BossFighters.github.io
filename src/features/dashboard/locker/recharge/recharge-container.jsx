import { RechargeDiscountTable } from "./RechargeDiscountTable";
import { RechargeDiscount } from "@img/index";

export default function RechargeContainer() {
  return (
    <div className="max-w-[800px] space-y-4">
      <h2 className="text-white font-bold text-xl flex items-center gap-2">
        <img src={RechargeDiscount} alt="Recharge Discount" className="w-5 h-5" />
        RECHARGE DISCOUNT(S)
      </h2>
      <RechargeDiscountTable />
    </div>
  );
} 