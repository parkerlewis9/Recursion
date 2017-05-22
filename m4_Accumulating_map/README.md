# Accumulating Recursion

map() will return a new array with the modified numbers.

Notice here that we employ same tactic as we did in our boolean seeking recursion: calling the recursive step on smaller and smaller subsets the input until the input is empty.

Uses data from recursive calls in order to generate the next return (thus accumulating)

Can solve for one case (the addition one) can lead to solving for more complex ones (reducing an array of objects) without any or much more needed work.

The callback can be very complex, but the recursion is simple and elegent.


Mapping functions are useful when you want to transform all units of your data in the same way. Our function will take an array of numbers and a callback function to modify the numbers.


___________________________

0) [Recursion](https://github.com/parkerlewis9/Recursion)

1) [Mathematical Recursion](../m1_Mathematical_factorial)

2) [Boolean Seeking Recursion](../m2_BooleanSeeking_isaPalindrome)

3) [Iterative Recursion](../m3_IterativeCallback_reduce)

4) Accumulating Recursion
