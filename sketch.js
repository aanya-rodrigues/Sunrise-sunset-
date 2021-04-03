const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var time;
function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);


    Engine.update(engine);

    noStroke();
        textSize(35)
        fill("white")
        text("Time:  " + hour, 600, 50)


}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<0700){
        bg = "sunrise1.png"
    }
    else if(hour>=0700 && hour<0800){
        bg = "sunrise2.png";
    }
    else if(hour>=0800 && hour<0900){
        bg = "sunrise3.png";
    }
    else if(hour>=0900 && hour<1000){
        bg = "sunrise4.png";
    }
    else if(hour>=1000 && hour<1100){
        bg = "sunrise5.png";
    }
    else if(hour>=1100 && hour<1400){
        bg = "sunrise6.png";
    }
    else if(hour>=1400 && hour<1500){
        bg = "sunset7.png";
    }
    else if(hour>=1500 && hour<1600){
        bg = "sunset8.png";
    }
    else if(hour>=1600 && hour<1700){
        bg = "sunset9.png";
    }
    else if(hour>=1700 && hour<1800){
        bg = "sunset10.png";
    }
    else if(hour>=1800 && hour<1900){
        bg = "sunset11.png";
    }
    else{
        bg = "sunset12.png";
    }

    

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}


