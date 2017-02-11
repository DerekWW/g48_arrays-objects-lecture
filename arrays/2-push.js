var moreItems = ['Squirtle', 4, false, '🐴', true];


// We can also add and remove items from the beginning or end of an
// array using native array methods.

// For the end of the array we can use the push and pop array methods.

moreItems.push('Pikachu');
console.log(moreItems);

moreItems.pop();
// console.log(moreItems);

// Fun Fact: When using pop or shift to remove an element we can store
// the element to a variable.

var lastItem = moreItems.pop();

// console.log(moreItems);
// console.log(lastItem);

// Exercise: https://repl.it/Ff9Y/1
