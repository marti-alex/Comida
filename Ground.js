class Ground {
    constructor(x,y,width,height, visible) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visible = visible;
      World.add(world, this.body);
    }
    display(){


      if(this.visible == true){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
    }
  };
