## Mendefinisikan Fungsi

<Intuition>
Bayangkan fungsi seperti mesin fotokopi. Kamu memasukkan kertas (input/argumen), mesin memprosesnya, dan mengeluarkan hasil (return value). Setiap kali butuh salinan, kamu cukup tekan tombol — tidak perlu membuat ulang dari nol. Fungsi membuat kode <em>reusable</em> dan terorganisir.
</Intuition>

<Theory>
<strong>Fungsi</strong> adalah blok kode yang dapat dipakai ulang untuk melakukan tugas tertentu. Fungsi membantu mengorganisir kode, mengurangi redundansi, dan membuat program lebih mudah dirawat.

```python
def nama_fungsi(parameter):
    """Dokumentasi fungsi"""
    # Badan fungsi
    pernyataan
    return nilai  # Opsional
```

<strong>Poin Penting:</strong>
- Nama fungsi harus deskriptif, gunakan lowercase dengan underscore
- Keyword <strong>def</strong> digunakan untuk mendefinisikan fungsi
- Fungsi bisa memiliki nol atau lebih parameter
- Docstring (triple quotes) menyediakan dokumentasi
- Indentasi sangat penting di Python
</Theory>

<Example>
Fungsi sederhana untuk menyapa:

```python
def sapa(nama):
    """Fungsi ini menyapa seseorang"""
    print(f"Halo, {nama}!")

sapa("Alice")  # Output: Halo, Alice!
```
</Example>

---

## Passing Argumen

<Theory>
<strong>Positional Arguments:</strong> Argumen dilewatkan sesuai urutan definisi.

```python
def tambah(a, b):
    """Menambahkan dua angka"""
    return a + b

hasil = tambah(5, 3)  # hasil = 8
```

<strong>Keyword Arguments:</strong> Argumen bisa dilewatkan dengan nama, memberi fleksibilitas urutan.

```python
def deskripsi_orang(nama, umur, kota):
    print(f"{nama} berumur {umur} dan tinggal di {kota}")

deskripsi_orang(kota="Jakarta", nama="Budi", umur=25)
# Output: Budi berumur 25 dan tinggal di Jakarta
```

<strong>Default Arguments:</strong> Parameter bisa memiliki nilai bawaan.

```python
def pangkat(base, eksponen=2):
    """Menghitung pangkat dengan eksponen default 2"""
    return base ** eksponen

print(pangkat(5))      # 25
print(pangkat(5, 3))   # 125
```
</Theory>

### Variable-Length Arguments

<Theory>
<strong>*args</strong> — mengizinkan jumlah argumen posisi tak terbatas:

```python
def jumlah_semua(*angka):
    """Menjumlahkan berapapun argumen"""
    total = 0
    for num in angka:
        total += num
    return total

print(jumlah_semua(1, 2, 3, 4, 5))  # 15
```

<strong>**kwargs</strong> — mengizinkan jumlah argumen keyword tak terbatas:

```python
def cetak_info(**info):
    """Mencetak key-value pairs"""
    for key, value in info.items():
        print(f"{key}: {value}")

cetak_info(nama="Alice", umur=30, pekerjaan="Engineer")
# Output:
# nama: Alice
# umur: 30
# pekerjaan: Engineer
```
</Theory>

---

## Return Value

<Theory>
<strong>Single Return Value:</strong>

```python
def kuadrat(x):
    """Mengembalikan kuadrat dari suatu angka"""
    return x * x

hasil = kuadrat(4)  # hasil = 16
```

<strong>Multiple Return Values:</strong>

```python
def bagi_dengan_sisa(a, b):
    """Mengembalikan hasil bagi dan sisa"""
    hasil_bagi = a // b
    sisa = a % b
    return hasil_bagi, sisa

q, r = bagi_dengan_sisa(17, 5)
print(q, r)  # 3 2
```

<strong>Return None:</strong> Jika tidak ada return statement, fungsi mengembalikan None.

<strong>Early Return:</strong>

```python
def cek_positif(num):
    if num < 0:
        return "Negatif"
    if num == 0:
        return "Nol"
    return "Positif"

print(cek_positif(-5))   # Negatif
print(cek_positif(0))    # Nol
print(cek_positif(10))   # Positif
```
</Theory>

---

## Melewatkan List

<Theory>
Saat list dilewatkan ke fungsi, fungsi menerima referensi ke objek list yang sama. Perubahan di dalam fungsi memengaruhi list asli.

```python
def tambah_elemen(lst, elemen):
    """Menambahkan elemen ke list"""
    lst.append(elemen)

my_list = [1, 2, 3]
tambah_elemen(my_list, 4)
print(my_list)  # [1, 2, 3, 4]
```

<strong>Mengembalikan List Baru:</strong>

```python
def double_elements(items):
    """Mengembalikan list baru dengan elemen digandakan"""
    return [x * 2 for x in items]

numbers = [1, 2, 3, 4, 5]
doubled = double_elements(numbers)
print(doubled)   # [2, 4, 6, 8, 10]
print(numbers)   # [1, 2, 3, 4, 5] — original unchanged
```
</Theory>

<Example>
<strong>Mencari Nilai Maksimum:</strong>

```python
def cari_max(angka):
    """Mencari nilai maksimum dalam list"""
    if not angka:
        return None
    max_val = angka[0]
    for num in angka[1:]:
        if num > max_val:
            max_val = num
    return max_val

skor = [85, 92, 78, 95, 88]
print(cari_max(skor))  # 95
```
</Example>

---

## Best Practices Fungsi

<Conclusion>
1. Gunakan nama deskriptif yang jelas menunjukkan tujuan
2. Jaga fungsi tetap kecil — satu fungsi melakukan satu hal dengan baik
3. Dokumentasikan dengan docstrings
4. Gunakan type hints untuk kejelasan
5. Hindari global variables — lewatkan data sebagai parameter
6. Tangani edge cases
7. Uji fungsi dengan berbagai input
</Conclusion>

---

## Pola Fungsi Umum

<Example>
<strong>Filter Pattern:</strong>

```python
def filter_genap(angka):
    """Mengembalikan hanya angka genap"""
    return [num for num in angka if num % 2 == 0]

print(filter_genap([1, 2, 3, 4, 5, 6]))  # [2, 4, 6]
```

<strong>Conditional Return:</strong>

```python
def validasi_umur(umur):
    """Memvalidasi apakah umur masuk akal"""
    if umur < 0 or umur > 150:
        return False
    return True

print(validasi_umur(25))   # True
print(validasi_umur(-5))   # False
```
</Example>

---

## Referensi

- https://docs.python.org/3/tutorial/controlflow.html#defining-functions
