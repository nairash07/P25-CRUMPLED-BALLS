class Dustbin{
	constructor(x, y, width, height) {
	  var options = {
		'restitution':0.0,
		'friction':1.0,
		'density':1.0,
		'isStatic':true
	  }
	  this.body = Bodies.rectangle(x, y, width, height, options);
	  this.width = width;
	  this.height = height;
	  World.add(world, this.body);
	}
	display(){
	  /*var angle = this.body.angle;
	  push();
	  translate(this.body.position.x, this.body.position.y);
	  rotate(angle);
	  pop();*/
	  var pos =this.body.position;
	  rectMode(CENTER);
	  fill(255, 255, 255, 0.5);
	  rect(pos.x, pos.y, this.width, this.height);
	}
  }