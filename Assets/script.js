function checkResult() {
  var buttonID = this.document.activeElement.getAttribute("cardnum");
  // take an argumetn from checkresult and assign it to a variable "letter"
  // in the modal below, define the elementbyid as "modal" + "letter"
  const modal = document.getElementById("modal" + buttonID);
  const notRight = document.getElementById("error" + buttonID);
  const choice = modal.querySelector(".correct");
  const wrong = modal.querySelector(".incorrect");
  choice.addEventListener("click", function (event) {
    //event.preventDefault()
    console.log("checkResult");
    console.log(buttonID);
    localStorage.setItem(buttonID, "correct");
  });
  wrong.addEventListener("click", function (event) {
    notRight.innerHTML = "Try Again"
  });
}

// function refreshCards
// check local storage and run through each key
// if correct key, show correct
//data dismiss
// else run check result again
