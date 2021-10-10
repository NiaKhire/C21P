class Rect {
    constructor(gx,gy,gw,gh){
        var ops = {
            isStatic : true
        }
        this.body = Bodies.rectangle(gx,gy,gw,gh , ops)
        this.w = gw;
        this.h = gh;
        World.add(world, this.body);
    }

    show(){
        var pos = this.body.position;
        push();
        translate(pos.x , pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill(130);
        rect(0 , 0 , this.w, this.h);
        pop();
    }
}