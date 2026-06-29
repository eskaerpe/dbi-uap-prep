## Searching — Linear Search

<Intuition>
Bayangkan kamu mencari satu buku di tumpukan 100 buku yang tidak berurutan. Satu-satunya cara adalah memeriksa buku satu per satu dari atas sampai ketemu. Itulah <em>linear search</em> — sederhana, tapi butuh kesabaran untuk tumpukan besar.
</Intuition>

<Theory>
<strong>Linear Search</strong> memeriksa setiap elemen dalam list secara berurutan sampai menemukan target atau mencapai akhir.

<strong>Algoritma:</strong>
1. Mulai dari elemen pertama
2. Bandingkan elemen saat ini dengan target
3. Jika cocok, return index
4. Jika tidak, lanjut ke elemen berikutnya
5. Ulangi sampai ditemukan atau list habis
6. Jika tidak ditemukan, return -1

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

# Contoh
angka = [10, 25, 30, 45, 50, 65, 80, 95]
hasil = linear_search(angka, 45)
print(f"Elemen ditemukan di index: {hasil}")  # 3
```

<strong>Kelebihan:</strong> Bekerja pada list tidak terurut, implementasi sederhana
<strong>Kekurangan:</strong> Lambat untuk dataset besar — O(n)
</Theory>

<Example>
<strong>Mencari Semua Kemunculan:</strong>

```python
def cari_semua_kemunculan(lst, target):
    """Mencari semua index di mana target muncul"""
    indeks = []
    for i in range(len(lst)):
        if lst[i] == target:
            indeks.append(i)
    return indeks

angka = [1, 2, 3, 2, 4, 2, 5]
hasil = cari_semua_kemunculan(angka, 2)
print(hasil)  # [1, 3, 5]
```
</Example>

---

## Searching — Binary Search

<Intuition>
Bayangkan kamu mencari kata di kamus tebal. Kamu tidak membaca halaman satu per satu — kamu buka di tengah, lihat apakah kata target ada sebelum atau sesudah halaman itu, lalu buang setengah kamus yang tidak relevan. Ulangi sampai ketemu. Dalam 20 langkah, kamu bisa mencari di antara sejuta kata!
</Intuition>

<Theory>
<strong>Binary Search</strong> membagi ruang pencarian menjadi dua di setiap perbandingan. <strong>List harus terurut!</strong>

<strong>Algoritma:</strong>
1. Set pointer kiri di awal, kanan di akhir
2. Hitung index tengah
3. Bandingkan elemen tengah dengan target
4. Jika cocok, return index
5. Jika target < tengah, cari di setengah kiri
6. Jika target > tengah, cari di setengah kanan
7. Ulangi sampai ditemukan atau pointer bersilangan

```python
def binary_search(lst, target):
    """
    Binary search algorithm (iterative)
    Time Complexity: O(log n)
    Precondition: List must be sorted
    """
    kiri = 0
    kanan = len(lst) - 1
    
    while kiri <= kanan:
        tengah = (kiri + kanan) // 2
        
        if lst[tengah] == target:
            return tengah
        elif lst[tengah] < target:
            kiri = tengah + 1  # Cari setengah kanan
        else:
            kanan = tengah - 1  # Cari setengah kiri
    
    return -1

angka = [10, 20, 30, 40, 50, 60, 70, 80, 90]
hasil = binary_search(angka, 60)
print(f"Elemen ditemukan di index: {hasil}")  # 5
```

<strong>Perbandingan Kompleksitas:</strong>
```
Ukuran list: 1,000,000 elemen
- Linear Search: ~1,000,000 perbandingan
- Binary Search: ~20 perbandingan
```
</Theory>

---

## Sorting — Bubble Sort

<Intuition>
Bayangkan gelembung udara di dalam air — yang lebih ringan naik ke permukaan. <em>Bubble sort</em> bekerja seperti itu: elemen yang lebih besar "naik" (bergerak ke kanan) secara bertahap, seperti gelembung.
</Intuition>

<Theory>
Membandingkan elemen bersebelahan dan menukarnya jika urutan salah. Diulang sampai list terurut.

```python
def bubble_sort(lst):
    """
    Bubble sort algorithm
    Time Complexity: O(n²)
    Space Complexity: O(1)
    """
    n = len(lst)
    
    for i in range(n):
        swapped = False
        
        for j in range(0, n - i - 1):
            if lst[j] > lst[j + 1]:
                lst[j], lst[j + 1] = lst[j + 1], lst[j]
                swapped = True
        
        if not swapped:
            break
    
    return lst

