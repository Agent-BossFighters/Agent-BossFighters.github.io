import { ContractsTable } from "./ContractsTable";
import { Contract } from "@img/index";

export default function ContractsContainer() {
  return (
    <div className="max-w-[800px] space-y-4">
      <h2 className="text-white font-bold text-xl flex items-center gap-2">
        <img src={Contract} alt="Contract" className="w-5 h-5" />
        SHOWRUNNER CONTRACT(S)
      </h2>
      <ContractsTable />
    </div>
  );
} 