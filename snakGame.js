
//import the functions we needs from file snake.js
import {snakSpeed,update as updateSnake , drow as drowSnake} from "./snake.js"

let lastRenderTime = 0;
const gameBord= document.getElementById("game-bord")

function main(currentTime){
 window.requestAnimationFrame(main)
 const secondSinceLastRender =(currentTime - lastRenderTime )/1000;
 if(secondSinceLastRender < 1 / snakSpeed) return;
 
console.log(secondSinceLastRender);
lastRenderTime = currentTime;

// function to update all the logic and the
// veribels, each time the main loop works
update();
//function to drow the object based on the valus of the function update()
drow();

}

window.requestAnimationFrame(main);

function update(){
updateSnake();
}

function drow(){
drowSnake(gameBord);
}