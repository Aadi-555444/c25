class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }
  display(){
    Matter.Body.rotate(this.body,angle)
    push();
     translate(this.body.position.x,this.body.position.y);
     rotate(angle);
     rect(0,0,this.w,this.h);
     pop();
     
     angle +=0.1;
   
  }

 
   
}
