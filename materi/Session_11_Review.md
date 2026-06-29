# ISYS6898003 - Algorithm and Programming
## Session 11 - Review

**Course Code:** ISYS6898003  
**Subject Matter Expert:** D5181 - Ferdianto, S.Kom, M.MSI  
**Session:** 11 - LAB  
**Institution:** BINUS Higher Education

---

## Learning Outcomes Overview

### LO 1: Explain the kind of the algorithms in problem solving
### LO 2: Explain the usefulness of Python syntax and OOPs
### LO 3: Demonstrate the algorithm using Python syntax
### LO 4: Select the best algorithm in problem solving

---

## Complete Course Summary

This comprehensive review covers all topics from Sessions 7-10, integrating algorithms, Python syntax, and object-oriented programming principles.

---

## Part 1: Functions (Session 7 Review)

### Key Concepts
- **Function Definition**: Reusable code blocks with def keyword
- **Parameters**: Input values for functions
- **Return Values**: Output from functions
- **Scope**: Variable accessibility within functions

### Function Categories

#### 1. Simple Functions with Parameters
```python
def calculate_area(radius):
    """Calculate circle area"""
    return 3.14 * radius ** 2

area = calculate_area(5)
print(area)  # 78.5
```

#### 2. Multiple Return Values
```python
def get_min_max(numbers):
    """Return minimum and maximum"""
    return min(numbers), max(numbers)

minimum, maximum = get_min_max([3, 7, 2, 9, 1])
print(f"Min: {minimum}, Max: {maximum}")
```

#### 3. Variable Arguments
```python
def sum_all(*numbers):
    """Sum any number of arguments"""
    return sum(numbers)

print(sum_all(1, 2, 3, 4, 5))  # 15
```

#### 4. Keyword Arguments
```python
def greet(name, greeting="Hello", punctuation="!"):
    """Customizable greeting"""
    return f"{greeting}, {name}{punctuation}"

print(greet("Alice"))                          # Hello, Alice!
print(greet("Bob", greeting="Hi", punctuation="."))  # Hi, Bob.
```

### Function Best Practices Review
1. Use descriptive names (verb_noun style)
2. Keep functions focused (single responsibility)
3. Document with docstrings
4. Handle edge cases
5. Test thoroughly

---

## Part 2: Files and Exceptions (Session 8 Review)

### File Operations Summary

#### Writing Files
```python
# Always use context manager (with statement)
with open("data.txt", "w") as file:
    file.write("Line 1\n")
    file.write("Line 2\n")
```

#### Reading Files
```python
# Read entire file
with open("data.txt", "r") as file:
    content = file.read()

# Read line by line
with open("data.txt", "r") as file:
    for line in file:
        print(line.strip())

# Read into list
with open("data.txt", "r") as file:
    lines = file.readlines()
```

### Exception Handling Pattern
```python
try:
    # Code that might raise exception
    number = int(input("Enter number: "))
    result = 100 / number
except ValueError:
    print("Invalid number format!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
else:
    print(f"Result: {result}")
finally:
    print("Operation complete")
```

### Common Exception Types
- `FileNotFoundError`: File doesn't exist
- `ValueError`: Invalid value
- `ZeroDivisionError`: Division by zero
- `IndexError`: Index out of range
- `KeyError`: Dictionary key not found
- `TypeError`: Wrong data type

---

## Part 3: Classes and OOP (Session 9 Review)

### Class Fundamentals

#### Basic Class Structure
```python
class Dog:
    """A class representing a dog"""
    
    species = "Canis familiaris"  # Class variable
    
    def __init__(self, name, age):
        """Initialize dog"""
        self.name = name        # Instance variable
        self.age = age
    
    def bark(self):
        """Instance method"""
        return f"{self.name} says: Woof!"
    
    def get_older(self):
        """Modify state"""
        self.age += 1
    
    def __str__(self):
        """String representation"""
        return f"{self.name} ({self.age} years old)"

# Creating and using objects
dog = Dog("Buddy", 3)
print(dog)           # Buddy (3 years old)
print(dog.bark())    # Buddy says: Woof!
dog.get_older()
print(dog.age)       # 4
```

