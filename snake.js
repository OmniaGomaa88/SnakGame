import {getInputDirection } from "./input.js"
export const snakSpeed = 1;
 //veriable as arry to make the snake as points x and y in the gridbord
const snakeBody =[
    {x:10, y:11}
    
];

export function update(){
    let inputDirection = getInputDirection();
 for (let i = snakeBody.length -2 ; i>=0;i--){
    snakeBody[i+1]={ ...snakeBody[i]};
 }
 snakeBody[0].x +=inputDirection.x;
 snakeBody[0].y +=inputDirection.y;
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