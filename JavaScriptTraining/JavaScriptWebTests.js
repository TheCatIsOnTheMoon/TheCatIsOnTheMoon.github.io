
// call by id
const myAnchor = document.getElementById('id');

// call by class
const contents = document.getElementsByClassName('class');
const firstContent = contents[0];

//call by tag
const articles = document.getElementsByTagName('article');
const thirdArticle = articles[2];

//complexe research in the DOM
const elt = document.querySelector("#myId p.article > a");

// ocr exercise 2 ======================================
const newElt = document.createElement('p');
let eltMain = document.getElementById('main');

eltMain.appendChild(newElt);

newElt.innerHTML = 'Mon <strong>grand</strong> contenu';
newElt.classList.add('important');
newElt.style.color = 'green';

// ocr exercice 3 : Ecouter des evenements ==========================

const parent_article = document.getElementById('parent');
const child_a = document.getElementById('child');
const parent_count = document.getElementById('parent-count');
const child_count = document.getElementById('child-count');
let parent_score = 0;
let child_score = 0;

//======================

function addScore(label) {
  switch (label) {
    case 'parent':
      parent_score++;
      parent_count.innerHTML = parent_score;
    break
    case 'child':
      child_score++;
      child_count.innerHTML = child_score;
    break
}}

//==================

function main () {
parent_article.addEventListener('click', function() {
  addScore('parent');
});

child_a.addEventListener('click', function(event) {
  event.stopPropagation();
  addScore('child');
});
}

main();

// =====================================================================
