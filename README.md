![Logo Last Gihub Action Hero](git-assets/last-github-action-hero.svg)

[![CI & CD (Bon cop, bad cop)](https://github.com/ludovic-esperce/last-github-action-hero/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/ludovic-esperce/last-github-action-hero/actions/workflows/ci-cd.yml)

Atelier de découverte de GitHub Actions.


Devenez le true **LAST GITHUB ACTION HERO!** Yippee kikay!

<p align="center">
  <img src="https://raw.githubusercontent.com/ludovic-esperce/last-github-action-hero/refs/heads/main/git-assets/awesome-action.gif" alt="Gif Awesome Action" />
</p>

## Le workflow

Le contenu de ce dépôt vous permettra de prendre en main la composition d'un **workflow CI/CD** (les "Tango & Cash" du DevOps) composé de la façon suivante :
- CI :
  1. récupère le code
  2. effectue la vérification statique (lint)
  3. effectue les tests unitaires
  4. construit le projet
  5. crée un résumé Github

- CD :
  1. déploie l'application Web statique en "Github Page"
  2. crée un résumé Github
  3. envoie un email

Ce workflow s'appliquera à un projet d'appliation statique basée sur :
- React Vanilla en JS
- Vite

## Commandes pour test local

L'éternel `npm` peut être utilisé pour 
```sh
npm i
npm run dev     # démarre un serveur de développement
npm test        # tests unitaires
npm run lint    # vérification statique
```

## La marche à suivre

1. **"FORKEZ"** le dépôt afin d'en faire une copie personnelle
2. Suivez le **BRIEFING** du `README.md` contenu dans le dossier `TODO`
3. Sauvez le projet avec des **GITHUB ACTIONS BADASS**


> [!NOTE]
> **Disclaimer** : le sujet de cet atelier n'a, en aucun cas, été choisi pour encenser une masculinité héroïquement testostéronée des films d'actions de années 80-90.
>
> Tout est né d'un jeu de mot discutable.
