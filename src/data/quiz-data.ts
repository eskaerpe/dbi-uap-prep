import type { QuizQuestion } from '../components/interactive/QuizCard'

export const quizQuestions: QuizQuestion[] = [
  // ===== Sesi 6: Data Structures (6 soal) =====
  {
    question: 'Struktur data mana yang bersifat immutable?',
    options: ['List', 'Dictionary', 'Tuple', 'Set'],
    correctIndex: 2,
    explanation: 'Tuple bersifat immutable — setelah dibuat, isinya tidak bisa diubah. List dan Dictionary mutable, Set mutable tapi elemennya harus immutable.',
  },
  {
    question: 'Apa perbedaan utama antara List dan Tuple?',
    options: ['List menggunakan () dan Tuple menggunakan []', 'List bersifat mutable, Tuple immutable', 'Tuple bisa menyimpan tipe berbeda, List tidak', 'List tidak bisa diindex, Tuple bisa'],
    correctIndex: 1,
    explanation: 'List ([]) bersifat mutable — elemen bisa ditambah/dihapus/diubah. Tuple (()) bersifat immutable — isinya tetap setelah dibuat. Keduanya bisa menyimpan tipe berbeda dan bisa diindex.',
  },
  {
    question: 'Bagaimana cara menghapus duplikat dari sebuah list?',
    options: ['Menggunakan list.sort()', 'Menggunakan set(list)', 'Menggunakan tuple(list)', 'Menggunakan dict(list)'],
    correctIndex: 1,
    explanation: 'Set tidak mengizinkan duplikat. Dengan konversi set(list), semua nilai duplikat otomatis dihapus. Urutan mungkin berubah karena set tidak terurut.',
  },
  {
    question: 'Apa output dari kode berikut? my_dict = {"a": 1, "b": 2}; print(my_dict.get("c", 0))',
    options: ['Error', 'None', '0', '"c"'],
    correctIndex: 2,
    explanation: 'Method .get(key, default) mengembalikan nilai default (0) jika key tidak ditemukan, tanpa memunculkan error. Tanpa .get(), akses key yang tidak ada akan memunculkan KeyError.',
  },
  {
    question: 'Mana sintaks yang benar untuk membuat set kosong?',
    options: ['set()', '{}', '[]', '()'],
    correctIndex: 0,
    explanation: '{} membuat dictionary kosong, bukan set. Untuk membuat set kosong harus menggunakan set(). Set berisi elemen ditulis dengan {1, 2, 3}.',
  },
  {
    question: 'Apa hasil dari slicing "Hello"[1:4]?',
    options: ['"Hell"', '"ell"', '"Hel"', '"ello"'],
    correctIndex: 1,
    explanation: 'Slicing [start:end] mengambil elemen dari index start sampai end-1. "Hello"[1:4] mengambil index 1="e", 2="l", 3="l" → "ell".',
  },

  // ===== Sesi 7: Functions (6 soal) =====
  {
    question: 'Keyword apa yang digunakan untuk mendefinisikan fungsi di Python?',
    options: ['function', 'def', 'func', 'define'],
    correctIndex: 1,
    explanation: 'Python menggunakan keyword def untuk mendefinisikan fungsi. Bahasa lain seperti JavaScript menggunakan function. Ini adalah perbedaan sintaks dasar yang penting.',
  },
  {
    question: 'Apa yang terjadi jika fungsi tidak memiliki pernyataan return?',
    options: ['Error', 'Mengembalikan 0', 'Mengembalikan None', 'Mengembalikan False'],
    correctIndex: 2,
    explanation: 'Di Python, fungsi tanpa return secara implisit mengembalikan None. Ini sering menjadi sumber bug tak terduga — pastikan fungsi memiliki return jika kamu mengharapkan nilai balik.',
  },
  {
    question: 'Apa output dari kode berikut? def tambah(a, b=5): return a + b; print(tambah(3))',
    options: ['8', '5', '3', 'Error'],
    correctIndex: 0,
    explanation: 'Parameter b memiliki nilai default 5. Saat fungsi dipanggil dengan tambah(3), a=3 dan b=5 (default), sehingga 3 + 5 = 8. Default parameter digunakan jika argumen tidak diberikan.',
  },
  {
    question: 'Apa kegunaan *args dalam definisi fungsi?',
    options: ['Menerima keyword arguments', 'Menerima jumlah argumen posisi tak terbatas', 'Mendefinisikan argumen wajib', 'Membuat argumen private'],
    correctIndex: 1,
    explanation: '*args mengumpulkan semua argumen posisi tambahan menjadi tuple. Misal: def sum_all(*angka) bisa dipanggil sebagai sum_all(1, 2, 3) dan angka akan berisi (1, 2, 3).',
  },
  {
    question: 'Jika list dilewatkan sebagai argumen fungsi dan diubah di dalamnya, apa yang terjadi pada list asli?',
    options: ['Tidak berubah — Python pass by value', 'Berubah — list bersifat mutable', 'Error — list tidak bisa diubah', 'Hanya berubah jika pakai return'],
    correctIndex: 1,
    explanation: 'List bersifat mutable. Saat dilewatkan ke fungsi, referensi ke objek yang sama dikirimkan. Perubahan seperti append atau modifikasi elemen akan memengaruhi list asli di luar fungsi.',
  },
  {
    question: 'Apa output dari: def outer(x): def inner(y): return x + y; return inner; fn = outer(5); print(fn(3))',
    options: ['8', '53', 'Error', '(5, 3)'],
    correctIndex: 0,
    explanation: 'Ini adalah contoh closure. outer(5) mengembalikan fungsi inner yang "mengingat" x=5. Saat fn(3) dipanggil, inner menjalankan return 5 + 3 = 8.',
  },

  // ===== Sesi 8: File I/O & Exception (6 soal) =====
  {
    question: 'Apa fungsi dari pernyataan with dalam operasi file?',
    options: ['Mendefinisikan variabel baru', 'Menangani exception', 'Otomatis menutup file', 'Membuat perulangan'],
    correctIndex: 2,
    explanation: 'Context manager with otomatis menutup file setelah blok kode selesai — bahkan jika terjadi exception. Ini mencegah kebocoran memori dan lupa menutup file.',
  },
  {
    question: 'Mode apa yang digunakan untuk menulis ke file tanpa menghapus konten yang sudah ada?',
    options: ['"w" (write)', '"a" (append)', '"r" (read)', '"x" (create)'],
    correctIndex: 1,
    explanation: 'Mode "a" (append) menambahkan data ke akhir file tanpa menghapus konten yang sudah ada. Mode "w" akan menimpa seluruh file. Mode "r" hanya untuk membaca.',
  },
  {
    question: 'Blok mana dalam try-except yang selalu dijalankan?',
    options: ['try', 'except', 'else', 'finally'],
    correctIndex: 3,
    explanation: 'Blok finally selalu dijalankan, entah exception terjadi atau tidak. Biasanya digunakan untuk cleanup — menutup file, melepaskan resource, atau logging.',
  },
  {
    question: 'Exception apa yang muncul jika mencoba membuka file yang tidak ada?',
    options: ['ValueError', 'FileNotFoundError', 'IOError', 'PermissionError'],
    correctIndex: 1,
    explanation: 'FileNotFoundError adalah exception spesifik di Python untuk file yang tidak ditemukan. Di Python versi lama, ini adalah IOError, tapi sekarang FileNotFoundError adalah subclass-nya.',
  },
  {
    question: 'Apa output dari: print(10 / 0)?',
    options: ['0', 'Infinity', 'ZeroDivisionError', 'None'],
    correctIndex: 2,
    explanation: 'Pembagian dengan nol di Python memunculkan ZeroDivisionError. Tidak seperti JavaScript yang mengembalikan Infinity, Python memilih untuk menghentikan eksekusi dan melaporkan error.',
  },
  {
    question: 'Mana cara terbaik untuk membaca file baris per baris?',
    options: ['content = f.read()', 'for baris in f: ...', 'f.readline(baris)', 'f.scan(baris)'],
    correctIndex: 1,
    explanation: 'for baris in f adalah cara paling efisien dan pythonic untuk membaca file baris per baris. File object bersifat iterable dan hanya menyimpan satu baris di memori pada satu waktu.',
  },

  // ===== Sesi 9: OOP (6 soal) =====
  {
    question: 'Apa nama method constructor di Python?',
    options: ['__construct__', '__init__', 'constructor', '__new__'],
    correctIndex: 1,
    explanation: 'Method __init__ adalah constructor di Python yang dipanggil secara otomatis saat object dibuat. Method ini menginisialisasi atribut instance. __new__ juga ada tapi jarang digunakan.',
  },
  {
    question: 'Apa fungsi parameter self dalam method class?',
    options: ['Membuat method private', 'Merujuk pada instance saat ini', 'Menyimpan nilai class', 'Menandai method sebagai static'],
    correctIndex: 1,
    explanation: 'Self merujuk pada instance spesifik dari class yang sedang digunakan. Saat memanggil mhs.get_nim(), self akan merujuk pada objek mhs. Tanpa self, method tidak tahu instance mana yang dipanggil.',
  },
  {
    question: 'Apa yang dimaksud dengan enkapsulasi dalam OOP?',
    options: ['Membuat class dari class lain', 'Menyembunyikan data internal dan menyediakan akses terkontrol', 'Satu method bisa memiliki banyak bentuk', 'Memecah program menjadi fungsi-fungsi kecil'],
    correctIndex: 1,
    explanation: 'Enkapsulasi adalah prinsip menyembunyikan detail internal object dan hanya mengekspos apa yang perlu. Di Python, __var (double underscore) untuk private dan _var (single underscore) untuk protected.',
  },
  {
    question: 'Apa output dari: class A: x = 10; print(A.x)?',
    options: ['Error', '10', 'None', 'x'],
    correctIndex: 1,
    explanation: 'x adalah class variable — dimiliki oleh class itu sendiri, bukan oleh instance. Bisa diakses langsung melalui class (A.x) atau melalui instance. Nilainya dibagi oleh semua instance.',
  },
  {
    question: 'Method spesial mana yang mengontrol representasi string object?',
    options: ['__repr__ dan __str__', '__string__ dan __repr__', '__format__ dan __str__', '__print__ dan __str__'],
    correctIndex: 0,
    explanation: '__str__ dipanggil oleh print() dan str(), mengembalikan representasi yang mudah dibaca. __repr__ dipanggil di REPL dan untuk debugging, mengembalikan representasi yang lebih teknis.',
  },
  {
    question: 'Apa perbedaan @classmethod dan @staticmethod?',
    options: ['Tidak ada perbedaan', 'classmethod menerima cls, staticmethod tidak menerima parameter otomatis', 'staticmethod bisa mengubah state class', 'classmethod hanya bisa dipanggil dari instance'],
    correctIndex: 1,
    explanation: '@classmethod menerima parameter cls (class itu sendiri) sehingga bisa mengakses class variables dan class methods lain. @staticmethod tidak menerima parameter otomatis — seperti fungsi biasa yang ditempatkan di dalam class.',
  },

  // ===== Sesi 10: Search & Sort (6 soal) =====
  {
    question: 'Apa kompleksitas waktu binary search?',
    options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
    correctIndex: 2,
    explanation: 'Binary search memiliki kompleksitas O(log n) karena setiap langkah membagi ruang pencarian menjadi dua. Untuk 1 juta elemen, hanya perlu ~20 langkah. Syaratnya: list harus terurut.',
  },
  {
    question: 'Algoritma sorting mana yang memiliki jaminan O(n log n) dalam semua kasus?',
    options: ['Bubble Sort', 'Quick Sort', 'Merge Sort', 'Selection Sort'],
    correctIndex: 2,
    explanation: 'Merge Sort menjamin O(n log n) di semua kasus (best, average, worst). Quick Sort rata-rata O(n log n) tapi worst case O(n²). Bubble Sort dan Selection Sort selalu O(n²).',
  },
  {
    question: 'Apa perbedaan utama antara linear search dan binary search?',
    options: ['Linear search lebih cepat', 'Binary search membutuhkan list terurut', 'Linear search hanya untuk angka', 'Binary search bekerja pada list apa pun'],
    correctIndex: 1,
    explanation: 'Binary search mensyaratkan list TERURUT. Jika list tidak terurut, binary search bisa memberikan hasil yang salah. Linear search bekerja pada list apa pun (terurut atau tidak) tapi lebih lambat — O(n) vs O(log n).',
  },
  {
    question: 'Algoritma sorting mana yang paling mirip dengan cara alami manusia mengurutkan kartu?',
    options: ['Bubble Sort', 'Selection Sort', 'Insertion Sort', 'Quick Sort'],
    correctIndex: 2,
    explanation: 'Insertion Sort mirip dengan menyusun kartu: ambil satu kartu, sisipkan di posisi yang tepat di antara kartu yang sudah terurut. Sederhana dan efisien untuk dataset kecil atau yang hampir terurut.',
  },
  {
    question: 'Apa kompleksitas waktu bubble sort dalam worst case?',
    options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(n²)'],
    correctIndex: 3,
    explanation: 'Bubble Sort memiliki kompleksitas O(n²) di semua kasus (best, average, worst). Meskipun ada optimasi early break jika tidak ada swap, worst case tetap O(n²) — misalnya list terurut terbalik.',
  },
  {
    question: 'Fungsi Python mana yang mengurutkan list tanpa mengubah list asli?',
    options: ['list.sort()', 'sorted(list)', 'list.order()', 'sort(list)'],
    correctIndex: 1,
    explanation: 'sorted(list) mengembalikan list baru yang terurut tanpa mengubah list asli. list.sort() mengurutkan in-place (mengubah list asli). Ini perbedaan penting tergantung kebutuhan.',
  },
]

export const quizSections = [
  { id: 'sesi-6', name: 'Sesi 6: Data Structures', start: 0, end: 5 },
  { id: 'sesi-7', name: 'Sesi 7: Functions', start: 6, end: 11 },
  { id: 'sesi-8', name: 'Sesi 8: File I/O & Exception', start: 12, end: 17 },
  { id: 'sesi-9', name: 'Sesi 9: OOP', start: 18, end: 23 },
  { id: 'sesi-10', name: 'Sesi 10: Search & Sort', start: 24, end: 29 },
]
