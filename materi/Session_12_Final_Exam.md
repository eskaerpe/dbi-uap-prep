# ISYS6898003 - Algorithm and Programming
## Session 12 - Ujian Akhir Practicum (Final Practical Exam)

**Course Code:** ISYS6898003  
**Subject Matter Expert:** D5181 - Ferdianto, S.Kom, M.MSI  
**Session:** 12 - LAB  
**Institution:** BINUS Higher Education

---

## Learning Outcomes (Cumulative)

### LO 1: Explain the kind of algorithms in problem solving
Understand and differentiate between various algorithmic approaches and their applications.

### LO 2: Explain the usefulness of Python syntax and OOPs
Demonstrate knowledge of Python programming features and object-oriented design principles.

### LO 3: Demonstrate the algorithm using Python syntax
Implement algorithms and problem solutions using Python programming language.

### LO 4: Select the best algorithm in problem solving
Analyze problems and choose the most appropriate algorithm based on efficiency and requirements.

---

## Ujian Akhir Practicum Overview

The final practical examination assesses students' ability to:
- Apply multiple programming concepts in real-world scenarios
- Write efficient and clean code
- Design appropriate data structures and algorithms
- Handle errors and edge cases
- Document and explain solutions

---

## Examination Format

### Skills to be Tested

1. **Functions** (Session 7)
   - Defining and calling functions
   - Parameter handling (positional, keyword, *args, **kwargs)
   - Return values and multiple returns
   - List manipulation through functions

2. **File I/O and Exception Handling** (Session 8)
   - Reading and writing files
   - Exception handling with try-except-finally
   - File operations with context managers
   - Error recovery

3. **Object-Oriented Programming** (Session 9)
   - Class definition and instantiation
   - Encapsulation and access control
   - Special methods (__init__, __str__, etc.)
   - Method implementation

4. **Searching and Sorting** (Session 10)
   - Linear and binary search algorithms
   - Sorting algorithms (bubble, selection, insertion, quick, merge)
   - Algorithm analysis (Big O notation)
   - Optimal algorithm selection

---

## Sample Exam Questions and Solutions

### Question 1: Banking System (Functions + Classes + Exceptions)

**Problem Statement:**
Create a banking system that allows users to:
- Open an account
- Deposit money
- Withdraw money
- Check balance
- View transaction history
- Save and load account data from file

**Solution:**

