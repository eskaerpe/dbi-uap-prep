# Repetition

**Subject:** ISYS6898003 - ALGORITHM AND PROGRAMMING  
**Year:** 2026

## Learning Outcomes

At the end of this session, students will be able to:
- **(C2) Comprehension:** Explain the kind of algorithms in problem solving

## Sub Topics

- While
- While True (Do..While)
- Jump Operations
- For

---

## While

### Pengertian

**While** adalah struktur perulangan yang:
- Kondisi akan terus mengeksekusi blok kode selama kondisi yang ditentukan bernilai **True**
- Digunakan saat jumlah perulangan **tidak diketahui secara pasti** (**Indefinite Iteration**)
- Jika kondisi tidak pernah menjadi False, akan terjadi **Infinite Loop**

### Contoh 1: While Loop Dasar

```python
i = 0
while i < 5:  # akan dijalankan selama kondisi TRUE
    i += 2
    print(i)
```

**Output:**
```
2
4
```

### Contoh 2: While Loop dengan User Input

```python
angka = 9
tebak = int(input("Tebak angka: "))

while tebak != angka:
    tebak = int(input("Tebak angka: "))
```

**Penjelasan:** Loop akan terus berjalan sampai user menebak angka yang benar.

### Contoh 3: While Loop dengan Continue

```python
i = 0
while i < 5:  # akan dijalankan selama kondisi TRUE
    if i == 2:
        i += 1
        continue  # cobain break
    
    print(i)
    i += 2
```

**Output:**
```
0
4
```

---

## Jump Operations

### Definisi

**Jump Operations** adalah perintah untuk mengontrol alur perulangan dengan melompat atau menghentikan iterasi.

| Operation | Fungsi |
|-----------|--------|
| **break** | Menghentikan loop secara paksa dan keluar dari blok perulangan. |
| **continue** | Menghentikan iterasi saat ini dan langsung lompat ke iterasi berikutnya. |
| **pass** | Tidak melakukan apa pun; digunakan sebagai placeholder agar kode tidak error. |

### Break

**Fungsi:** Menghentikan seluruh proses perulangan saat itu juga dan keluar dari blok kode.

```python
for i in range(10):
    if i == 5:
        break
    print(i)
```

**Output:**
```
0
1
2
3
4
```

**Penjelasan:** Loop berhenti saat i sama dengan 5, tidak melanjutkan ke nilai yang lebih tinggi.

### Continue

**Fungsi:** Melewati sisa perintah pada putaran saat ini dan langsung lompat ke putaran berikutnya.

```python
for i in range(5):
    if i == 2:
        continue
    print(i)
```

**Output:**
```
0
1
3
4
```

**Penjelasan:** Ketika i sama dengan 2, print(i) dilewati dan langsung lompat ke iterasi berikutnya.

### Pass

**Fungsi:** Berperan sebagai placeholder (tempat kosong) agar struktur kode tetap valid meskipun belum ada logika di dalamnya.

```python
for i in range(5):
    if i == 2:
        pass
    else:
        print(i)
```

**Penjelasan:** Pass tidak melakukan apa pun, hanya sebagai placeholder.

---

## While True (Do..While)

### Pengertian

**While True** adalah struktur perulangan yang:
- Loop ini akan berjalan **selamanya sejak awal**
- Kita harus memasukkan **logika exit** (biasanya menggunakan **break**) di dalam blok kode tersebut
- Sangat efektif untuk sistem yang membutuhkan **input pengguna secara terus-menerus** sampai mendapatkan **validasi yang benar**

### Contoh: Menu System

```python
# menu
while True:
    print("1. Menu 1")
    print("2. Menu 2")
    print("3. Exit")
    
    choice = input("Pilih menu: ")
    
    if choice == "1":
        print("Ini menu 1")
    elif choice == "2":
        print("Ini menu 2")
    elif choice == "3":
        print("Exiting...")
        break
    else:
        print("Menu tidak tersedia")
    
    print("\n")
```

**Penjelasan:**
- Loop akan terus berjalan sampai user memilih opsi 3
- Setiap putaran, pengguna diminta untuk memasukkan pilihan menu
- Saat choice == "3", break akan menghentikan loop

---

## For

### Pengertian

**For** adalah struktur perulangan yang:
- Digunakan untuk melakukan **iterasi (perulangan)** pada sebuah **sequence** (list, string, range, atau dictionary)
- Digunakan saat jumlah perulangan **sudah diketahui secara pasti** (**Definite Iteration**)

### Contoh 1: For Loop dengan String

```python
nama = "Alexander-Bryan"
for x in nama:
    print(x)
```

**Output:**
```
A
l
e
x
a
n
d
e
r
-
B
r
y
a
n
```