angka = [64, 34, 25, 12, 22, 11, 90]
hasil = bubble_sort(angka.copy())
print(f"Sorted: {hasil}")  # [11, 12, 22, 25, 34, 64, 90]
```
</Theory>

---

## Sorting — Selection Sort

<Intuition>
Bayangkan kamu punya setumpuk kartu dan ingin mengurutkannya. Kamu cari kartu terkecil, letakkan di posisi pertama. Lalu cari terkecil kedua dari sisa, letakkan di posisi kedua. Begitu seterusnya.
</Intuition>

<Theory>
Mencari elemen minimum dan menempatkannya di awal, lalu mengulang untuk sisa elemen.

```python
def selection_sort(lst):
    """
    Selection sort algorithm
    Time Complexity: O(n²)
    Space Complexity: O(1)
    """
    n = len(lst)
    
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if lst[j] < lst[min_idx]:
                min_idx = j
        
        lst[i], lst[min_idx] = lst[min_idx], lst[i]
    
    return lst

angka = [64, 34, 25, 12, 22, 11, 90]
hasil = selection_sort(angka.copy())
print(f"Sorted: {hasil}")  # [11, 12, 22, 25, 34, 64, 90]
```
</Theory>

---

## Sorting — Insertion Sort

<Intuition>
Bayangkan kamu menyusun kartu di tangan. Setiap kali mengambil kartu baru, kamu sisipkan di posisi yang tepat di antara kartu yang sudah terurut. Ini cara alami manusia mengurutkan kartu.
</Intuition>

<Theory>
Membangun array terurut satu per satu dengan menyisipkan setiap elemen ke posisi yang benar.

```python
def insertion_sort(lst):
    """
    Insertion sort algorithm
    Time Complexity: O(n²)
    Space Complexity: O(1)
    """
    for i in range(1, len(lst)):
        key = lst[i]
        j = i - 1
        
        while j >= 0 and lst[j] > key:
            lst[j + 1] = lst[j]
            j -= 1
        
        lst[j + 1] = key
    
    return lst