```python
class BankAccount:
    """Bank account management system"""
    
    def __init__(self, account_holder, initial_balance=0):
        """Initialize bank account"""
        if initial_balance < 0:
            raise ValueError("Initial balance cannot be negative")
        
        self.account_holder = account_holder
        self.__balance = initial_balance
        self.__transactions = []
        
        if initial_balance > 0:
            self.__transactions.append(
                f"Opening balance: ${initial_balance}"
            )
    
    def deposit(self, amount):
        """Deposit money into account"""
        if amount <= 0:
            raise ValueError("Deposit amount must be positive")
        
        self.__balance += amount
        self.__transactions.append(f"Deposit: +${amount:.2f}")
        return True
    
    def withdraw(self, amount):
        """Withdraw money from account"""
        if amount <= 0:
            raise ValueError("Withdrawal amount must be positive")
        
        if amount > self.__balance:
            raise ValueError(
                f"Insufficient funds. "
                f"Available: ${self.__balance:.2f}"
            )
        
        self.__balance -= amount
        self.__transactions.append(f"Withdrawal: -${amount:.2f}")
        return True
    
    def get_balance(self):
        """Get current balance"""
        return self.__balance
    
    def get_transactions(self):
        """Get transaction history"""
        return self.__transactions.copy()
    
    def display_statement(self):
        """Display account statement"""
        print(f"\n{'='*50}")
        print(f"Account Holder: {self.account_holder}")
        print(f"Balance: ${self.__balance:.2f}")
        print(f"{'='*50}")
        print("Transaction History:")
        for i, transaction in enumerate(self.__transactions, 1):
            print(f"{i}. {transaction}")
        print(f"{'='*50}\n")
    
    def __str__(self):
        """String representation"""
        return (f"Account({self.account_holder}, "
                f"${self.__balance:.2f})")


class Bank:
    """Bank management system"""
    
    def __init__(self, filename="accounts.txt"):
        """Initialize bank"""
        self.filename = filename
        self.accounts = {}
        self.load_accounts()
    
    def create_account(self, name, initial_balance=0):
        """Create new account"""
        if name in self.accounts:
            raise ValueError(f"Account for {name} already exists")
        
        try:
            account = BankAccount(name, initial_balance)
            self.accounts[name] = account
            return account
        except ValueError as e:
            raise ValueError(f"Cannot create account: {e}")
    
    def get_account(self, name):
        """Get account by name"""
        if name not in self.accounts:
            raise KeyError(f"Account for {name} not found")
        return self.accounts[name]
    
    def save_accounts(self):
        """Save all accounts to file"""
        try:
            with open(self.filename, "w") as f:
                for name, account in self.accounts.items():
                    balance = account.get_balance()
                    f.write(f"{name},{balance:.2f}\n")
        except IOError as e:
            print(f"Error saving accounts: {e}")
    
    def load_accounts(self):
        """Load accounts from file"""
        try:
            with open(self.filename, "r") as f:
                for line in f:
                    parts = line.strip().split(",")
                    if len(parts) == 2:
                        name, balance = parts
                        try:
                            self.create_account(
                                name,
                                float(balance)
                            )
                        except (ValueError, KeyError):
                            pass
        except FileNotFoundError:
            pass  # File doesn't exist yet
    
    def list_accounts(self):
        """List all accounts"""
        print("\nAll Accounts:")
        for name, account in self.accounts.items():
            print(f"  {account}")


# Usage Example
def main():
    """Main program"""
    bank = Bank()
    
    try:
        # Create accounts
        acc1 = bank.create_account("Alice", 1000)
        acc2 = bank.create_account("Bob", 500)
        
        # Perform transactions
        acc1.deposit(500)
        acc1.withdraw(200)
        
        acc2.deposit(300)
        acc2.withdraw(100)
        
        # Display statements
        acc1.display_statement()
        acc2.display_statement()
        
        # List all accounts
        bank.list_accounts()
        
        # Save accounts
        bank.save_accounts()
        
    except (ValueError, KeyError) as e:
        print(f"Error: {e}")


if __name__ == "__main__":
    main()
```

---

### Question 2: Student Grade Analysis (Search + Sort + File I/O)

**Problem Statement:**
Create a system to:
- Load student data from file
- Search for students by various criteria
- Sort students by grade
- Calculate statistics
- Save results

**Solution:**

