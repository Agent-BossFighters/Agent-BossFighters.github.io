import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@ui/table";

export function TacticTable() {
  return (
    <div className="bg-[#1A1A1A] border border-gray-800 rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="border-b border-gray-800">
            <TableHead className="text-[#FFD32A]">MAX ITEM RARITY</TableHead>
            <TableHead className="text-[#FFD32A]">MY FAVORITE FLEX PACK</TableHead>
            <TableHead className="text-[#FFD32A]">BADGE SLOT(S)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-b border-gray-800">
            <TableCell>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded bg-purple-500/20 text-purple-300 font-medium">
                  Unique
                </span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <span>$499.99 (67,532) +40%</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <span>4</span>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
