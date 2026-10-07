//the score
let score1 = 0;
let score2 = 0;
//ref to html
let player1 = document.getElementById("p1-score");
let player2 = document.getElementById("p2-score");
let player1Button = document.getElementById("p1-button");
let player2Button = document.getElementById("p2-button");

let serveClass =
  "text-9xl font-bold shadow-xl shadow-black rounded-2xl p-3 border-white border-5";
let notServeClass =
  "text-9xl font-bold shadow-xl shadow-black rounded-2xl p-3 border-black border-3";
let winnerClass =
  "text-9xl font-bold shadow-xl shadow-black rounded-2xl p-3 border-green-600 border-5";

//updates the scores
function updateScores() {
  player1.innerText = score1;
  player2.innerText = score2;

  switch (whoServe()) {
    case 1:
      player1.className = serveClass;
      player2.className = notServeClass;
      break;
    case 2:
      player1.className = notServeClass;
      player2.className = serveClass;
      break;
  }
}
//button click 1
function p1ButtonPressed() {
  console.log("p1 is hit");
  if (getWinner() != 0) {
    return;
  }
  score1 += 1;
    updateScores();
  if (getWinner() != 0) {
    displayWinner();
  }
}
//button click 2
function p2ButtonPressed() {
  console.log("p2 is hit");
  if (getWinner() != 0) {
    return;
  }
  score2 += 1;
    updateScores();
  if (getWinner() != 0) {
    displayWinner();
  }
}

//return who serve as p1 (1) or p2 (2)
function whoServe() {
  let scoreTotal = score1 + score2;
  if (!isDuce()) {
    switch (scoreTotal % 4) {
      case 0:
        return 1;
      case 1:
        return 1;
      case 2:
        return 2;
      case 3:
        return 2;
    }
  } else {
    switch (scoreTotal % 2) {
      case 0:
        return 1;
      case 1:
        return 2;
    }
  }
}

function getWinner() {
  if (isDuce()) {
    if (score1 - score2 >= 2) return 1;
    if (score2 - score1 >= 2) return 2;
  } else {
    if (score1 == 11 && score2 < 10) {
      return 1;
    }
    if (score2 == 11 && score1 < 10) {
      return 2;
    }
  }
  return 0;
}

function isDuce() {
  return score1 + score2 >= 20;
}

function displayWinner() {
  if (getWinner() == 1) {
    player1.className = winnerClass;
  } else if (getWinner() == 2) {
    player2.className = winnerClass;
  }
  console.log("Winner decided");
}

function resetGame() {
  score1 = 0;
  score2 = 0;
  updateScores();
}

function p1MinusScore() {
  if (score1 > 0) {
    score1 -= 1;
    updateScores();
  }
}

function p2MinusScore() {
  if (score2 > 0) {
    score2 -= 1;
    updateScores();
  }
}