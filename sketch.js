//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  dog=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
  database= firebase.database();
  foodStock=database.ref("Food");
  foodStock.on("value",readStock);
  createCanvas(500, 500);
  
}


function draw() {  
background(46,139,87);
  drawSprites();
  //add styles here
  if (keyWentDown(UP_ARROW)){
writeStock(foodS);

dog.addImage('dog',dogImg1.png); 
drawSprites();
writeStock(foodStock, database.ref("foodS"));
textSize(30);
fill('white');
stroke(5);

  }


}
//Function to read values from DB
function readStock (data){
foodS=data.val();
}
//Function to write values in DB
function writeStock (x){
if (x<=0){
  x=0;
}
else{
x=x+1;
}
  
database.ref('/').update({
Food:x
  })
}