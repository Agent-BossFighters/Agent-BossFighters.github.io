import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@ui/table";
import { Button } from "@ui/button";

// Composant pour la section des badges
function BadgesTable() {
  return (
    <div className="bg-[#1A1A1A] border border-gray-800 rounded-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-32">RARITY</TableHead>
            <TableHead>ITEM</TableHead>
            <TableHead className="w-32">ID</TableHead>
            <TableHead className="w-32">PURCHASE PRICE</TableHead>
            <TableHead className="w-32 text-center">ACTION(S)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded bg-purple-500/20 text-purple-300 font-medium">
                  Epic
                </span>
              </div>
            </TableCell>
            <TableCell>Contender Badge</TableCell>
            <TableCell>#123</TableCell>
            <TableCell>$400</TableCell>
            <TableCell>
              <div className="flex items-center justify-center gap-2">
                <Button variant="outline" size="sm">
                  <span className="sr-only">Edit</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                    <path d="m15 5 4 4"/>
                  </svg>
                </Button>
                <Button variant="outline" size="sm">
                  <span className="sr-only">Delete</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M3 6h18"/>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                  </svg>
                </Button>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded bg-purple-500/20 text-purple-300 font-medium">
                  Epic
                </span>
              </div>
            </TableCell>
            <TableCell>Contender Badge</TableCell>
            <TableCell>#9999</TableCell>
            <TableCell>$389</TableCell>
            <TableCell>
              <div className="flex items-center justify-center gap-2">
                <Button variant="outline" size="sm">
                  <span className="sr-only">Edit</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                    <path d="m15 5 4 4"/>
                  </svg>
                </Button>
                <Button variant="outline" size="sm">
                  <span className="sr-only">Delete</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M3 6h18"/>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                  </svg>
                </Button>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded bg-blue-500/20 text-blue-300 font-medium">
                  Rare
                </span>
              </div>
            </TableCell>
            <TableCell>Encore Badge</TableCell>
            <TableCell>#16142</TableCell>
            <TableCell>$200</TableCell>
            <TableCell>
              <div className="flex items-center justify-center gap-2">
                <Button variant="outline" size="sm">
                  <span className="sr-only">Edit</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                    <path d="m15 5 4 4"/>
                  </svg>
                </Button>
                <Button variant="outline" size="sm">
                  <span className="sr-only">Delete</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M3 6h18"/>
                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                  </svg>
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

// Composant pour la section des réductions
function RechargeDiscountTable() {
  return (
    <div className="flex">
      <div className="flex-1">
        <div className="bg-[#1A1A1A] border border-gray-800 rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-32">DISCOUNT TIME</TableHead>
                <TableHead className="w-32 text-center">NUMBER</TableHead>
                <TableHead className="w-32 text-center">ACTION(S)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>5%</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">
                  <Button variant="outline" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>9%</TableCell>
                <TableCell className="text-center">1</TableCell>
                <TableCell className="text-center">
                  <Button variant="outline" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>10%</TableCell>
                <TableCell className="text-center">3</TableCell>
                <TableCell className="text-center">
                  <Button variant="outline" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>13%</TableCell>
                <TableCell className="text-center">1</TableCell>
                <TableCell className="text-center">
                  <Button variant="outline" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>16%</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">
                  <Button variant="outline" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>20%</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">
                  <Button variant="outline" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>25%</TableCell>
                <TableCell className="text-center">0</TableCell>
                <TableCell className="text-center">
                  <Button variant="outline" size="sm">Edit</Button>
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

export function BadgesSection({ showRecharge = true, showBadges = true }) {
  return (
    <div className="space-y-8">
      {showBadges && (
        <div>
          <h2 className="text-[#FFD32A] font-bold text-xl mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
            BADGE(S)
          </h2>
          <BadgesTable />
        </div>
      )}

      {showRecharge && (
        <div>
          <h2 className="text-[#FFD32A] font-bold text-xl mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
              <path d="M6 8h12"/>
              <path d="M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"/>
              <path d="M6 12v7a2 2 0 0 0 2 2h8"/>
              <path d="M5 18h7"/>
            </svg>
            RECHARGE DISCOUNT(S)
          </h2>
          <RechargeDiscountTable />
        </div>
      )}
    </div>
  );
} 