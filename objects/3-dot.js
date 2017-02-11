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
  With objects we actually have two ways to access values. The first being bracket notation
  and the second being dot notation. Dot notation tends to be what is most common for accessing
  objects, however there are many scenarios where dot notation cannot be used.
*/

// To access a key's value inside of an object the syntax is very simple.

// console.log(frodo.name);
// console.log(frodo.isSmall);
// console.log(frodo.hometown.neighborhood);
// console.log(frodo.friends[0]);

// We can also create a new key and assign its value using dot notation.

frodo.enemies = ['Gollum', 'Sauron', 'Saruman'];

// console.log(frodo);

// We can also delete a key:value pair using the JavaScript keyword delete

delete frodo.enemies;

// console.log(frodo); 
