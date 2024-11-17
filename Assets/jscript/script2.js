// store user input(letter of the alphabet) in local storage
//Save Card to localStorage:(every time a new card is generated with function generateCard , the saveCardToLocalStorage function is called.)
//check local storage for current letter = checks if the letter is already saved in localStorage. If not, it adds it to the array and updates localStorage.
//if letter already exhist, display alert to user to select another letter***** (completed Already- was added to generate card function as an if statement )











document.addEventListener("DOMContentLoaded", () => {
    // Alphabet data with words and images
    const alphabet = {
      A: { words: ["Apple", "Ant", "Alligator"], img: "./Assets/images/apple.jpg" },
      F: { words: ["Farmergit", "Farm", "Fence"], img: "./Assets/images/farm.jpg" },
      C: { words: ["Cat", "Car", "Choo-choo-train"], img: "./Assets/images/choo-choo-train.jpg" },
      // ... add entries up to Z
      G: { words: ["guitar", "goat", "gift"], img: "./Assets/images/guitar.jpg" }
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
      if (document.getElementById(`card-${uppercaseLetter}`)) {
        alert(`The card for "${uppercaseLetter}" is already displayed.`);
        return;
      }
  
      const cardSection = document.getElementById("alphabetCards");
  
      // Create Bootstrap card HTML
      const cardHTML = `
        <div id="card-${uppercaseLetter}" class="col-md-4 mb-4">
          <div class="card">
            <img src="${item.img}" class="card-img-top" alt="Image for ${uppercaseLetter}" />
            <div class="card-body text-center">
              <h5 class="card-title">${uppercaseLetter}</h5>
              <p class="card-text">${uppercaseLetter} is for:</p>
              <ul class="list-unstyled">
                ${item.words.map(word => `<li>${word}</li>`).join('')}
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
      if (!/^[a-zA-Z]$/.test(letterInput)) {
        alert("Please enter a single letter from A to Z.");
        return;
      }
      generateCard(letterInput);
      $("#inputModal").modal("hide"); // Hide modal after submitting
      document.getElementById("letterInput").value = ""; // Clear input field
    });
  });
  



  // // Load cards from localStorage on page load
  // loadStoredCards();
  
  // // Function to generate and append a new card
  // function generateCard(letter) {
  //   const uppercaseLetter = letter.toUpperCase();
  //   const item = alphabet[uppercaseLetter];
  //   if (!item) {
  //     alert("Invalid letter! Please enter a letter from A to Z.");
  //     return;
  //   }

  //   // Check if the card for this letter already exists
  //   if (document.getElementById(`card-${uppercaseLetter}`)) {
  //     alert(`The card for "${uppercaseLetter}" is already displayed.`);
  //     return;
    // }