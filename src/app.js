// var myArray = [
//     "Apples",
//     "Bananas",
//     "Pears"
//   ];
  
//   var randomItem = myArray[Math.floor(Math.random()*myArray.length)];

//   console.log(`randomItem`, randomItem)

  var a = ["Roger", "Russell", "Clyde", "Egbert", "Clare", "Bobbie", "Simon", "Elizabeth", "Ted", "Caroline"];

  function randomNoRepeats(array) {
    var copy = array.slice(0);
    return function() {
      if (copy.length < 1) { 
          copy = array.slice(0); 
        }
      var index = Math.floor(Math.random() * copy.length);
      var item = copy[index];
      copy.splice(index, 1);
      return item;
    };
  }
  
  var chooser = randomNoRepeats(['Foo', 'Bar', 'Gah', 'Foo1', 'Bar2', 'Gah3']);
  console.log(`randomItem`,chooser()); 
  console.log(`randomItem`,chooser()); 
  console.log(`randomItem`,chooser()); 
  console.log(`randomItem`,chooser()); 
  console.log(`randomItem`,chooser()); 
  console.log(`randomItem`,chooser()); 
  console.log(`randomItem`,chooser()); 