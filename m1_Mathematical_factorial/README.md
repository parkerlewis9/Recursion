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

Our recursive step in programming is calling our function from within our function. It is therefore helpful to have a visual represenation of a language's call stack which registers function calls. This is where the magic is really happening with recursion, so we will make a visual representation of the stack and follow its function calls to create new stack frames as well its return statements which bring us back closer to our ultimate goal.




Learning how to recurse first, then we can cover edge cases and added functionality.