"use strict";

export default class Ball {
  constructor() {
    this.posX = 10;
    this.posY = 40;
    this.vx = +4;
    this.vy = +4;
    this.radius = 4;
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
  }
  render() {
    this.ctx.beginPath();
    this.ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
    this.ctx.fillStyle = "red";
    this.ctx.fill();
  }
  move() {
    this.posX += this.vx;
    if (
      this.posX + this.radius > this.canvas.width ||
      this.posX - this.radius < 0
    ) {
      this.vx = -this.vx;
    }
    this.posY += this.vy;
    if (
      this.posY + this.radius > this.canvas.height ||
      this.posY - this.radius < 0
    ) {
      this.vy = -this.vy;
    }
  }
}