### Encapsulation Pattern
```python
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.__balance = balance  # Private
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            return True
        return False
    
    def get_balance(self):
        return self.__balance

account = BankAccount("Alice", 1000)
account.deposit(500)
print(account.get_balance())  # 1500
```

### Special Methods
```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def __str__(self):
        return f"{self.name} is {self.age}"
    
    def __eq__(self, other):
        return self.age == other.age
    
    def __lt__(self, other):
        return self.age < other.age

p1 = Person("Alice", 25)
p2 = Person("Bob", 30)
print(p1)           # Alice is 25
print(p1 < p2)      # True
```

---

## Part 4: Searching and Sorting (Session 10 Review)

### Searching Algorithms

#### Linear Search - O(n)
```python
def linear_search(lst, target):
    """Search by checking each element"""
    for i, value in enumerate(lst):
        if value == target:
            return i
    return -1

result = linear_search([10, 20, 30, 40], 30)
print(result)  # 2
```

#### Binary Search - O(log n)
```python
def binary_search(lst, target):
    """Fast search on sorted list"""
    left, right = 0, len(lst) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if lst[mid] == target:
            return mid
        elif lst[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1

result = binary_search([10, 20, 30, 40, 50], 30)
print(result)  # 2
```

### Sorting Algorithms

#### Quick Sort - O(n log n) average
```python
def quick_sort(lst):
    """Divide-and-conquer sorting"""
    if len(lst) <= 1:
        return lst
    
    pivot = lst[len(lst) // 2]
    left = [x for x in lst if x < pivot]
    middle = [x for x in lst if x == pivot]
    right = [x for x in lst if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)

result = quick_sort([64, 34, 25, 12, 22])
print(result)  # [12, 22, 25, 34, 64]
```

#### Merge Sort - O(n log n) guaranteed
```python
def merge_sort(lst):
    """Stable divide-and-conquer sorting"""
    if len(lst) <= 1:
        return lst
    
    mid = len(lst) // 2
    left = merge_sort(lst[:mid])
    right = merge_sort(lst[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    return result + left[i:] + right[j:]

result = merge_sort([64, 34, 25, 12, 22])
print(result)  # [12, 22, 25, 34, 64]
```

#### Using Built-in Sort
```python
numbers = [64, 34, 25, 12, 22]

# Sort in place
numbers.sort()

# Get sorted copy
sorted_numbers = sorted([64, 34, 25, 12, 22])

# Sort with custom key
students = [("Alice", 85), ("Bob", 92), ("Charlie", 78)]
sorted_students = sorted(students, key=lambda x: x[1], reverse=True)
```

---

## Part 5: Integrated Project Examples

### Example 1: Student Grade Management System

```python
class GradeBook:
    def __init__(self, filename):
        self.filename = filename
        self.students = {}
        self.load_data()
    
    def load_data(self):
        """Load grades from file"""
        try:
            with open(self.filename, "r") as f:
                for line in f:
                    parts = line.strip().split(",")
                    if len(parts) == 2:
                        name, grade = parts
                        self.students[name] = int(grade)
        except FileNotFoundError:
            print(f"File {self.filename} not found")
    
    def add_student(self, name, grade):
        """Add or update student"""
        if 0 <= grade <= 100:
            self.students[name] = grade
        else:
            raise ValueError("Grade must be 0-100")
    
    def save_data(self):
        """Save grades to file"""
        try:
            with open(self.filename, "w") as f:
                for name, grade in self.students.items():
                    f.write(f"{name},{grade}\n")
        except IOError as e:
            print(f"Error saving file: {e}")
    
    def get_top_students(self, n=3):
        """Get top n students by grade"""
        sorted_students = sorted(
            self.students.items(),
            key=lambda x: x[1],
            reverse=True
        )
        return sorted_students[:n]
    
    def search_by_grade(self, target_grade):
        """Find students with specific grade"""
        result = []
        for name, grade in self.students.items():
            if grade == target_grade:
                result.append((name, grade))
        return result
    
    def get_statistics(self):
        """Calculate grade statistics"""
        if not self.students:
            return None
        
        grades = list(self.students.values())
        return {
            "average": sum(grades) / len(grades),
            "highest": max(grades),
            "lowest": min(grades),
            "count": len(grades)
        }

# Usage
gradebook = GradeBook("grades.txt")
gradebook.add_student("Alice", 85)
gradebook.add_student("Bob", 92)
gradebook.add_student("Charlie", 78)

print("Top students:", gradebook.get_top_students(2))
print("Statistics:", gradebook.get_statistics())
gradebook.save_data()
```

