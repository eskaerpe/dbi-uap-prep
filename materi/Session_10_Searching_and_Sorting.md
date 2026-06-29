# ISYS6898003 - Algorithm and Programming
## Session 10 - Searching and Sorting in List

**Course Code:** ISYS6898003  
**Subject Matter Expert:** D5181 - Ferdianto, S.Kom, M.MSI  
**Session:** 10 - LAB  
**Institution:** BINUS Higher Education

---

## Learning Outcomes

### LO 4: Select the best algorithm in problem solving

By the end of this session, students will understand and implement various searching and sorting algorithms in Python.

---

## Course Outlines

1. **Searching in List**
2. **Function Sort in List**

---

## 1. Searching in List

### Linear Search (Sequential Search)

#### Concept
Linear search examines each element in the list sequentially until finding the target or reaching the end.

#### Algorithm
```
1. Start at the first element
2. Compare current element with target
3. If match found, return index
4. If no match, move to next element
5. Repeat until element found or list ends
6. If not found, return -1
```

#### Implementation
```python
def linear_search(lst, target):
    """
    Linear search algorithm
    Time Complexity: O(n)
    Space Complexity: O(1)
    """
    for i in range(len(lst)):
        if lst[i] == target:
            return i
    return -1

# Example usage
numbers = [10, 25, 30, 45, 50, 65, 80, 95]
result = linear_search(numbers, 45)
print(f"Element found at index: {result}")  # 3

result = linear_search(numbers, 100)
print(f"Element found at index: {result}")  # -1 (not found)
```

#### Advantages and Disadvantages
- **Advantages**: Works on unsorted lists, simple implementation
- **Disadvantages**: Slow for large datasets, O(n) time complexity

#### Example: Finding Multiple Occurrences
```python
def find_all_occurrences(lst, target):
    """Find all indices where target appears"""
    indices = []
    for i in range(len(lst)):
        if lst[i] == target:
            indices.append(i)
    return indices

numbers = [1, 2, 3, 2, 4, 2, 5]
result = find_all_occurrences(numbers, 2)
print(result)  # [1, 3, 5]
```

---

### Binary Search

#### Concept
Binary search divides the search space in half with each comparison. **Important: List must be sorted!**

#### Algorithm
```
1. Set left pointer at start, right pointer at end
2. Calculate middle index
3. Compare middle element with target
4. If match, return index
5. If target < middle, search left half
6. If target > middle, search right half
7. Repeat until found or pointers cross
```

#### Implementation (Iterative)
```python
def binary_search(lst, target):
    """
    Binary search algorithm (iterative)
    Time Complexity: O(log n)
    Space Complexity: O(1)
    Precondition: List must be sorted
    """
    left = 0
    right = len(lst) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if lst[mid] == target:
            return mid
        elif lst[mid] < target:
            left = mid + 1  # Search right half
        else:
            right = mid - 1  # Search left half
    
    return -1  # Not found

# Example usage
numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]
result = binary_search(numbers, 60)
print(f"Element found at index: {result}")  # 5

result = binary_search(numbers, 45)
print(f"Element found at index: {result}")  # -1
```

#### Implementation (Recursive)
```python
def binary_search_recursive(lst, target, left=0, right=None):
    """
    Binary search algorithm (recursive)
    """
    if right is None:
        right = len(lst) - 1
    
    if left > right:
        return -1
    
    mid = (left + right) // 2
    
    if lst[mid] == target:
        return mid
    elif lst[mid] < target:
        return binary_search_recursive(lst, target, mid + 1, right)
    else:
        return binary_search_recursive(lst, target, left, mid - 1)

numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90]
result = binary_search_recursive(numbers, 40)
print(f"Element found at index: {result}")  # 3
```

#### Advantages and Disadvantages
- **Advantages**: Very fast O(log n), works well for large sorted lists
- **Disadvantages**: Requires sorted list, more complex than linear search

#### Time Complexity Comparison
```
List size: 1,000,000 elements
- Linear Search: ~1,000,000 comparisons in worst case
- Binary Search: ~20 comparisons in worst case
```

---

## 2. Sorting Functions in List

### Bubble Sort

#### Concept
Compares adjacent elements and swaps them if in wrong order. Repeats until list is sorted.

#### Algorithm
```
1. Traverse list from start
2. Compare adjacent elements
3. Swap if left > right
4. Move to next pair
5. Repeat for all elements
6. Repeat entire process until no swaps needed
```

