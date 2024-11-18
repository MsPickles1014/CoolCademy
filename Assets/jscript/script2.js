//JavaScript
document.addEventListener("DOMContentLoaded", function() {
  // Get the audio player by its ID
  const audioPlayer = document.getElementById('audioPlayer');
  
  // Check if the audio element is available
  if (audioPlayer) {
    // Play the audio
    audioPlayer.play().catch(function(error) {
      // Handle any errors (e.g., if autoplay is blocked in browsers)
      console.log("Audio play error: " + error);
    });
  }
});

const clearButton = document.getElementById('clear');
// Function stores the entered letter into local storage

function storeLetter(enteredLetter) {
  // Convert letter to uppercase for consistency
  enteredLetter = enteredLetter.toUpperCase();

  // Retrieve the letters array from local storage 
  let lettersArray = JSON.parse(localStorage.getItem("lettersArray"));

  // If array doesn't exhist, we create an empty array
  if (!lettersArray) {
    lettersArray = [];
  }

  // If the entered letter is not already in the array, add it
  if (!lettersArray.includes(enteredLetter)) {
    lettersArray.push(enteredLetter);
    localStorage.setItem("lettersArray", JSON.stringify(lettersArray));
   }
  }

  // Function to read the letters from local storage
function readLocalStorage() {
  let letters = JSON.parse(localStorage.getItem("lettersArray"));
  if (letters) {
    //create an array from the letters in local storage 
    // (***could have also used this code: ===> return letters ? letters : [];  <===***)
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
  A: { words: [""], img: "./Assets/images/Letter A.jpg" },
  B: { words: [""], img: "./Assets/images/Animal B.jpg" },
  C: { words: [""], img: "./Assets/images/Letter C.jpg" },
  D: { words: [""], img: "./Assets/images/Animal D.jpg" },
  E: { words: [""], img: "./Assets/images/Animal E.jpg" },
  F: { words: [""], img: "./Assets/images/Animal F.jpg" },
  G: { words: [""], img: "./Assets/images/Letter G.jpg" },
  H: { words: [""], img: "./Assets/images/Animal H.jpg" },
  I: { words: [""], img: "./Assets/images/Animal I.jpg" },
  J: { words: [""], img: "./Assets/images/Animal J.jpg" },
  K: { words: [""], img: "./Assets/images/Animal k.jpg" },
  L: { words: [""], img: "./Assets/images/Animal L.jpg" },
  M: { words: [""], img: "./Assets/images/Animal M.jpg" },
  N: { words: [""], img: "./Assets/images/Letter N.jpg" },
  O: { words: [""], img: "./Assets/images/Letter O.jpg" },
  P: { words: [""], img: "./Assets/images/Animal P.jpg" },
  Q: { words: [""], img: "./Assets/images/Letter Q.jpg" },
  R: { words: [""], img: "./Assets/images/Animal R.jpg" },
  S: { words: [""], img: "./Assets/images/Letter S.jpg" },
  T: { words: [""], img: "./Assets/images/Animal T.jpg" },
  U: { words: [""], img: "./Assets/images/Letter U.jpg" },
  V: { words: [""], img: "./Assets/images/Animal V.jpg" },
  W: { words: [""], img: "./Assets/images/Letter W.jpg" },
  X: { words: [""], img: "./Assets/images/Animal X.jpg" },
  Y: { words: [""], img: "./Assets/images/Letter Y.jpg" },
  Z: { words: [""], img: "./Assets/images/Animal Z.jpg" },
};


const alphabetBack = {
  A: { words: [""], img: "./Assets/images/Animal A.jpg" },
  B: { words: [""], img: "./Assets/images/Letter B.jpg" },
  C: { words: [""], img: "./Assets/images/Animal C.jpg" },
  D: { words: [""], img: "./Assets/images/Letter D.jpg" },
  E: { words: [""], img: "./Assets/images/Letter E.jpg" },
  F: { words: [""], img: "./Assets/images/Letter F.jpg" },
  G: { words: [""], img: "./Assets/images/Animal G.jpg" },
  H: { words: [""], img: "./Assets/images/Letter H.jpg" },
  I: { words: [""], img: "./Assets/images/Letter I.jpg" },
  J: { words: [""], img: "./Assets/images/Letter J.jpg" },
  K: { words: [""], img: "./Assets/images/Letter k.jpg" },
  L: { words: [""], img: "./Assets/images/Letter L.jpg" },
  M: { words: [""], img: "./Assets/images/Letter M.jpg" },
  N: { words: [""], img: "./Assets/images/Animal N.jpg" },
  O: { words: [""], img: "./Assets/images/Animal O.jpg" },
  P: { words: [""], img: "./Assets/images/Letter P.jpg" },
  Q: { words: [""], img: "./Assets/images/Animal Q.jpg" },
  R: { words: [""], img: "./Assets/images/Letter R.jpg" },
  S: { words: [""], img: "./Assets/images/Animal S.jpg" },
  T: { words: [""], img: "./Assets/images/Letter T.jpg" },
  U: { words: [""], img: "./Assets/images/Animal U.jpg" },
  V: { words: [""], img: "./Assets/images/Letter V.jpg" },
  W: { words: [""], img: "./Assets/images/Animal W.jpg" },
  X: { words: [""], img: "./Assets/images/Letter X.jpg" },
  Y: { words: [""], img: "./Assets/images/Animal Y.jpg" },
  Z: { words: [""], img: "./Assets/images/Letter Z.jpg" },
};
// Function to generate and append a new card
function generateCard(letter) {
  const uppercaseLetter = letter.toUpperCase();
  const itemFront = alphabet[uppercaseLetter];
  
  if (!itemFront) {
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

// Check for an existing letter before submission: In your submitLetter event listener, 
//you're checking if the letter exists in local storage, which is great. 
//However, the storeLetter function is still adding the letter to the storage even if it already exists. 
//So, you should prevent adding duplicate letters in storeLetter as well.

  const existingCard = document.getElementById(`card-${uppercaseLetter}`);
  if (existingCard) {
  alert(`The card for "${uppercaseLetter}" is already displayed.`);
  return;
  }





  const cardSection = document.getElementById("alphabetCards");



  // Create card HTML with front and back faces
  const cardHTML = `
    <div id="card-${uppercaseLetter}" class="col-md-4 mb-4">
      <div class="card-container">
        <div class="card">
          <!-- Front of the card -->
          <div class="card-front">
            <img src="${itemFront.img}" class="card-img-top" alt="Image for ${uppercaseLetter}" />
          </div>
          <!-- Back of the card -->
          <div class="card-back">
            <img src="${alphabetBack[uppercaseLetter].img}" class="card-img-top" alt="Back Image for ${uppercaseLetter}" />

            <p class="card-text">${uppercaseLetter} is for:</p>
            <ul class="list-unstyled">
              ${itemFront.words.map((word) => `<li>${word}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;
  // Create Bootstrap card HTML
  // const cardHTML = `
  //       <div id="card-${uppercaseLetter}" class="col-md-4 mb-4">
  //         <div class="card">
  //           <img src="${item.img
  //   }" class="card-img-top" alt="Image for ${uppercaseLetter}" />
  //           <div class="card-body text-center">
  //             <h5 class="card-title">${uppercaseLetter}</h5>
  //             <p class="card-text">${uppercaseLetter} is for:</p>
  //             <ul class="list-unstyled">
  //               ${item.words.map((word) => `<li>${word}</li>`).join("")}
  //             </ul>
  //           </div>
  //         </div>
  //       </div>
  //     `;

  // Append the new card to the card section
  cardSection.insertAdjacentHTML("beforeend", cardHTML);
  
  // // Apply custom styles to individual cards (Optional)
  // const card = document.getElementById(`card-${uppercaseLetter}`);
  // card.querySelector(".card").style.width = "350px"; // Custom width
  // card.querySelector(".card").style.height = "200px"; // Custom height
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