
/**
 * Formate une durée en secondes en : hh:mm:ss
 */
export function formatTimecode(totalSeconds) {
  const s = Math.max(0, Math.floor(totalSeconds));
  const pad = (n) => String(n).padStart(2, '0');
  return `${pad(Math.floor(s / 3600))}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}`;
}

/**
 * Calcule la progression sur 100 en fonction du numéro de l'étape et du nombre d'étapes totales
 */
export function pipelineProgress(done, total) {
  if (total <= 0) {
    return 0;
  }
  return Math.min(100, Math.round((done / total) * 100));
}

/**
 * Retourne un grade en fonction de la progression
 */
export function heroRank(done, total) {
  const p = pipelineProgress(done, total);
  if (p === 100) {
    return 'Last Github Action Hero';
  }

  if (p >= 60) {
    return 'Cascadeur';
  }

  if (p > 0) {
    return 'Figurant';
  }

  return 'Spectateur';
}
