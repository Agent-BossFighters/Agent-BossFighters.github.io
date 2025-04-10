import React, { useState } from "react";
import { useAuth } from "@context/auth.context";
import { useNavigate } from "react-router-dom";
import generateTournamentMatches from "../utils/generateMatchesTournament";
import calculateTeamScores from "../utils/teamScoring";
import { formatTimeOrScore } from "../utils/timeFormatters";
import {
  initializeAllScores,
  updateAllScoreValue,
  saveAllScores,
} from "../utils/scoreHandlers";
import { groupMatchesByRound, updateMatchStatus } from "../utils/matchUtils";
import { isCreatorOfTournament } from "../utils/tournamentUtils";
import { findUserTeam, isTeamsFull } from "../utils/teamUtils";
import {
  canJoinTournament,
  isTournamentInProgress,
  isTournamentOpen,
  isRegistrationOpen,
  canStartTournament as canStartTournamentCheck,
  canCompleteTournament as canCompleteTournamentCheck,
} from "../utils/tournamentStatus";
import useTournamentControls from "../hooks/useTournamentControls";
import TeamsList from "./bracket/teamsList";
import TeamRanking from "./bracket/teamRanking";
import RoundsList from "./bracket/roundsList";
import EmptyTournamentMessage from "./bracket/emptyTournamentMessage";
import JoinTournamentModal from "./JoinTournamentModal";
import { Button } from "@shared/ui/button";
import { updateArrow } from "@img";
import {
  Share,
  Save,
  X,
  UserPlus,
  Play,
  CheckCircle,
  Edit,
  Trash2,
} from "lucide-react";
import toast from "react-hot-toast";
import TournamentEditModal from "../../../pages/dashboard/tournaments/tournament-edit.page";

