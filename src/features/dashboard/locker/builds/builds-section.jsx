import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@ui/table";
import { Button } from "@ui/button";

export function BuildsSection() {
  return (
    <div>
      <h2 className="text-[#FFD32A] font-bold text-xl mb-4 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
        BUILD(S)
      </h2>
      <div className="bg-[#1A1A1A] border border-gray-800 rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-64">BUILD NAME</TableHead>
              <TableHead className="w-32 text-center">BONUS MULTIPLIER</TableHead>
              <TableHead className="w-32 text-center">PERKS MULTIPLIER</TableHead>
              <TableHead className="w-32 text-center">ACTION(S)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Fighter Railgun</TableCell>
              <TableCell className="text-center">2.22</TableCell>
              <TableCell className="text-center">3.75</TableCell>
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
              <TableCell>Fighter Striker</TableCell>
              <TableCell className="text-center">2.01</TableCell>
              <TableCell className="text-center">3.75</TableCell>
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
              <TableCell>Fighter Lobber</TableCell>
              <TableCell className="text-center">2.01</TableCell>
              <TableCell className="text-center">3.75</TableCell>
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
              <TableCell>Boss Spiked Maul / Laser</TableCell>
              <TableCell className="text-center">1.35</TableCell>
              <TableCell className="text-center">2.21</TableCell>
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
              <TableCell>Boss Hammer / Toxic Gun</TableCell>
              <TableCell className="text-center">1.35</TableCell>
              <TableCell className="text-center">2.21</TableCell>
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
  );
} 