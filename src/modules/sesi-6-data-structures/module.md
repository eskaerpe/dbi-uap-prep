## Tuple

<Intuition>
Bayangkan tuple seperti amplop tersegel. Kamu bisa melihat isinya, tetapi setelah tersegel, kamu tidak bisa menambah, menghapus, atau mengubah isinya. Ini adalah snapshot data tetap yang tidak berubah sepanjang program.
</Intuition>

<Theory>
<strong>Tuple</strong> adalah koleksi terurut dan <em>immutable</em> yang mengizinkan nilai duplikat. Setelah dibuat, isinya tidak bisa ditambah, dikurangi, atau diganti.

```python
namatuple = (data0, data1, ..., datan)
```

Elemen bisa memiliki tipe data berbeda:

```python
my_Tuple = ("HIT", 1, True)
```
</Theory>

### Operasi

<Theory>
<strong>Unpacking</strong> — menyalin elemen tuple ke variabel individual:

```python
mahasiswa = ("Ajax", 2902611111, "LXZ300", True)
nama, nim, kelas, status = mahasiswa
```

<strong>.index()</strong> — mencari posisi suatu nilai:

```python
mahasiswa = ("Ajax", 2902611111, "LXZ300", True)
x = mahasiswa.index("Ajax")  # 0
```

<strong>.count()</strong> — menghitung berapa kali nilai muncul:

```python
mahasiswa = ("Ajax", 2902611111, "LXZ300", True)
x = mahasiswa.count("Ajax")  # 1
```

<strong>in</strong> — mengecek apakah nilai ada (hasil bool):

```python
mahasiswa = ("Ajax", 2902611111, "LXZ300", True)
x = "Ajax" in mahasiswa  # True
```
</Theory>

<Conclusion>
Tuple cocok untuk data tetap yang tidak boleh berubah — seperti koordinat, record database, atau nilai kembalian fungsi. Tuple hemat memori dan bisa digunakan sebagai key dictionary.
</Conclusion>

---

## Set

<Intuition>
Bayangkan sekantong kelereng di mana kelereng duplikat langsung lenyap, dan kelerengnya acak setiap kali kamu lihat. Kamu bisa menambah atau membuang kelereng, tapi tidak bisa menunjuk posisi tertentu dan berkata "yang ini di posisi 2."
</Intuition>

<Theory>
<strong>Set</strong> adalah koleksi tidak terurut dan <em>mutable</em> tanpa duplikat. Elemen harus <strong>immutable</strong> (int, string, tuple, bool, float). Set tidak bisa diakses dengan index — tidak subscriptable.

```python
namaset = {data1, data2, data3, ..., datan}
```

```python
my_Set = {1, 2, 3, "Hello", (True, False)}
```
</Theory>

### Karakteristik

<Example>
<strong>Tidak terurut</strong> — jangan bergantung pada posisi:

```python
my_Set = {5, 1, 100, 42, 7, 3}
print(my_Set)
# Output bisa: {1, 3, 100, 5, 7, 42}
print(my_Set[1])  # TypeError!
```

<strong>Elemen harus immutable:</strong>

```python
# Valid:
my_Set = {5, 1, (1,2,3), 42, 7, 3}  # tuple diperbolehkan

# Error:
my_Set = {5, 1, [1,2,3], 42, 7, 3}  # TypeError
```

<strong>Tidak ada duplikat:</strong>

```python
my_Set = {1, 1, 1, 2, 2, 3, 4, 5, 5}
print(my_Set)  # {1, 2, 3, 4, 5}
```
</Example>

### Operasi

<Theory>
<strong>.add()</strong> — menambah elemen:

```python
my_Set = {1, 2, 3}
my_Set.add(4)
```

<strong>.remove()</strong> — menghapus berdasarkan nilai (error jika tidak ditemukan):

```python
my_Set = {1, 2, 3}
my_Set.remove(1)
```

<strong>.discard()</strong> — menghapus berdasarkan nilai (tanpa error jika tidak ada):

```python
my_Set = {1, 2, 3}
my_Set.discard(1)
```

<strong>.pop()</strong> — menghapus dan mengembalikan elemen <strong>acak</strong>:

```python
my_Set = {1, 2, 3}
my_Set.pop()
```

<strong>.clear()</strong> — menghapus semua elemen.
</Theory>

<Conclusion>
Set unggul untuk pengecekan keanggotaan, menghilangkan duplikat, dan operasi himpunan matematis (union, intersection). Gunakan saat urutan tidak penting dan kamu butuh pencarian cepat.
</Conclusion>

---

## Dictionary

<Intuition>
Dictionary seperti kamus sungguhan: kamu mencari kata (key) untuk menemukan artinya (value). Kamu bisa menambah kata baru, memperbarui definisi, atau menghapus entri. Setiap key harus unik — seperti tidak ada dua kata yang ejaannya persis sama.
</Intuition>

<Theory>
<strong>Dictionary</strong> menyimpan pasangan key-value. Key harus unik dan immutable. Value bisa tipe apa saja dan boleh duplikat.

```python
namadictionary = {key1: value1, key2: value2, ..., keyn: valuen}
```

```python
my_Dictionary = {"nama": "Ajax", "NIM": 2902611111}
```

<strong>Karakteristik:</strong>
- Pasangan Key-Value: setiap key harus memiliki value
- Key unik: key duplikat akan menimpa value lama
- Mutable: pasangan bisa ditambah, value bisa diubah
</Theory>

### Operasi

<Theory>
<strong>Akses berdasarkan key:</strong>

