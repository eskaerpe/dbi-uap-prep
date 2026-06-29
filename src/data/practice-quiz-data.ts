import type { QuizQuestion } from '../components/interactive/QuizCard'

export const practiceQuizQuestions: QuizQuestion[] = [
  // ===== Practical Data Structures (6 soal) =====
  {
    question: 'Apa output dari kode berikut? `fruits = ["apel", "mangga", "jeruk"]`\n`fruits.append("pisang")`\n`print(fruits[1])`',
    options: ['"apel"', '"mangga"', '"jeruk"', '"pisang"'],
    correctIndex: 1,
    explanation: 'append("pisang") menambahkan "pisang" di akhir list. fruits[1] mengambil elemen index ke-1 yaitu "mangga". Indexing Python dimulai dari 0.',
  },
  {
    question: 'Perbaiki kode berikut agar menghasilkan {"a": 1, "b": 2, "c": 3}:\n\n`d = {"a": 1, "b": 2}`\n`d += {"c": 3}`\n`print(d)`',
    options: ['d += {"c": 3} diganti d["c"] = 3', 'd += {"c": 3} diganti d.append({"c": 3})', 'd += {"c": 3} diganti d.push("c", 3)', 'Tidak bisa — dictionary immutable'],
    correctIndex: 0,
    explanation: 'Operator += tidak bekerja untuk dictionary. Cara benar adalah d["c"] = 3 untuk menambah pasangan key-value baru. append() dan push() adalah method untuk list.',
  },
  {
    question: 'Apa output dari: `numbers = [3, 1, 4, 1, 5]`\n`numbers.sort()`\n`print(numbers[-1])`',
    options: ['1', '3', '4', '5'],
    correctIndex: 3,
    explanation: 'sort() mengurutkan list in-place menjadi [1, 1, 3, 4, 5]. numbers[-1] mengambil elemen terakhir, yaitu 5. Index negatif menghitung dari belakang.',
  },
  {
    question: 'Apa output dari: `text = "Python"`\n`print(text[::-1])`',
    options: ['"Python"', '"nohtyP"', '"P"', '"n"'],
    correctIndex: 1,
    explanation: 'Slicing [::-1] menggunakan langkah -1, yang membalikkan urutan string. "Python"[::-1] menghasilkan "nohtyP". Ini trik umum untuk membalik string di Python.',
  },
  {
    question: 'Apa output dari: `data = {"nama": "Budi", "nilai": 85}`\n`print(data.get("nilai", 0))`',
    options: ['0', '85', '{"nilai": 85}', 'KeyError'],
    correctIndex: 1,
    explanation: '.get("nilai", 0) mencari key "nilai" di dictionary. Karena "nilai" ada dengan nilai 85, method mengembalikan 85. Jika key tidak ditemukan, akan mengembalikan 0.',
  },
  {
    question: 'Buatlah list comprehension untuk menghasilkan [0, 1, 4, 9, 16]',
    options: ['[x*2 for x in range(5)]', '[x**2 for x in range(5)]', '[x^2 for x in range(5)]', '[x*x for x in range(4)]'],
    correctIndex: 1,
    explanation: '[x**2 for x in range(5)] menghasilkan kuadrat dari 0,1,2,3,4 → [0,1,4,9,16]. range(5) = [0,1,2,3,4]. Operator ** adalah pangkat di Python (bukan ^).',
  },

  // ===== Practical Functions (6 soal) =====
  {
    question: 'Apa output dari kode berikut?\n`def hitung(a, b):`\n`    return a * b + a`\n`print(hitung(3, 2))`',
    options: ['5', '6', '9', '8'],
    correctIndex: 2,
    explanation: 'Fungsi hitung(3, 2) menjalankan a * b + a = 3 * 2 + 3 = 6 + 3 = 9. Perhatikan bahwa a digunakan dua kali — sekali di perkalian, sekali di penjumlahan.',
  },
  {
    question: 'Perbaiki fungsi berikut agar bisa menerima jumlah angka berapapun:\n`def jumlah(a, b):`\n`    return a + b`',
    options: ['def jumlah(a, b, c): return a + b + c', 'def jumlah(*args): return sum(args)', 'def jumlah(a, *b): return a + sum(b)', 'def jumlah(a=0, b=0): return a + b'],
    correctIndex: 1,
    explanation: '*args mengumpulkan semua argumen posisi menjadi tuple. sum(args) menjumlahkan semua elemen. Jadi jumlah(1,2,3,4) akan mengembalikan 10. Opsi lain hanya menangani jumlah terbatas.',
  },
  {
    question: 'Apa output dari: `x = 10`\n`def ubah():`\n`    x = 20`\n`ubah()`\n`print(x)`',
    options: ['10', '20', 'Error', 'None'],
    correctIndex: 0,
    explanation: 'x = 20 di dalam fungsi adalah variabel lokal yang berbeda dari x = 10 di luar. Fungsi tidak mengubah variabel global kecuali menggunakan keyword global. Jadi x tetap 10.',
  },
  {
    question: 'Apa output dari: `def cek(nilai):`\n`    if nilai >= 75:`\n`        return "Lulus"`\n`    return "Tidak Lulus"`\n`print(cek(60))`',
    options: ['"Lulus"', '"Tidak Lulus"', 'None', 'Error'],
    correctIndex: 1,
    explanation: 'nilai = 60, maka 60 >= 75 adalah False, sehingga blok if dilewati. Fungsi melanjutkan ke return "Tidak Lulus". Tidak perlu else karena return sudah menghentikan fungsi.',
  },
  {
    question: 'Apa output dari: `def faktorial(n):`\n`    if n <= 1: return 1`\n`    return n * faktorial(n-1)`\n`print(faktorial(4))`',
    options: ['4', '10', '24', '16'],
    correctIndex: 2,
    explanation: 'Ini adalah fungsi rekursif. faktorial(4) = 4 * faktorial(3) = 4 * 3 * faktorial(2) = 4 * 3 * 2 * faktorial(1) = 4 * 3 * 2 * 1 = 24.',
  },
  {
    question: 'Lengkapi kode berikut agar hasilnya adalah "Halo, Budi!":\n`def sapa(nama, salam=___):`\n`    return f"{salam}, {nama}!"`\n`print(sapa("Budi"))`',
    options: ['""', '"Halo"', '"Hi"', 'None'],
    correctIndex: 1,
    explanation: 'Karena fungsi dipanggil dengan sapa("Budi") tanpa argumen salam, nilai default akan digunakan. Agar hasilnya "Halo, Budi!", default harus "Halo". Parameter default memungkinkan argumen opsional.',
  },

  // ===== Practical File I/O & Exception (6 soal) =====
  {
    question: 'Apa output dari kode berikut?\n`try:`\n`    x = int("sepuluh")`\n`except ValueError:`\n`    print("Error A")`\n`except:`\n`    print("Error B")`',
    options: ['"Error A"', '"Error B"', '"sepuluh"', 'Error — program berhenti'],
    correctIndex: 0,
    explanation: 'int("sepuluh") tidak bisa dikonversi karena "sepuluh" bukan angka. Ini memunculkan ValueError, yang tertangkap oleh except ValueError pertama. Blok except umum tidak dijalankan.',
  },
  {
    question: 'Buatlah kode yang membaca file "data.txt" dan mencetak isinya baris per baris:',
    options: [
      'f = open("data.txt"); print(f.read())',
      'with open("data.txt") as f:\n    for baris in f:\n        print(baris)',
      'read("data.txt", each=True)',
      'file = open("data.txt", "r"); print(file.lines())',
    ],
    correctIndex: 1,
    explanation: 'with open() otomatis menutup file. for baris in f membaca baris per baris secara efisien. Opsi lain: f.read() membaca sekali (tanpa with, file tidak ditutup), atau method yang tidak ada.',
  },
  {
    question: 'Apa output dari: `try:`\n`    print(10 / 0)`\n`except ZeroDivisionError:`\n`    print("Tak hingga")`\n`finally:`\n`    print("Selesai")`',
    options: ['"Tak hingga"', '"Tak hingga" lalu "Selesai"', '"Selesai"', 'Error'],
    correctIndex: 1,
    explanation: '10/0 memunculkan ZeroDivisionError, tertangkap except → print("Tak hingga"). Blok finally selalu dijalankan → print("Selesai"). Output: "Tak hingga" lalu "Selesai".',
  },
  {
    question: 'Kode berikut ingin menyimpan data ke file. Perbaikilah:\n`data = "Hello"`\n`file = open("output.txt", "r")`\n`file.write(data)`',
    options: ['Tidak ada error, kode sudah benar', 'Mode "r" diganti "w"', 'write() diganti append()', 'Tambah file.close() di akhir'],
    correctIndex: 1,
    explanation: 'Dua masalah: (1) Mode "r" (read-only) tidak bisa menulis — harus "w" (write) atau "a" (append). (2) Tidak menggunakan with sehingga file tidak ditutup secara otomatis.',
  },
  {
    question: 'Apa output dari: `def bagi(a, b):`\n`    assert b != 0, "Pembagi tidak boleh nol"`\n`    return a / b`\n`print(bagi(10, 0))`',
    options: ['0', 'Infinity', 'AssertionError', 'None'],
    correctIndex: 2,
    explanation: 'assert b != 0 akan gagal karena b = 0. AssertionError muncul dengan pesan "Pembagi tidak boleh nol". assert digunakan untuk debugging — memeriksa kondisi yang harus selalu benar.',
  },
  {
    question: 'Kode berikut ingin membaca file. Lengkapi exception handling-nya:\n`try:`\n`    with open("data.txt") as f:`\n`        print(f.read())`\n`______ FileNotFoundError as e:`\n`    print("File tidak ditemukan")`',
    options: ['catch', 'except', 'handle', 'on'],
    correctIndex: 1,
    explanation: 'Di Python, exception ditangkap dengan keyword except, bukan catch (JavaScript/Java) atau handle. except FileNotFoundError as e menangkap exception spesifik file tidak ditemukan.',
  },

  // ===== Practical OOP (6 soal) =====
  {
    question: 'Buatlah class Mobil dengan atribut merek dan method maju():',
    options: [
      'class Mobil:\n    def __init__(self, merek):\n        self.merek = merek\n    def maju(self):\n        print(f"{self.merek} maju")',
      'class Mobil():\n    def Mobil(merek):\n        this.merek = merek\n    def maju():\n        print("{merek} maju")',
      'function Mobil(merek) {\n    this.merek = merek\n    this.maju = function() { } }',
      'class Mobil:\n    def __init__(merek):\n        merek = merek\n    def maju(self):\n        print(merek + " maju")',
    ],
    correctIndex: 0,
    explanation: 'Opsi A benar: __init__ dengan parameter self dan merek, self.merek = merek untuk atribut instance. Method maju(self) menggunakan self.merek. Opsi lain menggunakan sintaks Python yang salah.',
  },
  {
    question: 'Apa output dari:\n`class Mahasiswa:`\n`    def __init__(self, nama):`\n`        self.nama = nama`\n`        self.nilai = []`\n`    def tambah_nilai(self, n):`\n`        self.nilai.append(n)`\n`m = Mahasiswa("Budi")`\n`m.tambah_nilai(85)`\n`print(m.nilai)`',
    options: ['85', '[85]', 'Error', 'None'],
    correctIndex: 1,
    explanation: '__init__ dipanggil saat m = Mahasiswa("Budi"), mengatur self.nama = "Budi" dan self.nilai = []. tambah_nilai(85) menambahkan 85 ke list → [85]. Jadi outputnya [85].',
  },
  {
    question: 'Apa output dari:\n`class Kendaraan:`\n`    roda = 4`\n`class Motor(Kendaraan):`\n`    roda = 2`\n`print(Kendaraan.roda)`\n`print(Motor.roda)`',
    options: ['4 lalu 4', '2 lalu 2', '4 lalu 2', 'Error'],
    correctIndex: 2,
    explanation: 'Kendaraan.roda = 4 (class variable). Motor adalah subclass yang meng-override roda menjadi 2. Mencetak Kendaraan.roda tetap 4, Motor.roda = 2. Inheritance memungkinkan override atribut.',
  },
  {
    question: 'Lengkapi kode berikut agar properti __saldo tidak bisa diakses langsung:\n`class Rekening:`\n`    def __init__(self, saldo):`\n`        self.__saldo = saldo`\n`    def get_saldo(self):`\n`        ______ self.__saldo`',
    options: ['print', 'return', 'access', 'export'],
    correctIndex: 1,
    explanation: 'Agar bisa mengakses __saldo dari luar, perlu method getter yang mengembalikan (return) nilainya. __saldo adalah private attribute (name mangling), tidak bisa diakses langsung sebagai r.__saldo.',
  },
  {
    question: 'Apa output dari:\n`class Kucing:`\n`    def bersuara(self):`\n`        return "Meow"`\n`class Anjing:`\n`    def bersuara(self):`\n`        return "Guk"`\n`for hewan in [Kucing(), Anjing()]:`\n`    print(hewan.bersuara())`',
    options: ['"Meow" lalu "Guk"', '"Guk" lalu "Meow"', '"MeowGuk"', 'Error'],
    correctIndex: 0,
    explanation: 'Ini adalah contoh polimorfisme. Kedua class memiliki method bersuara() dengan implementasi berbeda. Loop memanggil method yang sesuai untuk setiap instance. Output: "Meow" lalu "Guk".',
  },
  {
    question: 'Apa output dari:\n`class Siswa:`\n`    jumlah = 0`\n`    def __init__(self):`\n`        Siswa.jumlah += 1`\n`a = Siswa()`\n`b = Siswa()`\n`print(Siswa.jumlah)`',
    options: ['0', '1', '2', 'Error'],
    correctIndex: 2,
    explanation: 'jumlah adalah class variable yang dilacak di seluruh instance. Setiap __init__ dipanggil, Siswa.jumlah bertambah 1. Dua instance → jumlah = 2. Class variable dibagi oleh semua instance.',
  },

  // ===== Practical Search & Sort (6 soal) =====
  {
    question: 'Implementasi binary search berikut mencari angka 7. Lengkapi:\n`def binary_search(arr, target):`\n`    kiri, kanan = 0, len(arr) - 1`\n`    while kiri <= kanan:`\n`        tengah = (kiri + kanan) // 2`\n`        if arr[tengah] == target:`\n`            return tengah`\n`        elif arr[tengah] < target:`\n`            ______`\n`        else:`\n`            kanan = tengah - 1`\n`    return -1`',
    options: ['kiri = tengah', 'kiri = tengah + 1', 'kiri = tengah - 1', 'return tengah'],
    correctIndex: 1,
    explanation: 'Jika arr[tengah] < target, berarti target ada di sebelah kanan. Maka kiri digeser ke tengah + 1 (elemen setelah tengah). Jika kiri = tengah, bisa terjadi infinite loop.',
  },
  {
    question: 'Apa output dari: `data = [5, 2, 8, 1, 9]`\n`for i in range(len(data)):`\n`    for j in range(0, len(data)-i-1):`\n`        if data[j] > data[j+1]:`\n`            data[j], data[j+1] = data[j+1], data[j]`\n`print(data)`',
    options: ['[9, 8, 5, 2, 1]', '[1, 2, 5, 8, 9]', '[5, 2, 8, 1, 9]', 'Error'],
    correctIndex: 1,
    explanation: 'Ini adalah implementasi Bubble Sort. Dua loop bersarang membandingkan dan menukar elemen yang tidak berurutan. Hasil akhirnya list terurut ascending: [1, 2, 5, 8, 9].',
  },
  {
    question: 'Cari bug dalam fungsi ini:\n`def cari_terbesar(arr):`\n`    terbesar = 0`\n`    for angka in arr:`\n`        if angka > terbesar:`\n`            terbesar = angka`\n`    return terbesar`\n`print(cari_terbesar([-5, -2, -8, -1]))`',
    options: ['Tidak ada bug', 'Seharusnya return arr[-1]', 'terbesar = 0 akan gagal untuk semua nilai negatif', 'Loop seharusnya for i in range(arr)'],
    correctIndex: 2,
    explanation: 'Jika semua angka negatif (seperti [-5, -2, -8, -1]), terbesar tetap 0 karena tidak ada angka > 0. Solusi: inisialisasi terbesar = arr[0] agar mengambil elemen pertama sebagai acuan.',
  },
  {
    question: 'Apa output dari: `data = [3, 7, 2, 9, 1]`\n`data.sort()`\n`target = 7`\n`kiri, kanan = 0, len(data) - 1`\n`while kiri <= kanan:`\n`    mid = (kiri + kanan) // 2`\n`    if data[mid] == target:`\n`        print(mid)`\n`        break`\n`    elif data[mid] < target:`\n`        kiri = mid + 1`\n`    else:`\n`        kanan = mid - 1`',
    options: ['0', '1', '3', '4'],
    correctIndex: 3,
    explanation: 'Setelah sort: [1, 2, 3, 7, 9]. Binary search: mid=2 (data[2]=3) < 7 → kiri=3. mid=(3+4)//2=3, data[3]=7 == target → print(3). Index 3 adalah posisi angka 7.',
  },
  {
    question: 'Lengkapi fungsi selection sort berikut:\n`def selection_sort(arr):`\n`    for i in range(len(arr)):`\n`        min_idx = i`\n`        for j in range(i+1, len(arr)):`\n`            if arr[j] < arr[min_idx]:`\n`                min_idx = j`\n`        ______`',
    options: ['arr[i], arr[min_idx] = arr[min_idx], arr[i]', 'arr[min_idx] = arr[i]', 'return arr', 'swap(arr[i], arr[min_idx])'],
    correctIndex: 0,
    explanation: 'Setelah menemukan min_idx (index elemen terkecil), kita menukar arr[i] dengan arr[min_idx] menggunakan tuple swap: arr[i], arr[min_idx] = arr[min_idx], arr[i]. Python tidak punya fungsi swap() built-in.',
  },
  {
    question: 'Apa output dari:\n`angka = [10, 25, 7, 30, 15]`\n`genap = [x for x in angka if x % 2 == 0]`\n`print(len(genap))`',
    options: ['1', '2', '3', '5'],
    correctIndex: 1,
    explanation: 'List comprehension memfilter angka genap (habis dibagi 2). Dari [10, 25, 7, 30, 15], yang genap hanya 10 dan 30. Jadi genap = [10, 30], panjangnya 2.',
  },
]

export const practiceQuizSections = [
  { id: 'prak-ds', name: 'Data Structures', start: 0, end: 5 },
  { id: 'prak-fn', name: 'Functions', start: 6, end: 11 },
  { id: 'prak-io', name: 'File I/O & Exception', start: 12, end: 17 },
  { id: 'prak-oop', name: 'OOP', start: 18, end: 23 },
  { id: 'prak-sort', name: 'Search & Sort', start: 24, end: 29 },
]
