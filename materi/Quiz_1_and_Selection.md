# Quiz 1 + Selection

**Subject:** ISYS6898003 - ALGORITHM AND PROGRAMMING  
**Year:** 2025

## Learning Outcomes

At the end of this session, students will be able to:
- **(C2) Comprehension:** Explain the kind of algorithms in problem solving

## Sub Topics

- If and If…Else
- Nested If
- Match Statement (Switch Case)

---

## Selection

### Definisi

**Selection** adalah suatu konsep pada programming. Selection ini dipakai untuk mengambil sebuah keputusan berdasarkan kondisi yang diberikan atau ekspresi boolean.

Berikut adalah 3 jenis selection yang sering dipakai dalam Python:
- If and If…Else…
- Nested If
- Match Statement (Switch Case)

### Contoh Nyata

**Context:**
- Johnny ingin main bersama teman-temannya sesudah kelas beres.

**Selection:**
- Kalau Johnny **memiliki PR**, Johnny **tidak akan main** bersama teman-temannya.
- Kalau Johnny **tidak memiliki PR**, Johnny **akan main** bersama teman-temannya.

---

## If Statement

### Syntax

```python
if [Expression]:
    statement 1
    statement 2
[rest of the code]
```

### Note

Saat memakai selection, wajib ada **indentation** untuk menentukan statement apa saja yang di dalam suatu keputusan.

### Flowchart

```
START
  ↓
[if(expression)] → true → [statement(s)] → ↓
  ↓ false                                    ↓
[rest of code] ← ← ← ← ← ← ← ← ← ← ← ← ← ←
```

### Contoh Menggunakan If

Kode ini dipakai untuk menentukan apakah sebuah angka genap.

```python
angka = int(input("Masukkan angka: "))

print(f"Angka yang di-inputkan adalah {angka}")

if angka % 2 == 0:
    print("angka tersebut adalah bilangan genap.")

print("Terima kasih telah memakai program ini.")
```

#### Output

**GENAP:**
```
Masukkan angka: 10
Angka yang di-inputkan adalah 10
angka tersebut adalah bilangan genap.
Terima kasih telah memakai program ini.
```

**GANJIL:**
```
Masukkan angka: 11
Angka yang di-inputkan adalah 11
Terima kasih telah memakai program ini.
```

---

## If…Else Statement

### Syntax

```python
if [condition]:
    statement(s)
else:
    statement(s)
```

### Note

**Else** dipakai untuk memberikan opsi alternatif saat expression pertama tidak dipenuhi.

### Flowchart

```
START
  ↓
[If Condition] → true → [If Body] → ↓
  ↓ false                            ↓
[Else Body] → ↓                      ↓
  ↓ ← ← ← ← ←                        ↓
[Statement Just Below If] ← ← ← ← ←
  ↓
EXIT
```

### Contoh Menggunakan If-Else

Kode ini dipakai untuk menentukan apakah sebuah angka genap ATAU ganjil.

```python
angka = int(input("Masukkan angka: "))

print(f"Angka yang di-inputkan adalah {angka}")

if angka % 2 == 0:
    print("angka tersebut adalah bilangan genap.")
else:
    print("angka tersebut adalah bilangan ganjil.")

print("Terima kasih telah memakai program ini.")
```

#### Output

**GENAP:**
```
Masukkan angka: 10
Angka yang di-inputkan adalah 10
angka tersebut adalah bilangan genap.
Terima kasih telah memakai program ini.
```

**GANJIL:**
```
Masukkan angka: 11
Angka yang di-inputkan adalah 11
angka tersebut adalah bilangan ganjil.
Terima kasih telah memakai program ini.
```

---

## If…Elif…Else

### Syntax

```python
if [condition]:
    statement(s)
elif [condition]:
    statement(s)
else:
    statement(s)
```

### Note

**Elif (else if)** dipakai saat perlu lebih dari 2 opsi dalam keputusannya. Ekspresi akan dicek satu per satu berurutan dari awal sampai akhir.

### Flowchart

```
Test expression 1 → Yes → Statement 1 → ↓
  ↓ No                                   ↓
Test expression 2 → Yes → Statement 2 → ↓
  ↓ No                                   ↓
Test expression 3 → Yes → Statement 3 → ↓
  ↓ No                                   ↓
[Body of else] → ↓                       ↓
  ↓ ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ← ←
[Statement just below if-elif-else]
```

### Contoh Menggunakan If-Elif-Else

