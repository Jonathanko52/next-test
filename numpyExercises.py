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
