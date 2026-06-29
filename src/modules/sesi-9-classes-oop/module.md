## Tentang OOP

<Intuition>
Bayangkan pabrik mobil. Daripada membuat setiap mobil dari nol setiap kali, pabrik punya <em>cetakan biru</em> (class) yang mendefinisikan bagaimana sebuah mobil seharusnya: punya roda, mesin, kursi, dll. Dari satu cetakan biru, pabrik bisa membuat ribuan mobil (object), masing-masing dengan warna, nomor plat, dan pemilik berbeda. Inilah inti OOP.
</Intuition>

<Theory>
<strong>Object-Oriented Programming (OOP)</strong> adalah paradigma pemrograman yang mengorganisir kode di sekitar "objek" yang berisi data (atribut) dan method (fungsi). Pendekatan ini mencerminkan entitas dunia nyata.

<strong>Manfaat OOP:</strong>
- <strong>Modularitas</strong>: Kode terorganisir dalam unit logis
- <strong>Reusability</strong>: Class bisa dipakai ulang di banyak program
- <strong>Maintainability</strong>: Lebih mudah diupdate dan di-debug
- <strong>Scalability</strong>: Lebih baik untuk proyek besar

<strong>Prinsip OOP:</strong>
1. <strong>Encapsulation</strong>: Menggabungkan data dan method
2. <strong>Inheritance</strong>: Membuat class dari class lain
3. <strong>Polymorphism</strong>: Objek bisa mengambil banyak bentuk
4. <strong>Abstraction</strong>: Menyembunyikan detail implementasi kompleks
</Theory>

---

## Mendefinisikan Class

<Theory>
<strong>Struktur Class Dasar:</strong>

```python
class NamaClass:
    """Dokumentasi class"""
    
    # Class variables (dibagi semua instance)
    class_variable = "nilai bersama"
    
    # Constructor method
    def __init__(self, parameter):
        # Instance variables
        self.atribut1 = parameter
        self.atribut2 = nilai
    
    # Instance methods
    def nama_method(self):
        # Badan method
        return sesuatu
```

<strong>Contoh Class Sederhana:</strong>

```python
class Dog:
    """Class dog sederhana"""
    
    def __init__(self, nama, umur):
        self.nama = nama
        self.umur = umur
    
    def gonggong(self):
        print(f"{self.nama} bersuara: Woof!")
    
    def ultah(self):
        self.umur += 1
        print(f"{self.nama} sekarang {self.umur} tahun")

# Membuat objek (instance)
dog1 = Dog("Buddy", 3)
dog2 = Dog("Max", 5)

dog1.gonggong()     # Buddy bersuara: Woof!
dog1.ultah()        # Buddy sekarang 4 tahun
```
</Theory>

<Example>
<strong>Memahami Method __init__:</strong>

```python
class Mahasiswa:
    def __init__(self, nama, nim, ipk):
        """Menginisialisasi objek mahasiswa"""
        self.nama = nama
        self.nim = nim
        self.ipk = ipk

# Membuat instance
mhs1 = Mahasiswa("Alice", "2024001", 3.8)
mhs2 = Mahasiswa("Bob", "2024002", 3.5)

print(mhs1.nama)        # Alice
print(mhs2.nim)         # 2024002
```
</Example>

---

## Membuat Objek

<Theory>
<strong>Instantiasi Objek:</strong>

```python
class Mobil:
    def __init__(self, merek, model, tahun):
        self.merek = merek
        self.model = model
        self.tahun = tahun
    
    def tampil_info(self):
        print(f"{self.tahun} {self.merek} {self.model}")

mobil1 = Mobil("Toyota", "Camry", 2020)
mobil2 = Mobil("Honda", "Civic", 2022)

mobil1.tampil_info()  # 2020 Toyota Camry
mobil2.tampil_info()  # 2022 Honda Civic
```

<strong>Multiple Instance dengan State Independen:</strong>

```python
class RekeningBank:
    def __init__(self, pemilik, saldo):
        self.pemilik = pemilik
        self.saldo = saldo
    
    def deposit(self, jumlah):
        self.saldo += jumlah
        print(f"Deposit: ${jumlah}")
    
    def tarik(self, jumlah):
        if jumlah <= self.saldo:
            self.saldo -= jumlah
            print(f"Tarik: ${jumlah}")
        else:
            print("Saldo tidak mencukupi!")
    
    def tampil_saldo(self):
        print(f"Akun: {self.pemilik}, Saldo: ${self.saldo}")

akun1 = RekeningBank("Alice", 1000)
akun2 = RekeningBank("Bob", 500)

akun1.deposit(500)
akun1.tampil_saldo()  # Akun: Alice, Saldo: $1500

akun2.tarik(100)
akun2.tampil_saldo()  # Akun: Bob, Saldo: $400
```
</Theory>

---

## Encapsulation

<Theory>
<strong>Encapsulation</strong> adalah penggabungan data (atribut) dan method ke dalam satu unit (class), serta menyembunyikan detail internal dari luar.

<strong>Private Attributes (__):</strong>