**Penjelasan:** Loop akan mengiterasi setiap karakter dalam string.

### Contoh 2: For Loop dengan Range

```python
for i in range(5):
    print(i)
```

**Output:**
```
0
1
2
3
4
```

**Penjelasan:** `range(5)` menghasilkan angka dari 0 sampai 4 (5 tidak termasuk).

### Contoh 3: For Loop dengan Range (Start, Stop, Step)

```python
for y in range(1, 11, 2):
    print(y)
```

**Output:**
```
1
3
5
7
9
```

**Penjelasan:**
- `range(1, 11, 2)` menghasilkan angka dari 1 sampai 10 dengan langkah 2
- Start = 1, Stop = 11 (tidak termasuk 11), Step = 2

### Contoh 4: For Loop dengan Kondisi

```python
for i in range(1, 21):
    if i == 13:
        continue
    else:
        print(i)
```

**Output:**
```
1
2
3
4
5
6
7
8
9
10
11
12
14
15
16
17
18
19
20
```

**Penjelasan:** Loop akan melewati angka 13 karena ada `continue` statement.

### Contoh 5: For Loop dengan Len dan String

```python
word = "makan minum"
for i in range(len(word)):
    print(i)
    # print(word[i])
```

**Output:**
```
0
1
2
3
4
5
6
7
8
9
10
```

**Penjelasan:** `len(word)` menghasilkan panjang string (11 karakter), sehingga loop berjalan dari 0 sampai 10.

### Contoh 6: For Loop dengan Reversed

```python
for x in reversed(range(1, 11)):
    print(x)
print("Haloo")
```

**Output:**
```
10
9
8
7
6
5
4
3
2
1
Haloo
```

**Penjelasan:** `reversed(range(1, 11))` menghasilkan angka dari 10 sampai 1 (terbalik).

---

## Exercise

### Exercise 1: Right-Angle Triangle

Buatlah looping (*) untuk membentuk sebuah segitiga siku-siku dengan input tinggi segitiganya.

**Contoh:**
```
Masukkan tinggi segitiga: 3
*
**
***
```

```
Masukkan tinggi segitiga: 5
*
**
***
****
*****
```

### Solution Exercise 1

```python
tinggi = int(input("Masukkan tinggi segitiga: "))

for i in range(1, tinggi + 1):
    print("*" * i)
```

---

### Exercise 2: Inverted Right-Angle Triangle

Buatlah looping (*) untuk membentuk sebuah segitiga siku-siku terbalik dengan input tinggi segitiganya.

**Contoh:**
```
Masukkan tinggi segitiga: 3
***
**
*
```

```
Masukkan tinggi segitiga: 5
*****
****
***
**
*
```

### Solution Exercise 2

```python
tinggi = int(input("Masukkan tinggi segitiga: "))

for i in range(tinggi, 0, -1):
    print("*" * i)
```

---

## Summary

| Keyword | Penjelasan Singkat (Satu Kalimat) |
|---------|----------------------------------|
| **For** | Mengulang kode sebanyak jumlah yang sudah ditentukan secara pasti menggunakan rentang angka. |
| **While** | Mengulang kode selama suatu kondisi logika tertentu masih bernilai benar (True). |
| **While True** | Mengulang kode secara permanen hingga dihentikan paksa oleh perintah di dalam sistem. |
| **Break** | Menghentikan seluruh proses perulangan saat itu juga dan keluar dari blok kode. |
| **Continue** | Melewati sisa perintah pada putaran saat ini dan langsung lompat ke putaran berikutnya. |
| **Pass** | Berperan sebagai tempat kosong agar struktur kode tetap valid meskipun belum ada logika di dalamnya. |

---

## Perbandingan While vs For

| Aspek | While | For |
|-------|-------|-----|
| **Iterasi yang diketahui** | Tidak (Indefinite) | Ya (Definite) |
| **Kondisi** | Boolean condition | Sequence iteration |
| **Penggunaan** | Validasi input, menu loop | Iterasi array/range |
| **Kontrol** | Manual increment/decrement | Automatic |
| **Risiko** | Infinite loop jika kondisi salah | Terbatas pada panjang sequence |

---

## Best Practices

1. **Gunakan For** ketika Anda tahu berapa kali loop harus berjalan
2. **Gunakan While** ketika kondisi tidak pasti atau tergantung input pengguna
3. **Gunakan Break** untuk exit dari loop lebih awal jika kondisi terpenuhi
4. **Gunakan Continue** untuk melewati iterasi tertentu tanpa menghentikan loop
5. **Hindari Infinite Loop** dengan selalu memastikan kondisi akan menjadi False
