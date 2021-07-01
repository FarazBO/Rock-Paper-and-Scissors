"use strict";

// All DOM events
const message = document.querySelector(".message");
const rock = document.querySelector(".player-options .rock-btn");
const paper = document.querySelector(".player-options .paper-btn");
const scissors = document.querySelector(".player-options .scissors-btn");
const playerScore = document.querySelector(".player-score p");
const computerScore = document.querySelector(".computer-score p");
const restart = document.querySelector(".push-restart");

// variables
let varPlayerScore = 0;
let varComputerScore = 0;

// functions
const game = function () {
  // Computer Moves
  const ComputerOptions = ["rock", "paper", "scissors"];
  let computerRandomNumber = Math.trunc(Math.random() * 3);
  let ComputerMoves = ComputerOptions[computerRandomNumber];
  console.log(ComputerMoves);

  // ALl Event Handlers

  // Event-handlers for ROCK
  rock.addEventListener("click", function () {
    if (ComputerMoves === "rock") {
      message.textContent = "Its a draw";
      computerRandomNumber = Math.trunc(Math.random() * 3);
      ComputerMoves = ComputerOptions[computerRandomNumber];
      console.log(ComputerMoves);
    } else if (ComputerMoves === "paper") {
      computerRandomNumber = Math.trunc(Math.random() * 3);
      ComputerMoves = ComputerOptions[computerRandomNumber];
      message.textContent = "Computer Wins";
      varComputerScore++;
      computerScore.textContent = varComputerScore;
      console.log(ComputerMoves);
    } else {
      computerRandomNumber = Math.trunc(Math.random() * 3);
      ComputerMoves = ComputerOptions[computerRandomNumber];
      message.textContent = "You win";
      varPlayerScore++;
      playerScore.textContent = varPlayerScore;
      console.log(ComputerMoves);
    }
  });

  // Event Handlers for Paper
  paper.addEventListener("click", function () {
    if (ComputerMoves === "rock") {
      computerRandomNumber = Math.trunc(Math.random() * 3);
      ComputerMoves = ComputerOptions[computerRandomNumber];
      message.textContent = "You win";
      varPlayerScore++;
      playerScore.textContent = varPlayerScore;
      console.log(ComputerMoves);
    } else if (ComputerMoves === "paper") {
      computerRandomNumber = Math.trunc(Math.random() * 3);
      ComputerMoves = ComputerOptions[computerRandomNumber];
      message.textContent = "Its a draw";
      console.log(ComputerMoves);
    } else {
      computerRandomNumber = Math.trunc(Math.random() * 3);
      ComputerMoves = ComputerOptions[computerRandomNumber];
      message.textContent = "Computer Wins";
      varComputerScore++;
      computerScore.textContent = varComputerScore;
      console.log(ComputerMoves);
    }
  });

  // Event Handler for Scissors
  scissors.addEventListener("click", function () {
    if (ComputerMoves === "rock") {
      computerRandomNumber = Math.trunc(Math.random() * 3);
      ComputerMoves = ComputerOptions[computerRandomNumber];
      message.textContent = "Computer Wins";
      varComputerScore++;
      computerScore.textContent = varComputerScore;
      console.log(ComputerMoves);
    } else if (ComputerMoves === "paper") {
      computerRandomNumber = Math.trunc(Math.random() * 3);
      ComputerMoves = ComputerOptions[computerRandomNumber];
      message.textContent = "You win";
      varPlayerScore++;
      playerScore.textContent = varPlayerScore;
      console.log(ComputerMoves);
    } else {
      computerRandomNumber = Math.trunc(Math.random() * 3);
      ComputerMoves = ComputerOptions[computerRandomNumber];
      message.textContent = "Its a draw";
      console.log(ComputerMoves);
    }
  });
};

// Start Game
game();

// ReStart Game
restart.addEventListener("click", function () {
  // Varibles
  varPlayerScore = 0;
  varComputerScore = 0;

  // Resetting Scores
  playerScore.textContent = varPlayerScore;
  computerScore.textContent = varComputerScore;

  message.textContent = `Make your Move . . . `;
});
