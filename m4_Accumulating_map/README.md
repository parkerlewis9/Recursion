# Accumulating Recursion

map() will return a new array with the modified numbers.

Notice here that we employ same tactic as we did in our boolean seeking recursion: calling the recursive step on smaller and smaller subsets the input until the input is empty.

retains data as its recursive calls come off the stack.

Slight differences from original `Array.prototype.reduce` (doesn't allow initial value or give you index, and array) from original. They would be added deatails that would distract from the core concepts of recursion. They could always be added in later -- as an exercise. Learning how to recurse first, then we can cover edge cases and added functionality.

Can solve for one case (the addition one) can lead to solving for more complex ones (reducing an array of objects) without any or much more needed work.

The callback can be very complex, but the recursion is simple and elegent.