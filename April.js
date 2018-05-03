playerScore = 0;
compScore = 0;

let playerChoice = "";
rockBut.addEventListener("click", function() {
  playerChoice = "ROCK";
});

scissorsBut.addEventListener("click", function() {
  playerChoice = "SCISSORS";
});

paperBut.addEventListener("click", function() {
  playerChoice = "PAPER";
});



// this function creates a random number from 1-3
function oneToThree() {
  res = Math.floor(Math.random() * 3) + 1;
  const containerdem = document.getElementById("demo");

  //clear container before we add new elements
  containerdem.innerHTML = "";

  //remove the css class for prompting the user
  containerdem.classList.remove("demo-prompt");

  //we use this paragraphs for all our conditions so we right here only once

  // this paragraph gets created only when the oneToThree function runs
  const p = document.createElement("p");
  p.textContent = "Computer chose ";
  p.classList.add("demo-result"); 

  //Create the span the result is going into
  const result = document.createElement("span");

  if (res === 3) {
    result.textContent = "rock";
  } else if (res === 2) {
    //PAPER
    result.textContent = "paper";
  } else {
    //MUST BE SCISSOR
    result.textContent = "scissor";
  }

  //do operations after the conditions instead of inside each condition to avoid duplication
  result.classList.add("largefont");
  p.appendChild(result);

  containerdem.appendChild(p);

  function playGame() {
    if (playerChoice === "ROCK" && res === 3) {
      document.getElementById("resuult").innerHTML = "DRAW!";
    } else if (playerChoice === "ROCK" && res === 2) {
      document.getElementById("resuult").innerHTML = "You LOSE!";
      compScore++;
      document.getElementById("compScore").innerHTML = compScore;
    } else if (playerChoice === "ROCK" && res <= 1.99) {
      document.getElementById("resuult").innerHTML = "You WIN!";
      playerScore++;
      document.getElementById("playerScore").innerHTML = playerScore;
    } else if (playerChoice === "SCISSORS" && res <= 1.99) {
      document.getElementById("resuult").innerHTML = "DRAW!";
    } else if (playerChoice === "SCISSORS" && res === 3) {
      document.getElementById("resuult").innerHTML = "You LOSE!";
      compScore++;
      document.getElementById("compScore").innerHTML = compScore;
    } else if (playerChoice === "SCISSORS" && res === 2) {
      document.getElementById("resuult").innerHTML = "You WIN!";
      playerScore++;
      document.getElementById("playerScore").innerHTML = playerScore;
    } else if (playerChoice === "PAPER" && res === 2) {
      document.getElementById("resuult").innerHTML = "DRAW!";
    } else if (playerChoice === "PAPER" && res === 3) {
      document.getElementById("resuult").innerHTML = "You WIN!";
      playerScore++;
      document.getElementById("playerScore").innerHTML = playerScore;
    } else if (playerChoice === "PAPER" && res <= 1.99) {
      document.getElementById("resuult").innerHTML = "You LOSE!";
      compScore++;
      document.getElementById("compScore").innerHTML = compScore;
    }
    if (compScore === 1) {
      document.getElementById("playerScore").style.backgroundImage =
        "url('https://user-images.githubusercontent.com/31823017/39405166-2630be9a-4b98-11e8-8904-f93554cbbdab.png')";
    }
    if (compScore === 2) {
      document.getElementById("playerScore").style.backgroundImage =
        "url('https://user-images.githubusercontent.com/31823017/39405170-31ec2b98-4b98-11e8-8dad-c79b664995ff.png')";
    }
    if (compScore === 3) {
      document.getElementById("playerScore").style.backgroundImage =
        "url('https://user-images.githubusercontent.com/31823017/39405169-31cfb486-4b98-11e8-8bdb-97cd112b74ee.png')";
    }
    if (compScore === 4) {
      document.getElementById("playerScore").style.backgroundImage =
        "url('https://user-images.githubusercontent.com/31823017/39405168-31b19884-4b98-11e8-829a-7514ca785953.png')";
    }
    // the timeOut thing delays in milliseconds how long until the Alert shows up, location.reload and refreshes the page if you click ok.
    if (compScore === 5) {
      document.getElementById("playerScore").style.backgroundImage = "url('')";
      setTimeout(delayedReload, 1000);
      function delayedReload() {
        alert("Game Over! Play again?");
        location.reload();
      }
    }

    if (playerScore === 1) {
      document.getElementById("compScore").style.backgroundImage =
        "url('https://user-images.githubusercontent.com/31823017/39405166-2630be9a-4b98-11e8-8904-f93554cbbdab.png')";
    }
    if (playerScore === 2) {
      document.getElementById("compScore").style.backgroundImage =
        "url('https://user-images.githubusercontent.com/31823017/39405170-31ec2b98-4b98-11e8-8dad-c79b664995ff.png')";
    }
    if (playerScore === 3) {
      document.getElementById("compScore").style.backgroundImage =
        "url('https://user-images.githubusercontent.com/31823017/39405169-31cfb486-4b98-11e8-8bdb-97cd112b74ee.png')";
    }
    if (playerScore === 4) {
      document.getElementById("compScore").style.backgroundImage =
        "url('https://user-images.githubusercontent.com/31823017/39405168-31b19884-4b98-11e8-829a-7514ca785953.png')";
    }
    if (playerScore === 5) {
      document.getElementById("compScore").style.backgroundImage = "url('')";
      setTimeout(delayedReload, 1000);
      function delayedReload() {
        alert("Game Over! Play again?");
        location.reload();
      }
    }
  }

  document.addEventListener("click", playGame());
  // working now but only for Rock Button. When I add the others, the function depletes too much energy
}
function playSoundS() {
  var sound = document.getElementById("scisound");
  sound.play();
}
function playSoundP() {
  var sound = document.getElementById("papsound");
  sound.play();
}
function playSoundR() {
  var sound = document.getElementById("roksound");
  sound.play();
}





rockBut.addEventListener("click", oneToThree);
rockBut.addEventListener("click", playSoundR);
rockBut.addEventListener("click", function colorText() {
  document.getElementsByClassName(
    "demo-result"
  )[0].style.color = randomColor();
});
paperBut.addEventListener("click", playSoundP);
paperBut.addEventListener("click", oneToThree);

paperBut.addEventListener("click", function colorText() {
  document.getElementsByClassName(
    "demo-result"
  )[0].style.color = randomColor();
});

scissorsBut.addEventListener("click", playSoundS);
scissorsBut.addEventListener("click", oneToThree);
scissorsBut.addEventListener("click", function colorText() {
  document.getElementsByClassName(
    "demo-result"
  )[0].style.color = randomColor();
});
        

function randomColor() {
  var randomRed = Math.floor(Math.random() * 255);
  var randomGreen = Math.floor(Math.random() * 255);
  var randomBlue = Math.floor(Math.random() * 255);
  //create the string that is the ‘random color’
  var randomColor =
    "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";

  return randomColor;
}

// playerChoice is just the string that shows up in text what you clicked on


