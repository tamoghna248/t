class Paper{
    constructor(x,y,width,height){
        
        var options={
           
            restitution:0.3,
            friction:0.5,
           density:1.2,
           isStatic:false
        }
    this.body=Bodies.rectangle(x,y,width,height,options);

   this.height=height;
   this.width=width;

World.add(world,this.body);
    }
    display(){

        var pos=this.body.position;
        
        rectMode(CENTER);
        
        rect(pos.x,pos.y,this.width,this.height);
        
    
    }
    }