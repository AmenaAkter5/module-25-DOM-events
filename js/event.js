// =====================

// red body background function

function makeBackgroundRed() {
    document.body.style.backgroundColor = 'red';
}


// =====================

// blue-button setup [by setting function name]

const blueButton = document.getElementById('make-blue-button');
// console.log(blueButton); // optional console

// just set the name of function
blueButton.onclick = makeBackgroundBlue;

function makeBackgroundBlue() {
    document.body.style.backgroundColor = 'blue';
}


// ====================

// green Button setup

const greenButton = document.getElementById('make-green-button');
greenButton.onclick = function makeBackgroundGreen() {
    document.body.style.backgroundColor = 'green';
}



// ====================

// purple button setup

const purpleButton = document.getElementById('make-purple-button');

// Anonymous Function
purpleButton.onclick = function () {
    document.body.style.backgroundColor = 'purple';
}



// ====================

// skyBlue Button setup : by addEventListener

const skyBlueButton = document.getElementById('make-skyBlue-button');

// addEventListener
skyBlueButton.addEventListener('click', makeBackgroundSky);

function makeBackgroundSky() {
    document.body.style.backgroundColor = 'deepskyblue';
}





// ====================

// deepPink Button setup

const deepPinkButton = document.getElementById('make-deepPink-button');

// addEventListener
deepPinkButton.addEventListener('click', function makeBackgroundPink() { // function name is optional here
    document.body.style.backgroundColor = 'fuchsia';
})

/*
// without function Name

// addEventListener
deepPinkButton.addEventListener('click', function () { // function name is optional here
    document.body.style.backgroundColor = 'fuchsia';
})

*/



// ====================

// Lime Button setup [direct shortcut method]

document.getElementById('lime-button').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lime';
})