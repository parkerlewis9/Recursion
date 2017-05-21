# Boolean Seeking Recursion

Some problems that ask us to determine if something is true or false are easily solved recursively. The example we will explore will ask us to determine if a word is or is not a palindrome. 

In solving this we will employ a useful tactic in many recursive solution. In each recursive step you should be splitting your data into smaller subunits. Recursive calls continue in this fashion until the base case is reached or, in this case, you find the word is not a palindrome. 

Note the advantage we now have by recoginizing the opportunity to use this tactic. We are setting up and controlling the recusion by deciding that the times we recurse is defined by the length of the input. We have a place to springboard the rest of our thinking from. When the input's length is one or zero, we know we have searched through all of the given data. We can now work with the stack to visualize the recursion in progress.

##### A video dissecting this algorithm using a stack diagram will be provided in future versions of this repository.

Check the desired inputs and outputs to the `isaPalindrome` function found in `test/isaPalindrome.test.js` file and run `npm test` to check your solution. A solution is provided in `isaPalindrome_solution.js`.
