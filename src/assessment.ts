import "./style.css";
import p5, { Image } from "p5";

let shima: Image;
let hiyo: Image;

let sizeSlider: p5.Element;
let imageSelect: p5.Element;
let showCheck: p5.Element;

function sketch(p: p5) {
  p.setup = () => {
    p.createCanvas(600, 600, "webgl");
    shima = p.loadImage("sushimaenaga.png");
    hiyo = p.loadImage("piyosushi.png");

    sizeSlider = p.createSlider(10, 150, 40);
    sizeSlider.position(140, 120);

    imageSelect = p.createSelect();
    imageSelect.position(140, 140);
    imageSelect.option("shima");
    imageSelect.option("hiyo");
    imageSelect.option("both");

    showCheck = p.createCheckbox("show");
    showCheck.position(140, 160);
  };

  p.draw = () => {
    p.background(220);
    p.imageMode("center");

    const size = sizeSlider.value();
    const selectedImage = imageSelect.value();

    for (let y = -300; y <= 400; y += 40) {
      for (let x = -300; x <= 400; x += 40) {
        if (typeof size === "number") {
          if (selectedImage === "shima") {
            p.image(shima, x, y, size, size);
            p.image(shima, x + 20, y + 20, size, size);
          } else if (selectedImage === "hiyo") {
            p.image(hiyo, x, y, size, size);
            p.image(hiyo, x + 20, y + 20, size, size);
          } else {
            p.image(shima, x, y, size, size);
            p.image(hiyo, x + 20, y + 20, size, size);
          }
        }
      }
    }
  };
}

new p5(sketch);
