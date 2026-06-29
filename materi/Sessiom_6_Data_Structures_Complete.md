# Data Structures - Complete Lecture Material

**Subject:** ISYS6898003 - Algorithm and Programming  
**Year:** 2026

## Table of Contents
1. [Tuple](#tuple)
2. [Set](#set)
3. [Dictionary](#dictionary)
4. [List - Basics](#list---basics)
5. [List - Indexing and Slicing](#list---indexing-and-slicing)

---

# Tuple

## Definition
A tuple is a variable used to store multiple items.

**Characteristics:**
- Ordered: The order of the tuple will follow the order at declaration
- Immutable: The contents of a tuple cannot be added, reduced, or replaced
- Allow Duplicates: The contents of a tuple can have the same value

## Syntax
```python
nametuple = (data0, data1, ..., datan)
```

## Example
```python
my_Tuple = ("HIT", 1, True)
```
Note: Data types can be different. Printing and indexing work the same as with lists.

## Operations in Tuple

### How to Update Tuple
Since tuples are immutable, but lists are mutable:
1. Change tuple to list
2. Perform list operations
3. Change list back to tuple

```python
x = ("apel", "pisang", "ceri")
y = list(x)
y[1] = "kiwi"
y.append("Durian")
x = tuple(y)
```

### Unpacking in Tuple
Placing tuple data into variables.

```python
mahasiswa = ("Ajax", 2902611111, "LXZ300", True)
nama, nim, kelas, status = mahasiswa
```

### .index() in Tuple
Finding the index of a value. Returns an int if found.

```python
mahasiswa = ("Ajax", 2902611111, "LXZ300", True)
x = mahasiswa.index("Ajax")
```

Note: .index() also exists in lists.

### .count() in Tuple
Finding how many times a value appears in the tuple. Returns an int.

```python
mahasiswa = ("Ajax", 2902611111, "LXZ300", True)
x = mahasiswa.count("Ajax")
```

Note: .count() also exists in lists.

### in in Tuple
Checking if a value exists in the tuple. Returns a bool.

```python
mahasiswa = ("Ajax", 2902611111, "LXZ300", True)
x = "Ajax" in mahasiswa
```

Note: in also works for lists, sets, and dictionaries.

## Small Tuple Exercise
Given: `mahasiswa = ("Ajax", 2902611111, "LXZ300", True)`

1. Check if "2902611111" is in mahasiswa
2. Find the index of "Ajax"
3. Unpack mahasiswa into four variables and print one variable

---

# Set

## Definition
A set is a variable used to store multiple items.

**Characteristics:**
- Unordered: The order of the set will be "random" and elements within the set have no index
- Mutable: The contents within a set can be added or removed (cannot be updated directly), and elements can only contain IMMUTABLE elements (such as int, string, tuple, bool, float)
- No Duplicates: The set will immediately discard duplicate values
- Non-subscriptable: Set indexes cannot be accessed with []

## Syntax
```python
namaset = {data1, data2, data3, ..., datan}
```

## Example
```python
my_Set = {1, 2, 3, "Hello", (True, False)}
```
Note: Data types can be different, but must be IMMUTABLE.

## Understanding Set Characteristic

### Unordered
```python
my_Set = {5, 1, 100, 42, 7, 3}
print(my_Set)
# Output: {1, 3, 100, 5, 7, 42}  (different order)

# This will cause error (non subscriptable):
print(my_Set[1])  # TypeError
```
Conclusion: Don't depend on position to access/work with elements in a set.

### Mutable but element must be immutable
```python
# Valid (all elements are IMMUTABLE):
my_Set = {5, 1, (1,2,3), 42, 7, 3}

# Error (list is MUTABLE):
my_Set = {5, 1, [1,2,3], 42, 7, 3}  # TypeError
```

### No duplicates
```python
my_Set = {1, 1, 1, 2, 2, 3, 4, 5, 5}
print(my_Set)
# Output: {1, 2, 3, 4, 5}  (duplicates removed)
```

## Operations in Set

### .add()
Adding an element to a set.

```python
my_Set = {1, 2, 3}
my_Set.add(4)
```

### .remove()
Removing an element from a set based on value.

Note: If the value doesn't exist, .remove() will cause an error.

```python
my_Set = {1, 2, 3}
my_Set.remove(1)
```

### .discard()
Removing an element from a set based on value.

Note: Unlike .remove(), if the data doesn't exist and you use .discard(), there will be no error.

```python
my_Set = {1, 2, 3}
my_Set.discard(1)
```

### Update in Set
Implicitly by removing then adding.

```python
my_Set = {1, 2, 3}
my_Set.discard(1)
my_Set.add(11)
# Result: {2, 3, 11} (replacing 1 with 11)
```

### .pop()
Removing an element randomly.

```python
my_Set = {1, 2, 3}
my_Set.pop()
```

### .clear()
Removing all elements in the set.

```python
my_Set = {1, 2, 3}
my_Set.clear()
```

## Small Set Exercise
Given: `my_Set = {1, 1, 1, 2, 5, 3}`

1. Print the set (observe duplicate handling)
2. Try to access my_Set[1] (observe error)
3. Remove element 1 from the set
4. Add "Guten Morgen" to the set
5. Print the final result

Expected output examples:
- Initial: Print shows duplicates removed
- After operations: {2, 3, 5, "Guten Morgen"}

---

# Dictionary

## Definition
A dictionary is a collection of key-value pairs.

**Characteristics:**
- Key-Value pair: There cannot be a key without a value and vice versa
- Unique Keys: Duplicate keys will be overwritten by their new values
- Allow Duplicate Value: Values can be duplicated as long as the keys are different
- Mutable: Key-value pairs can be added and changed (keys cannot be changed, values can)

## Syntax
```python
namadictionary = {key1:value1, key2:value2, ..., keyn:valuen}
```

## Example
```python
my_Dictionary = {"nama":"Ajax", "NIM":2902611111}
```

## Operations in Dictionary

### Value Access with Key
Using the key that has been determined to retrieve the value stored in the dictionary.

```python
my_Dictionary = {"nama":"Ajax", "NIM":2902611111}
x = my_Dictionary["NIM"]
```

Note: Will error if the key doesn't exist.

### .get() in Dictionary
Using the key that has been determined to retrieve the value stored in the dictionary.

```python
my_Dictionary = {"nama":"Ajax", "NIM":2902611111}
x = my_Dictionary.get("NIM")
```

Note: Will not error if the key doesn't exist, but will return "None".

### Adding key-value in Dictionary
Adding a new key-value pair.

```python
my_Dictionary = {"nama":"Ajax", "NIM":2902611111}
my_Dictionary["Kelas"] = "LXZ300"
```

Output: `{'nama': 'Ajax', 'NIM': 2902611111, 'Kelas': 'LXZ300'}`

### Update key-value in Dictionary
Changing the value of a key-value pair.

```python
my_Dictionary = {"nama":"Ajax", "NIM":2902611111}
my_Dictionary["nama"] = "Leon"
```

Output: `{'nama': 'Leon', 'NIM': 2902611111}`

### .update() in Dictionary
Replacing or adding one or more key-value pairs with .update().

```python
my_Dictionary = {"nama":"Ajax", "NIM":2902611111}
my_Dictionary.update({"nama":"Leon", "Kelas":"LXZ300"})
```

Output: `{'nama': 'Leon', 'NIM': 2902611111, 'Kelas': 'LXZ300'}`

### del in Dictionary
Deleting an element (key-value pair) based on key.

```python
my_Dictionary = {"nama":"Ajax", "NIM":2902611111}
del my_Dictionary["NIM"]
```

Output: `{'nama': 'Ajax'}`

### .pop() in Dictionary
Deleting an element (key-value pair) based on key and returning the deleted value.

```python
my_Dictionary = {"nama":"Ajax", "NIM":2902611111}
x = my_Dictionary.pop("nama")
```

Output: 
- x: Ajax
- my_Dictionary: {'NIM': 2902611111}

### .clear() in Dictionary
Deleting all elements.

```python
my_Dictionary = {"nama":"Ajax", "NIM":2902611111}
my_Dictionary.clear()
```

Result: Empty dictionary {}

## Dictionary Coding Exercise

Create a program that:
1. Creates a dictionary named `user` where keys are usernames and values are passwords
2. Initialize with data: `"ajax": "AYAMSUNIB"`, `"budiman":"password123"`
3. Prompts the user to enter username and password
4. Checks using if, in, and == operators

**Expected Output:**
- Username not found → "username not found"
- Password incorrect → "password incorrect"
- Both correct → "Selamat datang"

---

# List - Basics

## Learning Outcomes
At the end of this session, students will be able to:
- (C2) Comprehension: Explain the usefulness of Python syntax and OOPs

## Sub Topics
- Insert, Update, and Delete with List
- Indexing and Slicing with List

## List Definition
A list is a variable that stores multiple items.

**Key Points:**
- The contents of a list can be varied and do not need to be the same data type
- Lists can contain different types of data

### Example List
```python
mahasiswa = ["Lucy", 2902512345, 3.98]
```

**Index:**
- Index 0 → "Lucy"
- Index 1 → 2902512345
- Index 2 → 3.98

**Printing:** `print(mahasiswa)`

## List Characteristics

### Ordered
- The order of the list will follow the order of addition
- This order remains the same when adding elements after declaration

### Changeable
- The contents of a list can be added, reduced, and changed

### Allow Duplicates
- Elements at a list index can have the same value
- A list can contain duplicate entries

## Insert in List

### Insert Operation
Adds an element at a specific position.

**Syntax:**
```python
namalist.insert(index, value)
```

**Example:**
```python
mahasiswa = ["Lucy", 2902512345, 3.98]
mahasiswa.insert(1, "Grace")
```

Result: `["Lucy", "Grace", 2902512345, 3.98]`

## Update List

### Update/Change
Changes the value of an index.

**Syntax:**
```python
namalist[index] = new_value
```

**Example:**
```python
mahasiswa = ["Lucy", 2902512345, 3.98]
mahasiswa[0] = "Natori"
```

Result: `["Natori", 2902512345, 3.98]`

## Delete in List

### Remove
Removes a list element based on its value.

**Syntax:**
```python
namalist.remove(value)
```

**Example:**
```python
mahasiswa = ["Lucy", 2902512345, 3.98]
mahasiswa.remove(3.98)
```

**Note:** If there are multiple elements with the same value in a list, the first occurrence will be removed.

### Pop
Removes a list element based on index.

**Syntax:**
```python
namalist.pop(index)
```

**Example:**
```python
mahasiswa = ["Lucy", 2902512345, 3.98]
mahasiswa.pop(2)
```

**Note:** If there are multiple elements with the same value in a list, the first occurrence will be removed.

## Exercise: List Operations

Implement insert, update, and delete for a YouTube video statistics calculation system.

**Initial List:** Video title, number of viewers, number of likes, number of dislikes

**Final List:** Video title, number of viewers (updated result), number of likes, subscribe (True/False)

**Example Initial Output:**
```
['My first video', 1000, 30, 4]
```

**Example Final Output:**
```
['My first video', 1050, 30, True]
```

**Tasks:**
1. Insert appropriate data
2. Update viewer count from 1000 to 1050
3. Remove dislikes count
4. Add subscribe status

---

# List - Indexing and Slicing

## Indexing List

### Getting Value
Finding the value of an index.

**Syntax:**
```python
namalist[index]
```

**Example:**
```python
thislist = ["apple", "banana", "cherry"]
print(thislist[1])
```

Output: `banana`

### Getting Index
Finding the index based on a value.

**Syntax:**
```python
x = namalist.index(value)
```

**Example:**
```python
thislist = ["apple", "banana", "cherry"]
x = thislist.index("banana")
print(x)
```

Output: `1`

## Slicing List

### Slicing
Elements from a list can be called within a range.

**Syntax:**
```python
namalist[start:end]
```

**Example:**
```python
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[2:6])
```

Output: `['cherry', 'orange', 'kiwi', 'melon']`

### What if: Only Start Index [2:]?
```python
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[2:])
```

Output: `['cherry', 'orange', 'kiwi', 'melon', 'mango']`

**Explanation:** Returns from index start to the end of the list.

### What if: Only End Index [:6]?
```python
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[:6])
```

Output: `['apple', 'banana', 'cherry', 'orange', 'kiwi', 'melon']`

**Explanation:** Returns from the beginning of the list to the end index (exclusive).

## Exercise: Indexing and Slicing

Implement indexing and slicing to check list contents and retrieve list items from a specific point.

**Input:** Value start and value end

**Process:** Find the start and end indexes

**Output:** Display from start value index to end value index

**Example:**
```
examplelist = ["a", "b", "c", "d", "e", "f", "g", "h"]
Start: c
End: g
Output: ['c', 'd', 'e', 'f', 'g']
```

**Tasks:**
1. Create a list with multiple string elements
2. Get user input for start and end values
3. Find the indexes of these values
4. Use slicing to display the range
5. Print the result

---

## References
- https://www.w3schools.com/python/
- Kong, Q., Siauw, T., and Bayen, A. M. (2021). Python Programming and Numerical Methods: A Guide for Engineers and Scientists. Amsterdam: Academic Press, Elsevier.
- docs.python.org/3/tutorial/datastructures.html
