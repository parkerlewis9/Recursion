# Iterative Recursion

Things done iteratively can be done recursively and vice versa. Many people learn iteration over arrays or lists through for loops and while loops first, and therefore think it is always easier. There are some cases, however, where recursing through an array or list is actually much easier and more eloquent than a typical loop.

We will reimplement the native `Array.prototype.map()` function in JavaScript using recursion. Mapping functions are useful when you want to transform all units of your data in the same way. Our function will take an array of numbers and a callback function to modify the numbers.