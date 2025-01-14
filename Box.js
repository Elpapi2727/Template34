class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.08,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var post = this.body.position
        var angle = this.body.angle;
        push();
        translate(post.x, post.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("withe");
        fill("blue");
        rect(0,0,this.width,this.height)
        pop();
      }
}