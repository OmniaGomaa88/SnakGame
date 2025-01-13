let lastRenderTime = 0;
const snakSpeed = 1;

function main(currentTime){
 window.requestAnimationFrame(main)
 const secondSinceLastRender =(currentTime - lastRenderTime )/1000;
 if(secondSinceLastRender < 1 / snakSpeed) return;
 lastRenderTime = currentTime
    console.log(secondSinceLastRender);
}
window.requestAnimationFrame(main);