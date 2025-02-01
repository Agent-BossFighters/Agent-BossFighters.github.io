import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ui/table";

const HEADERS = ["BUILD NAME", "BONUS MULTIPLIER", "PERKS MULTIPLIER", "ACTION(S)"];

const BUILDS_DATA = [
  { name: "Fighter Railgun", bonus: "2.22", perks: "3.75" },
  { name: "Fighter Striker", bonus: "2.01", perks: "3.75" },
  { name: "Fighter Lobber", bonus: "2.01", perks: "3.75" },
  { name: "Boss Spiked Maul / Laser", bonus: "1.35", perks: "2.21" },
  { name: "Boss Hammer / Toxic Gun", bonus: "1.35", perks: "2.21" },
];

export function BuildsTable() {
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
          {BUILDS_DATA.map((build, index) => (
            <TableRow key={index} className="h-[52px] border-b border-gray-800">
              <TableCell className="text-white">{build.name}</TableCell>
              <TableCell className="text-white">{build.bonus}</TableCell>
              <TableCell className="text-white">{build.perks}</TableCell>
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
            <TableCell className="text-gray-400">Build name</TableCell>
            <TableCell className="text-gray-400">0.0</TableCell>
            <TableCell className="text-gray-400">0.0</TableCell>
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
