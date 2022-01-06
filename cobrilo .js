class taco extends BaseClass {
  constructor(x, y, width, height){
    var options = {
      'restitution':0.2,
      'friction':6.0,
      'density':3.0
  }
    super(x,y,width,height, options);
    this.image = loadImage("sprites/tacodrilo.png");
  }

};
