## Tuple

<Intuition>
Think of a tuple as a sealed envelope. You can look at what's inside, but once sealed, you cannot add, remove, or change its contents. It's a fixed snapshot of data that stays the same throughout your program.
</Intuition>

<Theory>
A **tuple** is an ordered, immutable collection that allows duplicate values. Once created, the contents cannot be added, reduced, or replaced.

```python
nametuple = (data0, data1, ..., datan)
```

Elements can have different data types:

```python
my_Tuple = ("HIT", 1, True)
```
</Theory>

### Operations

<Theory>
**Unpacking** — assign tuple elements to individual variables:

```python
mahasiswa = ("Ajax", 2902611111, "LXZ300", True)
nama, nim, kelas, status = mahasiswa
```

**.index()** — find position of a value:

```python
mahasiswa = ("Ajax", 2902611111, "LXZ300", True)
x = mahasiswa.index("Ajax")  # 0
```

**.count()** — count occurrences of a value:

```python
mahasiswa = ("Ajax", 2902611111, "LXZ300", True)
x = mahasiswa.count("Ajax")  # 1
```

**in** — check if value exists (returns bool):

```python
mahasiswa = ("Ajax", 2902611111, "LXZ300", True)
x = "Ajax" in mahasiswa  # True
```
</Theory>

<Conclusion>
Tuples are ideal for fixed data that should not change — like coordinates, database records, or function return values. They are memory-efficient and can be used as dictionary keys.
</Conclusion>

---

## Set

<Intuition>
Imagine a bag of marbles where duplicates instantly vanish, and the marbles randomly rearrange every time you look. You can add new marbles or throw some away, but you can't point to a specific position and say "this one is at position 2."
</Intuition>

<Theory>
A **set** is an unordered, mutable collection with no duplicates. Elements must be **immutable** (int, string, tuple, bool, float). Sets are not subscriptable — you cannot access by index.

```python
namaset = {data1, data2, data3, ..., datan}
```

```python
my_Set = {1, 2, 3, "Hello", (True, False)}
```
</Theory>

### Characteristics in Action

<Example>
**Unordered** — don't depend on position:

```python
my_Set = {5, 1, 100, 42, 7, 3}
print(my_Set)
# Output might be: {1, 3, 100, 5, 7, 42}
print(my_Set[1])  # TypeError!
```

**Elements must be immutable:**

```python
# Valid:
my_Set = {5, 1, (1,2,3), 42, 7, 3}  # tuple OK

# Error:
my_Set = {5, 1, [1,2,3], 42, 7, 3}  # TypeError
```

**No duplicates:**

```python
my_Set = {1, 1, 1, 2, 2, 3, 4, 5, 5}
print(my_Set)  # {1, 2, 3, 4, 5}
```
</Example>

### Operations

<Theory>
**.add()** — add an element:

```python
my_Set = {1, 2, 3}
my_Set.add(4)
```

**.remove()** — remove by value (error if not found):

```python
my_Set = {1, 2, 3}
my_Set.remove(1)
```

**.discard()** — remove by value (no error if not found):

```python
my_Set = {1, 2, 3}
my_Set.discard(1)
```

**.pop()** — remove and return an **arbitrary** element:

```python
my_Set = {1, 2, 3}
my_Set.pop()
```

**.clear()** — remove all elements.
</Theory>

<Conclusion>
Sets excel at membership tests, deduplication, and mathematical set operations (union, intersection). Use them when order doesn't matter and you need fast lookups.
</Conclusion>

---

## Dictionary

<Intuition>
A dictionary is like a real dictionary: you look up a word (key) to find its definition (value). You can add new words, update definitions, or remove entries. Every key must be unique — like no two words being spelled exactly the same.
</Intuition>

<Theory>
A **dictionary** stores key-value pairs. Keys must be unique and immutable. Values can be any type and can be duplicated.

```python
namadictionary = {key1: value1, key2: value2, ..., keyn: valuen}
```

```python
my_Dictionary = {"nama": "Ajax", "NIM": 2902611111}
```

**Characteristics:**
- Key-Value pair: every key must have a value
- Unique keys: duplicate keys overwrite the old value
- Mutable: pairs can be added, values can change
</Theory>

### Operations

<Theory>
**Access by key:**

```python
my_Dictionary = {"nama": "Ajax", "NIM": 2902611111}
x = my_Dictionary["NIM"]   # 2902611111 (error if missing)
x = my_Dictionary.get("NIM")  # 2902611111 (None if missing)
```

