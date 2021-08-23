class AlienBox{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.08,
            'friction':1.0,
            'isStatic': true,
            'density':1.0
        }
        this.image = loadImage("descarga.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}