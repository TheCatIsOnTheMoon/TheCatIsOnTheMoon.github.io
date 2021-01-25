// exo 93 : Basic JavaScript: Record Collection ===================================

// Setup
var collection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(object, id, prop, value) {

    // If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
    if (prop !== 'tracks' && value !== "") {
        object[id][prop] = value;

        // If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
    } else if (prop === "tracks" && !object[id].hasOwnProperty("tracks")) {
        object[id][prop] = [value];

        // If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
    } else if (prop === "tracks" && value !== "") {
        object[id][prop].push(value);

        // If value is an empty string, delete the given prop property from the album.
    } else if (value === "") {
        delete object[id][prop];
    }
    return object;
}

updateRecords(collection, 5439, 'artist', 'ABBA');

//Same exercise solution 2 ====================================================

// Only change code below this line
function updateRecords(object, id, prop, value) {

    // First checks if value is a blank string. If so, then the key (prop) is removed from the object.
    if (value === '') delete object[id][prop];

    // If that first check doesn’t pass, it next checks if prop is equal to tracks.
    // The tracks array is initialized if it does not exist, and then value is pushed into the tracks array. (This step uses shortcircuit evaluation)
    else if (prop === 'tracks') {
        object[id][prop] = object[id][prop] || []; // this is called shortcircuit evaluation
        object[id][prop].push(value);

    //If both these checks fail (meaning value is not an empty string and prop is not tracks), then either a new key (prop) and value (value) are added to the object, or an existing key is updated if the prop already exists.
    } else {
        object[id][prop] = value;
    }

    return object;
}

//===================================================================

/*
Short-circuit Evaluations

As we have seen, && and || evaluate from left to right and short-circuit.
What this means is that in both cases, if the first operand satisfies the logical operator’s condition
(&&: falseor ||: true) the first expression will be returned,
without so much as a look at the second operand on the right!

    false && ****anything****is short-circuit evaluated to false.
    true || ****anything***** is short-circuit evaluated to true.

All the possibilities:
    true && true         returns true
    true && false        returns false
    false && true        returns false
    false && false       returns false
    true || true         returns true
    true || false        returns true
    false || true        returns true
    false || false       returns false

Short-circuit Conditionals
Using short-circuit evaluations is an excellent way to simplify conditional statements and make your code DRY.
For example, imagine we have a user that we want to greet when they are online.

    user.online = true

    const greet = () => console.log("Helloooooo! You are online.")

We could write the following conditional statement:

    if (user.online) {
        greet()
    }

// Helloooooo! You are online.

However, we could also do the same thing using an && short-circuit conditional:

    user.online && greet()

// Helloooooo! You are online.

This works because user.online is true so the evaluation is not short-circuited and the second operand, greet(), is returned.
If user.online is false, the equation will short-circuit and greet() will never run.

We can also use a || if desired:

    user.online = false

    if(!user.online){
        greet()
    }

    ( user.online || greet())

// Helloooooo! You are online.
// Helloooooo! You are online.

*/

//=============================================================================
