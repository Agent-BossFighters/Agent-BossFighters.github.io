import { useState, useCallback } from "react";
import { getData, postData, putData, deleteData } from "@utils/api/data";
import { toast } from "react-hot-toast";

export const useMatchOperations = () => {
  const [matches, setMatches] = useState([]);
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleError = async (error) => {
    if (error.response?.status === 422) {
      const data = await error.response.json();
      if (data.errors) {
        toast.error(data.errors.join(", "));
      } else if (data.error) {
        toast.error(data.error);
      } else {
        toast.error("Une erreur de validation est survenue");
      }
      return null;
    }
    toast.error(error.message || "Une erreur est survenue");
    return null;
  };

  const addMatch = useCallback(
    async (matchData) => {
      setLoading(true);
      try {
        const response = await postData("v1/matches", matchData);
        if (!response) {
          toast.error("Une erreur est survenue lors de l'ajout du match");
          return null;
        }

        // Rafraîchir la liste des matchs après l'ajout
        const formattedDate = selectedDate.toISOString().split("T")[0];
        await fetchMatches(formattedDate);

        toast.success("Match ajouté avec succès");
        return response.match;
      } catch (error) {
        console.error("Erreur lors de l'ajout du match:", error);
        return handleError(error);
      } finally {
        setLoading(false);
      }
    },
    [selectedDate]
  );

  const updateMatch = useCallback(
    async (matchId, matchData) => {
      setLoading(true);
      try {
        const response = await putData(`v1/matches/${matchId}`, matchData);
        if (!response) {
          toast.error(
            "Une erreur est survenue lors de la mise à jour du match"
          );
          return null;
        }

        // Rafraîchir la liste des matchs après la mise à jour
        const formattedDate = selectedDate.toISOString().split("T")[0];
        await fetchMatches(formattedDate);

        toast.success("Match mis à jour avec succès");
        return response.match;
      } catch (error) {
        console.error("Erreur lors de la mise à jour du match:", error);
        return handleError(error);
      } finally {
        setLoading(false);
      }
    },
    [selectedDate]
  );

  const deleteMatch = useCallback(
    async (matchId) => {
      try {
        const response = await deleteData(`v1/matches/${matchId}`);
        if (!response) {
          toast.error(
            "Une erreur est survenue lors de la suppression du match"
          );
          return false;
        }

        // Rafraîchir la liste des matchs après la suppression
        const formattedDate = selectedDate.toISOString().split("T")[0];
        await fetchMatches(formattedDate);

        toast.success("Match supprimé avec succès");
        return true;
      } catch (error) {
        console.error("Erreur lors de la suppression du match:", error);
        return handleError(error);
      }
    },
    [selectedDate]
  );

  const fetchMatches = useCallback(async (date) => {
    setLoading(true);
    try {
      setSelectedDate(new Date(date));

      // Construire l'URL en fonction de la date
      const endpoint = date
        ? `v1/matches/daily_metrics/${date}`
        : "v1/matches/daily_metrics";

      const response = await getData(endpoint);
      if (!response) {
        toast.error("Une erreur est survenue lors du chargement des matchs");
        setMatches([]);
        setMetrics(null);
        return;
      }

      setMatches(response.matches || []);
      setMetrics(response.metrics || null);
    } catch (error) {
      console.error("Erreur lors du chargement des matchs:", error);
      handleError(error);
      setMatches([]);
      setMetrics(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    matches,
    metrics,
    loading,
    selectedDate,
    addMatch,
    updateMatch,
    deleteMatch,
    fetchMatches,
    setMatches,
  };
};
