 class Paper {
    constructor(x, y,r) {
      var options = {
          isStatic : false,
          restitution:0.3,
          friction:0.5,
          density:1.9,
      }
      this.y=y;
      this.x=x;
      this.r=r;
      this.body = Bodies.circle(this.x, this.y, this.r/2, options);
      
      
     
       World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      //push()
      //translate(pos.x,pos.y)

        ellipseMode(CENTER)
        
        fill("purple")
        ellipse(pos.x, pos.y, this.r)
      ///pop()
    }
  };
  