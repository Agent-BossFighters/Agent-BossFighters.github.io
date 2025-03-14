import { Flex, Token4, Purse, Spark, Win, Draw, Loss } from "@img/index";

export default function DailySummary({ date, summary }) {
  const formatDate = (dateString) => {
    const d = new Date(dateString);
    const day = d.toLocaleDateString("fr-FR", { day: "2-digit" });
    const month = d.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
    const year = d.getFullYear();
    return { dayMonth: `${day} ${month}`, year };
  };

  if (!summary) {
    return null;
  }

  return (
    <div className="flex border-4 border-yellow-400 rounded-lg mb-10 w-[auto]">
      {/* Date section */}
      <div className="w-1/6 bg-yellow-400 flex flex-col justify-center items-center px-8">
        <p className="text-black text-4xl font-bold">
          {formatDate(date).dayMonth}
        </p>
        <p className="text-black text-4xl font-bold">
          {formatDate(date).year}
        </p>
      </div>

      {/* Metrics section */}
      <div className="pt-4 pb-4 flex items-center justify-around flex-grow gap-6 text-white py-4">
        {/* Matches count and results */}
        <div className="pb-4 flex flex-col items-center gap-2">
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <img src={Win} alt="Victories" className="w-7 h-7" />
              <span className="pl-1 text-green-500 text-2xl">{summary.results.win}</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={Draw} alt="Draws" className="w-7 h-7" />
              <span className="pl-1 text-blue-500 text-2xl">{summary.results.draw}</span>
            </div>
            <div className="flex items-center gap-1">
              <img src={Loss} alt="Defeats" className="w-7 h-7" />
              <span className="pl-1 text-red-500 text-2xl">{summary.results.loss}</span>
            </div>
          </div>
          <p className="text-2xl justify-center font-bold">MATCH(ES)</p>
          <p className="text-3xl">{summary.matchesCount}</p>
        </div>

        {/* Energy used */}
        <div className="flex flex-col items-center gap-1">
          <img src={Spark} alt="Energy" className="w-6 h-10" />
          <p className="text-2xl font-bold">ENERGY USED</p>
          <p className="text-red-500 text-2xl">{summary.energyUsed.amount}</p>
          <p className="text-red-500 text-2sm">${summary.energyUsed.cost}</p>
        </div>

        {/* Total BFT */}
        <div className="flex flex-col items-center gap-1">
          <img src={Token4} alt="bft" className="w-10 h-10" />
          <p className="text-2xl font-bold">$BFT</p>
          <p className="text-green-500 text-2xl">{summary.totalBft.amount}</p>
          <p className="text-green-500 text-2sm">${summary.totalBft.value}</p>
        </div>

        {/* Total Flex */}
        <div className="flex flex-col items-center gap-1">
          <img src={Flex} alt="flex" className="w-10 h-10" />
          <p className="text-2xl font-bold">FLEX</p>
          <p className="text-green-500 text-2xl">{summary.totalFlex.amount}</p>
          <p className="text-green-500 text-2sm">${summary.totalFlex.value}</p>
        </div>

        {/* Profit */}
        <div className="pb-4 flex flex-col items-center gap-2">
          <img src={Purse} alt="Profit" className="w-8 h-10" />
          <p className="text-2xl font-bold">PROFIT</p>
          <p className="text-green-500 text-3xl">${summary.profit}</p>
        </div>
      </div>
    </div>
  );
}
