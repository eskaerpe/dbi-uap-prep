# ISYS6898003 - Algorithm and Programming
## Session 9 - Classes in Python

**Course Code:** ISYS6898003  
**Subject Matter Expert:** D5181 - Ferdianto, S.Kom, M.MSI  
**Session:** 9 - LAB  
**Institution:** BINUS Higher Education

---

## Learning Outcomes

### LO 4: Select the best algorithm in problem solving

By the end of this session, students will understand object-oriented programming concepts and be able to design and implement classes in Python.

---

## Course Outlines

1. **Creating Objects**
2. **Encapsulation**
3. **About Object Oriented Programming**
4. **Defining Classes**

---

## 1. About Object Oriented Programming (OOP)

### What is OOP?
Object Oriented Programming is a programming paradigm that organizes code around "objects" which contain data (attributes) and methods (functions). This approach mirrors real-world entities.

### Benefits of OOP
- **Modularity**: Code is organized into logical units
- **Reusability**: Classes can be reused in multiple programs
- **Maintainability**: Easier to update and debug code
- **Scalability**: Better for large projects
- **Real-world Mapping**: Easier to model real-world problems

### OOP Principles
1. **Encapsulation**: Bundling data and methods together
2. **Inheritance**: Creating classes from other classes
3. **Polymorphism**: Objects can take multiple forms
4. **Abstraction**: Hiding complex implementation details

---

## 2. Defining a Class

### Basic Class Structure
```python
class ClassName:
    """Class docstring"""
    
    # Class variables (shared by all instances)
    class_variable = "shared value"
    
    # Constructor method
    def __init__(self, parameters):
        # Instance variables
        self.attribute1 = parameters
        self.attribute2 = value
    
    # Instance methods
    def method_name(self):
        # Method body
        return something
```

### Simple Class Example
```python
class Dog:
    """A simple dog class"""
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def bark(self):
        print(f"{self.name} says: Woof!")
    
    def birthday(self):
        self.age += 1
        print(f"{self.name} is now {self.age} years old")

# Creating objects (instances)
dog1 = Dog("Buddy", 3)
dog2 = Dog("Max", 5)

dog1.bark()        # Buddy says: Woof!
dog1.birthday()    # Buddy is now 4 years old
```

### Understanding __init__ Method
```python
class Student:
    def __init__(self, name, student_id, gpa):
        """Initialize a student object"""
        self.name = name
        self.student_id = student_id
        self.gpa = gpa

# Creating instances
student1 = Student("Alice", "2024001", 3.8)
student2 = Student("Bob", "2024002", 3.5)

print(student1.name)          # Alice
print(student2.student_id)    # 2024002
```

---

## 3. Creating Objects

### Object Instantiation
```python
class Car:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year
    
    def display_info(self):
        print(f"{self.year} {self.brand} {self.model}")

# Create objects
car1 = Car("Toyota", "Camry", 2020)
car2 = Car("Honda", "Civic", 2022)

car1.display_info()  # 2020 Toyota Camry
car2.display_info()  # 2022 Honda Civic
```

### Accessing Object Attributes
```python
class Person:
    def __init__(self, name, age, city):
        self.name = name
        self.age = age
        self.city = city

person = Person("John", 30, "Jakarta")

# Accessing attributes
print(person.name)    # John
print(person.age)     # 30
print(person.city)    # Jakarta

# Modifying attributes
person.age = 31
person.city = "Bandung"
```

### Multiple Instances with Independent States
```python
class BankAccount:
    def __init__(self, account_holder, balance):
        self.account_holder = account_holder
        self.balance = balance
    
    def deposit(self, amount):
        self.balance += amount
        print(f"Deposited: ${amount}")
    
    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            print(f"Withdrawn: ${amount}")
        else:
            print("Insufficient funds!")
    
    def display_balance(self):
        print(f"Account: {self.account_holder}, Balance: ${self.balance}")

# Create independent objects
account1 = BankAccount("Alice", 1000)
account2 = BankAccount("Bob", 500)

account1.deposit(500)      # Deposited: $500
account1.display_balance() # Account: Alice, Balance: $1500

account2.withdraw(100)     # Withdrawn: $100
account2.display_balance() # Account: Bob, Balance: $400
```

---

## 4. Encapsulation

### What is Encapsulation?
Encapsulation is the bundling of data (attributes) and methods (functions) into a single unit (class), and hiding the internal details from the outside world.

