// Testing variables =========================================================

let numberOfCats = 3; //declare variable
numberOfCats = 4; // modify variable

let numberOfDogs = 2; //new variable

numberOfCats -= 2; // -
numberOfCats += 2; // +
numberOfCats++; // +1
numberOfCats--; // -1

numberOfDogs *= 4; // *
numberOfDogs /= 2; // /

let numberOfAnimals = numberOfCats + numberOfDogs; // variable numberOfCats + variable numberOfDogs

console.log("Number of animals: " + numberOfAnimals);

const numberOfTailsPerAnimal = 1; // constant, never change, can't be redefine
console.log("Number of tails per animal: " + numberOfTailsPerAnimal);

// boolean ======================================================================

let doILoveCats = true;

// Class =====================================================================

class Cat {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age
    }
}

let salem = new Cat("Salem Saberhagen", "Black", 666);
let freyja = new Cat("Frëyja", "Tabby", 10);

// Array =====================================================================

let bestsCats = [salem, freyja, "Luna"];
let howManyBestsCats = bestsCats.length;

bestsCats.push("Artemis");
bestsCats.unshift("Artemis");
bestsCats.pop();

console.log("how many bests cats: " + howManyBestsCats);

// if/else with boolean ================================================
let lunaIsAtHome = false;

if (lunaIsAtHome) {
    console.log("Luna is at home");
} else {
    console.log("Luna is not at home");
}

// if/else ( < <= == >= > != )===========================================
const numberOfCatLitter = 2;

if (numberOfCatLitter == numberOfCats) {
    console.log("You have just the right amount of litter box");
} else if (numberOfCatLitter > numberOfCats) {
    console.log("You still have room for more cats");
} else {
    console.log("You do not have enough litter box");
}

// ================================================

// =================================
if (minutesWatched === duration) {
    this.hasBeenWatched = true;
} else if (minutesWatched < duration) {
    this.hasBeenWatched = false;
}
// =================================

// ======================

if (minutesWatched === 0) {
    this.watchedText = 'Not yet watched';
    this.continueWatching = false;
} else if (minutesWatched > 0 && minutesWatched < duration) {
    this.watchedText = 'Watching';
    this.continueWatching = true;
} else if (minutesWatched === duration) {
    this.watchedText = 'Watched';
    this.continueWatching = false;
}

// Exemple instruvtion Switch======================

switch (firstUser.accountLevel) {
    case 'normal':
        console.log('You have a normal account!');
        break;
    case 'premium':
        console.log('You have a premium account!');
        break;
    case 'mega-premium':
        console.log('You have a mega premium account!');
        break;
    default:
        console.log('Unknown account type!');
}

// Boucle for ================================================================

const numberOfPassengers = 10;

for (let i = 0; i < numberOfPassengers; i++) {
    console.log("Passager embarqué !");
}

console.log("Tous les passagers sont embarqués !");

// Boucle for ... in =========================================================

const passengers = [
    "Will Alexander",
    "Sarah Kate'",
    "Audrey Simon",
    "Tao Perkington"
]

for (let i in passengers) {
    console.log("Embarquement du passager " + passengers[i]);
}

// Boucle for ... of ========================================================

const passengers = [
    "Will Alexander",
    "Sarah Kate",
    "Audrey Simon",
    "Tao Perkington"
]

for (let passenger of passengers) {
    console.log("Embarquement du passager " + passenger);
}

// ou =========================

const passengers = [{
        name: "Will Alexander",
        ticketNumber: 209542
    },
    {
        name: "Sarah Kate",
        ticketNumber: 169336
    },
    {
        name: "Audrey Simon",
        ticketNumber: 779042
    },
    {
        name: "Tao Perkington",
        ticketNumber: 703911
    }
]

for (let passenger of passengers) {
    console.log('Embarquement du passager ' + passenger.name + ' avec le ticket numéro ' + passenger.ticketNumber);
}

// exo ======================================================================

// parametres et valeurs de retour ======================

const calculateAverageRating = (ratings) => {

  if(ratings.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let rating of ratings) {
    sum += rating;
  }

  return sum / ratings.length;
}

// ======================
