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

// exo function ======================================================================

// parametres et valeurs de retour ======================

const calculateAverageRating = (ratings) => {

    if (ratings.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let rating of ratings) {
        sum += rating;
    }

    return sum / ratings.length;
}

// exemple frecodecamp : Call the processArg function with an argument of 7 and assign its return value to the variable processed.======================

var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

processed = processArg(7);

//exemple : méthodes d'intances================================================

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    showBalance() {
        console.log("Solde: " + this.balance + " EUR");
    }

    deposit(amount) {
        console.log("Dépôt de " + amount + " EUR");
        this.balance += amount;
        this.showBalance();
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Retrait refusé !");
        } else {
            console.log("Retrait de " + amount + " EUR");
            this.balance -= amount;
            this.showBalance();
        }
    }
}

//==================================================

// exo ======================

class Show {
    constructor(title, numberOfSeasons) {
        this.title = title;
        this.numberOfSeasons = numberOfSeasons;
        this.ratings = [];
        this.averageRating = 0;
    }

    addRating(rating) {
        this.ratings.push(rating);
        let sum = 0;
        for (let rating of this.ratings) {
            sum += rating;
        }

        this.averageRating = sum / this.ratings.length;
    }
}

// exemple de refactorisation ======================

// code original :
const tauTitleText = tau.title;
const tauSeasonsText = tau.numberOfSeasons + ' seasons';
const tauEpisodesText = tau.episodesPerSeason + ' episodes per season';
const tauComponent = {
    titleText: tauTitleText,
    seasonsText: tauSeasonsText,
    episodesText: tauEpisodesText
};

const meldrumTitleText = meldrum.title;
const meldrumSeasonsText = meldrum.numberOfSeasons + ' seasons';
const meldrumEpisodesText = meldrum.episodesPerSeason + ' episodes per season';
const meldrumComponent = {
    titleText: meldrumTitleText,
    seasonsText: meldrumSeasonsText,
    episodesText: meldrumEpisodesText
};

const claraTitleText = clara.title;
const claraSeasonsText = clara.numberOfSeasons + ' seasons';
const claraEpisodesText = clara.episodesPerSeason + ' episodes per season';
const claraComponent = {
    titleText: claraTitleText,
    seasonsText: claraSeasonsText,
    episodesText: claraEpisodesText
};

const showComponents = [tauComponent, meldrumComponent, claraComponent];

// code refactorisé :======================

const generateComponent = (show) => {
    const titleText = show.title;
    const seasonsText = show.numberOfSeasons + ' seasons';
    const episodesText = show.episodesPerSeason + ' episodes per season';
    return {
        titleText,
        seasonsText,
        episodesText
    };
}

const tauComponent = generateComponent(tau);
const meldrumComponent = generateComponent(meldrum);
const claraComponent = generateComponent(clara);

const showComponents = [tauComponent, meldrumComponent, claraComponent];

// autre exemple de refactorisation ======================

// avant

const printStringStats = (stringToTest) => {
    const wordArray = stringToTest.split(" ");
    const wordCount = wordArray.length;
    let letterCount = 0;
    for (let word of wordArray) {
        word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        letterCount += word.length;
    }
    const averageWordLength = parseFloat((letterCount / wordCount).toFixed(2));
    const stringStats = {
        wordCount: wordCount,
        letterCount: letterCount,
        averageWordLength: averageWordLength
    };
    console.log(stringStats);
}

// apres et avec des commentaires =============================================

const getWordCount = (stringToTest) => {
    const wordArray = stringToTest.split(' ');
    return wordArray.length;
}

const getLetterCount = (stringToTest) => {
    const wordArray = stringToTest.split(' ');
    let totalLetters = 0;
    for (let word of wordArray) {
        // retire la ponctuation pour ne compter que les lettres
        word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        totalLetters += word.length;
    }
    return totalLetters;
}

/*
 ** renvoie la longueur moyenne des mots
 ** arrondie à deux chiffres après la virgule
 */
const getAverageWordLength = (stringToTest) => {
    return parseFloat((getLetterCount(stringToTest) / getWordCount(stringToTest)).toFixed(2));
}

const printStringStats = (stringToTest) => {
    console.log({
        wordCount: getWordCount(stringToTest),
        letterCount: getLetterCount(stringToTest),
        averageWordLength: getAverageWordLength(stringToTest)
    })
}

// exemple binary search ==================================================

const binarySearch = (array, thingToFind, start, end) => {

    if (start > end) {
        return false;
    }

    let mid = Math.floor((start + end) / 2);

    if (array[mid] === thingToFind) {
        return true;
    }

    if (thingToFind < array[mid]) {
        return binarySearch(array, thingToFind, start, mid - 1);
    } else {
        return binarySearch(array, thingToFind, mid + 1, end);
    }
}

// ==========================================================================