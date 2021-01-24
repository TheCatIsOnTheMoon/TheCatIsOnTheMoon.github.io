
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
