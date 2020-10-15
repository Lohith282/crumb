class Paper{
 constructor(x,y,r){
    
    var options={
    isStatic:false, 
    restitution:0.3, 
    friction:0.5, 
    density:1.2
 }
 this.x=x
 this.y=y
 this.r=r
 this.Body=Bodies.circle(this.x,this.y,this.r/2,options);
 World.add(world,this.Body)
 }
 display(){
     push();
     translate(this.Body.position.x,this.Body.position.y)
     strokeWeight();
     ellipse(0,0,this.r,this.r);
     pop();
     }
}