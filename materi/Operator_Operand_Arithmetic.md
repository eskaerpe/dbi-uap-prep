# Operator, Operand, and Arithmetic

**Subject:** ISYS6898003 - ALGORITHM AND PROGRAMMING  
**Year:** 2025

## Learning Outcomes

At the end of this session, students will be able to:
- **(C2) Comprehension:** Explain the kind of algorithms in problem solving

## Sub Topics

- Operator and Operand
- Arithmetic Operators
- Assignment Operators
- Relational Operators
- Logical Operators
- Bitwise Operators
- Precedences and Associative Operators

---

## Operator & Operand

### Definisi

**Operator**
- Symbol yang digunakan untuk melakukan operasi

**Operand**
- Nilai atau variabel yang dikenai operator

### Contoh

```
10 + 5
```

- `+` → operator
- `10` dan `5` → operand

---

## Arithmetic Operators

Operator aritmatika di Python:

- `+` → Penjumlahan (Addition)
- `-` → Pengurangan (Subtraction)
- `*` → Perkalian (Multiplication)
- `/` → Pembagian (Division)
- `%` → Modulus (sisa bagi / Remainder)
- `**` → Pangkat (Exponentiation)
- `//` → Pembagian bulat (Floor Division)

### Contoh 1: Operasi Dasar

```python
a = 10
b = 3
print(a + b)  # Output: 13
print(a - b)  # Output: 7
print(a * b)  # Output: 30
print(a / b)  # Output: 3.3333333333333335
```

**Catatan:**
- Operator `/` selalu menghasilkan nilai bertipe desimal (float)
- Python melakukan operasi aritmatika sesuai operator
- Nilai variabel a dan b tetap, yang berubah hanya hasil operasi

### Contoh 2: Modulus dan Floor Division

```python
print(10 % 3)   # Output: 1
print(10 // 3)  # Output: 3
```

**Penjelasan:**
- `10 % 3` → sisa pembagian 10 oleh 3 → (10 = 3 × 3 + 1 → sisa 1)
- `10 // 3` → hasil bagi tanpa koma 10 dibagi 3 = 3.33… → diambil 3
- `%` menghasilkan sisa bagi
- `//` menghasilkan hasil bagi tanpa desimal (floor)

### Contoh 3: Modulus untuk Menentukan Genap/Ganjil

```python
print(8 % 2)   # Output: 0
print(7 % 2)   # Output: 1
```

**Penjelasan:**
- Sisa 0 berarti habis dibagi (genap)
- Sisa 1 berarti tidak habis dibagi (ganjil)

### Contoh 4: Pangkat (Exponentiation)

```python
print(2 ** 3)  # Output: 8
print(5 ** 2)  # Output: 25
```

**Penjelasan:**
- `**` digunakan untuk operasi pangkat
- Python tidak menggunakan `^`

### Error Handling

```python
print(10 + "5")  # Error: Cannot add int and str
print(10 / 0)    # Error: Division by zero
```

**Penjelasan:**
- Python tidak bisa menjumlahkan angka dan teks. Tipe data harus sesuai.
- Pembagian dengan nol tidak diperbolehkan. Program akan berhenti jika error tidak ditangani.

---

## Assignment Operators

**Definisi:** Operator yang digunakan untuk memberikan nilai kepada variabel

### Contoh 1: Operator Dasar

```python
x = 10
print(x)  # Output: 10
```

**Penjelasan:** Nilai 10 disimpan ke variabel x. Operator `=` digunakan untuk assignment.

### Contoh 2: Operator Gabungan

```python
x = 10
x += 5
print(x)  # Output: 15
```

**Penjelasan:** `x += 5` sama dengan `x = x + 5`. Nilai lama x digunakan kembali.

### Contoh 3: Multiple Assignment Operations

```python
x = 10
x += 5   # x = 10 + 5 = 15
x *= 2   # x = 15 * 2 = 30
x -= 4   # x = 30 - 4 = 26
print(x) # Output: 26
```

---

## Relational Operators

**Definisi:** Membandingkan suatu nilai dari masing-masing operand

