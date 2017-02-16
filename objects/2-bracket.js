/*
  Since objects are unordered we do not have indexes like we do with arrays. We still can use
  brackets but instead of putting a index in we put in the key name(as a string) that we want the value of.
*/

let party = 'hometown';

var frodo = {
  name: 'Frodo',
  race: 'Hobbit',
  hometown: {
    continent: 'Middle Earth',
    neighborhood: 'The Shire',
    street: ['a','b','c']
  },
  isSmall: true,
  height: 40,
  friends: ['Sam', 'Pippin', 'Merry', 'Gandalf']
};

console.log(frodo['race']);
console.log(frodo[party]['continent']);

// For nested objects we can use the same style as arrays

console.log(frodo['hometown']['neighborhood']);
console.log(frodo['friends'][3]);

/*
  We can also use this bracket notation to add or change key:value pairs for the object.
*/

frodo['ringBearer'] = true;
console.log(frodo);

frodo['race'] = 'Dwarf';
console.log(frodo);

console.log(frodo['hometown']['street'][1]);

// Exercise: https://repl.it/Ffrz/6
