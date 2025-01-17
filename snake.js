export const snakSpeed = 1;
 //veriable as arry to make the snake as points x and y in the gridbord
const snakeBody =[{x:11, y:11}];

export function update(){
 console.log("updateSnake");
 }
 
export function drow(gameBord){
 snakeBody.forEach((segment)=>{
 const snakeElemnet = document.createElement('div');
 snakeElemnet.style.gridColumnStart = segment.x;
 snakeElemnet.style.gridRowStart = segment.y;
 snakeElemnet.classList.add('snake');
 gameBord.appendChild(snakeElemnet)

 }
)
 
 }