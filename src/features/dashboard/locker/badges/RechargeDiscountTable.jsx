import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@ui/table";
import { Button } from "@ui/button";

export function RechargeDiscountTable() {
  return (
    <div className="flex">
      <div className="flex-1">
        <div className="bg-[#1A1A1A] border border-gray-800 rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-gray-800">
                <TableHead className="text-[#FFD32A] w-32">DISCOUNT TIME</TableHead>
                <TableHead className="text-[#FFD32A] w-32 text-center">NUMBER</TableHead>
                <TableHead className="text-[#FFD32A] w-32 text-center">ACTION(S)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b border-gray-800">
                <TableCell>5%</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">
                  <Button variant="outline" size="sm" className="bg-transparent hover:bg-gray-800">Edit</Button>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell>9%</TableCell>
                <TableCell className="text-center">1</TableCell>
                <TableCell className="text-center">
                  <Button variant="outline" size="sm" className="bg-transparent hover:bg-gray-800">Edit</Button>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell>10%</TableCell>
                <TableCell className="text-center">3</TableCell>
                <TableCell className="text-center">
                  <Button variant="outline" size="sm" className="bg-transparent hover:bg-gray-800">Edit</Button>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell>13%</TableCell>
                <TableCell className="text-center">1</TableCell>
                <TableCell className="text-center">
                  <Button variant="outline" size="sm" className="bg-transparent hover:bg-gray-800">Edit</Button>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell>16%</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">
                  <Button variant="outline" size="sm" className="bg-transparent hover:bg-gray-800">Edit</Button>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell>20%</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">
                  <Button variant="outline" size="sm" className="bg-transparent hover:bg-gray-800">Edit</Button>
                </TableCell>
              </TableRow>
              <TableRow className="border-b border-gray-800">
                <TableCell>25%</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">
                  <Button variant="outline" size="sm" className="bg-transparent hover:bg-gray-800">Edit</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="w-48 flex flex-col items-center justify-center ml-8">
        <div className="text-[#FFD32A] text-6xl font-bold">5</div>
        <div className="text-white text-center mt-2">
          Badge Recharge<br />
          Discount(s)
        </div>
      </div>
    </div>
  );
}
