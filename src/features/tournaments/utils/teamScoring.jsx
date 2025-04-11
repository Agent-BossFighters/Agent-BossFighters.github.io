  /**
   * Calcule les scores des équipes en fonction du type de tournoi
   * @param {Array} teams - Liste des équipes
   * @param {Array} matches - Liste des matchs
   * @param {boolean} isShowtimeSurvival - Indique si le tournoi est de type Survival
   * @returns {Array} Liste des équipes triées par scores
   */
  export default function calculateTeamScores(teams, matches, isShowtimeSurvival) {
    console.log("===== CALCULATE TEAM SCORES DEBUG =====");
    console.log(`Teams count: ${teams?.length || 0}, Matches count: ${matches?.length || 0}, isShowtimeSurvival: ${isShowtimeSurvival}`);
    
    // S'assurer que les équipes sont triées par ID pour garantir l'ordre correct
    const sortedTeamsByID = teams ? [...teams].sort((a, b) => a.id - b.id) : [];
    
    if (sortedTeamsByID) {
      console.log("Teams in scoring calculation (sorted by ID):", sortedTeamsByID.map(team => ({
        id: team.id,
        name: team.name,
        team_index: team.team_index,
        is_empty: team.is_empty
      })));
    }
    
    if (matches) {
      console.log("Matches in scoring calculation:", matches.map(match => ({
        id: match.id,
        team_a_id: match.team_a_id,
        team_a_points: match.team_a_points,
        team_b_id: match.team_b_id,
        team_b_points: match.team_b_points,
        round_number: match.round_number
      })));
    }
    
    const scores = {};
    
    sortedTeamsByID?.forEach(team => {
      scores[team.id] = { 
        team, 
        mainPoints: 0,      // Points principaux (temps ou dégâts selon le type)
        bossPoints: 0,      // Points du boss (pour départager)
        matches: 0,
        roundScores: {}     // Stockage des scores par round
      };
    });
    
    // Initialiser les rounds pour tous les scores
    matches?.forEach(match => {
      const roundNum = match.round_number || 1;
      if (match.team_a_id && scores[match.team_a_id]) {
        if (!scores[match.team_a_id].roundScores[roundNum]) {
          scores[match.team_a_id].roundScores[roundNum] = {
            mainPoints: 0,
            bossPoints: 0
          };
        }
      }
    });
    
    // Calculer les scores pour chaque match
    matches?.forEach(match => {
      if (match.team_a_id && scores[match.team_a_id]) {
        const roundNum = match.round_number || 1;
        scores[match.team_a_id].matches += 1;
        
        // Points principaux pour ce round
        scores[match.team_a_id].roundScores[roundNum].mainPoints += match.team_a_points || 0;
        
        // Points du boss pour ce round (dégâts du boss ou vies restantes selon le type)
        scores[match.team_a_id].roundScores[roundNum].bossPoints += match.team_b_points || 0;
        
        // Accumulation de tous les points
        scores[match.team_a_id].mainPoints += match.team_a_points || 0;
        scores[match.team_a_id].bossPoints += match.team_b_points || 0;
        
      } else if (match.team_a_id) {
      }
    });
    
    // Trier selon le type de tournoi
    const sortedScores = Object.values(scores).sort((a, b) => {
      if (isShowtimeSurvival) {
        // Pour Survival: trier par temps de survie (décroissant)
        if (a.mainPoints !== b.mainPoints) return b.mainPoints - a.mainPoints;
        // En cas d'égalité, celui qui a pris le moins de dégâts du boss gagne (trier croissant)
        return a.bossPoints - b.bossPoints;
      } else {
        // Pour Score Counter: trier par score (décroissant)
        if (a.mainPoints !== b.mainPoints) return b.mainPoints - a.mainPoints;
        // En cas d'égalité, celui qui a le plus de vies restantes gagne (trier décroissant)
        return b.bossPoints - a.bossPoints;
      }
    });
    
    console.log("Sorted scores:", sortedScores.map(score => ({
      team_id: score.team.id,
      team_name: score.team.name,
      mainPoints: score.mainPoints,
      bossPoints: score.bossPoints,
      matches: score.matches
    })));
    
    return sortedScores;
  };