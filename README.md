[![HTML](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)



# Application Web de Location Immobilière

## Description
Application web développée avec React JS pour la location immobilière.  
Cette application permet de consulter des annonces de logements, visualiser les détails, et naviguer entre les pages via React Router.

## Fonctionnalités principales
- Affichage de listes de logements avec cartes interactives 
- Pages dynamiques pour chaque logement avec informations détaillées  
- Composants modulaires et réutilisables (bannières, cartes, carrousels)  
- Gestion des erreurs avec une page 404 personnalisée  
- Responsive design optimisé pour desktop et mobile

## Technologies utilisées
- React JS (composants fonctionnels)  
- React Router pour la navigation  
- CSS avec Sass pour la gestion des styles  
- Données JSON statiques pour les annonces 

## Installation
1. Cloner le dépôt :  
- git clone https://github.com/ppxt-code/kasa.git
- cd kasa

2. Installer les dépendances :  
npm install

3. Lancer l'application en mode développement :  
npm run dev

## Structure du projet
- `/src/components` : Composants React (Footer, Header, Card, Collapse, SlideShow..)  
- `/src/pages` : Pages principales (Apropos, Error, Home,Logement) 
- `/src/scss` : Fichiers Sass 
- `/src/App.js` : Routeur principal  
- `/public` : Données JSON   

## Routes 
- "/"                 redirige vers la page Home
- "/apropos"          redirige vers la page Apropos
- "/logement/id"      redirige vers la page du Logement indéxé par id
- "/error" ou autre   redirige vers la page Error
