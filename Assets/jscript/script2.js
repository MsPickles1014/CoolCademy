// store user input(letter of the alphabet) in local storage
//check local storage for current letter.
//if letter already exhist, display alert to user to select another letter

//gonna write some functions here that:
// will be run on page load
// will check local storage, then run the generate card function over a loop through local storage
//
// a seperate function that links to a "clear button" to clear local storage and the cards currently out

const clearButton = document.getElementById('clear');



//function stores the entered letter into local storage
function storeLetter(enteredLetter) {
  //this is one way to prevent having [a, A], and the Alphabet dictionary below uses uppercase keys
  enteredLetter = enteredLetter.toUpperCase();
  let lettersArray = JSON.parse(localStorage.getItem("lettersArray"));
  // here we check if the array exists - if it doesn't we create an empty array
  if (!lettersArray) {
    lettersArray = [];
  }
  //if we get here, we know the array exists, so we can check if the entered letter is in the array, if not we push the entered letter
  if (!lettersArray.includes(enteredLetter)) {
    lettersArray.push(enteredLetter);
  }
  //store the array as a string in local storage
  localStorage.setItem("lettersArray", JSON.stringify(lettersArray));
}

function readLocalStorage() {
  let letters = JSON.parse(localStorage.getItem("lettersArray"));
  if (letters) {
    //create an array from the letters in local storage
    letters = Array.from(letters);
    return letters;
  } else {
    return [];
  }
}

function pageLoad() {
  let lettersArray = readLocalStorage();
  for (i = 0; i < lettersArray.length; i++) {
    generateCard(lettersArray[i]);
  }
}

clearButton.addEventListener('click', function (event) {
  event.preventDefault();
  lettersArray = [];
  localStorage.setItem("lettersArray", JSON.stringify(lettersArray));
  location.reload();
})


// document.addEventListener("DOMContentLoaded", () => {

// Alphabet data with words and images
const alphabet = {
  A: {
    words: ["Apple", "Ant", "Alligator"],
    img: "./Assets/images/apple.jpg",
  },
  F: { words: ["Farmer", "Farm", "Fence"], img: "./Assets/images/farm.jpg" },
  C: {
    words: ["Cat", "Car", "Choo-choo-train"],
    img: "./Assets/images/choo-choo-train.jpg",
  },
  // ... add entries up to Z
  G: { words: ["guitar", "goat", "gift"], img: "./Assets/images/guitar.jpg" },
};

// Function to generate and append a new card
function generateCard(letter) {
  const uppercaseLetter = letter.toUpperCase();
  const item = alphabet[uppercaseLetter];
  if (!item) {
    alert("Invalid letter! Please enter a letter from A to Z.");
    return;
  }

  // Check if the card for this letter already exists
  //We already have this check in our code
// Removed this line, moved it to under the submit area, and now have it check local storage
  // if (document.getElementById(`card-${uppercaseLetter}`)) {
  //   alert(`The card for "${uppercaseLetter}" is already displayed.`);
  //   return;
  // }

  const cardSection = document.getElementById("alphabetCards");

  // Create Bootstrap card HTML
  const cardHTML = `
        <div id="card-${uppercaseLetter}" class="col-md-4 mb-4">
          <div class="card">
            <img src="${
              item.img
            }" class="card-img-top" alt="Image for ${uppercaseLetter}" />
            <div class="card-body text-center">
              <h5 class="card-title">${uppercaseLetter}</h5>
              <p class="card-text">${uppercaseLetter} is for:</p>
              <ul class="list-unstyled">
                ${item.words.map((word) => `<li>${word}</li>`).join("")}
              </ul>
            </div>
          </div>
        </div>
      `;

  // Append the new card to the card section
  cardSection.insertAdjacentHTML("beforeend", cardHTML);
}

// Handle letter submission
document.getElementById("submitLetter").addEventListener("click", () => {
  const letterInput = document.getElementById("letterInput").value;
  
  if (readLocalStorage().includes(letterInput.toUpperCase())) {
    alert("The card for '" + letterInput.toUpperCase() + "' is already displayed.");
    return;
  }

  storeLetter(letterInput);

  if (!/^[a-zA-Z]$/.test(letterInput)) {
    alert("Please enter a single letter from A to Z.");
    return;
  }
  generateCard(letterInput);
  $("#inputModal").modal("hide"); // Hide modal after submitting
  document.getElementById("letterInput").value = ""; // Clear input field
});
// });
