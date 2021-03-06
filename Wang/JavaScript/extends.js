function Parent(name) {
  this.name = name;
}
Parent.prototype.sayName = function() {
  console.log('parent name:', this.name);
};
function Child(name, parentName) {
  Parent.call(this, parentName);
  this.name = name;
}
function create(proto) {
  function F() {}
  F.prototype = proto;
  return new F();
}
Child.prototype = create(Parent.prototype);
Child.prototype.sayName = function() {
  console.log('child name:', this.name);
};
Child.prototype.constructor = Child;

var parent = new Parent('father');
parent.sayName(); // parent name: father

var child = new Child('son', 'father');