angka = [64, 34, 25, 12, 22, 11, 90]
hasil = insertion_sort(angka.copy())
print(f"Sorted: {hasil}")  # [11, 12, 22, 25, 34, 64, 90]
```
</Theory>

---

## Sorting — Quick Sort

<Intuition>
Strategi "divide and conquer": pilih satu elemen sebagai pivot, lalu kelompokkan yang lebih kecil di kiri dan lebih besar di kanan. Lakukan hal yang sama pada setiap kelompok. Seperti proses kepemimpinan — pilih satu pemimpin, bagi tim berdasarkan kriteria, lalu ulangi.
</Intuition>

<Theory>
Algoritma divide-and-conquer yang mempartisi list di sekitar pivot dan mengurutkan partisi secara rekursif.

```python
def quick_sort(lst):
    """
    Quick sort algorithm
    Time Complexity: O(n log n) average, O(n²) worst
    Space Complexity: O(log n)
    """
    if len(lst) <= 1:
        return lst
    
    pivot = lst[len(lst) // 2]
    
    kiri = [x for x in lst if x < pivot]
    tengah = [x for x in lst if x == pivot]
    kanan = [x for x in lst if x > pivot]
    
    return quick_sort(kiri) + tengah + quick_sort(kanan)

angka = [64, 34, 25, 12, 22, 11, 90]
hasil = quick_sort(angka)
print(f"Sorted: {hasil}")  # [11, 12, 22, 25, 34, 64, 90]
```
</Theory>

---

## Sorting — Merge Sort

<Intuition>
Seperti turnamen olahraga: bagi peserta menjadi grup kecil, urutkan di dalam grup, lalu gabungkan grup-grup yang sudah terurut. Dengan membagi masalah menjadi bagian kecil, semuanya jadi lebih mudah ditangani.
</Intuition>

<Theory>
Algoritma divide-and-conquer yang membagi list menjadi dua, mengurutkan masing-masing, lalu menggabungkannya.

```python
def merge_sort(lst):
    """
    Merge sort algorithm
    Time Complexity: O(n log n)
    Space Complexity: O(n)
    """
    if len(lst) <= 1:
        return lst
    
    tengah = len(lst) // 2
    kiri = merge_sort(lst[:tengah])
    kanan = merge_sort(lst[tengah:])
    
    return merge(kiri, kanan)

def merge(kiri, kanan):
    """Menggabungkan dua list terurut"""
    hasil = []
    i = j = 0
    
    while i < len(kiri) and j < len(kanan):
        if kiri[i] <= kanan[j]:
            hasil.append(kiri[i])
            i += 1
        else:
            hasil.append(kanan[j])
            j += 1
    
    hasil.extend(kiri[i:])
    hasil.extend(kanan[j:])
    return hasil

angka = [64, 34, 25, 12, 22, 11, 90]
hasil = merge_sort(angka)
print(f"Sorted: {hasil}")  # [11, 12, 22, 25, 34, 64, 90]
```
</Theory>

---

## Built-in Sort Python

<Theory>
<strong>sorted() Function:</strong> Mengembalikan list baru yang terurut.

```python
angka = [64, 34, 25, 12, 22, 11, 90]
hasil = sorted(angka)
print(hasil)  # [11, 12, 22, 25, 34, 64, 90]
print(angka)  # Original tidak berubah
```

<strong>sort() Method:</strong> Mengurutkan list in-place.

```python
angka.sort(reverse=True)
print(angka)  # [90, 64, 34, 25, 22, 12, 11]
```

<strong>Custom Key:</strong>

```python
siswa = [
    {"nama": "Alice", "nilai": 85},
    {"nama": "Bob", "nilai": 92},
]
diurutkan = sorted(siswa, key=lambda x: x["nilai"], reverse=True)
```
</Theory>

---

## Perbandingan Algoritma Sorting

<Theory>
| Algoritma | Time Complexity | Space | Stable | Terbaik Untuk |
|-----------|----------------|-------|--------|---------------|
| Bubble | O(n²) | O(1) | Ya | Kecil, hampir terurut |
| Selection | O(n²) | O(1) | Tidak | Dataset kecil |
| Insertion | O(n²) | O(1) | Ya | Kecil, hampir terurut |
| Quick | O(n log n)* | O(log n) | Tidak | General purpose |
| Merge | O(n log n) | O(n) | Ya | Besar, butuh stabilitas |
| Python sort | O(n log n) | O(n) | Ya | Semua tujuan |

*O(n²) di worst case
</Theory>

---

<Conclusion>
<strong>Ringkasan:</strong>
- <strong>Linear Search</strong>: Sederhana O(n), bekerja pada list apa pun
- <strong>Binary Search</strong>: Cepat O(log n) tapi butuh list terurut
- <strong>Bubble/Selection/Insertion</strong>: O(n²), baik untuk pembelajaran
- <strong>Quick/Merge Sort</strong>: O(n log n), efisien untuk data besar
- <strong>Built-in Sort</strong>: Gunakan sorted() atau .sort() untuk production
- Pilih algoritma berdasarkan ukuran data, kebutuhan stabilitas, dan karakteristik data
</Conclusion>

---

## Referensi

- https://en.wikipedia.org/wiki/Big_O_notation
- https://www.sorting-algorithms.com/
