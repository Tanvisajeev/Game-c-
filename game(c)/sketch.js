
 var boy,boyIMG,coin,coinIMG,bg,bgIMG
function preload(){
boyIMG=loadImage("Images/boy.png")
coinIMG=loadImage("Images/coin.png")
bgIMG=loadImage("Images/background copy.png")
}
function setup(){
createCanvas(windowWidth,windowHeight)
bg=createSprite(width/2,height/2,100,100)
bg.addImage(bgIMG)
bg.velocityX=-3
bg.scale=3


}
function draw(){
    background("#588BAE")
//   button=createImg("Images/play.png")
// button.position(width/2-150,height/2-300)
//  button.mousePressed(play)
if(bg.x<width/2-200){
    bg.x=width/2
}
drawSprites();
}
function play(){

}