const TournamentBracketShowtime = ({
  tournament,
  teams,
  matches,
  onMatchUpdated,
  onTournamentDeleted,
}) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [generatingMatches, setGeneratingMatches] = useState(false);
  const [editingMatch, setEditingMatch] = useState(null);
  const [scores, setScores] = useState({
    team_a_points: 0,
    team_b_points: 0,
    team_a_time: "00:00",
  });
  const [saving, setSaving] = useState(false);
  const [isEditingAllScores, setIsEditingAllScores] = useState(false);
  const [allScores, setAllScores] = useState({});
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const isCreator = user && tournament?.creator_id === user.id;
  const userTeam = findUserTeam(teams, user);
  const actualTeams =
    teams?.filter((team) => {
      const hasMembers = (team.team_members || team.players || []).length > 0;
      const notEmptySlot = !team.is_empty_slot && !team.is_empty;
      return hasMembers || notEmptySlot;
    }) || [];
  const tournamentIsFull = isTeamsFull(actualTeams, tournament);

  // Vérification manuelle des conditions
  const isTournamentOpenStatus = isTournamentOpen(tournament);
  const isRegistrationOpenStatus = isRegistrationOpen(tournament);
  const userTeamStatus = !userTeam;
  const tournamentFullStatus = !tournamentIsFull;
  const creatorStatus = !isCreator;

  // Vérification manuelle combinée
  const manualCanJoin =
    isTournamentOpenStatus &&
    isRegistrationOpenStatus &&
    userTeamStatus &&
    tournamentFullStatus &&
    creatorStatus;

  // Utiliser la vérification manuelle au lieu de la fonction
  const canJoinThisTournament = manualCanJoin;

  // Vérifier si l'utilisateur peut démarrer ou terminer le tournoi
  const canStartTournament =
    isCreator && canStartTournamentCheck(tournament, isCreator);
  const canCompleteTournament =
    isCreator && canCompleteTournamentCheck(tournament, isCreator);

  // Utiliser le hook de contrôle de tournoi uniquement si l'utilisateur est le créateur
  const {
    startingTournament,
    deletingTournament,
    startTournament,
    completeTournament,
    deleteTournament,
    editTournament,
  } = useTournamentControls(
    tournament,
    teams,
    matches,
    () => {
      onMatchUpdated();
      toast.success("Tournament updated successfully!");
    },
    () => {},
    onMatchUpdated,
    isCreator,
    onTournamentDeleted
  );

  const groupedMatches = groupMatchesByRound(matches);

  // Obtenir le nombre de rounds
  const roundNumbers = Object.keys(groupedMatches).map((r) => parseInt(r));
  const numberOfRounds =
    roundNumbers.length > 0 ? Math.max(...roundNumbers) : 1;

  // Déterminer le type de tournoi Showtime (0 = Survival, 1 = Score Counter)
  const tournamentType = parseInt(tournament?.tournament_type);
  const isShowtimeSurvival =
    tournamentType === 0 || tournament?.tournament_type === "showtime_survival";
  const isShowtimeScore =
    tournamentType === 1 || tournament?.tournament_type === "showtime_score";

  const teamScores = calculateTeamScores(teams, matches, isShowtimeSurvival);

  const handleGenerateMatches = async () => {
    await generateTournamentMatches(
      tournament,
      teams,
      matches,
      onMatchUpdated,
      isCreator,
      setGeneratingMatches
    );
  };

  const handleCompleteMatch = async (match) => {
    await updateMatchStatus(match, tournament, "completed", onMatchUpdated);
  };

  const handleStartMatch = async (match) => {
    await updateMatchStatus(match, tournament, "in_progress", onMatchUpdated);
  };

  const handleUpdateResult = () => {
    const initialScores = initializeAllScores(
      groupedMatches,
      isShowtimeSurvival,
      formatTimeOrScore
    );
    setAllScores(initialScores);
    setIsEditingAllScores(true);
  };

  const handleAllScoreChange = (matchId, team, value) => {
    updateAllScoreValue(matchId, team, value, setAllScores);
  };

  const handleSaveAllScores = async () => {
    // Utiliser la fonction utilitaire pour sauvegarder tous les scores
    await saveAllScores(
      allScores,
      matches,
      tournament,
      isShowtimeSurvival,
      onMatchUpdated,
      setIsEditingAllScores,
      setSaving
    );
  };

  const handleCancelAllScoresEdit = () => {
    setIsEditingAllScores(false);
  };

  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    toast.success("Link copied to clipboard!");
  };

  const handleEditTournament = () => {
    if (!isCreator) {
      toast.error("You are not authorized to modify this tournament.");
      return;
    }
    setIsEditModalOpen(true);
  };

  const handleTournamentUpdated = (updatedTournament) => {
    onMatchUpdated();
  };

  return (
    <div className="tournament-bracket">
      {/* En-tête du tournoi */}
      <div className="bg-gray-800 px-4 pt-4 pb-2 mb-2 rounded flex flex-col items-center justify-between">
        <div className="rounded w-full flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">
            {tournament?.name}
          </h1>
          <div className="flex items-center gap-2">
            {/* Bouton pour rejoindre le tournoi si l'utilisateur peut le faire */}
            {canJoinThisTournament && (
              <Button
                onClick={() => setJoinModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-black"
              >
                <UserPlus className="mr-2 h-4 w-4" />
                JOIN TOURNAMENT
              </Button>
            )}

            {/* Boutons d'administration uniquement pour le créateur */}
            {isCreator && (
              <>
                {canStartTournament && (
                  <Button
                    onClick={startTournament}
                    className="bg-green-600 hover:bg-green-700 text-white"
                    disabled={startingTournament}
                  >
                    <Play className="mr-2 h-4 w-4" />
                    {startingTournament ? "STARTING..." : "START TOURNAMENT"}
                  </Button>
                )}

                {canCompleteTournament && (
                  <Button
                    onClick={completeTournament}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    <CheckCircle className="mr-2 h-4 w-4" />
                    END TOURNAMENT
                  </Button>
                )}

                <Button
                  onClick={handleEditTournament}
                  className="bg-amber-600 hover:bg-amber-700 text-white"
                >
                  <Edit className="mr-2 h-4 w-4" />
                  EDIT
                </Button>

                <Button
                  onClick={deleteTournament}
                  className="bg-red-600 hover:bg-red-700 text-white"
                  disabled={deletingTournament}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  {deletingTournament ? "DELETING..." : "DELETE"}
                </Button>
              </>
            )}
          </div>
        </div>
        <div className="w-full mt-2 rounded flex items-center justify-between">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <div className="text-gray-400 mr-2">TYPE</div>
                <div className="text-white">
                  <div className="text-white">SHOWTIME</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="text-gray-400 mr-2">MODE</div>
                <div className="text-white">
                  {isShowtimeSurvival ? "SURVIVAL" : "SCORE"}
                </div>
              </div>

              <div className="flex items-center">
                <div className="text-gray-400 mr-2">RULES</div>
                <div className="text-white">
                  Get the best {isShowtimeSurvival ? "time" : "score"} possible
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* Info slots */}
            <div className="text-sm text-gray-300">
              REMAINING SLOTS : {tournament.max_teams - (teams?.length || 0)}/
              {tournament.max_teams}
            </div>
            <div className="text-sm text-gray-300">
              PLAYER(S) PER TEAM : {tournament.players_per_team || 4}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4">
        {/* Teams and Rounds in the same column */}
        <div className="col-span-9">
          {/* Teams list first */}
          <div className="mb-4">
            <TeamsList teams={teams} user={user} tournament={tournament} />
          </div>

          {/* Rounds list below */}
          <div>
            {matches?.length > 0 ? (
              <RoundsList
                tournament={tournament}
                teams={teams}
                numberOfRounds={numberOfRounds}
                groupedMatches={groupedMatches}
                isCreator={isCreator}
                generatingMatches={generatingMatches}
                editingMatch={editingMatch}
                isShowtimeSurvival={isShowtimeSurvival}
                scores={scores}
                saving={saving}
                isEditingAllScores={isEditingAllScores}
                allScores={allScores}
                onGenerateMatches={handleGenerateMatches}
                onStartMatch={handleStartMatch}
                onCompleteMatch={handleCompleteMatch}
                onAllScoreChange={handleAllScoreChange}
              />
            ) : (
              <EmptyTournamentMessage
                isCreator={isCreator}
                tournament={tournament}
                generatingMatches={generatingMatches}
                onGenerateMatches={handleGenerateMatches}
              />
            )}
          </div>
        </div>

        {/* Ranking */}
        <div className="col-span-3 mt-4 ml-4">
          <TeamRanking
            tournament={tournament}
            teamScores={teamScores}
            isShowtimeSurvival={isShowtimeSurvival}
          />
        </div>
      </div>

      {/* Boutons d'action */}
      <div className="flex justify-between mt-6">
        {isEditingAllScores ? (
          <div className="flex gap-3">
            <Button
              onClick={handleCancelAllScoresEdit}
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3"
              disabled={saving}
            >
              <X size={16} className="mr-2" />
              CANCEL
            </Button>
            <Button
              onClick={handleSaveAllScores}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3"
              disabled={saving}
            >
              <Save size={16} className="mr-2" />
              {saving ? "SAVING..." : "SAVE ALL SCORES"}
            </Button>
          </div>
        ) : (
          <Button
            onClick={handleUpdateResult}
            className="bg-primary hover:bg-primary/90 text-black px-6 py-3"
          >
            <img src={updateArrow} alt="updateArrow" className="w-8 h-8 mr-2" />
            UPDATE RESULT
          </Button>
        )}

        <div className="flex gap-3">
          <Button
            onClick={handleShare}
            className="bg-primary hover:bg-primary/90 text-black px-6 py-3"
            disabled={isEditingAllScores}
          >
            <Share size={16} className="mr-2" />
            SHARE
          </Button>
        </div>
      </div>

      {/* Modal pour rejoindre le tournoi */}
      {joinModalOpen && (
        <JoinTournamentModal
          tournament={tournament}
          isOpen={joinModalOpen}
          onClose={() => setJoinModalOpen(false)}
        />
      )}

      {isCreator && isEditModalOpen && (
        <TournamentEditModal
          tournament={tournament}
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          onTournamentUpdated={handleTournamentUpdated}
        />
      )}
    </div>
  );
};

export default TournamentBracketShowtime;