### Private Attributes
```python
class Student:
    def __init__(self, name, grade):
        self.name = name
        self.__grade = grade  # Private attribute (double underscore)
    
    def get_grade(self):
        return self.__grade
    
    def set_grade(self, grade):
        if 0 <= grade <= 100:
            self.__grade = grade
        else:
            print("Invalid grade!")
    
    def display_info(self):
        print(f"Name: {self.name}, Grade: {self.__grade}")

student = Student("Alice", 85)
# student.__grade = 90  # This will cause an error!
student.set_grade(90)   # Use setter method instead
student.display_info()  # Name: Alice, Grade: 90
```

### Protected Attributes
```python
class Vehicle:
    def __init__(self, brand):
        self._brand = brand  # Protected attribute (single underscore)
    
    def display_brand(self):
        print(f"Brand: {self._brand}")

vehicle = Vehicle("Toyota")
vehicle.display_brand()  # Brand: Toyota
# The single underscore is a convention to indicate "protected"
```

### Getter and Setter Methods
```python
class Rectangle:
    def __init__(self, width, height):
        self.__width = width
        self.__height = height
    
    def get_width(self):
        return self.__width
    
    def set_width(self, width):
        if width > 0:
            self.__width = width
        else:
            print("Width must be positive!")
    
    def get_height(self):
        return self.__height
    
    def set_height(self, height):
        if height > 0:
            self.__height = height
        else:
            print("Height must be positive!")
    
    def get_area(self):
        return self.__width * self.__height

rect = Rectangle(10, 5)
print(rect.get_area())   # 50
rect.set_width(15)
print(rect.get_area())   # 75
```

### Property Decorator
```python
class Circle:
    def __init__(self, radius):
        self.__radius = radius
    
    @property
    def radius(self):
        """Get radius"""
        return self.__radius
    
    @radius.setter
    def radius(self, value):
        """Set radius"""
        if value > 0:
            self.__radius = value
        else:
            print("Radius must be positive!")
    
    @property
    def area(self):
        """Calculate area"""
        return 3.14 * self.__radius ** 2

circle = Circle(5)
print(circle.radius)  # 5 (using property getter)
print(circle.area)    # 78.5

circle.radius = 10    # Using property setter
print(circle.area)    # 314.0
```

---

## Class Methods and Static Methods

### Instance Methods
```python
class Calculator:
    def __init__(self, value):
        self.value = value
    
    def add(self, num):
        self.value += num
        return self.value
    
    def multiply(self, num):
        self.value *= num
        return self.value

calc = Calculator(10)
print(calc.add(5))      # 15
print(calc.multiply(2)) # 30
```

### Class Methods
```python
class Temperature:
    scale = "Celsius"
    
    @classmethod
    def set_scale(cls, scale):
        """Set temperature scale for entire class"""
        cls.scale = scale
    
    @classmethod
    def create_from_fahrenheit(cls, fahrenheit):
        """Create Celsius temperature from Fahrenheit"""
        celsius = (fahrenheit - 32) * 5/9
        return cls(celsius)
    
    def __init__(self, value):
        self.value = value

temp = Temperature(25)
print(Temperature.scale)  # Celsius

Temperature.set_scale("Kelvin")
print(Temperature.scale)  # Kelvin

temp2 = Temperature.create_from_fahrenheit(77)
print(f"Temperature: {temp2.value:.1f}°C")
```

### Static Methods
```python
class MathUtils:
    @staticmethod
    def add(a, b):
        """Add two numbers"""
        return a + b
    
    @staticmethod
    def is_even(number):
        """Check if number is even"""
        return number % 2 == 0

# Static methods can be called on class or instance
print(MathUtils.add(5, 3))           # 8
print(MathUtils.is_even(4))          # True

math = MathUtils()
print(math.add(10, 20))              # 30
print(math.is_even(7))               # False
```

---

## Special Methods

### __str__ and __repr__
```python
class Book:
    def __init__(self, title, author, pages):
        self.title = title
        self.author = author
        self.pages = pages
    
    def __str__(self):
        """User-friendly string representation"""
        return f"{self.title} by {self.author}"
    
    def __repr__(self):
        """Developer-friendly string representation"""
        return f"Book('{self.title}', '{self.author}', {self.pages})"

book = Book("Python 101", "John Doe", 250)
print(str(book))   # Python 101 by John Doe
print(repr(book))  # Book('Python 101', 'John Doe', 250)
```

