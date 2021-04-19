var doggy,count
var doggyi,food
var dog

function preload()
{
	doggyi = loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(800, 700);
  
  doggy = createSprite(400,350,20,20)
  doggy.addImage(doggyi) 
  doggy.scale = 0.5

  database = firebase.database()
  var dog = database.ref("Food")
    dog.on("value",read,showerror)

}


function draw() {  

  background("white")
 
  text (  food , 200,350)

  drawSprites();
  
  if(keyDown(UP_ARROW)){
    food = food - 1
    updatedatabase()
}

}
function read(data)
{
 count = data.val()
 food = count.Count
 console.log(food)
}
function showerror()
{
 
}
function updatedatabase()
{
 database.ref("Food").update({
     Count : food

 })
}



