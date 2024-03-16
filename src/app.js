/* eslint-disable */
import "bootstrap";
import "./style.css";

class ExcuseGenerator {
  constructor() {
    this.who = ["The dog", "My grandma", "His turtle", "My bird"];
    this.action = ["ate", "peed", "crushed", "broke"];
    this.what = ["my homework", "the keys", "the car"];
    this.when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];
  }

  generateExcuse() {
    let randomWho = this.who[Math.floor(Math.random() * this.who.length)];
    let randomAction = this.action[
      Math.floor(Math.random() * this.action.length)
    ];
    let randomWhat = this.what[Math.floor(Math.random() * this.what.length)];
    let randomWhen = this.when[Math.floor(Math.random() * this.when.length)];

    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
  }
}

window.onload = function() {
  const excuseGenerator = new ExcuseGenerator();
  const excuseElement = document.getElementById("excuse");
  excuseElement.innerText = excuseGenerator.generateExcuse();
};
