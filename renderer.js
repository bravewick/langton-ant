'use strict';
require('babel/register');

import Ant from './Ant.js';

const [w,h] = [800, 800];
const ACTIVE_COLOR = '#000000';
const INACTIVE_COLOR = '#ffffff';
const ANT_SIZE = 4; // in pixels
const STEP_TIMEOUT = 200; // in milliseconds

export class Canvas {
    constructor(width, height, activeColor, inactiveColor) {
        [this.width, this.height] = [width, height];
        let canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.id = 'canvas';
        this.ctx = canvas.getContext('2d');
        document.body.appendChild(canvas);
        this.activeColor = activeColor;
        this.inactiveColor = inactiveColor;
        this.clearAll();
        console.log(`New canvas was created with dimensions ${this.width}x${this.height} `);
    }

    clearAll() {
        this.ctx.fillStyle = this.inactiveColor;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    paintTile(x, y, width, height, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);
    }

    getImageData(x, y) {
        const pixel = this.ctx.getImageData(x, y, 1, 1);

        return this.rgbToHex(pixel.data[0], pixel.data[1], pixel.data[2]);
    }

    componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    rgbToHex(r, g, b) {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }

    startSimulation() {
        var simulation = setInterval(function () {
            console.log(`this should run every ${STEP_TIMEOUT}ms`);
        }, STEP_TIMEOUT);
    }
}

const canvas = new Canvas(w, h, ACTIVE_COLOR, INACTIVE_COLOR);
window.ant = new Ant(Math.floor(w / 2), Math.floor(h / 2), 1, ANT_SIZE, canvas);

var simulationInterval;

window.stopSimulation = function () {
    window.clearInterval(simulationInterval);
};

window.startSimulation = function () {
    simulationInterval = setInterval(function () {
        ant.move();
    }, STEP_TIMEOUT);
};
