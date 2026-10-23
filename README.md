# Sébastien Ramirez — Portfolio

Mon site vitrine présente mon parcours, mes compétences et une sélection de cinq projets réalisés à l'EFREI. Je recherche une **alternance en informatique de deux ans à partir de septembre 2027**, en Île-de-France.

**[Consulter le portfolio](https://sebastienrmz.github.io/portfolio/)** · [LinkedIn](https://www.linkedin.com/in/s%C3%A9bastien-ramirez-746999329/)

## Contenu

- Présentation et informations sur l'alternance recherchée.
- Projets en C, Python, SQL et développement web, avec les liens vers leurs dépôts.
- Formation à l'EFREI, semestre à Toronto et expériences professionnelles.
- Compétences, langues et coordonnées.

Les détails des projets précisent les contributions au travail d’équipe.

## Ouvrir le site localement

Télécharger le dépôt et ouvrir `index.html` dans un navigateur. Aucune installation ni compilation n'est nécessaire.

On peut aussi lancer un serveur local depuis le dossier du projet :

```sh
python -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Organisation

```text
portfolio/
├── index.html
├── styles.css
├── script.js
├── assets/
│   └── favicon.svg
├── .nojekyll
└── README.md
```

- `index.html` contient les textes, les liens et la structure de la page.
- `styles.css` gère la présentation, l'affichage mobile et l'impression.
- `script.js` ajoute le menu mobile et la copie de l'adresse e-mail.
- `.nojekyll` indique à GitHub Pages de servir directement les fichiers statiques.

Le site est écrit en **HTML, CSS et JavaScript, sans framework**. La navigation et les détails des projets restent accessibles sans JavaScript. Les liens e-mail ouvrent le logiciel de messagerie ; il n'y a pas de formulaire d'envoi ni de suivi des visiteurs dans le code.

## Modifier et publier

Modifier les fichiers directement, puis enregistrer les changements sur la branche `main`. GitHub Pages publie la racine de cette branche. Les modifications peuvent prendre quelques minutes à apparaître.
