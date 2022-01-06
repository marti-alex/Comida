class hamburguesa extends BaseClass {
  constructor(x, y, width, height){
    var options = {
      'restitution':0.8,
      'friction':3.0,
      'density':7.0
  }
    super(x,y,width,height, options);
    this.image = loadImage("sprites/aranburguesa.png");
  }

}; 
