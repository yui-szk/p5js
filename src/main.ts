import "./style.css";
import p5, { Image } from "p5";

let shima : Image;
let hiyo : Image;

function sketch(p: p5) {
  p.setup = () => {
    p.createCanvas(600, 600, "webgl");
    shima = p.loadImage('sushimaenaga.png')
    hiyo = p.loadImage('piyosushi.png')
  };

  p.draw = () => {
    p.background(220);
    p.imageMode("center");

    // p.image(shima, p.mouseX-200, p.mouseY-200);


    for (let y = -300 ; y <= 400; y += 40){
      for (let x = -300 ; x <= 400; x += 40){
        const size = p.random(5,50)
        p.image(shima, x , y, size, size);
        p.image(hiyo, x+20, y+20, size, size);
      }
    }

  };
}

new p5(sketch);