```python
class Student:
    """Student class"""
    
    def __init__(self, student_id, name, grade):
        """Initialize student"""
        self.student_id = student_id
        self.name = name
        self.grade = grade
    
    def __str__(self):
        return f"{self.student_id}: {self.name} - {self.grade}"
    
    def __lt__(self, other):
        """Less than for sorting"""
        return self.grade < other.grade
    
    def __eq__(self, other):
        """Equality check"""
        return self.grade == other.grade


class GradeBook:
    """Grade book management"""
    
    def __init__(self, filename):
        """Initialize grade book"""
        self.filename = filename
        self.students = []
        self.load_data()
    
    def load_data(self):
        """Load student data from file"""
        try:
            with open(self.filename, "r") as f:
                for line in f:
                    parts = line.strip().split(",")
                    if len(parts) == 3:
                        student_id, name, grade = parts
                        try:
                            student = Student(
                                student_id,
                                name,
                                int(grade)
                            )
                            self.students.append(student)
                        except ValueError:
                            print(f"Invalid data: {line}")
        except FileNotFoundError:
            print(f"File {self.filename} not found")
    
    def linear_search_by_name(self, name):
        """Search student by name (linear)"""
        for student in self.students:
            if student.name.lower() == name.lower():
                return student
        return None
    
    def search_by_grade(self, target_grade):
        """Find all students with specific grade"""
        result = []
        for student in self.students:
            if student.grade == target_grade:
                result.append(student)
        return result
    
    def search_by_grade_range(self, min_grade, max_grade):
        """Find students within grade range"""
        result = []
        for student in self.students:
            if min_grade <= student.grade <= max_grade:
                result.append(student)
        return sorted(result, reverse=True)
    
    def get_top_students(self, n=5):
        """Get top n students by grade"""
        sorted_students = sorted(
            self.students,
            key=lambda s: s.grade,
            reverse=True
        )
        return sorted_students[:n]
    
    def get_bottom_students(self, n=5):
        """Get bottom n students by grade"""
        sorted_students = sorted(
            self.students,
            key=lambda s: s.grade
        )
        return sorted_students[:n]
    
    def calculate_statistics(self):
        """Calculate grade statistics"""
        if not self.students:
            return None
        
        grades = [s.grade for s in self.students]
        
        return {
            "count": len(grades),
            "average": sum(grades) / len(grades),
            "highest": max(grades),
            "lowest": min(grades),
            "median": sorted(grades)[len(grades) // 2]
        }
    
    def display_all(self, sort_by="name"):
        """Display all students"""
        if sort_by == "grade":
            students = sorted(
                self.students,
                key=lambda s: s.grade,
                reverse=True
            )
        else:
            students = sorted(
                self.students,
                key=lambda s: s.name
            )
        
        print("\n" + "="*50)
        for student in students:
            print(student)
        print("="*50 + "\n")
    
    def save_results(self, output_file):
        """Save results to file"""
        try:
            with open(output_file, "w") as f:
                f.write("GRADE BOOK RESULTS\n")
                f.write("="*50 + "\n\n")
                
                # Statistics
                stats = self.calculate_statistics()
                f.write("STATISTICS\n")
                f.write(f"Total Students: {stats['count']}\n")
                f.write(f"Average Grade: {stats['average']:.2f}\n")
                f.write(f"Highest Grade: {stats['highest']}\n")
                f.write(f"Lowest Grade: {stats['lowest']}\n\n")
                
                # Top students
                f.write("TOP 5 STUDENTS\n")
                for i, student in enumerate(
                    self.get_top_students(),
                    1
                ):
                    f.write(f"{i}. {student}\n")
                
                f.write("\nBOTTOM 5 STUDENTS\n")
                for i, student in enumerate(
                    self.get_bottom_students(),
                    1
                ):
                    f.write(f"{i}. {student}\n")
        
        except IOError as e:
            print(f"Error saving results: {e}")


# Usage Example
def main():
    """Main program"""
    gradebook = GradeBook("students.txt")
    
    # Display statistics
    stats = gradebook.calculate_statistics()
    if stats:
        print(f"Average Grade: {stats['average']:.2f}")
        print(f"Highest Grade: {stats['highest']}")
        print(f"Lowest Grade: {stats['lowest']}")
    
    # Search and display
    print("\nTop Students:")
    for student in gradebook.get_top_students(3):
        print(f"  {student}")
    
    # Search by grade range
    excellent = gradebook.search_by_grade_range(80, 100)
    print(f"\nStudents with grade 80-100: {len(excellent)}")
    
    # Save results
    gradebook.save_results("results.txt")


if __name__ == "__main__":
    main()
```

---

## Exam Tips and Strategies

### Before the Exam
1. **Review All Sessions**: Go through Sessions 7-10 materials
2. **Practice Coding**: Write sample programs
3. **Understand Concepts**: Don't just memorize code
4. **Test Your Code**: Run programs and fix errors

### During the Exam
1. **Read Carefully**: Understand requirements completely
2. **Plan First**: Write pseudocode before programming
3. **Test Often**: Run code with test cases
4. **Handle Errors**: Include exception handling
5. **Comment Code**: Explain complex logic
6. **Time Management**: Allocate time wisely

### Best Practices in Exam
```python
# ✅ DO THIS
# Include docstrings
def process_data(data):
    """Process input data and return results"""
    pass

# Handle exceptions
try:
    result = function(data)
except ValueError as e:
    print(f"Error: {e}")

# Use meaningful names
student_grade = 85  # Clear

# ❌ AVOID THIS
def f(d):  # Unclear
    pass

x = 85  # Ambiguous

# No error handling
result = risky_function()
```

