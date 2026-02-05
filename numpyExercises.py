import numpy as np

# 1. Using a NumPy function, how would you create a one-dimensional NumPy array of the numbers from 10 to 100, counting by 10?

np.arange(10,110,10)

# 2. How could you create the same NumPy array using a Python range and a list?

np.array([i for i in range(10,110,10)])


# 3. What happens if you pass no arguments to the np.array()?

# It raises a TypeError exception, complaining that the required argument, ‘object” is missing. 
# NumPy arrays can be constructed from an iterable, as we’ve shown. If passed a scalar such as an integer, 
# they’ll create a “zero-dimensional array” – that is, an array with only one element.

# 4. How might you create a NumPy array of the capital letters, A-Z?

from string import ascii_uppercase
np.array(list(ascii_uppercase))

# Alternative

np.array([chr(i) for i in range(ord('A'), ord('Z') + 1)])

# 5. How would you create a ten-element NumPy array object of all zeros?
np.zeros(10)

# 6. How would you find the data type given in #4.
# 7. What is the data type for #4?

# You can find the data type of a NumPy array using the dtype attribute.  
# In the case of np.zeros and similar functions, the data type is dtype('float64')
# For example

df = np.zeros(10)
df.dtype

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

np.ones((3,5))

# 13. Consider an array named “myarray” that is displayed as in the block below. 
# What value does the code myarray[1,2] return? A) 10 B) 7.
myarray = np.array([[ 1,  2,  3,  4],
       [ 5,  6,  7,  8],
       [ 9, 10, 11, 12]])

# 14. ndim is dimensions of array.

myarray.ndim

# 15.An array of three arrays of four elements each like this has twelve elements, of course. 
# How could you create a new array consisting of two arrays of six elements each?

original_array = np.arange(1, 13)
new_array = original_array.reshape(3, 4)

# 16. Given new_array from the last exercise, and the code x = new_array, you run the code:

x = new_array
x[0,0] = 42


# New variable still points to old array

# 17. How could you create a two-dimensional, 3 x 4 array (three arrays of four elements each) with random numbers from 1 to 10?

values = np.random.randint(1, 11, (3,4))

# 18. How could you create an array of the same size and shape as #17, filled with 64-bit integer zeros?

zeros = np.zeros(dtype=np.int64, shape=(3,4))

# 19. Given this code:

z_list = [z for z in range(0,5)]
y_list = [z_list for y in range(0,4)]
x_list = [y_list for x in range(0,3)]

x_array = np.array(x_list)

# Three dimensional array. ( 3 2-d arrays, each with 4 arrays with 5 elements)

# 20. Given x_array from #19, what is the value for x_array.ndim?

# Number of dimensions. Should return 3.

# 21. Given an array, named "arr”, that looks like:


'''
[[0, 1, 2],
       [3, 4, 5]]

display an array that looks like:

[[0, 3],
       [1, 4],
       [2, 5]]
'''

four_by_five = np.array([[ 1,  2,  3,  4,  5],
       [ 6,  7,  8,  9, 10],
       [11, 12, 13, 14, 15],
       [16, 17, 18, 19, 20]])

# 22. Write a statement that prints the first row. (It will be a five-element array).
four_by_five[0]

# 23. Write an expression to print the last row. (It will be a five-element array).

four_by_five[-1]

# 24. What does print(four_by_five[2,3]) display?

# Output: 14. 3rd array, 4th index.

# 25. What does print(four_by_five[3,2]) display?

# Output 18

# 26. How could you display the first column? It will be a (four-element array ending with 16.)

four_by_five[:,0]

# 27. What does print(four_by_five[:, 3:]) display

four_by_five[:,3:]

one_dim = np.arange(1,6)

# 28. What would be displayed by print(one_dim * 2)

one_dim * 2

# 29. What would be returned by this expression: one_dim + np.arange(5, 0, -1) ?

one_dim + np.arange(5, 0, -1)

# 30. How many zeros are in the array returned by one_dim - one_dim ?

# one_dim - one_dim = array of same length, but all 0's