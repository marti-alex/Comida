class buho extends BaseClass {
  constructor(x, y, width, height){
    var options = {
      'restitution':5.0,
      'friction':1.0,
      'density':0.5
  }
    super(x,y,width,height, options);
    this.image = loadImage("sprites/perabuho.png");
  }

};
