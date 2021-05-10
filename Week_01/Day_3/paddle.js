"use strict";
export default class Paddle {
  constructor(side) {
    this.paddleWidth = 10;
    this.paddleHight = 100;
    this.paddleMovePix = +4;
    this.side = side;
    this.paddlePosX = 10;
    this.paddlePosY = 250 - this.paddleHight / 2;
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.controller = {
      87: { pressed: false, func: () => this.move(1, "up") },
      83: { pressed: false, func: () => this.move(1, "down") },
      38: { pressed: false, func: () => this.move(2, "up") },
      40: { pressed: false, func: () => this.move(2, "down") },
    };
    this.listenerDown = document.addEventListener("keydown", (e) => {
      this.controller[e.keyCode].pressed = true;
      console.log(e.keyCode);
    });
    this.listenerUp = document.addEventListener(
      "keyup",
      (e) => (this.controller[e.keyCode].pressed = false)
    );
  }
  render() {
    if (this.side === "l") {
      this.ctx.beginPath();
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(
        this.paddlePosX,
        this.paddlePosY,
        this.paddleWidth,
        this.paddleHight
      );
      this.ctx.fill();
    }
    if (this.side === "r") {
      this.ctx.beginPath();
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(
        this.canvas.width - this.paddleWidth - this.paddlePosX,
        this.paddlePosY,
        this.paddleWidth,
        this.paddleHight
      );
      this.ctx.fill();
    }
  }
  move(player, direction) {
    if (player === 1 && direction === "up" && this.side === "l") {
      if (this.paddlePosY != 0) {
        this.paddlePosY -= this.paddleMovePix;
      }
    }
    if (player === 1 && direction === "down" && this.side === "l") {
      if (this.paddlePosY != 500 - this.paddleHight) {
        this.paddlePosY += this.paddleMovePix;
      }
    }
    if (player === 2 && direction === "up" && this.side === "r") {
      if (this.paddlePosY != 0) {
        this.paddlePosY -= this.paddleMovePix;
      }
    }
    if (player === 2 && direction === "down" && this.side === "r") {
      if (this.paddlePosY != 500 - this.paddleHight) {
        this.paddlePosY += this.paddleMovePix;
      }
    }
  }
  executeMoves() {
    Object.keys(this.controller).forEach((key) => {
      // console.log(this.controller[key].pressed)
      if (this.controller[key].pressed) {
        this.controller[key].func();
      }
    });
  }
}
