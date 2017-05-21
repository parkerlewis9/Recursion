# Iterative Recursion

Things done iteratively can be done recursively and vice versa. Many people learn iteration over arrays or lists through for loops and while loops first, and therefore think it is always easier. There are some cases, however, where recursing through an array or list is actually much easier and more eloquent than a typical loop.

We will reimplement the native `Array.prototype.reduce()` function in JavaScript using recursion. The native function can do a bit more than the implementation given. This is intentional. We are learning how to solve problems recursively and trying to focus solely on this part of the implementation. Including things such as an optional initial value or passing the callback function the index and initial array are helpful when using `reduce`, but distract from our main purpose. We will implement the recursive aspect of the algorithm without small distrations, then  cover edge cases and added functionality if desired.

Notice again to opportunity to successively cut our data into smaller increments with each recursive call. Thus our base case will again be when the length of our input length is one or zero. The tactic worked well for `isaPalindrome` and will be helpful for this and the next algorithm as well.

##### A video dissecting this algorithm using a stack diagram will be provided in future versions of this repository.

Now it is your turn again. Check out the tests in `test/reduce.test.js`. Then implement `reduce` in `reduce.js` and run `npm test` to check your solutions. A solution is provided in `reduce_solution.js` if you have trouble.