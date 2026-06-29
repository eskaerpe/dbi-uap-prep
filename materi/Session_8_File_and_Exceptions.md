# ISYS6898003 - Algorithm and Programming
## Session 8 - File and Exceptions

**Course Code:** ISYS6898003  
**Subject Matter Expert:** D5181 - Ferdianto, S.Kom, M.MSI  
**Session:** 8 - LAB  
**Institution:** BINUS Higher Education

---

## Learning Outcomes

### LO 3: Demonstrate the algorithm using Python syntax

By the end of this session, students will be able to work with files and handle exceptions in Python programs.

---

## Course Outlines

1. **Working with Multiple Python Files**
2. **Writing to a File**
3. **Reading from a File**
4. **Exception Handling**

---

## 1. Working with Multiple Python Files

### Importing Modules
Python allows you to organize code into multiple files (modules) and import them into other files.

### Basic Module Structure
```python
# calculator.py
def add(a, b):
    """Add two numbers"""
    return a + b

def subtract(a, b):
    """Subtract two numbers"""
    return a - b

def multiply(a, b):
    """Multiply two numbers"""
    return a * b
```

### Importing a Module
```python
# main.py
import calculator

result1 = calculator.add(10, 5)
result2 = calculator.subtract(10, 5)
result3 = calculator.multiply(10, 5)

print(result1)  # 15
print(result2)  # 5
print(result3)  # 50
```

### Import Specific Functions
```python
# main.py
from calculator import add, subtract

result1 = add(10, 5)
result2 = subtract(10, 5)
print(result1, result2)  # 15 5
```

### Import with Alias
```python
# main.py
from calculator import add as addition
from calculator import subtract as subtraction

print(addition(10, 5))      # 15
print(subtraction(10, 5))   # 5
```

### Import All Functions
```python
# main.py
from calculator import *

print(add(10, 5))        # 15
print(multiply(10, 5))   # 50
```

### Using __name__ for Module Testing
```python
# calculator.py
def add(a, b):
    return a + b

# Only runs when this file is executed directly
if __name__ == "__main__":
    print("Testing add function:")
    print(add(5, 3))  # 8
```

---

## 2. Writing to a File

### Basic File Writing
```python
# Open file in write mode
file = open("data.txt", "w")
file.write("Hello, World!\n")
file.write("This is a test file.\n")
file.close()
```

### Important: Always Close Files
Failing to close files can cause data loss or resource leaks.

### Using Context Manager (Recommended)
```python
# Automatically closes file when done
with open("data.txt", "w") as file:
    file.write("Hello, World!\n")
    file.write("This is safer.\n")
```

### Writing Multiple Lines
```python
with open("numbers.txt", "w") as file:
    for i in range(1, 6):
        file.write(f"Number: {i}\n")
```

### Append to File
```python
# 'a' mode appends to existing file instead of overwriting
with open("data.txt", "a") as file:
    file.write("This line is appended.\n")
```

### Writing Lists
```python
names = ["Alice", "Bob", "Charlie", "Diana"]

with open("names.txt", "w") as file:
    for name in names:
        file.write(name + "\n")
```

### Write Mode Options
- `"w"` - Write mode (overwrites existing content)
- `"a"` - Append mode (adds to end of file)
- `"x"` - Create mode (fails if file exists)
- `"b"` - Binary mode (used with w, a, x)

---

## 3. Reading from a File

### Read Entire File
```python
with open("data.txt", "r") as file:
    content = file.read()
    print(content)
```

### Read Line by Line
```python
with open("data.txt", "r") as file:
    line = file.readline()
    while line:
        print(line.strip())  # strip() removes newline
        line = file.readline()
```

### Read All Lines into List
```python
with open("data.txt", "r") as file:
    lines = file.readlines()
    for line in lines:
        print(line.strip())
```

### Iterate Through File
```python
with open("data.txt", "r") as file:
    for line in file:
        print(line.strip())
```

### Processing File Data
```python
with open("numbers.txt", "r") as file:
    total = 0
    count = 0
    for line in file:
        number = int(line.strip())
        total += number
        count += 1
    
    average = total / count if count > 0 else 0
    print(f"Average: {average}")
```

### Read Mode Options
- `"r"` - Read mode (default, file must exist)
- `"rb"` - Read binary mode

### Checking if File Exists
```python
import os

if os.path.exists("data.txt"):
    with open("data.txt", "r") as file:
        print(file.read())
else:
    print("File not found!")
```

---

## 4. Exception Handling

### What are Exceptions?
Exceptions are errors that occur during program execution. Without proper handling, they crash the program.

### Basic Try-Except Block
```python
try:
    number = int(input("Enter a number: "))
    result = 10 / number
    print(f"Result: {result}")
except ZeroDivisionError:
    print("Error: Cannot divide by zero!")
except ValueError:
    print("Error: Please enter a valid number!")
```

