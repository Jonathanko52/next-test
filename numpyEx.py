import numpy as np
import re
# 1. Using a NumPy function, how would you create a one-dimensional 
# NumPy array of the numbers from 10 to 100, counting by 10?


# print(np.arange(10,110,10))

# 2. How could you create the same NumPy array using a Python range and a list?

target_array = np.array([], dtype=int)

for i in range(1,11):
  target_array = np.append(target_array, i * 10)

target_arrat = np.array([i for i in range(10,110,10)])

# 3. What happens if you pass no arguments to the np.array()?

# print(np.array())

# 4. How might you create a NumPy array of the capital letters, A-Z?
from string import ascii_uppercase

np.array(list(ascii_uppercase))


# 5. How would you create a ten-element NumPy array object of all zeros?

np.zeros(10)

# 6. How would you find the data type given in #4.

# 7. What is the data type for #4?

# You can find the data type of a NumPy array using the dtype attribute.  
# In the case of np.zeros and similar functions, the data type is dtype('float64')
# For example

df = np.zeros(10)
df.dtype

df.dtype
print(df)

# 8. What function would return the same number of elements, but of all ones?

np.ones(10)

# 9. How could you create a ten-element array of random integers between 1 and 5 (inclusive)?

np.random.randint(1, 6, 10)

# 10. How can you create a normal distribution of 10 numbers, centered on 5?

np.random.normal(5, 1, 10)

# 11. What code would create an array of 10 random numbers between zero and one?

np.random.rand(10)

# 12. Consider the code: np.ones((3,5)). Does this A) create an array of three arrays containing 
# five elements each or B) create an array of five arrays containing three elements each?

# Answer: Three arrats, 5 values each.

# Needs to be a tuple?

# 13. Consider an array named “myarray” that is displayed as in the block below. 
# What value does the code myarray[1,2] return? A) 10 B) 7.

# 14. ndim is dimensions of array.

# 15.An array of three arrays of four elements each like this has twelve elements, of course. 
# How could you create a new array consisting of two arrays of six elements each?

# 16. Given new_array from the last exercise, and the code x = new_array, you run the code:

# 17. How could you create a two-dimensional, 3 x 4 array (three arrays of four elements each) with random numbers from 1 to 10?

# 18. How could you create an array of the same size and shape as #17, filled with 64-bit integer zeros?

# 19. Given this code:

# 20. Given x_array from #19, what is the value for x_array.ndim?

# 21. Given an array, named "arr”, that looks like:
'''
[[0, 1, 2],
       [3, 4, 5]]

display an array that looks like:

[[0, 3],
       [1, 4],
       [2, 5]]
'''

# 22. Write a statement that prints the first row. (It will be a five-element array).

# 23. Write an expression to print the last row. (It will be a five-element array).

# 24. What does print(four_by_five[2,3]) display?

# 25. What does print(four_by_five[3,2]) display?

# 26. How could you display the first column? It will be a (four-element array ending with 16.)

# 27. What does print(four_by_five[:, 3:]) display

# 28. What would be displayed by print(one_dim * 2)

# 29. What would be returned by this expression: one_dim + np.arange(5, 0, -1) ?

# 30. How many zeros are in the array returned by one_dim - one_dim ?

# 31. What is the result of one_dim > 2 ?
# [1 2 3 4 5]
# [False False  True  True  True]

# 32. For NumPy arrays, logical operations are done with the operators “&” and “|”, rather than the usual Python “and” and “or”. Given that, what would be the result of this expression?
# (one_dim > 4) | (one_dim == 1)

# 33. What is the result of this expression: -one_dim

# 34. np.absolute take the absolute value of each element. Given that, what would the result be of the following expression:

# 35. This exercise shows the use of one of NumPy’s sequence functions, which operate on the whole array rather than per element. 

# 36. Break out those pictures of the unit circle for this one, for some trigonometry so simple an ex-history major can do it – 

# 37. For the defined above in #36, what are the values for:

# 38. You’re asked to save the following two arrays as is to a file, 
# “data.npz”. The arrays should be named as they are here in the file. How could you do it?

# 39. Assuming you saved the file, “data.npz”, in 38, how could you
#  reload the arrays into two new variables: people2 and languages2?

# 40. Given
# arr = np.arange(1,13).reshape(3,4)
# How could you save it to a CSV file, “myarray.csv”.

# 41. Given the CSV file saved in 40, how could you load it back into a variable, arr2?


# STRING STUFF

lumberjack = np.array("I'm a lumberjack and I'm OK I sleep all night and I work all day".split(" "))
lumberjack


# 43. What would you expect the value of print(np.char.capitalize(lumberjack)[2]) to display?


# 44. How could you surround each string with an initial and final asterisk character (*)?


# 45. The function, np.where, can be used to create an array of indexes that can be used to index 