#### Implementation
```python
def bubble_sort(lst):
    """
    Bubble sort algorithm
    Time Complexity: O(n²)
    Space Complexity: O(1)
    Stable: Yes
    """
    n = len(lst)
    
    for i in range(n):
        swapped = False
        
        # Last i elements are already sorted
        for j in range(0, n - i - 1):
            if lst[j] > lst[j + 1]:
                # Swap
                lst[j], lst[j + 1] = lst[j + 1], lst[j]
                swapped = True
        
        # If no swaps occurred, list is sorted
        if not swapped:
            break
    
    return lst

# Example usage
numbers = [64, 34, 25, 12, 22, 11, 90]
result = bubble_sort(numbers.copy())
print(f"Sorted: {result}")  # [11, 12, 22, 25, 34, 64, 90]
```

---

### Selection Sort

#### Concept
Finds minimum element and places it at beginning, then repeats for remaining elements.

#### Algorithm
```
1. Find minimum element in unsorted portion
2. Swap with first unsorted element
3. Move boundary between sorted and unsorted
4. Repeat until list is sorted
```

#### Implementation
```python
def selection_sort(lst):
    """
    Selection sort algorithm
    Time Complexity: O(n²)
    Space Complexity: O(1)
    Stable: No
    """
    n = len(lst)
    
    for i in range(n):
        # Find minimum in remaining unsorted array
        min_idx = i
        for j in range(i + 1, n):
            if lst[j] < lst[min_idx]:
                min_idx = j
        
        # Swap
        lst[i], lst[min_idx] = lst[min_idx], lst[i]
    
    return lst

# Example usage
numbers = [64, 34, 25, 12, 22, 11, 90]
result = selection_sort(numbers.copy())
print(f"Sorted: {result}")  # [11, 12, 22, 25, 34, 64, 90]
```

---

### Insertion Sort

#### Concept
Builds sorted array one item at a time by inserting each element into correct position.

#### Algorithm
```
1. Start with second element
2. Compare with elements before it
3. Shift larger elements right
4. Insert element in correct position
5. Repeat for all elements
```

#### Implementation
```python
def insertion_sort(lst):
    """
    Insertion sort algorithm
    Time Complexity: O(n²)
    Space Complexity: O(1)
    Stable: Yes
    """
    for i in range(1, len(lst)):
        key = lst[i]
        j = i - 1
        
        # Move elements greater than key one position right
        while j >= 0 and lst[j] > key:
            lst[j + 1] = lst[j]
            j -= 1
        
        # Insert key at correct position
        lst[j + 1] = key
    
    return lst

# Example usage
numbers = [64, 34, 25, 12, 22, 11, 90]
result = insertion_sort(numbers.copy())
print(f"Sorted: {result}")  # [11, 12, 22, 25, 34, 64, 90]
```

---

### Quick Sort

#### Concept
Divide-and-conquer algorithm that partitions list around pivot and recursively sorts partitions.

#### Algorithm
```
1. Choose pivot element
2. Partition: elements < pivot left, elements > pivot right
3. Recursively sort left partition
4. Recursively sort right partition
5. Combine results
```

#### Implementation
```python
def quick_sort(lst):
    """
    Quick sort algorithm
    Time Complexity: O(n log n) average, O(n²) worst
    Space Complexity: O(log n)
    Stable: No (depending on implementation)
    """
    if len(lst) <= 1:
        return lst
    
    # Choose pivot (using middle element)
    pivot = lst[len(lst) // 2]
    
    left = [x for x in lst if x < pivot]
    middle = [x for x in lst if x == pivot]
    right = [x for x in lst if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)

# Example usage
numbers = [64, 34, 25, 12, 22, 11, 90]
result = quick_sort(numbers)
print(f"Sorted: {result}")  # [11, 12, 22, 25, 34, 64, 90]
```

---

### Merge Sort

#### Concept
Divide-and-conquer algorithm that splits list in half, sorts each half, and merges them.

#### Algorithm
```
1. Divide list into two halves
2. Recursively sort left half
3. Recursively sort right half
4. Merge sorted halves
```

#### Implementation
```python
def merge_sort(lst):
    """
    Merge sort algorithm
    Time Complexity: O(n log n)
    Space Complexity: O(n)
    Stable: Yes
    """
    if len(lst) <= 1:
        return lst
    
    # Divide
    mid = len(lst) // 2
    left = lst[:mid]
    right = lst[mid:]
    
    # Conquer (recursively sort)
    left = merge_sort(left)
    right = merge_sort(right)
    
    # Combine
    return merge(left, right)

def merge(left, right):
    """Merge two sorted lists"""
    result = []
    i = j = 0
    
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    # Add remaining elements
    result.extend(left[i:])
    result.extend(right[j:])
    
    return result

# Example usage
numbers = [64, 34, 25, 12, 22, 11, 90]
result = merge_sort(numbers)
print(f"Sorted: {result}")  # [11, 12, 22, 25, 34, 64, 90]
```

---

