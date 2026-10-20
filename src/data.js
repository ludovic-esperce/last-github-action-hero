export const STAGES = [
  { id: 'build', codename: 'Commando', label: 'Build', text: 'Vite compile le site en fichiers statiques. Sans build, pas d\'action.' },
  { id: 'lint', codename: 'Die Hard', label: 'Vérification statique', text: 'ESLint traque les erreurs avant qu’elles n’explosent en production.' },
  { id: 'test', codename: 'Terminator', label: 'Tests unitaires', text: 'Vitest vérifie chaque fonction. Il ne négocie pas et ne s’arrête pas.' },
  { id: 'deploy', codename: 'Rambo', label: 'Déploiement', text: 'Le site se déploie sur GitHub Pages, seul et sans renfort.' },
  { id: 'report', codename: 'Rapport', label: 'Résumé de fin', text: 'C\'était pas ma guerre... Voilà mon rapport par email, Colonel.' },
];

export const CONCEPTS = [
  { term: 'Workflow', film: 'Le scénario', text: 'Un fichier YAML dans .github/workflows qui décrit tout le pipeline.' },
  { term: 'Runner', film: 'Le plateau', text: 'La machine virtuelle fournie par GitHub qui exécute le job.' },
  { term: 'Trigger', film: 'Action !', text: 'L’événement qui lance le workflow : push, pull request, planning, bouton manuel.' },
  { term: 'Job', film: 'Une scène', text: 'Un groupe d’étapes exécuté sur une même machine. Les jobs peuvent tourner en parallèle.' },
  { term: 'Step', film: 'Un plan', text: 'Une commande ou une action réutilisable, exécutée dans l’ordre à l’intérieur d’un job.' },
];
