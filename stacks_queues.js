//reverse array using another array (as though it were a stack)
function reverse(array) {
  var reverseArray = [];
  var length = array.length;
  
  for(var i = 0; i < length; i++) {
    reverseArray.push(array.pop());
  }
  array = reverseArray;
  return array;
}

var myArray = [1, 2, 3, 4, 5];
//console.dir(reverse(myArray));

//implement stack
function Stack() {
  var array = [];
  
  this.push = array.push.bind(array);
  this.pop = array.pop.bind(array);
  this.peek = function () {
    return array[array.length - 1];
  };
}

//var myStack = new Stack();
//myStack.push(1);
//myStack.push(2);
//myStack.push(3);
//console.log(myStack.peek());

//reverse an array using a Stack (no .length);
function reverseArray(array) {
  var myStack = new Stack();
  var i = 0;
  var j = 0;
  while (array[i]) myStack.push(array[i++]);
  while (myStack.peek()) array[j++] = myStack.pop();
  return array;
}

//var array2 = [1, 2, 3, 4, 5];
//console.log(reverseArray(array2));

//implement queue
function Queue() {
  var array = [];

  this.enqueue = array.push.bind(array);
  this.dequeue = array.shift.bind(array);
  this.hasNext = function () {
    return !!(array.length); 
  };
}

//implement dequeue as O(1)
function Queue() {
  var array = [];

  this.enqueue = array.push.bind(array);
  this.dequeue = array.shift.bind(array);
  this.hasNext = function () {
    return !!(array.length); 
  };
}


