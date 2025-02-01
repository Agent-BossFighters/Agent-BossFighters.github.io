import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ui/table";

export function RechargeDiscountTable() {
  const discounts = [
    { time: "5%", number: 0 },
    { time: "9%", number: 1 },
    { time: "10%", number: 3 },
    { time: "13%", number: 1 },
    { time: "16%", number: 0 },
    { time: "20%", number: 0 },
    { time: "25%", number: 0 },
  ];

  return (
    <div className="bg-black rounded-lg overflow-hidden border border-gray-800">
      <Table>
        <TableHeader>
          <TableRow className="bg-[#1E2124] border-b border-gray-800">
            <TableHead className="text-white font-medium">DISCOUNT TIME</TableHead>
            <TableHead className="text-white font-medium">NUMBER</TableHead>
            <TableHead className="text-white font-medium w-[100px]">ACTION(S)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {discounts.map((discount, index) => (
            <TableRow key={index} className="h-[52px] border-b border-gray-800">
              <TableCell className="text-white">{discount.time}</TableCell>
              <TableCell className="text-white">{discount.number}</TableCell>
              <TableCell>
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