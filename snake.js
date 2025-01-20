export const snakSpeed = 1;
 //veriable as arry to make the snake as points x and y in the gridbord
const snakeBody =[
    {x:10, y:11},
    {x:11, y:11},
    {x:12, y:11},
    {x:13, y:11},
    {x:14, y:11}
];

export function update(){
 for (let i = snakeBody.length -2 ; i>=0;i--){
    snakeBody[i+1]={ ...snakeBody[i]};
 }
 snakeBody[0].x +=0;
 snakeBody[0].y +=1;
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