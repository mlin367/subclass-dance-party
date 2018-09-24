var MakeCircleDancer = function(top, left, timeBetweenSteps){
    MakeDancer.call(this);
    this.oldStep = this.step;
};

MakeCircleDancer.prototype = Object.create(MakeDancer.prototype);
MakeCircleDancer.prototype.constructor = MakeCircleDancer;

MakeCircleDancer.prototype.step = function(){
    this.oldStep();
}