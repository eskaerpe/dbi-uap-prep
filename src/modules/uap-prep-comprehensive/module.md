## Data Structures (Sesi 6)

<Theory>
<strong>Tuple:</strong> Koleksi terurut dan <em>immutable</em>, mengizinkan duplikat. Gunakan <strong>()</strong>.

```python
my_tuple = ("HIT", 1, True)
my_tuple[0]  # "HIT"
```

<strong>Set:</strong> Koleksi tidak terurut, <em>mutable</em>, tanpa duplikat, elemen harus immutable. Gunakan <strong>{}</strong>.

```python
my_set = {1, 2, 3}
my_set.add(4)
```

<strong>Dictionary:</strong> Pasangan key-value. Key unik dan immutable, value bisa apa saja.

```python
my_dict = {"nama": "Ajax", "NIM": 2902611111}
my_dict.get("nama")
```

<strong>List:</strong> Koleksi terurut, mutable, mengizinkan duplikat. Gunakan <strong>[]</strong>.

```python
my_list = ["apel", "pisang", "ceri"]
my_list[1]     # pisang
my_list[2:6]   # slicing
```
</Theory>

---

## Functions (Sesi 7)

<Theory>
<strong>Mendefinisikan Fungsi:</strong>

```python
def nama_fungsi(parameter):
    """Docstring"""
    return nilai
```

<strong>Parameter:</strong> positional, keyword, default, *args, **kwargs

```python
def power(base, exp=2):
    return base ** exp

def sum_all(*angka):
    return sum(angka)
```

<strong>List sebagai Argumen:</strong> List bersifat mutable — perubahan di dalam fungsi memengaruhi original.
</Theory>

---

## File I/O dan Exception (Sesi 8)

<Theory>
<strong>Context Manager (with):</strong>

```python
with open("file.txt", "w") as f:
    f.write("Hello")
```

<strong>Exception Handling:</strong>

```python
try:
    hasil = 10 / angka
except ZeroDivisionError:
    print("Tidak bisa bagi nol!")
except ValueError:
    print("Input tidak valid!")
finally:
    print("Selesai")
```

<strong>Exception Umum:</strong> FileNotFoundError, ValueError, KeyError, IndexError, TypeError
</Theory>

---

## OOP (Sesi 9)

<Theory>
<strong>Class Dasar:</strong>

```python
class Mahasiswa:
    def __init__(self, nama, nim):
        self.nama = nama
        self.__nim = nim  # Private
    
    def get_nim(self):
        return self.__nim
    
    def __str__(self):
        return f"{self.nama} ({self.__nim})"
```

<strong>Encapsulation:</strong> __var (private), _var (protected), @property decorator
<strong>Special Methods:</strong> __init__, __str__, __len__, __eq__, __getitem__
</Theory>

---

## Searching & Sorting (Sesi 10)

<Theory>
<strong>Linear Search — O(n):</strong>

```python
def linear_search(lst, target):
    for i, v in enumerate(lst):
        if v == target:
            return i
    return -1
```

<strong>Binary Search — O(log n):</strong> Butuh list terurut.

<strong>Bubble/Selection/Insertion Sort — O(n²):</strong> Untuk pembelajaran dan dataset kecil.
<strong>Quick Sort — O(n log n):</strong> Divide-and-conquer, general purpose.
<strong>Merge Sort — O(n log n):</strong> Stable sort, jaminan performa.
<strong>Python Built-in:</strong> sorted() dan .sort() untuk production.
</Theory>

---

## Tips Ujian

<Conclusion>
<strong>Best Practices Ujian:</strong>
1. Baca soal teliti, rencanakan sebelum coding
2. Gunakan <strong>with</strong> untuk file operations
3. Sertakan exception handling
4. Validasi input di setiap fungsi
5. Gunakan nama variabel deskriptif
6. Uji kode dengan berbagai input
7. Handle edge cases (list kosong, nol, negatif)
8. Dokumentasikan fungsi dengan docstring

<strong>Ingat:</strong> Solusi terbaik adalah yang bekerja benar, mudah dipahami, dan efisien.
</Conclusion>
