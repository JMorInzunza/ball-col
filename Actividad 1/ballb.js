class ballb{

    constructor(x,y,d,c){
        this.x=x
        this.y=y
        this.d=d
        this.c=c
        this.speed=10
        this.dirX=this.dir();
        this.dirY=this.dir();
        this.arr;
        this.aux;
    }

    draw()
    {
        push()
        strokeWeight(3)
        fill(this.c)
        ellipseMode(CENTER)
        ellipse(this.x, this.y, this.d, this.d)
        pop()
        this.move()      
    }

    move()
    {
        if(this.x+floor(this.d/2)+this.dirX+this.speed>=width || 
            this.x-floor(this.d/2)+this.dirX-this.speed<=0)
                this.dirX=-this.dirX;

        if(this.y+floor(this.d/2)+this.dirY+this.speed>=height ||
            this.y-floor(this.d/2)+this.dirY-this.speed<=0)
                this.dirY=-this.dirY
        
        if(this.dirX==-1 )
            this.x+=this.dirX-this.speed
        else
            this.x+= this.speed +this.dirX
        
        if(this.dirY==-1)
            this.y+=this.dirY-this.speed
        else       
            this.y+=this.speed+this.dirY
    }

    dir()
    {
        return floor(random(2)) * 2 - 1
    }

    col(){

        for(let i=0;i<this.arr.length;i++)
        {
            if(i!=this.aux)
            {
                var dx = this.x - this.arr[i].x;
                var dy = this.y - this.arr[i].y;
                var distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < floor(this.d/2) + floor(this.d/2)) {    
                    this.arr[i].dirX=-this.arr[i].dirX
                    this.arr[i].dirY=-this.arr[i].dirY
                    this.dirX=-this.dirX
                    this.dirY=-this.dirY
                }
            }
        }
    }
}