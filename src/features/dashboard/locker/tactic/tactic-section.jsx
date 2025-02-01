import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@ui/table";
import { Button } from "@ui/button";

export function TacticSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-[#FFD32A] font-bold text-xl mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>
            <path d="M8.5 8.5v.01"/>
            <path d="M16 15.5v.01"/>
            <path d="M12 12v.01"/>
            <path d="M11 17v.01"/>
            <path d="M7 14v.01"/>
          </svg>
          MY TACTIC
        </h2>
        <div className="bg-[#1A1A1A] border border-gray-800 rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>MAX ITEM RARITY</TableHead>
                <TableHead>MY FAVORITE FLEX PACK</TableHead>
                <TableHead>BADGE SLOT(S)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded bg-purple-500/20 text-purple-300 font-medium">
                      Unique
                    </span>
                  </div>
                </TableCell>
                <TableCell>$499.99 (67,532) +40%</TableCell>
                <TableCell>4</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <div>
        <h2 className="text-[#FFD32A] font-bold text-xl mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
          SHOWRUNNER CONTRACT(S)
        </h2>
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
                <TableCell>Contender Showrunner Contract</TableCell>
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
                <TableCell>Contender Showrunner Contract</TableCell>
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
                <TableCell>Encore Showrunner Contract</TableCell>
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
      </div>
    </div>
  );
} 