class Dustbin{
    constructor(x,y,width,height){
        
        var options={
          
           restitution:0.3,
           //isStatic:true
          friction:10000000000000,
          density:20
       }
    this.body=Bodies.rectangle(x,y,width,height,options);

   this.height=height;
   this.width=width;

World.add(world,this.body);
    }
    display(){
        push ()
        var pos=this.body.position;
        rectMode(CENTER);
        fill ("white")
        
        
        rect  (pos.x,pos.y,this.width,this.height);
        pop ()
    
    }
    }