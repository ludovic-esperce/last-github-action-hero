# Mise en pratique

## Marche à suivre

Chaque exercice peut se faire de deux façons :
- en modifiant le repo puis en faisant un `git push`
- en éditant directement les fichiers sur `Github`

## Die Hard, bienvenue à la fête camarade : déclenche le linter

La veille de Noël, tout semble calme... Tout ? C'est sans compter les variables infiltrées (et non utilisées) dans le code.

Le workflow fait appel à un `linter` ou **analyseur statique de code** (capable de détecter les variables inutilisées, certaines erreurs de syntaxe, le non respect de certaines bonnes pratiques ou conventions de nommage).

Sur le projet fourni l'analyseur peut être appelé avec la commande :
```sh
npm run lint
```

Dans le workflow Github, ajoutez à l'endroit indiqué le code suivant (bien faire atteniton à l'indentation) :
```yml
  - id: lint
    name: Die Hard - Vérification statique - Lint
    run: npm run lint
```


Dans `src/App.jsx`, ajoutez `const inutile = 42;` en haut du composant. Observez l'échec du job `lint`. Corrigez avec `npm run lint` en local.

## Terminator, "Sarah Connor?" : casse un test

Un test unitaire a été cassé et la plus brilliante des intelligenceis artificielles, "Govenator", est là pour empêcher le workflow de progresser.
- `test` est au rouge, `build` et `deploy` ne partent pas.

Avec l'aide du retour d'erreur, corrigez le code du fichier `src/lib.test.js`.

## Rambo, derrière les lignes ennemies : déploiement

Pour que le déploiement puisse se faire il faut veiller à activer les `Github Pages` pour le dépôt :

![Activation Github pages](git-assets/activate-github-page.gif)

Une fois l'activation effectuée il est possible d'utiliser l'action [`deploy-pages`](https://github.com/marketplace/actions/deploy-github-pages-site) en effectuant un téléchargement de `l'artefact`.

Un fois le déploiement effectué, vous savez ce qu'il vous reste à faire :

![Gif course après déploiement](git-assets/die-hard-3.gif)

## This is the end : envoi d'email en fin de workflow

L'envoi d'email peut s'effectuer en utilisant un serveru `SMTP`, dans cet exemple est utilisé [`mailgun`](https://app.mailgun.com).

Afin que l'action Github puisse se connecter au serveur il faudra ajouter des `secrets` :

![Ajout de secrets Github](git-assets/add-github-repository-secret.gif)

Il faudra ajouter 3 secrets utilisés par le workflow :
- `MAIL_USERNAME` : nom de l'utilisateur utilisé pour l'envoi d'email
- `MAIL_PASSWORD` : mot de passe utilisé pour l'envoi
- `MAIL_TO` : adresse email du destinataire

## Décoration pour service rendu : badge Github

Github génère automatiquement un [badge d'état de flux de travail](https://docs.github.com/fr/actions/how-tos/monitor-workflows/add-a-status-badge) utilisable.

