import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ui/table";

const HEADERS = ["CONTRACT NAME", "LEVEL", "RARITY", "ACTION(S)"];

const CONTRACTS_DATA = [
  { name: "Showrunner Contract", level: 1, rarity: "Common" },
  { name: "Showrunner Contract", level: 2, rarity: "Uncommon" },
  { name: "Showrunner Contract", level: 3, rarity: "Rare" },
  { name: "Showrunner Contract", level: 4, rarity: "Epic" },
  { name: "Showrunner Contract", level: 5, rarity: "Legendary" },
];

const RARITY_STYLES = {
  Common: "text-gray-400",
  Uncommon: "text-green-400", 
  Rare: "text-blue-400",
  Epic: "text-purple-400",
  Legendary: "text-yellow-400"
};

export function ContractsTable() {
  return (
    <div className="bg-black rounded-lg overflow-hidden border border-gray-800">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#1E2124] border-b border-gray-800">
            {HEADERS.map(header => (
              <TableHead key={header} className="text-white font-medium">{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {CONTRACTS_DATA.map((contract, index) => (
            <TableRow key={index} className="h-[52px] border-b border-gray-800">
              <TableCell className="text-white">{contract.name}</TableCell>
              <TableCell className="text-white">{contract.level}</TableCell>
              <TableCell className={RARITY_STYLES[contract.rarity]}>{contract.rarity}</TableCell>
              <TableCell className="w-[100px]">
                <button className="p-2 hover:bg-gray-800/50 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z"/>
                  </svg>
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
} 