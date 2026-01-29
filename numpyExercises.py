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

print(np.random.rand(10))