var MakeCircleDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.step();
  this.counter = 0;
  // this.leftCounter = 0;
  // this.rightCounter = 0;
  // this.downCounter = 0;
  // this.upCounter = 0;
};

MakeCircleDancer.prototype = Object.create(MakeDancer.prototype);
MakeCircleDancer.prototype.constructor = MakeCircleDancer;

MakeCircleDancer.prototype.step = function(){
  MakeDancer.prototype.step.call(this);
  //move position

  /*
  */
  let randomInt = Math.random() * 100;
  console.log(typeof this.top)
  if (this.counter <= 500) {
    this.top = this.top ** 2;
    this.left = this.left ** 2;
    this.counter += 100;
  } else {
    this.top = this.top - 1;
    this.left = this.left - 1;
    this.counter -= 100;
  }

  // if(this.rightCounter <= 500){
  //   this.left = this.left + 1;
  //   this.rightCounter += 100;
  // } else if(this.downCounter <= 500){
  //   this.top = this.top - 1;
  //   this.downCounter += 100;
  // } else if(this.leftCounter <= 500){
  //   this.left = this.top - 1;
  //   this.leftCounter += 100;
  // } else if(this.upCounter <= 500){
  //   this.top = this.top + 1;
  //   this.upCounter += 100;
  // } 


  this.setPosition(this.top, this.left);
}

