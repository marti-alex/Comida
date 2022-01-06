class puerroah extends BaseClass {
  constructor(x, y, width, height){
    var options = {
      'restitution':1.0,
      'friction':1.0,
      'density':0.3
  }
    super(x,y,width,height, options);
    this.image = loadImage("sprites/puerro.png");
  }

};
