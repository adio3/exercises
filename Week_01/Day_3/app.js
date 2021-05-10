"use strict";
import Ball from "./ball.js";
import Paddle from "./paddle.js";

const ball = new Ball();
const paddleLeft = new Paddle("l");
const paddleRight = new Paddle("r");

const startButton = document.querySelector("button");

class Game {
  constructor() {
    this.canvasWidth = 700;
    this.canvasHeight = 500;
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.scoreLeft = 0;
    this.scoreRight = 0;
    this.player1 = document.getElementById("P1");
    this.player2 = document.getElementById("P2");
  }
  resetCanvas() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
  }

  createMiddleLine() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "gray";
    this.ctx.fillRect(this.canvasWidth / 2, 0, 2, this.canvasHeight);
    this.ctx.fill();
  }
  checkCollisions() {
    if (ball.posX + ball.radius > this.canvas.width) {
      this.scoreLeft += 1;
      this.createScoreLeft();
    }
    if (ball.posX - ball.radius < 0) {
      this.scoreRight += 1;
      this.createScoreRight();
    }
    if (
      ball.posX + ball.radius >
        this.canvasWidth - paddleRight.paddlePosX - paddleRight.paddleWidth &&
      ball.posY > paddleRight.paddlePosY &&
      ball.posY < paddleRight.paddlePosY + paddleRight.paddleHight
    ) {
      ball.vx = -ball.vx;
    }
    if (
      ball.posX - ball.radius <
        paddleLeft.paddlePosX + paddleLeft.paddleWidth &&
      ball.posY > paddleLeft.paddlePosY &&
      ball.posY < paddleLeft.paddlePosY + paddleLeft.paddleHight
    ) {
      ball.vx = -ball.vx;
    }
  }
  createScoreLeft() {
    this.ctx.beginPath();
    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`${this.scoreLeft}`, this.canvas.width / 2 - 50, 50);
    this.ctx.textAlign = "left";
  }
  createScoreRight() {
    this.ctx.beginPath();
    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`${this.scoreRight}`, this.canvas.width / 2 + 50, 50);
    this.ctx.textAlign = "right";
  }
  createPlayer() {
    this.ctx.beginPath();
    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`${this.player1.value}`, this.canvas.width / 4, 50);
    this.ctx.textAlign = "left";
    this.ctx.beginPath();
    this.ctx.font = "16px Arial";
    this.ctx.fillStyle = "white";
    this.ctx.fillText(`${this.player2.value}`, (this.canvas.width / 4) * 3, 50);
    this.ctx.textAlign = "right";
  }
  play() {
    setInterval(() => {
      game.resetCanvas();
      paddleLeft.listenerDown;
      paddleLeft.listenerUp;
      paddleLeft.executeMoves();
      paddleRight.listenerDown;
      paddleRight.listenerUp;
      paddleRight.executeMoves();
      game.createScoreLeft();
      game.createScoreRight();
      game.createMiddleLine();
      game.createPlayer();
      ball.render();
      ball.move();
      paddleLeft.render();
      paddleRight.render();
      game.checkCollisions();
    }, 17);
  }
}

const game = new Game();

startButton.addEventListener("click", () => game.play());
