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

/*
  Since objects are unordered we do not have indexes like we do with arrays. We still can use
  brackets but instead of putting a index in we put in the key name(as a string) that we want the value of.
*/

console.log(frodo['race']);
console.log(frodo['hometown']);

// For nested objects we can use the same style as arrays

// console.log(frodo['hometown']['neighborhood']);
// console.log(frodo['friends'][3]);

/*
  We can also use this bracket notation to add key:value pairs to the object.
*/

frodo['ringBearer'] = true;
// console.log(frodo);
