import "./style.css";
import p5 from "p5";

function sketch(p: p5) {
  let $: p5.Vector[] = [];
  let r = 0;
  const num = 2e3;

  p.setup = () => {
    p.createCanvas(600, 600);
  };

  p.draw = () => {
    p.background(0, 9);

    const arr = $.map((v, i) => {
      // stroke->pointのRGB値
      p.stroke(i, i / 3, i / 5);
      // add->全体の位置(x,y)
      // mult->全体の大きさ
      p.point(v.copy().add(2, 1.6).mult(135));
      // r -> 細かさ, 8 -> 回転の詰まり具合
      r = ((v.x * 2 + 2.5) ^ (v.y + 2)) * 8;

      // 向き
      return v.add(p.sin(v.y * r) / 90, p.cos(v.x * r) / 90);
    });

    if (arr[num]) {
      $ = $.slice(-(num - 20));
    } else {
      let newArr = [];

      // 線の量
      for (let i = 0; i < 20; i++) {
        newArr.push(p5.Vector.random3D());
      }
      $ = [...$, ...newArr];
    }
  };
}

new p5(sketch);
