![Logo Last Gihub Action Hero](git-assets/last-github-action-hero.svg)

Atelier de découverte de GitHub Actions ! Yippee kikay!

![Gif awesome action](git-assets/awesome-action.gif)

## Pipeline

Le pipeline CI est organisé pour :
1. récupérer le code
2. effectuer la vérification statique (lint)
3. effectuer les tests unitaires
4. construire le projet
5. crée un rapport

Le pipeline CD (qui prend le relais) :
1. déploiement de l'application Web en "Gihub Page"
2. crée un rapport
3. envoie un email

## Lancer en local

```sh
npm i
npm run dev     # site sur http://localhost:5173
npm test        # tests unitaires
npm run lint    # vérification statique
```
