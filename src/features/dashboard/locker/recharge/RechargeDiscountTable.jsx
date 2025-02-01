import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ui/table";

const HEADERS = ["DISCOUNT TIME", "NUMBER", "ACTION(S)"];

const DISCOUNTS_DATA = [
  { time: "5%", number: 0 },
  { time: "9%", number: 1 },
  { time: "10%", number: 3 },
  { time: "13%", number: 1 },
  { time: "16%", number: 0 },
  { time: "20%", number: 0 },
  { time: "25%", number: 0 },
];

// Calculer le nombre total de recharge discounts disponibles
const TOTAL_DISCOUNTS = DISCOUNTS_DATA.reduce((acc, curr) => acc + curr.number, 0);

export function RechargeDiscountTable() {
  return (
    <div className="flex gap-8 items-start">
      <div className="bg-black rounded-lg overflow-hidden border border-gray-800 w-[500px]">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#1E2124] border-b border-gray-800">
              {HEADERS.map(header => (
                <TableHead key={header} className="text-white font-medium">{header}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {DISCOUNTS_DATA.map((discount, index) => (
              <TableRow key={index} className="h-[52px] border-b border-gray-800">
                <TableCell className="text-white">{discount.time}</TableCell>
                <TableCell className="text-white">{discount.number}</TableCell>
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
      <div className="flex flex-col items-center">
        <div className="text-[#FFD32A] font-bold text-8xl">{TOTAL_DISCOUNTS}</div>
        <div className="text-white text-center mt-2">
          Badge Recharge<br />Discount(s)
        </div>
      </div>
    </div>
  );
} 