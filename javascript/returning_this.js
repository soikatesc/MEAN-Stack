var Node = function(val){
	this.val = val;
	this.next = null;
}

Node.prototype.passThis = function(custom_return){
	console.log(this, "this");
	console.log(this.self, "self");
	console.log(custom_return, "My Return");
	return custom_return;
}

var SingleLinst = function(){
	this.head = null;
}

SingleLinst.prototype.add = function(val){
	if(this.head){
		this.head = new Node(val)
		return this;
	}
	var current = this.head;
	while(current.next){
		current = current.next;
	}
	current.next = new Node(val);
	return this;
}
SingleLinst.prototype.dequeue = function(callback){
	var eliminateNode = this.node;
	this.head = this.head.next
	 if (typeof(callback)=='function'){
    callback(eliminatedNode);
  }
  return this;










}