```python
my_Dictionary = {"nama": "Ajax", "NIM": 2902611111}
x = my_Dictionary["NIM"]   # 2902611111 (error jika tidak ada)
x = my_Dictionary.get("NIM")  # 2902611111 (None jika tidak ada)
```

<strong>Tambah / Ubah:</strong>

```python
# Tambah
my_Dictionary["Kelas"] = "LXZ300"

# Ubah
my_Dictionary["nama"] = "Leon"

# Ubah beberapa sekaligus
my_Dictionary.update({"nama": "Leon", "Kelas": "LXZ300"})
```

<strong>Hapus:</strong>

```python
del my_Dictionary["NIM"]           # Hapus pasangan key-value
x = my_Dictionary.pop("nama")      # Hapus dan kembalikan value
my_Dictionary.clear()              # Hapus semua
```
</Theory>

<Example>
<strong>Latihan Cek Login:</strong>

Buat program yang memeriksa username dan password terhadap dictionary:

```python
user = {
    "ajax": "AYAMSUNIB",
    "budiman": "password123"
}

username = input("Username: ")
password = input("Password: ")

if username not in user:
    print("username tidak ditemukan")
elif user[username] != password:
    print("password salah")
else:
    print("Selamat datang")
```
</Example>

<Conclusion>
Dictionary adalah struktur data paling serbaguna di Python untuk memetakan hubungan. Gunakan untuk pencarian, menghitung frekuensi, menyimpan data terstruktur, dan mengelompokkan nilai terkait.
</Conclusion>

---

## List — Dasar

<Intuition>
List seperti kereta api dengan gerbong. Kamu bisa menambah gerbong baru, melepas yang lama, mengubah isi gerbong, dan urutan gerbong tetap sama. Beberapa gerbong bisa membawa muatan yang identik.
</Intuition>

<Theory>
<strong>List</strong> adalah koleksi terurut, <em>mutable</em>, dan mengizinkan duplikat.

```python
namalist = [item1, item2, ..., itemn]
```

<strong>Karakteristik:</strong>
- <strong>Terurut</strong> — elemen mempertahankan urutan saat dimasukkan
- <strong>Bisa diubah</strong> — bisa menambah, menghapus, dan mengubah elemen
- <strong>Mengizinkan duplikat</strong> — nilai yang sama bisa muncul berkali-kali
</Theory>

### Operasi

<Theory>
<strong>Insert</strong> di index tertentu:

```python
mahasiswa = ["Lucy", 2902512345, 3.98]
mahasiswa.insert(1, "Grace")
# Hasil: ["Lucy", "Grace", 2902512345, 3.98]
```

<strong>Update</strong> berdasarkan index:

```python
mahasiswa[0] = "Natori"
# Hasil: ["Natori", 2902512345, 3.98]
```

<strong>Hapus:</strong>

```python
# Berdasarkan nilai (hapus kemunculan pertama)
mahasiswa.remove(3.98)

# Berdasarkan index
mahasiswa.pop(2)
```
</Theory>

<Example>
<strong>Pelacak Video YouTube:</strong>

Lacak statistik video YouTube menggunakan operasi list:

```python
# Awal: [judul, penonton, like, dislike]
video = ["Video pertamaku", 1000, 30, 4]

# 1. Update jumlah penonton (1000 → 1050)
video[1] = 1050

# 2. Hapus dislike
video.pop(3)

# 3. Tambah status subscribe
video.append(True)

print(video)
# ['Video pertamaku', 1050, 30, True]
```
</Example>

---

## List — Indexing dan Slicing

<Intuition>
Anggap list sebagai deretan loker bernomor. Indexing memilih satu loker tertentu. Slicing mengambil bagian bersambungan — "beri saya loker 3 sampai 7" — seperti mengambil buku dari rak dari posisi tertentu ke posisi lain.
</Intuition>

<Theory>
<strong>Indexing</strong> — ambil nilai di suatu posisi:

```python
thislist = ["apel", "pisang", "ceri"]
print(thislist[1])  # pisang
```

<strong>Mencari index berdasarkan nilai:</strong>

```python
x = thislist.index("pisang")  # 1
```

<strong>Slicing</strong> — ambil sublist:

```python
namalist[mulai:akhir]  # akhir tidak termasuk
```

```python
thislist = ["apel", "pisang", "ceri", "jeruk", "kiwi", "melon", "mangga"]
print(thislist[2:6])   # ['ceri', 'jeruk', 'kiwi', 'melon']
print(thislist[2:])    # ['ceri', 'jeruk', 'kiwi', 'melon', 'mangga']
print(thislist[:6])    # ['apel', 'pisang', 'ceri', 'jeruk', 'kiwi', 'melon']
```
</Theory>

<Example>
<strong>Latihan Range Slice:</strong>

```python
examplelist = ["a", "b", "c", "d", "e", "f", "g", "h"]

start_val = input("Mulai: ")  # c
end_val = input("Akhir: ")    # g

start_idx = examplelist.index(start_val)
end_idx = examplelist.index(end_val)

result = examplelist[start_idx:end_idx + 1]
print(result)  # ['c', 'd', 'e', 'f', 'g']
```
</Example>

<Conclusion>
Indexing dan slicing memberikan akses data yang presisi. Slicing dengan [start:end] fundamental di Python — juga bekerja pada string, tuple, dan tipe sequence lainnya.
</Conclusion>

---

## Referensi

- https://www.w3schools.com/python/
- Kong, Q., Siauw, T., and Bayen, A. M. (2021). Python Programming and Numerical Methods.
- docs.python.org/3/tutorial/datastructures.html
