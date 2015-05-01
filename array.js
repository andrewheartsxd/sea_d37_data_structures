//test array for duplicates
function testDupe(array) {
  var seen = {};
  for(var i = 0; i < array.length; i++) {
    if(seen[array[i]]) {
      return true;
    }
    seen[array[i]] = true; 
  }
  return false;
}

//console.log(testDupe([0, 1, 2, 3, 4, 2]));
//console.log(testDupe([0, 1, 2, 3, 4]));

//implement push o(1)
function push(array, value) {
  array[array.length] = value;
}

//implement unshift o(n)
function unshift(array, value) {
  for(var i = array.length; i > 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = value;
  console.log(array);
}

//test if object property is inherited
function inherited(obj, property) {
  return !!(obj[property] && !obj.hasOwnProperty(property)); 
}

//var o = new Object();
//o.prop = "exists";
//
//console.log(inherited(o, 'prop'));
//console.log(inherited(o, 'toString'));
