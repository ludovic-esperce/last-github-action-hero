# Mise en pratique

## Marche à suivre

Chaque exercice peut se faire de deux façons :
- en modifiant le repo puis en faisant un `git push`
- en éditant directement les fichiers sur  `Github`

## 1. Terminator : casse un test

Dans `src/lib.test.js`, changez une valeur attendue (par exemple `'Cascadeur'` en `'Cascadeuse'`), poussez, et observez : `test` passe au rouge, `build` et `deploy` ne partent pas. Corrigez et poussez à nouveau.

## 2. Die Hard : déclenche le linter

Dans `src/App.jsx`, ajoutez `const inutile = 42;` en haut du composant. Observez l'échec du job `lint`. Corrigez avec `npm run lint` en local.

## 3. Predator : un test de plus

Dans `src/lib.js`, ajoutez une fonction (par exemple `shout(name)` qui renvoie le nom en majuscules suivi de `!`), écrivez son test dans `src/lib.test.js`, poussez, et regardez le site se redéployer.

## 4. Envoie d'email en fin de workflow

L'envoi d'email peut s'effectuer en utilisant un serveru `SMTP`, dans cet exemple est utilisé [`mailgun`](https://app.mailgun.com).

Afin que l'action Github puisse se connecter au serveur il faudra ajouter des `secrets` :

![Ajout de secrets Github](git-assets/toto/add-github-repository-secret.gif)

Il faudra ajouter 3 secrets utilisés par le workflow :
- `MAIL_USERNAME` : nom de l'utilisateur utilisé pour l'envoi d'email
- `MAIL_PASSWORD` : mot de passe utilisé pour l'envoi
- `MAIL_TO` : adresse email du destinataire

## Déploiement

Pour que le déploiement puisse se faire il faut veiller à activer les `Github Pages` pour le dépôt :

![Activation Github pages](git-assets/todo/activate-github-page.gif)

Une fois l'activation effectuée il est possible d'utiliser l'action [`deploy-pages`](https://github.com/marketplace/actions/deploy-github-pages-site) en effectuant un téléchargement de `l'artefact`.

Un fois le déploiement effectué, vous savez ce qu'il vous reste à faire :

![Gif course après déploiement](git-assets/die-hard-3.gif)
