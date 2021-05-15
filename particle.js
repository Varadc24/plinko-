class Particle{
    constructor(x,y,r){
        var options = {
            restitution:0.4
           

        }
        this.r = r;
        this.body = bodies.cicle(x,y,this.r,options);
        this.color = (random(0, 225),random(0, 225),random(0, 225))
        world(world,world.add);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle
         push();
         translate(pos.x,pos.y);
         rotate(angle);
        ellipseMode(RADIUS);
        fill("pink");
        ellipse = (pos.x,pos.y,r);
    }
};