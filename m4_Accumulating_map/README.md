# Accumulating Recursion

In this final module, we will reimplement JavaScript's native `Array.prototype.map()` function. We will give the function an array and a callback function as arguments. The function will return a new array containing the output of calling the function on each element.

Mapping functions are useful when you want to transform all units of your data in the same way. Part of their beauty and usefulness is that the callback to modify the data can be very complex, but the recursion is simple and elegent.

Notice here that we employ the same tactic as we did in our Boolean Seeking and Iterative Recursion: calling the recursive step on smaller and smaller subsets of the input until the input is empty. This function also has the aspect of returning data from previous recursive calls in order to generate the next return value, thus causing accumulation.

We will implement `map` for one case (a simple addition callback) which can lead to solving for more complex ones (reducing an array of objects) without any or much more needed work. That however will be left as an exercise, as it is another case of distraction from the concern of this repository: recursion.

Implement `map` in `map.js`. Check your solution by running the tests in `test/map.test.js` using `npm test`.



___________________________

0) [Recursion](https://github.com/parkerlewis9/Recursion)

1) [Mathematical Recursion](../m1_Mathematical_factorial)

2) [Boolean Seeking Recursion](../m2_BooleanSeeking_isaPalindrome)

3) [Iterative Recursion](../m3_IterativeCallback_reduce)

4) Accumulating Recursion