### Multiple Exception Types
```python
try:
    # Some code that might raise exceptions
    file = open("missing.txt", "r")
    number = int(file.read())
    result = 100 / number
except FileNotFoundError:
    print("File not found!")
except ValueError:
    print("Invalid number format!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
```

### Generic Exception Handling
```python
try:
    result = 10 / 0
except Exception as e:
    print(f"An error occurred: {e}")
```

### Try-Except-Finally
```python
try:
    file = open("data.txt", "r")
    data = file.read()
except FileNotFoundError:
    print("File not found!")
finally:
    # This always executes
    if 'file' in locals():
        file.close()
```

### Try-Except-Else
```python
try:
    number = int(input("Enter a number: "))
except ValueError:
    print("Invalid input!")
else:
    # Runs only if no exception occurred
    print(f"You entered: {number}")
```

### Catching Multiple Exceptions with One Clause
```python
try:
    result = 10 / 0
except (ValueError, ZeroDivisionError) as e:
    print(f"Error occurred: {e}")
```

### Getting Exception Information
```python
try:
    x = [1, 2, 3]
    print(x[10])
except IndexError as e:
    print(f"Error type: {type(e).__name__}")
    print(f"Error message: {e}")
```

### Raising Exceptions
```python
def validate_age(age):
    if age < 0 or age > 150:
        raise ValueError("Age must be between 0 and 150!")
    return True

try:
    validate_age(-5)
except ValueError as e:
    print(f"Invalid age: {e}")
```

### Custom Exception Classes
```python
class InvalidScoreError(Exception):
    """Custom exception for invalid scores"""
    pass

def check_score(score):
    if score < 0 or score > 100:
        raise InvalidScoreError("Score must be between 0 and 100!")
    return True

try:
    check_score(150)
except InvalidScoreError as e:
    print(f"Score error: {e}")
```

### Common Exceptions in Python

| Exception | Cause |
|-----------|-------|
| `ZeroDivisionError` | Division by zero |
| `ValueError` | Invalid value for operation |
| `TypeError` | Wrong data type |
| `IndexError` | Index out of range |
| `KeyError` | Dictionary key not found |
| `FileNotFoundError` | File doesn't exist |
| `IOError` | Input/output error |
| `NameError` | Undefined variable |
| `AttributeError` | Attribute doesn't exist |
| `RuntimeError` | Runtime error |

---

## Practical Examples

### Reading and Processing CSV-like File
```python
def read_student_scores(filename):
    """Read student scores from file"""
    try:
        with open(filename, "r") as file:
            students = {}
            for line in file:
                parts = line.strip().split(",")
                if len(parts) == 2:
                    name, score = parts
                    students[name] = int(score)
            return students
    except FileNotFoundError:
        print(f"Error: {filename} not found!")
        return {}
    except ValueError:
        print("Error: Invalid score format!")
        return {}

scores = read_student_scores("scores.txt")
for name, score in scores.items():
    print(f"{name}: {score}")
```

### Writing Student Data to File
```python
def save_student_scores(filename, students):
    """Save student scores to file"""
    try:
        with open(filename, "w") as file:
            for name, score in students.items():
                file.write(f"{name},{score}\n")
        print(f"Data saved to {filename}")
    except IOError as e:
        print(f"Error writing to file: {e}")

students = {"Alice": 85, "Bob": 92, "Charlie": 78}
save_student_scores("students.txt", students)
```

### Safe File Operations
```python
def copy_file(source, destination):
    """Copy file with error handling"""
    try:
        with open(source, "r") as src:
            content = src.read()
        
        with open(destination, "w") as dest:
            dest.write(content)
        
        print(f"File copied successfully from {source} to {destination}")
    except FileNotFoundError:
        print(f"Error: Source file {source} not found!")
    except IOError as e:
        print(f"Error during file operation: {e}")
```

---

## Best Practices

1. **Always Use Context Managers**: Use `with` statement for file operations
2. **Specific Exception Handling**: Catch specific exceptions, not generic `Exception`
3. **Clean Up Resources**: Use `finally` to ensure cleanup
4. **Meaningful Error Messages**: Provide clear, helpful error messages
5. **Log Errors**: Keep records of errors for debugging
6. **Validate Input**: Check data before processing
7. **Document Exceptions**: Explain what exceptions a function can raise

---

## Summary

- **Multiple Files**: Organize code into modules for better maintainability
- **File Writing**: Use `with` statement and appropriate modes (w, a, x)
- **File Reading**: Read entire files or line-by-line depending on needs
- **Exceptions**: Handle errors gracefully with try-except blocks
- **Cleanup**: Always close files or use context managers
- **Error Types**: Different exceptions for different error conditions

---

**Reference Materials:**
- Python File I/O: https://docs.python.org/3/tutorial/inputoutput.html
- Python Exceptions: https://docs.python.org/3/tutorial/errors.html
