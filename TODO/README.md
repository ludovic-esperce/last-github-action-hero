# Mise en pratique

## Marche à suivre

Chaque exercice peut se faire de deux façons :
- en modifiant le repo puis en faisant un `git push`
- en éditant directement les fichiers sur `Github`

## Partie 1 : intégration continue

### Die Hard, bienvenue à la fête camarade : déclenche le linter

La veille de Noël, tout semble calme... Tout ? C'est sans compter les variables infiltrées (et non utilisées) dans le code.

Le workflow fait appel à un `linter` ou **analyseur statique de code** (capable de détecter les variables inutilisées, certaines erreurs de syntaxe, le non respect de certaines bonnes pratiques ou conventions de nommage).

Sur le projet fourni l'analyseur peut être appelé avec la commande :
```sh
npm run lint
```

Dans le workflow Github, ajoutez à l'endroit indiqué l'étape suivante (bien faire atteniton à l'indentation) :
```yml
  - id: lint
    name: Die Hard - Vérification statique - Lint
    run: npm run lint
```

La commande `run` d'une étape permet de déclencher un commande dans le `shell` du `runner` (la machine virtuelle Ubuntu).

Une fois l'étape ajoutée, étudiez le résumé du workflow pour corriger le code.

Vous pourrez accéder au résumé comme suit :

> [!IMPORTANT]
> Si une étape du workflow échoue un **flag d'échec** passe à `true`.
>
> Par la suite vous verrez qu'il est possible de mettre une condition `if:` sur les étapes.
>
> Si aucun `if:` est explicitement indiqué le workflow se comporte comme si il y avait `if: success()`
>
> Explicitement, cette étape de `lint` serait :
> ```yml
>  - id: lint
>    if: success() 
>    name: Die Hard - Vérification statique - Lint
>    run: npm run lint
> ```

### Terminator, "Sarah Connor?" : casse un test

Un test unitaire a été cassé et la plus brilliante des intelligences artificielles, "Govenator", est là pour empêcher le workflow de progresser.

Les tests unitaires peuvent être lancés en local en utilisant la commande :
```sh
npm test
```

Dans le workflow Github, ajoutez à l'endroit indiqué l'étape suivante :
```yml
  - id: test
    name: Terminator - Tests unitaires
    if: ${{ !cancelled() }}
    run: npm test
```

always()
      env: # Déclaration de plusieurs variables réutilisables
        LINT: ${{ steps.lint.outcome }}
        TEST: ${{ steps.test.outcome }}
        BUILD: ${{ steps.build.outcome }}
        ARTIFACT_UPLOAD: ${{ steps.artifact.outcome }}
      run: |
        {
          echo "## Rapport : CI"
          echo ""
          echo "| Étape | Résultat |"
          echo "|---|---|"
          echo "| Vérification statique | $LINT |"
          echo "| Tests unitaires | $TEST |"
          echo "| Build | $BUILD |"
          echo "| Upload artifact | $ARTIFACT_UPLOAD |"
          echo ""
          echo "_Réalisé par ${{ github.actor }} · commit \`${GITHUB_SHA::7}\`_"
        } >> "$GITHUB_STEP_SUMMARY"
Avec l'aide du retour d'erreur, corrigez le code du fichier `src/lib.test.js`.

### Rapport 1ère mission

Il est possible d'ajouter des rapports qui seront intégrés aux résumé Github.

Ceci peut-être fait en écrivant du **Markdown** dans la variable `$GITHUB_STEP_SUMMARY` dans un `run` du runner.

```yml
- name: Rapport CI
  if: always()
  env: # Déclaration de plusieurs variables réutilisables dans le rapport
    LINT: ${{ steps.lint.outcome }}
    TEST: ${{ steps.test.outcome }}
    BUILD: ${{ steps.build.outcome }}
    ARTIFACT_UPLOAD: ${{ steps.artifact.outcome }}
  run: |
    {
      echo "## Rapport : CI"
      echo ""
      echo "| Étape | Résultat |"
      echo "|---|---|"
      echo "| Vérification statique | $LINT |"
      echo "| Tests unitaires | $TEST |"
      echo "| Build | $BUILD |"
      echo "| Upload artifact | $ARTIFACT_UPLOAD |"
      echo ""
      echo "_Réalisé par ${{ github.actor }} · commit \`${GITHUB_SHA::7}\`_"
    } >> "$GITHUB_STEP_SUMMARY"
```

---

## Partie 2 : déploiement continu

### Rambo, derrière les lignes ennemies : déploiement

Pour que le déploiement puisse se faire il faut veiller à activer les `Github Pages` pour le dépôt :

![Activation Github pages](git-assets/activate-github-page.gif)

Une fois l'activation effectuée il est possible d'utiliser l'action [`deploy-pages`](https://github.com/marketplace/actions/deploy-github-pages-site) en effectuant un téléchargement de `l'artefact`.

Un fois le déploiement effectué, vous savez ce qu'il vous reste à faire :

![Gif course après déploiement](git-assets/die-hard-3.gif)

### This is the end : envoi d'email en fin de workflow

L'envoi d'email peut s'effectuer en utilisant un serveru `SMTP`, dans cet exemple est utilisé [`mailgun`](https://app.mailgun.com).

Afin que l'action Github puisse se connecter au serveur il faudra ajouter des `secrets` :

![Ajout de secrets Github](git-assets/add-github-repository-secret.gif)

Il faudra ajouter 3 secrets utilisés par le workflow :
- `MAIL_USERNAME` : nom de l'utilisateur utilisé pour l'envoi d'email
- `MAIL_PASSWORD` : mot de passe utilisé pour l'envoi
- `MAIL_TO` : adresse email du destinataire

### Rapport 2ème mission

### Décoration pour service rendu : badge Github

Github génère automatiquement un [badge d'état de flux de travail](https://docs.github.com/fr/actions/how-tos/monitor-workflows/add-a-status-badge) utilisable.

