var MakeColorShiftDancer = function(top, left, timeBetweenSteps){
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.colorShift = true;
  this.$node.addClass('mouseover');
  this.step();
};

MakeColorShiftDancer.prototype = Object.create(MakeDancer.prototype);
MakeColorShiftDancer.prototype.constructor = MakeColorShiftDancer;

MakeColorShiftDancer.prototype.step = function(){
  if (this.colorShift) {
    // call step
    MakeDancer.prototype.step.call(this);
    // set a new color
    this.$node.css("border-color", this.getRandomColor());
  }
}

MakeColorShiftDancer.prototype.getRandomColor = function() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

MakeColorShiftDancer.prototype.lineUp = function(x) {
  this.setPosition(700, x);
};

MakeColorShiftDancer.prototype.stopColorShift = function() {
  this.colorShift = !this.colorShift;
  console.log(this.colorShift)
}


