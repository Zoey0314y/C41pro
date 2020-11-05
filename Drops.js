class Drops{
    constructor(x, y,r) {
        var options = {
            friction : 0.1,
            restitution : 0.3,
        }
        this.r = 5;
        this.body = Bodies.circle(x, y, 5, options);
        World.add(world, this.body);
      }

      updateY(){
      if(this.body.position.y > height){
      Matter. Body.setPosition(this.body,{x : random(0,400), y : random(0,400) })
      }
      }
      display(){
            var pos = this.body.position;
            ellipseMode(RADIUS);
            strokeWeight(20);
            fill("blue");
            ellipse(pos.x,pos.y,this.r,this.r);
            
      }
}