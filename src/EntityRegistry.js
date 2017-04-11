/*
  Entities should have a type (string), a layer (int),
  and a collisionClass ("enemy", or "environment")
*/

function EntityRegistry(){
  this.entities = [];
}

EntityRegistry.prototype.addEntity = function(e){
  this.entities.push(e);
}

EntityRegistry.prototype.removeEntity = function(e){
  var idx = this.entities.indexOf(e);
  this.entities.splice(idx, 1);
}

EntityRegistry.prototype.update = function(dx){
  this.entities.forEach(function(entity){
    entity.update(dx);
  });
}

EntityRegistry.prototype.render = function(ctx){
  var ctr = 0;
  for (var i = 0; i < 10 && ctr < this.entities.length; i++){
    this.entities.forEach(function(entity){
      if (entity.layer == i){
        entity.render(ctx);
        ctr++;
      }
    });
  }
}
