import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ui/table";
import { useLevelCalculator } from "./hook/useLevelCalculator";

export default function Showrunner() {
  const { levels, levelData } = useLevelCalculator();

  return (
    <>
      <h2 className="text-3xl font-extrabold py-2">
        SHOWRUNNER CONTRACTS
      </h2>
      <Table className="overflow-y-scroll">
        <TableCaption>Desc ?</TableCaption>
        <TableHeader>
          <TableRow className="bg-muted-foreground/30">
            <TableHead>LEVEL</TableHead>
            {levels.map((level) => (
              <TableHead
                key={level}
                className={level === 1 || level % 5 === 0 ? "text-primary" : ""}
              >
                {level}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="">
          <TableRow>
            <TableCell className="bg-muted-foreground/30">
              SP. MARKS NB
            </TableCell>
            {levels.map((_, index) => (
              <TableCell key={index}>{levelData.spMarksNb[index].toFixed(2)}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell className="bg-muted-foreground/30">
              SP. MARKS COST
            </TableCell>
            {levels.map((_, index) => (
              <TableCell key={index}>{levelData.spMarksCost[index]}</TableCell>
            ))}
          </TableRow>
          <TableRow className="text-destructive">
            <TableCell className="bg-muted-foreground/30">TOTAL COST</TableCell>
            {levels.map((_, index) => (
              <TableCell key={index}>{levelData.totalCost[index]}</TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}