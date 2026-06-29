## Review Fungsi

<Theory>
<strong>Review Cepat — Functions (Sesi 7):</strong>
- <strong>def</strong> mendefinisikan fungsi reusable
- Parameter bisa positional, keyword, default, *args, **kwargs
- Fungsi bisa return single atau multiple values
- List bersifat mutable — perubahan di dalam fungsi memengaruhi original

```python
# Simple function
def hitung_luas(radius):
    return 3.14 * radius ** 2

# Multiple return values
def min_max(angka):
    return min(angka), max(angka)

# Variable arguments
def jumlah_semua(*angka):
    return sum(angka)

# Keyword arguments
def sapa(nama, sapaan="Halo"):
    return f"{sapaan}, {nama}!"
```
</Theory>

---

## Review File & Exception

<Theory>
<strong>Review Cepat — File I/O dan Exception (Sesi 8):</strong>

<strong>File Operations:</strong>
```python
# Writing
with open("data.txt", "w") as f:
    f.write("Baris 1\n")

# Reading
with open("data.txt", "r") as f:
    for baris in f:
        print(baris.strip())
```

<strong>Exception Handling Pattern:</strong>
```python
try:
    angka = int(input("Masukkan angka: "))
    hasil = 100 / angka
except ValueError:
    print("Format angka tidak valid!")
except ZeroDivisionError:
    print("Tidak bisa membagi dengan nol!")
else:
    print(f"Hasil: {hasil}")
finally:
    print("Operasi selesai")
```

<strong>Exception Umum:</strong> FileNotFoundError, ValueError, ZeroDivisionError, IndexError, KeyError, TypeError
</Theory>

---

## Review Class & OOP

<Theory>
<strong>Review Cepat — Classes (Sesi 9):</strong>

```python
class Mahasiswa:
    def __init__(self, nama, nim):
        self.nama = nama
        self.__nim = nim  # Private
    
    def get_nim(self):
        return self.__nim
    
    def __str__(self):
        return f"{self.nama} ({self.__nim})"

mhs = Mahasiswa("Alice", "2024001")
print(mhs)            # Alice (2024001)
print(mhs.get_nim())  # 2024001
```

<strong>Poin Kunci:</strong>
- <strong>Encapsulation</strong>: __var untuk private, _var untuk protected
- <strong>Special methods</strong>: __init__, __str__, __len__, __eq__, dll.
- <strong>@property</strong> untuk getter/setter Pythonic
- <strong>@classmethod</strong> dan <strong>@staticmethod</strong> untuk method alternatif
</Theory>

---

## Review Searching & Sorting

<Theory>
<strong>Review Cepat — Algorithms (Sesi 10):</strong>

<strong>Linear Search — O(n):</strong>
```python
def linear_search(lst, target):
    for i, value in enumerate(lst):
        if value == target:
            return i
    return -1
```

<strong>Binary Search — O(log n):</strong>
```python
def binary_search(lst, target):
    kiri, kanan = 0, len(lst) - 1
    while kiri <= kanan:
        tengah = (kiri + kanan) // 2
        if lst[tengah] == target:
            return tengah
        elif lst[tengah] < target:
            kiri = tengah + 1
        else:
            kanan = tengah - 1
    return -1
```

<strong>Quick Sort — O(n log n):</strong>
```python
def quick_sort(lst):
    if len(lst) <= 1:
        return lst
    pivot = lst[len(lst) // 2]
    kiri = [x for x in lst if x < pivot]
    tengah = [x for x in lst if x == pivot]
    kanan = [x for x in lst if x > pivot]
    return quick_sort(kiri) + tengah + quick_sort(kanan)
```
</Theory>

---

## Contoh Project Terintegrasi

<Example>
<strong>Sistem Manajemen Nilai Siswa:</strong>

Project yang menggabungkan fungsi, file I/O, exception, class, searching, dan sorting.

```python
class BukuNilai:
    def __init__(self, filename):
        self.filename = filename
        self.siswa = {}
        self.load_data()
    
    def load_data(self):
        """Load nilai dari file"""
        try:
            with open(self.filename, "r") as f:
                for baris in f:
                    parts = baris.strip().split(",")
                    if len(parts) == 2:
                        nama, nilai = parts
                        self.siswa[nama] = int(nilai)
        except FileNotFoundError:
            print(f"File {self.filename} tidak ditemukan")
    
    def tambah_siswa(self, nama, nilai):
        if 0 <= nilai <= 100:
            self.siswa[nama] = nilai
        else:
            raise ValueError("Nilai harus 0-100")
    
    def save_data(self):
        try:
            with open(self.filename, "w") as f:
                for nama, nilai in self.siswa.items():
                    f.write(f"{nama},{nilai}\n")
        except IOError as e:
            print(f"Error menyimpan: {e}")
    
    def cari_by_nilai(self, target):
        hasil = []
        for nama, nilai in self.siswa.items():
            if nilai == target:
                hasil.append((nama, nilai))
        return hasil
    
    def get_top_students(self, n=3):
        diurutkan = sorted(
            self.siswa.items(),
            key=lambda x: x[1],
            reverse=True
        )
        return diurutkan[:n]
    
    def get_statistics(self):
        if not self.siswa:
            return None
        nilai = list(self.siswa.values())
        return {
            "rata-rata": sum(nilai) / len(nilai),
            "tertinggi": max(nilai),
            "terendah": min(nilai),
            "jumlah": len(nilai)
        }

# Usage
buku = BukuNilai("nilai.txt")
buku.tambah_siswa("Alice", 85)
buku.tambah_siswa("Bob", 92)
buku.tambah_siswa("Charlie", 78)

print("Top students:", buku.get_top_students(2))
print("Statistics:", buku.get_statistics())
buku.save_data()
```
</Example>