---

## Common Mistakes to Avoid

### 1. Not Handling Edge Cases
```python
# ❌ WRONG
def average(numbers):
    return sum(numbers) / len(numbers)

# ✅ CORRECT
def average(numbers):
    if not numbers:
        return 0
    return sum(numbers) / len(numbers)
```

### 2. Forgetting to Close Files
```python
# ❌ WRONG
f = open("file.txt")
data = f.read()

# ✅ CORRECT
with open("file.txt") as f:
    data = f.read()
```

### 3. Not Validating Input
```python
# ❌ WRONG
def withdraw(amount):
    self.balance -= amount

# ✅ CORRECT
def withdraw(self, amount):
    if amount <= 0:
        raise ValueError("Amount must be positive")
    if amount > self.balance:
        raise ValueError("Insufficient funds")
    self.balance -= amount
```

### 4. Poor Code Organization
```python
# ❌ WRONG - All in main
def main():
    # 200 lines of code here
    pass

# ✅ CORRECT - Modular
def helper_function():
    # Specific task
    pass

def main():
    # Orchestrates helper functions
    pass
```

---

## Practice Problems

### Problem 1: Employee Management System
Create a system to manage employees with:
- Name, ID, salary, department
- CRUD operations
- Search functionality
- Save/load from file
- Calculate total payroll

### Problem 2: Library System
Build a library system with:
- Book management
- Borrowing system
- Return tracking
- Search functionality
- Fine calculation

### Problem 3: Inventory Management
Develop an inventory system with:
- Product tracking
- Stock management
- Search and sort
- Reorder notifications
- Sales reporting

### Problem 4: Quiz Application
Create an interactive quiz with:
- Question management
- Score calculation
- Result tracking
- File-based storage
- Statistics

---

## Grading Criteria

### Code Quality (40%)
- Correct implementation ✓
- Error handling ✓
- Code readability ✓
- Proper documentation ✓

### Functionality (30%)
- All requirements met ✓
- Edge cases handled ✓
- No bugs ✓
- Proper output format ✓

### Efficiency (20%)
- Appropriate algorithms ✓
- Good time complexity ✓
- Proper data structures ✓

### Design (10%)
- Logical organization ✓
- Reusable components ✓
- OOP principles ✓

---

## Exam Checklist

Before submitting:
- [ ] All functions implemented
- [ ] All classes defined correctly
- [ ] Exception handling in place
- [ ] File I/O working
- [ ] Search/sort algorithms correct
- [ ] Code tested with multiple inputs
- [ ] Edge cases handled
- [ ] No infinite loops
- [ ] Comments added
- [ ] Output format correct
- [ ] No unused variables
- [ ] Program runs without errors

---

## Resources for Final Preparation

### Documentation to Review
- Functions: Parameter types, return values
- File I/O: Reading, writing, context managers
- Classes: __init__, methods, inheritance concepts
- Algorithms: Time complexity, Big O notation

### Practice Materials
- Review all code examples from Sessions 7-10
- Modify examples to test understanding
- Create small projects combining concepts
- Test edge cases and error conditions

### Time Management Strategy
- 30% - Understanding requirements
- 50% - Writing and testing code
- 20% - Debugging and polish

---

## Final Words

The goal of this course is to develop problem-solving skills using Python. The exam tests your ability to:

1. **Analyze** problems and break them down
2. **Design** appropriate solutions
3. **Implement** using Python syntax
4. **Test** thoroughly
5. **Optimize** when needed

Remember: **The best solution is one that works correctly, is easy to understand, and is efficient.**

---

## Contact and Support

**Subject Matter Expert:** D5181 - Ferdianto, S.Kom, M.MSI

**Course Information:**
- Email: schoolisbinus@binus.ac.id
- Website: http://sis.binus.ac.id
- Social Media: @schoolisbinus

**Office Hours:** By appointment

---

**Good luck with your final exam!**

Remember: Problem-solving is a skill developed through practice. Keep coding, keep learning, and don't give up when facing challenges.

---

**End of Session 12 - Ujian Akhir Practicum**
