import { BuildsTable } from "./BuildsTable";
import { Soldier } from "@img/index";

export default function BuildsContainer() {
  return (
    <div className="space-y-4">
      <h2 className="text-white font-bold text-xl flex items-center gap-2">
        <img src={Soldier} alt="Soldier" className="w-5 h-5" />
        BUILD(S)
      </h2>
      <BuildsTable />
    </div>
  );
} 