---

## Panduan Pemilihan Algoritma

<Theory>
<strong>Memilih Algoritma Searching:</strong>
| Ukuran Data | Terurut? | Pilihan Terbaik |
|-------------|----------|----------------|
| Kecil (<100) | Tidak | Linear Search |
| Kecil (<100) | Ya | Binary Search |
| Besar (>1K) | Ya | Binary Search |

<strong>Memilih Algoritma Sorting:</strong>
| Data | Karakteristik | Pilihan |
|------|---------------|---------|
| Sangat kecil | Pembelajaran | Bubble/Selection |
| Kecil (<100) | Sederhana | Insertion |
| Sedang | Cepat | Quick Sort |
| Besar | O(n log n) terjamin | Merge Sort |
| General | Apa pun | Python's sort() |
</Theory>

---

## Common Pitfalls

<Example>
<strong>1. Lupa Menutup File:</strong>
```python
# ❌ SALAH
f = open("file.txt")
data = f.read()
# File tidak ditutup!

# ✅ BENAR
with open("file.txt") as f:
    data = f.read()
```

<strong>2. Binary Search pada List Tidak Terurut:</strong>
```python
# ❌ SALAH
angka = [64, 34, 25, 12, 22]
binary_search(angka, 25)  # Hasil salah!

# ✅ BENAR
angka = sorted([64, 34, 25, 12, 22])
binary_search(angka, 25)  # Correct
```

<strong>3. Mutable Default Arguments:</strong>
```python
# ❌ SALAH
def tambah_ke_list(item, lst=[]):
    lst.append(item)
    return lst  # List dibagi!

# ✅ BENAR
def tambah_ke_list(item, lst=None):
    if lst is None:
        lst = []
    lst.append(item)
    return lst
```
</Example>

---

## Performance Overview

<Theory>
<strong>Time Complexity Reference:</strong>

```python
# O(1) — Constant
def get_first(lst):
    return lst[0]

# O(n) — Linear
def cari_sum(lst):
    return sum(lst)

# O(log n) — Logarithmic
def binary_search(lst, target):
    # Setiap langkah membagi ruang pencarian
    pass

# O(n log n) — Linearithmic
def merge_sort(lst):
    # Divide and conquer
    pass

# O(n²) — Quadratic
def bubble_sort(lst):
    # Perbandingan berpasangan
    pass
```
</Theory>

---

## Practice Problems

<Example>
<strong>Problem 1: Merge Sorted Lists</strong>
```python
def merge_sorted_lists(lst1, lst2):
    """Gabungkan dua list terurut"""
    pass  # Your code here

# Test: merge_sorted_lists([1, 3, 5], [2, 4, 6])
# Expected: [1, 2, 3, 4, 5, 6]
```

<strong>Problem 2: Find Duplicates</strong>
```python
def cari_duplikat(lst):
    """Cari semua nilai duplikat"""
    pass  # Your code here

# Test: cari_duplikat([1, 2, 2, 3, 3, 3, 4])
# Expected: [2, 3]
```

<strong>Problem 3: File Processing</strong>
```python
def proses_csv(filename):
    """Baca CSV dan return data terurut"""
    # Format: nama,umur,nilai
    pass
```

<strong>Problem 4: Class Design</strong>
```python
class Perpustakaan:
    """Design sistem manajemen perpustakaan"""
    # Tambah buku, cari, pinjam, kembali
    pass
```
</Example>

---

<Conclusion>
<strong>Key Takeaway:</strong>
Course ini mencakup konsep pemrograman fundamental:
- <strong>Functions</strong>: Code reusability dan modularity
- <strong>Files & Exceptions</strong>: Data persistence dan error handling
- <strong>Classes & OOP</strong>: Organized, scalable code design
- <strong>Algorithms</strong>: Efficient problem solving

Pilih alat yang tepat (algoritma, struktur data, design pattern) untuk setiap masalah. Latih implementasi dan pahami trade-off antara kesederhanaan, performa, dan maintainability.
</Conclusion>

---

## Referensi

- https://docs.python.org/3/
- https://visualgo.net/
- https://www.bigocheatsheet.com/
