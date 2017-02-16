var moreItems = ['Squirtle', 4, false, '🐴', true, ['Bulbasaur', 'Ivysaur', 'Venusaur', ['stuff']]];


/*
  We can also directly access any element inside of an array by using the
  index of that element. We do this using square bracket notation at the end
  of our array.
  Arrays are zero-indexed, meaning that the first item in an array is
  at index 0, the second item is at index 1, etc.
*/

console.log(moreItems[0]);
// console.log(moreItems[1]);
// console.log(moreItems[2]);
// console.log(moreItems[3]);
// console.log(moreItems[4]);
// console.log(moreItems[5]);

// We can also put other collections inside of an array. Above we have an array inside
// another array. This is called nesting and can become quite complex.

console.log(moreItems[5][2]);

// We can also reassign what is stored at any given index using the same
// bracket notation.

console.log(moreItems);

moreItems[3] = '🦄';
moreItems[5][3][1] = 'more stuff'

console.log(moreItems);

// Exercise: https://repl.it/Ffad/2
