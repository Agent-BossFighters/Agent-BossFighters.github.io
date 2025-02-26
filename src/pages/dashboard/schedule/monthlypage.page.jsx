import { useState, useEffect } from "react";
import { getData } from "@utils/api/data";
import MonthlyMatches from "@features/dashboard/monthly/monthly-matches";
import MonthlySummary from "@features/dashboard/monthly/monthly-summary";
import { Button } from "@ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MonthlyPage() {
  console.log("MonthlyPage component mounted");
  const [dailyMetrics, setDailyMetrics] = useState({});
  const [monthlyTotals, setMonthlyTotals] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const fetchMonthlyData = async () => {
    setLoading(true);
    try {
      // S'assurer que le mois est sur 2 chiffres
      const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
      const year = selectedDate.getFullYear();
      const formattedDate = `${year}-${month}`;

      console.log("📅 Date formatée:", formattedDate);
      console.log("🚀 Fetching monthly summary for:", formattedDate);
      const monthlyResponse = await getData(
        `v1/summaries/monthly/${formattedDate}`
      );
      console.log("📦 Monthly API Response:", monthlyResponse);

      console.log("🚀 Fetching monthly matches for:", formattedDate);
      const matchesResponse = await getData(
        `v1/matches/monthly/${formattedDate}`
      );
      console.log("📦 Matches API Response:", matchesResponse);

      if (monthlyResponse) {
        // Transformer la réponse pour correspondre à la structure attendue
        const monthlyTotals = {
          total_matches: monthlyResponse.total_matches,
          total_energy: monthlyResponse.total_energy,
          total_bft: monthlyResponse.total_bft.amount,
          total_flex: monthlyResponse.total_flex.amount,
          profit: monthlyResponse.profit,
          total_wins: monthlyResponse.results.win,
          total_losses: monthlyResponse.results.loss,
          total_draws: monthlyResponse.results.draw,
          win_rate: monthlyResponse.results.win
            ? (
                (monthlyResponse.results.win / monthlyResponse.total_matches) *
                100
              ).toFixed(1)
            : "0.0",
        };

        console.log("✅ Setting monthly totals:", monthlyTotals);
        setMonthlyTotals(monthlyTotals);
      } else {
        console.warn("⚠️ No monthly response from API");
        setMonthlyTotals({});
      }

      if (matchesResponse?.matches) {
        // Les données sont déjà groupées par jour dans la réponse
        const dailyMetrics = {};

        // Transformer chaque jour pour correspondre à notre format
        Object.entries(matchesResponse.matches).forEach(([date, dayData]) => {
          dailyMetrics[date] = {
            total_matches: dayData.total_matches,
            total_energy: dayData.total_energy,
            total_bft: dayData.total_bft.amount,
            total_flex: dayData.total_flex.amount,
            wins: dayData.results.win,
            losses: dayData.results.loss,
            draws: dayData.results.draw,
            total_energy_cost: dayData.total_energy_cost,
            total_bft_value: dayData.total_bft.value,
            total_flex_value: dayData.total_flex.value,
            total_profit: dayData.profit,
            win_rate: dayData.win_rate,
          };
        });

        console.log("✅ Setting daily metrics:", dailyMetrics);
        setDailyMetrics(dailyMetrics);
      } else {
        console.warn("⚠️ No matches in response");
        setDailyMetrics({});
      }
    } catch (error) {
      console.error("❌ Error fetching monthly data:", error);
      setDailyMetrics({});
      setMonthlyTotals({});
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("🔄 Effect triggered with date:", selectedDate);
    fetchMonthlyData();
  }, [selectedDate]);

  const handlePreviousMonth = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() - 1);
    setSelectedDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(selectedDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setSelectedDate(newDate);
  };

  return (
    <div className="flex flex-col w-full min-h-screen bg-background text-foreground">
      <div className="flex flex-col px-10 lg:px-0 lg:w-[95%] mx-auto">
        <div className="flex items-center justify-between py-4">
          <h1 className="text-6xl font-extrabold text-primary">MONTHLY</h1>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" onClick={handlePreviousMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-xl font-semibold min-w-[200px] text-center">
              {selectedDate.toLocaleDateString("fr-FR", {
                month: "long",
                year: "numeric",
              })}
            </span>
            <Button variant="outline" size="icon" onClick={handleNextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="pl-5">
          <MonthlySummary date={selectedDate} metrics={monthlyTotals} />
        </div>

        <MonthlyMatches
          dailyMetrics={dailyMetrics}
          monthlyTotals={monthlyTotals}
          loading={loading}
        />
      </div>
    </div>
  );
}
