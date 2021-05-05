export default class Paddle{
    constructor(side) {
        this.paddleWidth = 10
        this.paddleHight = 100
        this.paddleMovePix = +4
        this.side = side
        this.paddlePosX = 10;
        this.paddlePosY = 250 - (this.paddleHight/2);
        this.canvas = document.querySelector('canvas')
        this.ctx = this.canvas.getContext('2d');
        this.listener = document.addEventListener('keydown', event => {this.move(event.key, event.type)});

    }
    render(){
        if (this.side === 'l'){
            this.ctx.beginPath();
            this.ctx.fillStyle = 'white';
            this.ctx.fillRect(this.paddlePosX, this.paddlePosY, this.paddleWidth, this.paddleHight);
            this.ctx.fill();
        }
        if (this.side === 'r'){
            this.ctx.beginPath();
            this.ctx.fillStyle = 'white';
            this.ctx.fillRect((this.canvas.width - this.paddleWidth -this.paddlePosX), this.paddlePosY, this.paddleWidth, this.paddleHight);
            this.ctx.fill();
        }
    }
    move(key){
        if (key === 'w' && this.side === 'l'){
            if (this.paddlePosY != 0) {
                this.paddlePosY -= this.paddleMovePix
            }
        }
        if (key === 's' && this.side === 'l'){
            if (this.paddlePosY != 500-this.paddleHight) {
                this.paddlePosY += this.paddleMovePix
            }
        }
        if (key === 'ArrowUp' && this.side === 'r'){
            if (this.paddlePosY != 0) {
                this.paddlePosY -= this.paddleMovePix
            }
        }
        if (key === 'ArrowDown' && this.side === 'r'){
            if (this.paddlePosY != 500-this.paddleHight) {
                this.paddlePosY += this.paddleMovePix
            }
        }
    }

}