Kode ini dipakai untuk menentukan kategori usia berdasarkan input.

```python
age = int(input("Input your age: "))

print(f"You inputted {age} as your age")

if age >= 65:
    print("You are a senior citizen")
elif age >= 18:
    print("You are an adult")
elif age >= 13:
    print("You are a teenager")
else:
    print("You are a child")
```

#### Output

**>=65:**
```
Input your age: 99
You inputted 99 as your age
You are a senior citizen
```

**>=18:**
```
Input your age: 18
You inputted 18 as your age
You are an adult
```

**>=13:**
```
Input your age: 14
You inputted 14 as your age
You are a teenager
```

**<13:**
```
Input your age: 1
You inputted 1 as your age
You are a child
```

---

## Nested If

### Syntax

```python
if [condition]:
    if [condition]:
        statement(s)
```

### Note

**Nested if** terjadi saat ada if statement di dalam if statement yang lain.

### Flowchart

```
        TRUE
START → [Cond] → [Statement(s)] → ↓
  ↓ FALSE         ↓ TRUE            ↓
              [Cond] → [Statement(s)] → ↓
                  ↓ FALSE               ↓
              [Statement(s)] → ↓        ↓
                  ↓ ← ← ← ← ← ← ← ← ← ←
            [Statement(s)]
```

### Contoh Menggunakan Nested If

Kode ini dipakai untuk menentukan diskon berdasarkan harga dan status member.

```python
price = int(input("How much does your item cost: "))

if price >= 100000:
    membership = input("Do you have a membership (yes/no): ")
    
    if membership == "yes":
        print("You get a 15% discount")
    else:
        print("You get a 5% discount")
else:
    print("You don't get any discount")
```

#### Output

**< 100000:**
```
How much does your item cost: 10000
You don't get any discount
```

**>=100000 + member:**
```
How much does your item cost: 100000
Do you have a membership (yes/no): yes
You get a 15% discount
```

**<=100000 + no member:**
```
How much does your item cost: 150000
Do you have a membership (yes/no): no
You get a 5% discount
```

---

## Match Statement (Switch Case)

### Syntax

```python
match [variable]:
    case [pattern-1]:
        statement(s)
    case [pattern-2]:
        statement(s)
    case _:
        default statement
```

### Note

Fungsi switch case dan statement elif tidak beda jauh, tetapi formatting pada switch case lebih bersih dan mudah dibaca dibandingkan elif.

### Flowchart

```
          [expression]
               ↓
         matches → Yes → [code block 1] → ↓
         case 1 ?                         ↓
          ↓ No                            ↓
         matches → Yes → [code block 2] → ↓
         case 2 ?                         ↓
          ↓ No                            ↓
         matches → Yes → [code block 3] → ↓
         case 3 ?                         ↓
          ↓ No                            ↓
       [default code] → ↓                 ↓
          ↓ ← ← ← ← ← ← ← ← ← ← ← ← ← ←
   [match terminates]
```

### Contoh Menggunakan Match Statement

Kode ini dipakai untuk menentukan musim berdasarkan input.

```python
season = input("What season is it: ")

match season:
    case "winter" | "Winter" | "WINTER":
        print("It's cold")
    case "spring" | "Spring" | "SPRING":
        print("It's warm")
    case "summer" | "Summer" | "SUMMER":
        print("It's hot")
    case "fall" | "Fall" | "FALL":
        print("It's windy")
    case _:
        print("Invalid season")
```

#### Output

**winter:**
```
What season is it: winter
It's cold
```

**spring:**
```
What season is it: SPRING
It's warm
```

**summer:**
```
What season is it: summer
It's hot
```

**fall:**
```
What season is it: Fall
It's windy
```

**None of those:**
```
What season is it: gatau
Invalid season
```

---

## Summary

Dalam pembelajaran ini, telah dipelajari berbagai jenis selection/kondisi dalam Python untuk membuat keputusan berdasarkan kondisi yang diberikan:

- **If Statement:** Menjalankan kode jika kondisi bernilai TRUE
- **If-Else Statement:** Memberikan dua pilihan keputusan (TRUE atau FALSE)
- **If-Elif-Else Statement:** Memberikan lebih dari dua pilihan keputusan dengan pengecekan berurutan
- **Nested If:** If statement di dalam if statement untuk kondisi yang lebih kompleks
- **Match Statement:** Alternatif yang lebih bersih untuk menangani banyak pilihan dengan formatting yang lebih rapi
