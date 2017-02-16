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
  One issues that can happen with objects is that you will get a object that you dont know what
  the keys are inside of it. This can be a problem since with objects you need a key name to use
  either bracket or dot notation. Luckily JavaScript comes with a built in method to get the all
  the keys of a object.
*/

Object.keys(frodo)

console.log(Object.keys(frodo));
console.log(Object.keys(frodo.hometown));

// Exercise: https://repl.it/FfsE/1
