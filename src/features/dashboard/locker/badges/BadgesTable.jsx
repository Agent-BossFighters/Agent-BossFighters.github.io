import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ui/table";

const HEADERS = ["RARITY", "ITEM", "ID", "PURCHASE PRICE", "ACTION(S)"];

const BADGES_DATA = [
  { rarity: "Epic", item: "Contender Badge", id: "#123", price: "$400" },
  { rarity: "Epic", item: "Contender Badge", id: "#9999", price: "$389" },
  { rarity: "Rare", item: "Encore Badge", id: "#14042", price: "$200" },
];

const RARITY_STYLES = {
  Epic: "bg-purple-500/20 text-purple-400 border border-purple-500",
  Rare: "bg-blue-500/20 text-blue-400 border border-blue-500",
};

export function BadgesTable() {
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
          {BADGES_DATA.map((badge) => (
            <TableRow key={badge.id} className="h-[52px] border-b border-gray-800">
              <TableCell>
                <span className={`px-3 py-1 rounded ${RARITY_STYLES[badge.rarity]}`}>
                  {badge.rarity}
                </span>
              </TableCell>
              <TableCell className="text-white">{badge.item}</TableCell>
              <TableCell className="text-white">{badge.id}</TableCell>
              <TableCell className="text-white">{badge.price}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-800/50 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z"/>
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-800/50 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                      <path d="M3 6h18"/>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                    </svg>
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
          <TableRow className="bg-black h-[52px] border-b border-gray-800">
            <TableCell>
              <button className="flex items-center gap-2 px-3 py-1 rounded bg-[#1E2124] hover:bg-[#2A2D31]">
                <span className="text-gray-400">Select</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </TableCell>
            <TableCell className="text-gray-400">-</TableCell>
            <TableCell className="text-gray-400">#1234</TableCell>
            <TableCell className="text-gray-400">$0</TableCell>
            <TableCell>
              <button className="p-2 hover:bg-gray-800/50 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14"/>
                </svg>
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
