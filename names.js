let names = ['jon', 'rebecca', 'rita'];
// console.log(`Hello ${names[0]}, ${names[1]}`);

function sayNames(){
  for (var i = 0; i < names.length; i++) {
    console.log(`Hello ${names[i]}`);
  }
};
sayNames();
