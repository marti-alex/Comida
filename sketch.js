const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var backgroundImg;



function preload() {
   
}

function setup(){
    var canvas = createCanvas(1500,500);
    engine = Engine.create();
    world = engine.world;

    tomate = new tomatoeA(1001,160);

    lanza = new resortera(tomate.body, {x: 1010, y: 155})
    ground = new Ground(600,height,2000,20, true);
    platform = new Ground(1000, 165, 200, 20, true);

    sandia = new elefant(1030, 169 ,350,260);

    

    // araña = new hamburguesa( 450, 160, 270, 180);
    // camaron = new mono( 1005, 155, 180, 290);

    // cocodrilo = new taco( 1005, 155, 390, 290);
    // delfin = new platano( 520, 185, 205, 205);
    // pera = new buho( 620, 185, 170, 170);
    puerrovb = new puerroah( 995, 165, 150, 150);

    anemigo = new sentinelaa();


}

function draw(){
    background("back");
    Engine.update(engine);
    strokeWeight(4);
 
    ground.display();
  
    tomate.display();
    platform.display();

    puerrovb.display();
    sandia.display();
    anemigo.display();
    lanza.display();
    
    // araña.display();
    // camaron.display();
    // cocodrilo.display();
    // delfin.display();
    // pera.display();

    if(isTouching (tomate,anemigo)){
        console.log("booom")
    }

    createenemy ();

        
}

    function createenemy(){

        

    }

    function mouseDragged(){
        Matter.Body.setPosition(tomate.body, {x: mouseX, y: mouseY})
    }

    function mousePressed(){
        Matter.Body.setPosition(tomate.body, {x: mouseX, y: mouseY})
    }

    function mouseReleased(){
    
        lanza.despegue();
    }

    function isTouching(object1,object2){
        if (object1.body.position.x - object2.body.position.x < object2.width/2 + object1.width/2
          && object2.body.position.x - object1.body.position.x < object2.width/2 + object1.width/2
          && object1.body.position.y - object2.body.position.y < object2.height/2 + object1.height/2
          && object2.body.position.y - object2.body.position.y < object2.height/2 + object1.height/2) {
          
          return true;
        }
        else {
          return false;
        } 
      }
