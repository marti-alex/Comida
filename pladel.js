class platano extends BaseClass {
  constructor(x, y, width, height){
    var options = {
      'restitution':0.1,
      'friction':9.0,
      'density':1.0
  }
    super(x,y,width,height, options);
    this.image = loadImage("sprites/delplatano.png");
  }

};