```python
class Mahasiswa:
    def __init__(self, nama, nilai):
        self.nama = nama
        self.__nilai = nilai  # Private attribute
    
    def get_nilai(self):
        return self.__nilai
    
    def set_nilai(self, nilai):
        if 0 <= nilai <= 100:
            self.__nilai = nilai
        else:
            print("Nilai tidak valid!")

mhs = Mahasiswa("Alice", 85)
# mhs.__nilai = 90  # Ini akan error!
mhs.set_nilai(90)   # Gunakan setter
```

<strong>Property Decorator:</strong>

```python
class Lingkaran:
    def __init__(self, radius):
        self.__radius = radius
    
    @property
    def radius(self):
        return self.__radius
    
    @radius.setter
    def radius(self, value):
        if value > 0:
            self.__radius = value
        else:
            print("Radius harus positif!")
    
    @property
    def luas(self):
        return 3.14 * self.__radius ** 2

lingkaran = Lingkaran(5)
print(lingkaran.radius)  # 5
print(lingkaran.luas)    # 78.5
lingkaran.radius = 10
print(lingkaran.luas)    # 314.0
```
</Theory>

---

## Class Methods dan Static Methods

<Theory>
<strong>Class Methods (@classmethod):</strong>

```python
class Suhu:
    skala = "Celsius"
    
    @classmethod
    def set_skala(cls, skala):
        cls.skala = skala
    
    @classmethod
    def buat_dari_fahrenheit(cls, fahrenheit):
        celsius = (fahrenheit - 32) * 5/9
        return cls(celsius)
    
    def __init__(self, value):
        self.value = value

temp = Suhu.buat_dari_fahrenheit(77)
print(f"Suhu: {temp.value:.1f}°C")
```

<strong>Static Methods (@staticmethod):</strong>

```python
class MathUtils:
    @staticmethod
    def tambah(a, b):
        return a + b
    
    @staticmethod
    def is_genap(angka):
        return angka % 2 == 0

print(MathUtils.tambah(5, 3))      # 8
print(MathUtils.is_genap(4))       # True
```
</Theory>

---

## Special Methods

<Theory>
<strong>__str__ dan __repr__:</strong>

```python
class Buku:
    def __init__(self, judul, penulis, halaman):
        self.judul = judul
        self.penulis = penulis
        self.halaman = halaman
    
    def __str__(self):
        return f"{self.judul} oleh {self.penulis}"

buku = Buku("Python 101", "John Doe", 250)
print(str(buku))   # Python 101 oleh John Doe
```

<strong>__len__ dan __getitem__:</strong>

```python
class Playlist:
    def __init__(self, nama):
        self.nama = nama
        self.lagu = []
    
    def tambah_lagu(self, lagu):
        self.lagu.append(lagu)
    
    def __len__(self):
        return len(self.lagu)
    
    def __getitem__(self, index):
        return self.lagu[index]

playlist = Playlist("Favorit")
playlist.tambah_lagu("Lagu 1")
playlist.tambah_lagu("Lagu 2")
print(len(playlist))  # 2
print(playlist[1])    # Lagu 2
```
</Theory>

---

## Contoh Praktis

<Example>
<strong>Sistem Manajemen Perpustakaan:</strong>

```python
class Buku:
    def __init__(self, judul, penulis, isbn):
        self.judul = judul
        self.penulis = penulis
        self.isbn = isbn
        self.tersedia = True
    
    def pinjam(self):
        if self.tersedia:
            self.tersedia = False
            return True
        return False
    
    def kembalikan(self):
        self.tersedia = True
    
    def __str__(self):
        status = "Tersedia" if self.tersedia else "Dipinjam"
        return f"{self.judul} oleh {self.penulis} ({status})"

class Perpustakaan:
    def __init__(self, nama):
        self.nama = nama
        self.buku = []
    
    def tambah_buku(self, buku):
        self.buku.append(buku)
    
    def tampil_buku(self):
        print(f"Buku di {self.nama}:")
        for b in self.buku:
            print(f"  - {b}")

perpustakaan = Perpustakaan("Kota Library")
buku1 = Buku("Python Basics", "Author A", "123456")
buku2 = Buku("Advanced Python", "Author B", "789012")

perpustakaan.tambah_buku(buku1)
perpustakaan.tambah_buku(buku2)

buku1.pinjam()
perpustakaan.tampil_buku()
```
</Example>

---

<Conclusion>
<strong>Best Practices:</strong>
1. Gunakan nama deskriptif — Class names should be nouns with PascalCase
2. Inisialisasi dengan benar — Gunakan <strong>__init__</strong> untuk semua atribut
3. Enkapsulasi data — Gunakan private attributes dengan getter/setter
4. Dokumentasikan class — Sertakan docstrings
5. Jaga method tetap kecil — Satu method melakukan satu hal

<strong>Ringkasan:</strong>
- <strong>OOP</strong> menyediakan cara memodelkan masalah dunia nyata
- <strong>Class</strong> menggabungkan data dan method untuk organisasi lebih baik
- <strong>Encapsulation</strong> menyembunyikan detail internal
- <strong>Objek</strong> adalah instance independen dengan state sendiri
- <strong>Special methods</strong> seperti __init__, __str__ customize perilaku objek
</Conclusion>

---

## Referensi

- https://docs.python.org/3/tutorial/classes.html