### __len__ and __getitem__
```python
class Playlist:
    def __init__(self, name):
        self.name = name
        self.songs = []
    
    def add_song(self, song):
        self.songs.append(song)
    
    def __len__(self):
        """Return number of songs"""
        return len(self.songs)
    
    def __getitem__(self, index):
        """Get song by index"""
        return self.songs[index]

playlist = Playlist("Favorites")
playlist.add_song("Song 1")
playlist.add_song("Song 2")
playlist.add_song("Song 3")

print(len(playlist))      # 3
print(playlist[0])        # Song 1
print(playlist[2])        # Song 3
```

### __eq__ and Comparison
```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def __eq__(self, other):
        """Check equality"""
        return self.age == other.age
    
    def __lt__(self, other):
        """Less than comparison"""
        return self.age < other.age
    
    def __gt__(self, other):
        """Greater than comparison"""
        return self.age > other.age

person1 = Person("Alice", 25)
person2 = Person("Bob", 30)
person3 = Person("Charlie", 25)

print(person1 == person3)  # True (same age)
print(person1 < person2)   # True (25 < 30)
print(person2 > person1)   # True (30 > 25)
```

---

## Practical Examples

### Example 1: Library Management System
```python
class Book:
    def __init__(self, title, author, isbn):
        self.title = title
        self.author = author
        self.isbn = isbn
        self.available = True
    
    def borrow(self):
        if self.available:
            self.available = False
            return True
        return False
    
    def return_book(self):
        self.available = True
    
    def __str__(self):
        status = "Available" if self.available else "Borrowed"
        return f"{self.title} by {self.author} ({status})"

class Library:
    def __init__(self, name):
        self.name = name
        self.books = []
    
    def add_book(self, book):
        self.books.append(book)
    
    def display_books(self):
        print(f"Books in {self.name}:")
        for book in self.books:
            print(f"  - {book}")

library = Library("City Library")
book1 = Book("Python Basics", "Author A", "123456")
book2 = Book("Advanced Python", "Author B", "789012")

library.add_book(book1)
library.add_book(book2)

book1.borrow()
library.display_books()
```

### Example 2: Bank Account System
```python
class Account:
    def __init__(self, account_holder, initial_balance=0):
        self.account_holder = account_holder
        self.__balance = initial_balance
        self.__transactions = []
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            self.__transactions.append(f"Deposit: +${amount}")
            return True
        return False
    
    def withdraw(self, amount):
        if amount > 0 and amount <= self.__balance:
            self.__balance -= amount
            self.__transactions.append(f"Withdraw: -${amount}")
            return True
        return False
    
    def get_balance(self):
        return self.__balance
    
    def get_transaction_history(self):
        return self.__transactions
    
    def display_statement(self):
        print(f"Account: {self.account_holder}")
        print(f"Balance: ${self.__balance}")
        print("Transaction History:")
        for transaction in self.__transactions:
            print(f"  - {transaction}")

account = Account("Alice", 1000)
account.deposit(500)
account.withdraw(200)
account.deposit(100)
account.display_statement()
```

---

## Best Practices for Classes

1. **Use Descriptive Names**: Class names should be nouns and use PascalCase
2. **Initialize Properly**: Use `__init__` to set up all attributes
3. **Encapsulate Data**: Use private attributes with getter/setter methods
4. **Document Classes**: Include docstrings explaining purpose and usage
5. **Avoid Deep Nesting**: Keep class hierarchies manageable
6. **Use Type Hints**: Clarify expected data types
7. **Keep Methods Small**: Each method should do one thing
8. **Test Thoroughly**: Test all methods with various inputs

---

## Summary

- **OOP provides a way to model real-world problems** using objects and classes
- **Classes bundle data and methods** together for better organization
- **Encapsulation hides internal details** and protects data integrity
- **Objects are independent instances** with their own state
- **Special methods** like `__init__`, `__str__` customize object behavior
- **Access control** (public, protected, private) helps maintain data integrity
- **Class methods and static methods** provide additional functionality

---

**Reference Materials:**
- Python Classes: https://docs.python.org/3/tutorial/classes.html
- Object Oriented Programming: https://en.wikipedia.org/wiki/Object-oriented_programming