### Example 2: Product Inventory System

```python
class Product:
    def __init__(self, product_id, name, price, quantity):
        self.product_id = product_id
        self.name = name
        self.price = price
        self.quantity = quantity
    
    def __str__(self):
        return f"{self.name} - ${self.price} (Qty: {self.quantity})"
    
    def __lt__(self, other):
        return self.price < other.price

class Inventory:
    def __init__(self, filename):
        self.filename = filename
        self.products = {}
        self.load_inventory()
    
    def load_inventory(self):
        """Load inventory from file"""
        try:
            with open(self.filename, "r") as f:
                for line in f:
                    parts = line.strip().split(",")
                    if len(parts) == 4:
                        pid, name, price, qty = parts
                        product = Product(
                            pid,
                            name,
                            float(price),
                            int(qty)
                        )
                        self.products[pid] = product
        except FileNotFoundError:
            print(f"File {self.filename} not found")
    
    def add_product(self, product):
        """Add product to inventory"""
        self.products[product.product_id] = product
    
    def search_by_name(self, name):
        """Search for product by name"""
        for product in self.products.values():
            if name.lower() in product.name.lower():
                return product
        return None
    
    def get_by_price_range(self, min_price, max_price):
        """Get products within price range"""
        result = []
        for product in self.products.values():
            if min_price <= product.price <= max_price:
                result.append(product)
        return sorted(result)
    
    def save_inventory(self):
        """Save inventory to file"""
        try:
            with open(self.filename, "w") as f:
                for product in self.products.values():
                    f.write(f"{product.product_id},"
                           f"{product.name},"
                           f"{product.price},"
                           f"{product.quantity}\n")
        except IOError as e:
            print(f"Error saving inventory: {e}")

# Usage
inventory = Inventory("products.txt")
inventory.add_product(Product("P001", "Laptop", 999.99, 5))
inventory.add_product(Product("P002", "Mouse", 29.99, 50))

affordable = inventory.get_by_price_range(0, 100)
for product in affordable:
    print(product)
```

---

## Part 6: Algorithm Selection Guide

### Choosing the Right Search Algorithm
```
Data Size         | Sorted? | Best Choice
Small (<100)      | No      | Linear Search
Small (<100)      | Yes     | Binary Search
Medium (100-1M)   | No      | Linear Search
Medium (100-1M)   | Yes     | Binary Search
Large (>1M)       | No      | Linear Search (or optimize structure)
Large (>1M)       | Yes     | Binary Search
```

### Choosing the Right Sort Algorithm
```
Data Size      | Characteristics      | Best Choice
Very Small     | Learning             | Bubble/Selection
Small (<100)   | Simple               | Insertion
Medium (100-1K)| Fast                 | Quick Sort
Large (>1K)    | Guaranteed O(n log n)| Merge Sort
General        | Any                  | Python's sort()
```

---

## Part 7: Common Pitfalls and Solutions

### Pitfall 1: Forgetting File Closure
```python
# ❌ WRONG
f = open("file.txt")
data = f.read()
print(data)
# File not closed!

# ✅ CORRECT
with open("file.txt") as f:
    data = f.read()
    print(data)
# File automatically closed
```

### Pitfall 2: Binary Search on Unsorted List
```python
# ❌ WRONG
numbers = [64, 34, 25, 12, 22, 11, 90]
result = binary_search(numbers, 25)  # Wrong result!

# ✅ CORRECT
numbers = sorted([64, 34, 25, 12, 22, 11, 90])
result = binary_search(numbers, 25)  # Correct
```

