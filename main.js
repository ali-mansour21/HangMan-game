const letters = "abcdefghijklmnopqrstuvwxyz";
// Get Array From letters
let arrayLetters = Array.from(letters);
// console.log(arrayLetters);

// Select Letters Contianer
let lettersContianer = document.querySelector(".letters");

// Generate letters 
arrayLetters.forEach(letters => {
    // create span
    let span = document.createElement("span");

    // create letter text node
    let letterTextnode = document.createTextNode(letters);

    // Append letter to span
    span.appendChild(letterTextnode);

    // add class on span 
    span.className = "letter-box";

    lettersContianer.appendChild(span);

});

// Object of Words 
const words = {
    Football: ["Messi", "Rooney", "CristianoRonaldo", "Ronaldo", "Ramos",
        "Benzema", "Salah", "Mahrez", "Hakimi", "Kaka","Pele"],
    Movies: ["Prestige","Inception","Paratise","Interstellar","whiplash","Memento","Coco","Up"],
    People: ["AlbertEinstein","Hitchcock","Alexander","Cleopatra","MahatmaGhandi"],
    Countries: ["Lebanon", "Syria", "America", "Qatar", "Egypt",
        "Yemen", "Spain", "Germany", "Iran", "Jordan", "Italy",
        "Canada","Mexcico","Brazil","France","SouthAfrica","Algeria","China","SouthKorea","Russia"],
}
// Get Random  Property
let allKeys = Object.keys(words);

// Get Random Number Inside The Index Of The Properties
let RandomPropNumber = Math.floor(Math.random() * allKeys.length);
let RandomPropName = allKeys[RandomPropNumber];
let RandomPropVAlue = words[RandomPropName];

// Get Random Number Inside The Index Of The Values
let RandomValueNumber = Math.floor(Math.random() * RandomPropVAlue.length);
// Get Random Value Inside The Index Of The Values

let RandomValueValue = RandomPropVAlue[RandomValueNumber];

// Set Category Info
document.querySelector(".game-info .category span").innerHTML = RandomPropName;


// Get Array From The Selected Value 
let ArrayFromLetter = Array.from(RandomValueValue);

// Get The Letter-guess Continear
let lettersguessContianer = document.querySelector(".letters-guess");

// Loop On Each Element From The Array
ArrayFromLetter.forEach(letter => {

    // Create Empty Span
    let emptySpan = document.createElement("span");

    // Check If The Letter Is Empty And Give It A Class
    if ( letter === ' ') {
        emptySpan.className = "empty-letter";
    }

    // Append To The Continear
    lettersguessContianer.appendChild(emptySpan);

});


// Get All The Spans
let guessSpan = document.querySelectorAll(".letters-guess span");

// Get The Draw Design
let theDraw = document.querySelector(".hangman-draw");

    // Set The Wrong Attempts 
let wrongAttempts = 0;
    // Set The Correct Attempts
let correctAttmempts = 0;

// get the buttun 
let button = document.getElementById("replay");



// Handle Clicking On Letters
document.addEventListener("click", (e) => {


    // Set The Status
    let theStatus = false;
    if (e.target.className === 'letter-box') {
        e.target.classList.add("clicked");
    }
    // Get The clickedLetter
    let clickedLetter = e.target.innerHTML.toLowerCase();


    // Get The Chosen Word
    let chosenWord = Array.from((RandomValueValue).toLowerCase());
    chosenWord.forEach((wordletter, wordIndex) => {

        // If The Clicked Letter Is In The Chosen Word
        if (clickedLetter == wordletter) {
            // Set status to true
            theStatus = true;
            // Loop On All Spans
            guessSpan.forEach((span, spanIndex) => {
                if (wordIndex === spanIndex) {
                    span.innerHTML = wordletter;
                }
            });
        }
        if( clickedLetter == wordletter & wordletter !==' ')
        {
            correctAttmempts++;
        }
      

    });


    // If The Chosen Letter Is Wrong
    if (theStatus !== true) {
        wrongAttempts++;
        theDraw.classList.add(`wrong-${wrongAttempts}`);
        if (wrongAttempts === 8)
        {
            endgame();
            lettersContianer.classList.add("finished");
            button.style.display = "block";
        }
    }
    // End of the Game (Win)

    if (correctAttmempts === RandomValueValue.length)
    {
        wingame();
        lettersContianer.classList.add("finished");
        button.style.display = "block";
    }



    
});

function endgame()
{
    // Create Div
    let div = document.createElement("div");

    // Create TextNode
    let divText = document.createTextNode(`Game Over The Word is ${RandomValueValue}`);
    // Append to Div
    div.appendChild(divText);
    // Add Class popup On Div
    div.className = "popup";
    // Append to Body
    document.body.appendChild(div);

};
function wingame() {
        // Create Div
        let div = document.createElement("div");

        // Create TextNode
        let divText = document.createTextNode(`You Win`);
        // Append to Div
        div.appendChild(divText);
        // Add Class popup On Div
        div.className = "popup";
        // Append to Body
        document.body.appendChild(div);
    
};