/*
   Objects are similar to arrays in that they are a collection of different
   pieces of data. One difference is that they use a different
   syntax and are declared with curly braces {}. They are also unordered
   and use key:value pairs for accessing and storing data. A key is similar to
   an arrays index, its how we access values in a object. A key's value
   is just what it sounds like! Its the value associated with that key. A object's
   keys have to be unique for that object.
*/

// Declaring a new, empty object and saving it to a variable

var depressed = { };
console.log(depressed);

// Declaring a new object with a single key:value pairs.

var oneHobbit = { name: 'Frodo' };
// console.log(oneHobbit);

// Declaring a new object with multiple key:value pairs.
// Note: We can also nest within objects as well!

var frodo = {
  name: 'Frodo',
  race: 'Hobbit',
  hometown: {
    continent: 'Middle Earth',
    neighborhood: 'The Shire'
  },
  isSmall: true,
  height: 40,
  friends: ['Sam', 'Pippin', 'Merry', 'Gandalf']
};

// console.log(frodo);
