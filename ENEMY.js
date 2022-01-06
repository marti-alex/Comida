class sentinelaa  {

  constructor(){

    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }

    this.body = Bodies.rectangle(-1, 400, 100, 200, options);
    this.width = 100;
    this.height = 200;
  
    World.add(world, this.body);

    this.image = loadImage("sprites/tacodrilo.png");
  }

  display(){

    Matter.Body.setPosition( this.body, {x: this.body.position.x + 0.8, y: this.body.position.y })

    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();

  }

}
