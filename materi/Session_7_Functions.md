# ISYS6898003 - Algorithm and Programming
## Session 7 - Functions

**Course Code:** ISYS6898003  
**Subject Matter Expert:** D5181 - Ferdianto, S.Kom, M.MSI  
**Session:** 7 - LAB  
**Institution:** BINUS Higher Education

---

## Learning Outcomes

### LO 3: Demonstrate the algorithm using Python syntax

By the end of this session, students will be able to understand and implement functions in Python programming.

---

## Course Outlines

1. **Defining a Function**
2. **Passing Arguments**
3. **Return Values**
4. **Passing a List**

---

## 1. Defining a Function

### Basic Concept
A function is a reusable block of code that performs a specific task. Functions help organize code, reduce redundancy, and make programs more maintainable.

### Syntax
```python
def function_name(parameters):
    """Docstring describing the function"""
    # Function body
    statements
    return value  # Optional
```

### Example
```python
def greet(name):
    """This function greets someone"""
    print(f"Hello, {name}!")

greet("Alice")  # Output: Hello, Alice!
```

### Key Points
- Function names should be descriptive and use lowercase with underscores
- The `def` keyword is used to define a function
- A function can have zero or more parameters
- A docstring (triple quotes) provides documentation
- Indentation is crucial in Python

---

## 2. Passing Arguments

### Positional Arguments
Arguments are passed in the order they are defined.

```python
def add(a, b):
    """Add two numbers"""
    return a + b

result = add(5, 3)  # result = 8
```

### Keyword Arguments
Arguments can be passed by name, allowing flexibility in order.

```python
def describe_person(name, age, city):
    print(f"{name} is {age} years old and lives in {city}")

describe_person(city="Jakarta", name="Budi", age=25)
# Output: Budi is 25 years old and lives in Jakarta
```

### Default Arguments
Parameters can have default values if not provided.

```python
def power(base, exponent=2):
    """Calculate power with default exponent of 2"""
    return base ** exponent

print(power(5))      # 25
print(power(5, 3))   # 125
```

### Variable-Length Arguments (*args)
Allows passing any number of positional arguments.

```python
def sum_numbers(*numbers):
    """Sum any number of arguments"""
    total = 0
    for num in numbers:
        total += num
    return total

print(sum_numbers(1, 2, 3, 4, 5))  # 15
```

### Keyword Variable Arguments (**kwargs)
Allows passing any number of keyword arguments.

```python
def print_info(**info):
    """Print key-value pairs"""
    for key, value in info.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=30, job="Engineer")
# Output:
# name: Alice
# age: 30
# job: Engineer
```

---

## 3. Return Values

### Single Return Value
```python
def square(x):
    """Return the square of a number"""
    return x * x

result = square(4)  # result = 16
```

### Multiple Return Values
```python
def divide_with_remainder(a, b):
    """Return quotient and remainder"""
    quotient = a // b
    remainder = a % b
    return quotient, remainder

q, r = divide_with_remainder(17, 5)
print(q, r)  # 3 5
```

### Return None
If no return statement is used, the function returns None.

```python
def display_message(msg):
    print(msg)
    # Implicitly returns None

result = display_message("Hello")
print(result)  # None
```

### Early Return
```python
def check_positive(num):
    if num < 0:
        return "Negative"
    if num == 0:
        return "Zero"
    return "Positive"

print(check_positive(-5))   # Negative
print(check_positive(0))    # Zero
print(check_positive(10))   # Positive
```

---

## 4. Passing a List

### Modifying List Elements
```python
def modify_list(items):
    """Modify elements in a list"""
    for i in range(len(items)):
        items[i] = items[i] * 2

numbers = [1, 2, 3, 4, 5]
modify_list(numbers)
print(numbers)  # [2, 4, 6, 8, 10]
```

### Important Note: Lists are Mutable
When you pass a list to a function, the function receives a reference to the same list object. Changes made inside the function affect the original list.

```python
def add_element(lst, element):
    """Add element to list"""
    lst.append(element)

my_list = [1, 2, 3]
add_element(my_list, 4)
print(my_list)  # [1, 2, 3, 4]
```

### Returning Modified List
```python
def double_elements(items):
    """Return a new list with doubled elements"""
    return [x * 2 for x in items]

numbers = [1, 2, 3, 4, 5]
doubled = double_elements(numbers)
print(doubled)   # [2, 4, 6, 8, 10]
print(numbers)   # [1, 2, 3, 4, 5] - original unchanged
```

### Processing List Arguments
```python
def find_max(numbers):
    """Find maximum value in a list"""
    if not numbers:
        return None
    max_val = numbers[0]
    for num in numbers[1:]:
        if num > max_val:
            max_val = num
    return max_val

scores = [85, 92, 78, 95, 88]
print(find_max(scores))  # 95
```

### Multiple List Operations
```python
def analyze_list(data):
    """Calculate statistics for a list"""
    total = sum(data)
    count = len(data)
    average = total / count if count > 0 else 0
    return total, average, count

values = [10, 20, 30, 40, 50]
total, avg, count = analyze_list(values)
print(f"Total: {total}, Average: {avg}, Count: {count}")
# Output: Total: 150, Average: 30.0, Count: 5
```

---

## Best Practices for Functions

1. **Use Descriptive Names**: Choose function names that clearly indicate their purpose
2. **Keep Functions Small**: A function should do one thing well
3. **Document with Docstrings**: Explain what the function does, parameters, and return values
4. **Use Type Hints** (Python 3.5+):
   ```python
   def add(a: int, b: int) -> int:
       """Add two integers"""
       return a + b
   ```
5. **Avoid Global Variables**: Pass necessary data as parameters
6. **Test Thoroughly**: Test functions with various inputs
7. **Handle Edge Cases**: Consider boundary conditions and special cases

---

## Common Function Patterns

### Filter Pattern
```python
def filter_even_numbers(numbers):
    """Return only even numbers"""
    result = []
    for num in numbers:
        if num % 2 == 0:
            result.append(num)
    return result

print(filter_even_numbers([1, 2, 3, 4, 5, 6]))  # [2, 4, 6]
```

### Accumulator Pattern
```python
def sum_list(numbers):
    """Sum all numbers in a list"""
    total = 0
    for num in numbers:
        total += num
    return total

print(sum_list([1, 2, 3, 4, 5]))  # 15
```

### Conditional Return Pattern
```python
def validate_age(age):
    """Validate if age is reasonable"""
    if age < 0 or age > 150:
        return False
    return True

print(validate_age(25))   # True
print(validate_age(-5))   # False
```

---

## Exercise Ideas

1. Create a function that calculates the factorial of a number
2. Write a function to check if a number is prime
3. Create a function that reverses a list
4. Write a function to calculate the average of numbers in a list
5. Create a function that removes duplicates from a list

---

## Summary

- Functions are reusable blocks of code that organize and simplify programs
- Parameters can be passed positionally or by keyword
- Default arguments make functions flexible
- *args and **kwargs allow variable-length arguments
- Functions can return single or multiple values
- Lists are mutable and passed by reference
- Proper documentation and naming conventions improve code quality

---

**Reference Materials:**
- Official Python Documentation: https://docs.python.org/3/
- Python Tutorial on Functions: https://docs.python.org/3/tutorial/controlflow.html#defining-functions