### Pitfall 3: Modifying List During Iteration
```python
# ❌ WRONG
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    if num % 2 == 0:
        numbers.remove(num)  # Don't modify during iteration!

# ✅ CORRECT
numbers = [1, 2, 3, 4, 5]
numbers = [num for num in numbers if num % 2 != 0]
```

### Pitfall 4: Mutable Default Arguments
```python
# ❌ WRONG
def add_to_list(item, lst=[]):
    lst.append(item)
    return lst

add_to_list(1)      # [1]
add_to_list(2)      # [1, 2] - shared list!

# ✅ CORRECT
def add_to_list(item, lst=None):
    if lst is None:
        lst = []
    lst.append(item)
    return lst
```

---

## Part 8: Performance Considerations

### Time Complexity Comparison
```python
# O(1) - Constant
def get_first(lst):
    return lst[0]

# O(n) - Linear
def find_sum(lst):
    return sum(lst)

# O(n²) - Quadratic
def bubble_sort(lst):
    # Compare each pair multiple times
    pass

# O(log n) - Logarithmic
def binary_search(lst, target):
    # Halve search space each time
    pass

# O(n log n) - Linearithmic
def merge_sort(lst):
    # Divide and merge
    pass
```

### Performance Testing
```python
import time

def time_function(func, *args):
    start = time.time()
    result = func(*args)
    end = time.time()
    print(f"Time: {end - start:.4f} seconds")
    return result

numbers = list(range(10000))

time_function(linear_search, numbers, 9999)
time_function(binary_search, sorted(numbers), 9999)
```

---

## Part 9: Best Practices Summary

### Code Quality
1. **Write Clear Code**: Self-documenting variable names
2. **Use Docstrings**: Explain what, why, how
3. **Error Handling**: Anticipate problems
4. **Testing**: Test edge cases
5. **Performance**: Optimize when needed

### Pythonic Code
```python
# ✅ Good - Pythonic
squared = [x**2 for x in numbers]
names = [s.strip() for s in lines]

# ❌ Less ideal - Non-Pythonic
squared = []
for x in numbers:
    squared.append(x**2)
```

### Design Patterns
```python
# Context Manager Pattern
with open("file.txt") as f:
    data = f.read()

# Comprehension Pattern
squared = [x**2 for x in numbers if x > 0]

# Generator Pattern
def count_up(n):
    i = 0
    while i < n:
        yield i
        i += 1
```

---

## Part 10: Practice Problems

### Problem 1: Merge Sorted Lists
```python
def merge_sorted_lists(lst1, lst2):
    """Merge two sorted lists into one sorted list"""
    # Your code here
    pass

# Test
result = merge_sorted_lists([1, 3, 5], [2, 4, 6])
# Expected: [1, 2, 3, 4, 5, 6]
```

### Problem 2: Find Duplicates
```python
def find_duplicates(lst):
    """Find all duplicate values in list"""
    # Your code here
    pass

# Test
result = find_duplicates([1, 2, 2, 3, 3, 3, 4])
# Expected: [2, 3]
```

### Problem 3: File Processing
```python
def process_csv(filename):
    """Read CSV file and return sorted data"""
    # Your code here
    pass

# CSV format: name,age,score
```

### Problem 4: Class Design
```python
class Library:
    """Design a library management system"""
    # Add books, search, borrow, return
    pass
```

---

## Conclusion

This course covered fundamental programming concepts:
- **Functions**: Code reusability and modularity
- **Files & Exceptions**: Data persistence and error handling
- **Classes & OOP**: Organized, scalable code design
- **Algorithms**: Efficient problem solving

**Key Takeaway**: Choose the right tool (algorithm, data structure, design pattern) for each problem. Practice implementing and understanding trade-offs between simplicity, performance, and maintainability.

---

## Additional Resources

- Python Official Documentation: https://docs.python.org/3/
- Algorithm Visualization: https://visualgo.net/
- Big-O Complexity: https://www.bigocheatsheet.com/
- Design Patterns: https://refactoring.guru/design-patterns

---

**Happy Coding!**
