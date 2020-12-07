class Paper
{
    constructor(x,y,radius)
    {
        var options = 
        {
            'isStatic': false,
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }
        this.body = Bodies.circle(x, y, radius,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body)
    }
    display(){
    push();
    rectMode(CENTER)
    translate(this.body.position.x, this.body.position.y);
    strokeWeight(2)
    stroke("white")
    fill(0,0,0)
    ellipse(0,0,this.radius)
    pop()
    }
}