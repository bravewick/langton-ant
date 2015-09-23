'use strict';

export default class Ant {
    constructor (positionX, positionY, direction, size, canvas) {
        this.x = positionX;
        this.y = positionY;
        this.size = size;
        this.canvas = canvas;
        this.direction = direction; // 1: up, 2: right, 3: down, 4: left
    }

    move() {
        // Draw where I am now and then yield
        //const currentPositionPixelData = this.getImageData(x, y, 1, 1);
        console.log("Current Color: ", this.canvas.getImageData(this.x, this.y));
        console.log(this.canvas.getImageData(this.x, this.y), this.canvas.activeColor, this.canvas.getImageData(this.x, this.y) === this.canvas.activeColor);
        if (this.canvas.getImageData(this.x, this.y) === this.canvas.inactiveColor) {

            // paint the current inactive
            this.paintCurrent(this.canvas.activeColor);
            // move right
            this.moveRight();
            this.paintHead();
        } else {
            //paint active
            this.paintCurrent(this.canvas.inactiveColor);
            // move left
            this.moveLeft();
            this.paintHead();
        }
        console.log(this.direction);

    }

    paintCurrent(color) {
        this.canvas.paintTile(this.x, this.y, this.size, this.size, color);
    }

    paintHead(color) {
        this.canvas.paintTile(this.x+1, this.y+1, this.size/2, this.size/2, "#ff0000");
    }

    moveRight() {
        switch (this.direction) {
            case 1:
                this.x = this.x + this.size;
                this.direction = 2;
                break;
            case 2:
                this.y = this.y + this.size;
                this.direction = 3;
                break;
            case 3:
                this.x = this.x - this.size;
                this.direction = 4;
                break;
            case 4:
                this.y = this.y - this.size;
                this.direction = 1;
                break;
        }
    }

    moveLeft() {
        switch (this.direction) {
            case 1:
                this.x = this.x - this.size;
                this.direction = 4;
                break;
            case 2:
                this.y = this.y - this.size;
                this.direction = 1;
                break;
            case 3:
                this.x = this.x + this.size;
                this.direction = 2;
                break;
            case 4:
                this.y = this.y + this.size;
                this.direction = 3;
                break;
        }
    }
}