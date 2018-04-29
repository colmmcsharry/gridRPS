playerScore = 0;
compScore = 0;
function onetothree() {
  res = Math.floor(Math.random() * 3) + 1;
  const containerdem = document.getElementById("demo");

  //clear container before we add new elements
  containerdem.innerHTML = "";

  //remove the css class for prompting the user
  containerdem.classList.remove("demo-prompt");

  //we use this paragraphs for all our conditions so we right here only once
  const p = document.createElement("p");
  p.textContent = "Computer chose";
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

  //do operations after the condtions instead of inside each condition to avoid duplication
  result.classList.add("largefont");
  p.appendChild(result);

  containerdem.appendChild(p);

  function PlayGame() {
    if (playerChoice === "ROCK" && res === 3) {
      document.getElementById("resuult").innerHTML = "draw!";
    } else if (playerChoice === "ROCK" && res === 2) {
      document.getElementById("resuult").innerHTML = "you lose!";
      compScore++;
      document.getElementById("compScore").innerHTML = compScore;
    } else if (playerChoice === "ROCK" && res <= 1.99) {
      document.getElementById("resuult").innerHTML = "you WIN!";
      playerScore++;
      document.getElementById("playerScore").innerHTML = playerScore;
    } else if (playerChoice === "SCISSORS" && res <= 1.99) {
      document.getElementById("resuult").innerHTML = "draw!";
    } else if (playerChoice === "SCISSORS" && res === 3) {
      document.getElementById("resuult").innerHTML = "you lose!";
      compScore++;
      document.getElementById("compScore").innerHTML = compScore;
    } else if (playerChoice === "SCISSORS" && res === 2) {
      document.getElementById("resuult").innerHTML = "you WIN!";
      playerScore++;
      document.getElementById("playerScore").innerHTML = playerScore;
    } else if (playerChoice === "PAPER" && res === 2) {
      document.getElementById("resuult").innerHTML = "draw!";
    } else if (playerChoice === "PAPER" && res === 3) {
      document.getElementById("resuult").innerHTML = "you win!";
      playerScore++;
      document.getElementById("playerScore").innerHTML = playerScore;
    } else if (playerChoice === "PAPER" && res <= 1.99) {
      document.getElementById("resuult").innerHTML = "you lose!";
      compScore++;
      document.getElementById("compScore").innerHTML = compScore;
    }
  }

  RockBut.addEventListener("click", PlayGame());
}
function PlaySoundS() {
  var sound = document.getElementById("scisound");
  sound.play();
}
function PlaySoundP() {
  var sound = document.getElementById("papsound");
  sound.play();
}
function PlaySoundR() {
  var sound = document.getElementById("roksound");
  sound.play();
}

function YouChoseRock() {
  document.getElementById("donk").innerHTML = "you chose rock";
}
function YouChosePaper() {
  document.getElementById("donk").innerHTML = "you chose paper";
}
function YouChoseScissors() {
  document.getElementById("donk").innerHTML = "you chose scissors";
}

RockBut.addEventListener("click", YouChoseRock);
RockBut.addEventListener("click", onetothree);
RockBut.addEventListener("click", PlaySoundR);
RockBut.addEventListener("click", function Flashbox() {
  document.getElementsByClassName(
    "demo-result"
  )[0].style.borderColor = randomColor();
});

paperBut.addEventListener("click", PlaySoundP);
paperBut.addEventListener("click", onetothree);
paperBut.addEventListener("click", YouChosePaper);
paperBut.addEventListener("click", function Flashbox() {
  document.getElementsByClassName(
    "demo-result"
  )[0].style.borderColor = randomColor();
});

scissorsBut.addEventListener("click", PlaySoundS);
scissorsBut.addEventListener("click", onetothree);
scissorsBut.addEventListener("click", YouChoseScissors);
scissorsBut.addEventListener("click", function Flashbox() {
  document.getElementsByClassName(
    "demo-result"
  )[0].style.borderColor = randomColor();
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
let playerChoice = "";
RockBut.addEventListener("click", function() {
  playerChoice = "ROCK";
});

scissors.addEventListener("click", function() {
  playerChoice = "SCISSORS";
});

paper.addEventListener("click", function() {
  playerChoice = "PAPER";
});
