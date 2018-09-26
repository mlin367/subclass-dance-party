var MakeCircleDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
<<<<<<< HEAD
  this.$node = $('<span class="squareDancer"></span>');
=======
  this.$node = $('<span class="dancer"></span>');
  this.step();
>>>>>>> 0524b2be867016298347e1ad9310fd4885a138a4
  this.counter = 0;
  this.timeBetweenSteps = Math.random() * 50;
  this.move = true;
  this.step();
};

MakeCircleDancer.prototype = Object.create(MakeDancer.prototype);
MakeCircleDancer.prototype.constructor = MakeCircleDancer;

MakeCircleDancer.prototype.step = function(){
  if(this.move){
    MakeDancer.prototype.step.call(this);

    if (this.counter >= 0 && this.counter < 1) {
      this.left -= 10;
      this.counter += 0.1;
    } else if (this.counter >= 1 && this.counter < 2) {
      this.top -= 10;
      this.counter += 0.1;
    } else if (this.counter >= 2 && this.counter < 3) {
      this.left += 10;
      this.counter += 0.1;
    } else if (this.counter >= 3 && this.counter < 4) {
      this.top += 10;
      this.counter += 0.1;
    } else {
      this.counter = 0;
      this.top -= 10;
      this.left += 10;
    }
    
    this.setPosition(this.top, this.left);
  }
<<<<<<< HEAD
=======
  console.log(this.left)
  
  this.setPosition(this.top, this.left);
>>>>>>> 0524b2be867016298347e1ad9310fd4885a138a4
}

MakeCircleDancer.prototype.lineUp = function(x) {
  this.setPosition(695, x);
  this.move = false;
};
