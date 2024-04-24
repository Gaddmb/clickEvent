// Le DOM (Document Object Model) représente les éléments d'une page web sous forme d'objets JavaScript,
//  permettant leur manipulation et la création d'interactions dynamiques.

//** SELECTEUR **

// document.querySelector('') sélectionne le premier élément HTML correspondant au sélecteur CSS spécifié. c'est une fonction une methode deja coder
// RAPPEL l'element a droite donne sa valeurs a celui qui est a gauche
const title = document.querySelector("h4");

// lorsque je console.log ma constante title cela me fait pointer dans ma console la balise h4 car j'ai enferme ma logique dans ma variable
console.log(title);

// en faisant ( ci-dessous ) je n'ai pas besoin de réutiliser la fonction document.querySelector()
title.style.background = "blue";

//** Click event */
// RAPPEL important lorsque je fais une variable toujours la log
// lorsque je veux selectionner une classe je dois mettre le .
const questionContainer = document.querySelector(".click-event");

console.log(questionContainer);

// en JS ne prend pas les tiré donc je fais une kamelCase
questionContainer.style.borderRadius = "150px";

// addEventListener() écoute un événement sur un élément et exécute une fonction lorsque cet événement se produit. a noter qu'il a beaucoup d'evenement (ex click, mousse; subtmit etc )
// Quand je clique sur 'questionContainer', une fonction est déclenchée.
// lorsque je clique sur questionContainer cela va declancher l'evenement console.log

// La propriété classList permet d'accéder à la liste des classes d'un élément HTML.
// Elle fournit des méthodes pour manipuler ces classes.
// La fonction add permet d'ajouter une classe à un élément HTML.
// La fonction remove permet de supprimer une classe d'un élément HTML.
// La fonction toggle permet de basculer l'état d'une classe sur un élément HTML.
// la methode getElementById et très puissant car il va directment chercher l'id sur le DOM
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector(".response");

console.log(btn1, btn2);
console.log(response);

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.classList.add("true-response");
  response.classList.remove("false-response");
  console.log("click");
});
btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.classList.add("false-response");
  response.classList.remove("true-response");
  console.log("click");
});

// a retenir toujours declarer sa variable en haut sa logique
