# Mise en pratique

Chaque exercice peut se faire de deux façons :
- en modifiant le repo puis en faisant un `git push`
- en éditant directement les fichiers sur  `Github`

## 0. Mise en route
1. Forkez le repo.
2. Onglet **Actions** : cliquez sur « I understand my workflows, go ahead and enable them ».
3. **Settings > Pages > Source** : choisissez **GitHub Actions**.
4. Onglet Actions > « Last GitHub Action Hero » > **Run workflow**.
5. Quand tout est vert, ouvrez le lien affiché dans le job `deploy`.

## 1. Terminator : casse un test
Dans `src/lib.test.js`, changez une valeur attendue (par exemple `'Cascadeur'` en `'Cascadeuse'`), poussez, et observez : `test` passe au rouge, `build` et `deploy` ne partent pas. Corrigez et poussez à nouveau.

## 2. Die Hard : déclenche le linter
Dans `src/App.jsx`, ajoutez `const inutile = 42;` en haut du composant. Observez l'échec du job `lint`. Corrigez avec `npm run lint` en local.

## 3. Générique : à vos noms
Dans `.github/workflows/ci.yml`, job `credits`, ajoutez une ligne `echo "_Merci à ..._"`. Ouvrez la page du run : votre générique est affiché en bas.

## 4. Predator : un test de plus
Dans `src/lib.js`, ajoutez une fonction (par exemple `shout(name)` qui renvoie le nom en majuscules suivi de `!`), écrivez son test dans `src/lib.test.js`, poussez, et regardez le site se redéployer.

## Bonus
- **Matrix** : testez Node 20 et 22 avec `strategy.matrix.node-version` dans le job `test`.
- **Badge** : ajoutez le badge de statut du workflow dans ce README.
- **Pull request** : ouvrez une PR vers votre `main`. Le déploiement ne se lance pas, mais lint et tests oui.
- **Audit** : ajoutez une étape `npm audit --audit-level=high` avec `continue-on-error: true`.
- **Commentaire de PR** : poster le générique avec `actions/github-script`.