- `==` → Sama dengan → `1 == 1` bernilai **TRUE**
- `!=` → Tidak sama dengan → `2 != 2` bernilai **FALSE**
- `<>` → Tidak sama dengan → `2 <> 2` bernilai **FALSE**
- `>` → Lebih besar dari → `5 > 3` bernilai **TRUE**
- `<` → Lebih kecil dari → `3 < 5` bernilai **TRUE**
- `>=` → Lebih besar atau sama dengan → `5 >= 6` bernilai **TRUE**
- `<=` → Lebih kecil atau sama dengan → `5 <= 5` bernilai **TRUE**

---

## Logical Operators

**Definisi:** Operator logika melakukan operasi logika pada nilai dan ekspresi Boolean, mengembalikan hasil Boolean berdasarkan hubungan logis antara operan.

| Operator | Nama | Keterangan | Contoh |
|----------|------|-----------|--------|
| `and` | Logika DAN | Mengembalikan nilai True jika kedua operand bernilai True. | `x and y` |
| `or` | OR Logika | Mengembalikan True jika setidaknya satu operand bernilai True. | `x or y` |
| `not` | Logika TIDAK | Mengembalikan nilai Boolean yang berlawanan. | `not x` |

---

## Bitwise Operators

**Definisi:** Operator bitwise melakukan operasi pada representasi biner angka pada tingkat bit individual.

| Operator | Nama | Keterangan | Contoh |
|----------|------|-----------|--------|
| `&` | Bitwise AND | Mengembalikan nilai 1 jika kedua bit bernilai 1. | `x & y` |
| `\|` | Bitwise OR | Mengembalikan nilai 1 jika setidaknya satu bit bernilai 1. | `x \| y` |
| `^` | XOR bitwise | Mengembalikan nilai 1 jika bitnya berbeda. | `x ^ y` |
| `~` | Bitwise NOT | Mengembalikan komplemen bit. | `~x` |
| `<<` | Geser ke kiri | Menggeser bit ke kiri | `x << 2` |
| `>>` | Geser ke Kanan | Menggeser beberapa bagian ke kanan | `x >> 2` |

---

## Precedences and Associative Operators

**Definisi:** Urutan prioritas operasi dalam ekspresi matematika

### Contoh 1: Tanpa Kurung (Perkalian Lebih Dulu)

```python
print(10 - 2 * 3)  # Output: 4
```

**Penjelasan:** Perkalian dikerjakan lebih dahulu. 2 × 3 = 6, lalu 10 − 6 = 4

### Contoh 2: Dengan Kurung (Operasi di Dalam Kurung Diprioritaskan)

```python
print((10 - 2) * 3)  # Output: 24
```

**Penjelasan:** Operasi di dalam kurung diprioritaskan. (10 - 2) = 8, lalu 8 × 3 = 24. Hasil perhitungan berubah.

---

## Latihan

```python
x = 12
y = 5
x += y * 2
x //= 4
x += x % y
print(x)
```

### Pertanyaan:
1. Tentukan output yang dihasilkan program!
2. Tuliskan perubahan nilai x di setiap baris kode!
3. Jelaskan kenapa hasil akhirnya seperti itu!

### Jawaban:

**Langkah 1 – Nilai Awal**
- `x = 12`
- `y = 5`

**Langkah 2 – Baris `x += y * 2` (Kerjakan kanan dulu - operator precedence)**
- `y * 2 = 5 * 2 = 10`
- `x += 10` → `x = 12 + 10 = 22`
- Nilai x sekarang: **22**

**Langkah 3 – Baris `x //= 4`**
- `x //= 4` artinya `x = x // 4`
- `22 // 4 = 5` (dibulatkan ke bawah)
- Nilai x sekarang: **5**

**Langkah 4 – Baris `x += x % y`**
- Kerjakan modulus dulu:
- `x % y = 5 % 5 = 0`
- `x += 0` → `x = 5`
- Nilai x sekarang: **5**

**Output Akhir**
```
5
```

---

## Summary

- **Operator** dalam pemrograman Python adalah simbol atau kata kunci khusus yang melakukan operasi pada variabel dan nilai.
- **Operator** merupakan blok bangunan fundamental yang memungkinkan pengembang untuk memanipulasi data, melakukan perhitungan, membuat perbandingan, dan mengontrol alur program.
- **Operator** Python mengambil satu atau lebih operan (nilai atau variabel) dan menghasilkan hasil berdasarkan operasi spesifik yang dilakukan.