**Add / Update:**

```python
# Add
my_Dictionary["Kelas"] = "LXZ300"

# Update
my_Dictionary["nama"] = "Leon"

# Update multiple
my_Dictionary.update({"nama": "Leon", "Kelas": "LXZ300"})
```

**Delete:**

```python
del my_Dictionary["NIM"]           # Delete key-value pair
x = my_Dictionary.pop("nama")      # Delete and return value
my_Dictionary.clear()              # Remove all
```
</Theory>

<Example>
**Login Checker Exercise:**

Create a program that checks username and password against a dictionary:

```python
user = {
    "ajax": "AYAMSUNIB",
    "budiman": "password123"
}

username = input("Username: ")
password = input("Password: ")

if username not in user:
    print("username not found")
elif user[username] != password:
    print("password incorrect")
else:
    print("Selamat datang")
```
</Example>

<Conclusion>
Dictionaries are Python's most versatile data structure for mapping relationships. Use them for lookups, counting frequencies, storing structured data, and grouping related values.
</Conclusion>

---

## List — Basics

<Intuition>
A list is like a train with carriages. You can add new carriages, remove old ones, change what's inside a carriage, and the order of carriages stays the same. Multiple carriages can carry identical cargo.
</Intuition>

<Theory>
A **list** is an ordered, mutable collection that allows duplicates.

```python
namalist = [item1, item2, ..., itemn]
```

**Characteristics:**
- **Ordered** — elements keep their insertion order
- **Changeable** — can add, remove, and modify elements
- **Allows duplicates** — same value can appear multiple times
</Theory>

### Operations

<Theory>
**Insert** at specific index:

```python
mahasiswa = ["Lucy", 2902512345, 3.98]
mahasiswa.insert(1, "Grace")
# Result: ["Lucy", "Grace", 2902512345, 3.98]
```

**Update** by index:

```python
mahasiswa[0] = "Natori"
# Result: ["Natori", 2902512345, 3.98]
```

**Delete:**

```python
# By value (removes first occurrence)
mahasiswa.remove(3.98)

# By index
mahasiswa.pop(2)
```
</Theory>

<Example>
**YouTube Video Tracker:**

Track statistics for a YouTube video using list operations:

```python
# Initial: [title, viewers, likes, dislikes]
video = ["My first video", 1000, 30, 4]

# 1. Update viewer count (1000 → 1050)
video[1] = 1050

# 2. Remove dislikes
video.pop(3)

# 3. Add subscribe status
video.append(True)

print(video)
# ['My first video', 1050, 30, True]
```
</Example>

---

## List — Indexing and Slicing

<Intuition>
Think of a list as a row of numbered lockers. Indexing picks one specific locker. Slicing grabs a continuous section — "give me lockers 3 through 7" — like pulling books off a shelf from a certain position to another.
</Intuition>

<Theory>
**Indexing** — get value at a position:

```python
thislist = ["apple", "banana", "cherry"]
print(thislist[1])  # banana
```

**Getting index by value:**

```python
x = thislist.index("banana")  # 1
```

**Slicing** — get a sublist:

```python
namalist[start:end]  # end is exclusive
```

```python
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[2:6])   # ['cherry', 'orange', 'kiwi', 'melon']
print(thislist[2:])    # ['cherry', 'orange', 'kiwi', 'melon', 'mango']
print(thislist[:6])    # ['apple', 'banana', 'cherry', 'orange', 'kiwi', 'melon']
```
</Theory>

<Example>
**Range Slice Exercise:**

```python
examplelist = ["a", "b", "c", "d", "e", "f", "g", "h"]

start_val = input("Start: ")  # c
end_val = input("End: ")      # g

start_idx = examplelist.index(start_val)
end_idx = examplelist.index(end_val)

result = examplelist[start_idx:end_idx + 1]
print(result)  # ['c', 'd', 'e', 'f', 'g']
```
</Example>

<Conclusion>
Indexing and slicing provide precise data access. Slicing with [start:end] is fundamental to Python — it also works on strings, tuples, and any sequence type.
</Conclusion>

---

## References

- https://www.w3schools.com/python/
- Kong, Q., Siauw, T., and Bayen, A. M. (2021). Python Programming and Numerical Methods.
- docs.python.org/3/tutorial/datastructures.html