### Using Python's Built-in Sort

#### sorted() Function
```python
numbers = [64, 34, 25, 12, 22, 11, 90]

# Sort in ascending order
result = sorted(numbers)
print(result)  # [11, 12, 22, 25, 34, 64, 90]

# Sort in descending order
result = sorted(numbers, reverse=True)
print(result)  # [90, 64, 34, 25, 22, 12, 11]

# Original list unchanged
print(numbers)  # [64, 34, 25, 12, 22, 11, 90]
```

#### sort() Method
```python
numbers = [64, 34, 25, 12, 22, 11, 90]

# Sort in ascending order
numbers.sort()
print(numbers)  # [11, 12, 22, 25, 34, 64, 90]

# Sort in descending order
numbers.sort(reverse=True)
print(numbers)  # [90, 64, 34, 25, 22, 12, 11]
```

#### Sorting with Custom Key
```python
students = [
    {"name": "Alice", "grade": 85},
    {"name": "Bob", "grade": 92},
    {"name": "Charlie", "grade": 78}
]

# Sort by grade
sorted_students = sorted(students, key=lambda x: x["grade"])
for student in sorted_students:
    print(student)

# Sort by name
sorted_students = sorted(students, key=lambda x: x["name"])
for student in sorted_students:
    print(student)
```

#### Sorting Tuples
```python
students = [
    ("Alice", 85),
    ("Bob", 92),
    ("Charlie", 78)
]

# Sort by name (first element)
sorted_by_name = sorted(students)

# Sort by grade (second element)
sorted_by_grade = sorted(students, key=lambda x: x[1])
```

---

## Sorting Algorithm Comparison

| Algorithm | Time Complexity | Space | Stable | Best For |
|-----------|-----------------|-------|--------|----------|
| Bubble | O(n²) | O(1) | Yes | Small, nearly sorted |
| Selection | O(n²) | O(1) | No | Small datasets |
| Insertion | O(n²) | O(1) | Yes | Small, nearly sorted |
| Quick | O(n log n)* | O(log n) | No | General purpose |
| Merge | O(n log n) | O(n) | Yes | Large datasets, stability needed |
| Python's sort | O(n log n) | O(n) | Yes | All purposes |

*O(n²) in worst case

---

## Practical Examples

### Example 1: Search and Sort Students
```python
class Student:
    def __init__(self, name, student_id, gpa):
        self.name = name
        self.student_id = student_id
        self.gpa = gpa
    
    def __repr__(self):
        return f"{self.name} ({self.gpa})"

students = [
    Student("Alice", "2024001", 3.8),
    Student("Bob", "2024002", 3.5),
    Student("Charlie", "2024003", 3.9),
    Student("Diana", "2024004", 3.6)
]

# Search for student by GPA
def find_student_by_gpa(students, target_gpa):
    for student in students:
        if student.gpa == target_gpa:
            return student
    return None

# Sort students by GPA (descending)
sorted_by_gpa = sorted(students, key=lambda s: s.gpa, reverse=True)
print("By GPA (highest first):")
for student in sorted_by_gpa:
    print(f"  {student}")

# Sort students by name
sorted_by_name = sorted(students, key=lambda s: s.name)
print("\nBy Name:")
for student in sorted_by_name:
    print(f"  {student}")
```

### Example 2: Finding k Smallest Elements
```python
def find_k_smallest(lst, k):
    """Find k smallest elements"""
    if k > len(lst):
        k = len(lst)
    
    sorted_list = sorted(lst)
    return sorted_list[:k]

numbers = [64, 34, 25, 12, 22, 11, 90, 45]
result = find_k_smallest(numbers, 3)
print(f"3 smallest: {result}")  # [11, 12, 22]
```

---

## Best Practices

1. **Use Built-in Functions**: Python's sort is optimized, use it when possible
2. **Choose Right Algorithm**: Consider data size and characteristics
3. **Understand Stability**: If duplicates matter, use stable sort
4. **Time Complexity**: Consider O(n log n) sufficient for most cases
5. **Space Complexity**: Quick sort is space-efficient for large data
6. **Profile First**: Measure before optimizing

---

## Summary

- **Linear Search**: Simple but slow O(n), works on any list
- **Binary Search**: Fast O(log n) but requires sorted list
- **Bubble/Selection/Insertion**: O(n²), good for learning, small data
- **Quick/Merge Sort**: O(n log n), efficient for large data
- **Python's Built-in**: Use sorted() or .sort() for production code
- **Choose Algorithm Based**: Data size, sorting requirements, stability needs

---

**Reference Materials:**
- Big O Complexity: https://en.wikipedia.org/wiki/Big_O_notation
- Sorting Algorithm Visualization: https://www.sorting-algorithms.com/
