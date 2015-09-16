// var ctx =  document.getElementById('canvas').getContext('2d');
//
// function clear() {
//   ctx.fillStyle = 'white';
//   ctx.fillRect(10, 10, 100, );
// }
require('babel/register');
'use strict';

const [w,h] = [500, 500];


class Canvas {
  constructor(width, height) {
      [this.width, this.height] = [width, height];
      let canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      canvas.id = 'canvas';
      this.ctx = canvas.getContext('2d');
      document.body.appendChild(canvas);
      this.clearAll();
      console.log(`New canvas was created with dimensions ${this.width}x${this.height} `);
  }

  clearAll() {
      this.ctx.fillStyle = 'red';
      this.ctx.fillRect(0, 0, this.width, this.height);
  }
}

var canvas = new Canvas(w, h);
