import { BadgesTable } from "./BadgesTable";
import { Badge } from "@img/index";

export default function BadgesContainer() {
  return (
    <div className="max-w-[800px] space-y-4">
      <h2 className="text-white font-bold text-xl flex items-center gap-2">
        <img src={Badge} alt="Badge" className="w-5 h-5" />
        BADGE(S)
      </h2>
      <BadgesTable />
    </div>
  );
} 