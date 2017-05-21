# Mathematcial Recursion

Of the types of problems we will encounter, these algorithms solve the most theoritcal by nature. Algorithms which return the factorial of a number or the value at an index of the Fibonacci sequence are examples of mathematical formulas in code. We will use the definition of a factorial function to give us an approach to solving all types of recursive problems.

Take a look a these statements:

```
5! = 120
5! = 5 x 4 x 3 x 2 x 1
5! = 5 x 4!
p! = p x (p - 1)!
```

These lines tell us that 5! - read "five factorial" - is equal to five times all of the numbers that come before it multiplied together. Furthermore, it gives us a general definition for any number's factorial. 

We shouldn't be satisfied yet though. Looking at the last line of the above section, we could easily find ourself in this situation:

```
3! = 3 x (2)!
2! = 2 x (1)!
1! = 1 x (0)!
0! = 0 x (-1)! -- Negatives??

```

What would it mean to take a negative factorial? Would you multiply the number by it's preceding value, another negative number? That would mean every other negative factorial would be positive. That doesn't make sense prima facie. Furthermore, where would it end?

This shows us the importance of an element that every recursive definition needs: a __base case__ .

Our base case for factorials to get off the ground is that `0! = 1`. Given this fact, we can make correct assertions about how our program will behave. 

These assertions ground our recusion at an ending point from which we can do pretty amazing things. This module may seem trivial, but soon we will tune our base cases to solve more interesting problems.

For our algorithm to do anything, it also needs a __recursive step__. This is where we actually do the action again -- p! = p x __(p -1)!__ . 

Our recursive step in programming is calling our function from within our function. It is therefore helpful to have a visual represenation of a language's call stack which registers function calls. This is where the magic is really happening with recursion, so we will make a visual representation of the stack and follow its function calls to create new stack frames as well as the function's return statements which bring us back closer to our ultimate goal.

##### In a future version of this repository a video walkthrough of drawing the stack diagram will be at the end of this file. 

Important concepts to to take away when writing stack diagrams:

- Begin with the end

    - Establish in your mind, or by writing all (empty) stack frames, the base case for your algorithm. Begin by thinking, "What do I need to return from my base case to begin building my final return value?""

- Interpret line by line

    - All of these alogorithms can be be solved with relatively little code. When thinking through possible code or checking code you think is correct, transfer all relevant variables and function calls to your diagram. Keep track of changes and returns to function calls in each stack frame.


Now write your implementation of the `factorial` function found in `factorial.js`. Tests are provided in `test/factorial.test.js`. Take a look at these to get an idea of the inputs and outputs of the algorithm. Then, enter `npm test` into your terminal to check your solution. Refactor until your function passes the provided tests. An example solution can be found in `isaPalindrome_solution.js`.

___________________________

0) [Recursion](../README.md)

1) Mathematical Recursion

2) [Boolean Seeking Recursion](../m2_BooleanSeeking_isaPalindrome)

3) [Iterative Recursion](../m3_IterativeCallback_reduce)

4) [Accumulating Recursion](../m4_Accumulating_map)

