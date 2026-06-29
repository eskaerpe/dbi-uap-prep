## Format Ujian

<Theory>
<strong>Ujian Akhir Praktikum</strong> menilai kemampuan:
1. Menerapkan multiple konsep programming dalam skenario dunia nyata
2. Menulis kode yang efisien dan bersih
3. Mendesain struktur data dan algoritma yang tepat
4. Menangani error dan edge cases
5. Mendokumentasikan dan menjelaskan solusi

<strong>Keterampilan yang Diuji:</strong>

1. <strong>Functions</strong> (Sesi 7) — Definisi, parameter, return values, list manipulation
2. <strong>File I/O dan Exception</strong> (Sesi 8) — Read/write, try-except-finally, context manager
3. <strong>OOP</strong> (Sesi 9) — Class, encapsulation, special methods
4. <strong>Searching & Sorting</strong> (Sesi 10) — Linear/binary search, sorting algorithms, Big O
</Theory>

---

## Contoh Soal 1: Banking System

<Example>
<strong>Soal:</strong> Buat sistem perbankan yang memungkinkan:
- Buka akun
- Deposit uang
- Tarik uang
- Cek saldo
- Lihat riwayat transaksi
- Simpan/muat data akun dari file

```python
class RekeningBank:
    """Sistem manajemen rekening bank"""
    
    def __init__(self, pemilik, saldo_awal=0):
        if saldo_awal < 0:
            raise ValueError("Saldo awal tidak bisa negatif")
        
        self.pemilik = pemilik
        self.__saldo = saldo_awal
        self.__transaksi = []
        
        if saldo_awal > 0:
            self.__transaksi.append(
                f"Saldo awal: ${saldo_awal}"
            )
    
    def deposit(self, jumlah):
        if jumlah <= 0:
            raise ValueError("Jumlah deposit harus positif")
        self.__saldo += jumlah
        self.__transaksi.append(f"Deposit: +${jumlah:.2f}")
        return True
    
    def tarik(self, jumlah):
        if jumlah <= 0:
            raise ValueError("Jumlah tarik harus positif")
        if jumlah > self.__saldo:
            raise ValueError(
                f"Saldo tidak cukup. Tersedia: ${self.__saldo:.2f}"
            )
        self.__saldo -= jumlah
        self.__transaksi.append(f"Tarik: -${jumlah:.2f}")
        return True
    
    def get_saldo(self):
        return self.__saldo
    
    def get_transaksi(self):
        return self.__transaksi.copy()
    
    def tampil_statement(self):
        print(f"\n{'='*50}")
        print(f"Pemilik Akun: {self.pemilik}")
        print(f"Saldo: ${self.__saldo:.2f}")
        print(f"{'='*50}")
        print("Riwayat Transaksi:")
        for i, t in enumerate(self.__transaksi, 1):
            print(f"{i}. {t}")
        print(f"{'='*50}\n")
    
    def __str__(self):
        return (f"Akun({self.pemilik}, "
                f"${self.__saldo:.2f})")


class Bank:
    """Sistem manajemen bank"""
    
    def __init__(self, filename="akun.txt"):
        self.filename = filename
        self.akun = {}
        self.load_akun()
    
    def buat_akun(self, nama, saldo_awal=0):
        if nama in self.akun:
            raise ValueError(f"Akun untuk {nama} sudah ada")
        try:
            akun = RekeningBank(nama, saldo_awal)
            self.akun[nama] = akun
            return akun
        except ValueError as e:
            raise ValueError(f"Tidak bisa buat akun: {e}")
    
    def get_akun(self, nama):
        if nama not in self.akun:
            raise KeyError(f"Akun untuk {nama} tidak ditemukan")
        return self.akun[nama]
    
    def save_akun(self):
        try:
            with open(self.filename, "w") as f:
                for nama, akun in self.akun.items():
                    saldo = akun.get_saldo()
                    f.write(f"{nama},{saldo:.2f}\n")
        except IOError as e:
            print(f"Error menyimpan akun: {e}")
    
    def load_akun(self):
        try:
            with open(self.filename, "r") as f:
                for baris in f:
                    parts = baris.strip().split(",")
                    if len(parts) == 2:
                        nama, saldo = parts
                        try:
                            self.buat_akun(nama, float(saldo))
                        except (ValueError, KeyError):
                            pass
        except FileNotFoundError:
            pass


def main():
    bank = Bank()
    
    try:
        akun1 = bank.buat_akun("Alice", 1000)
        akun2 = bank.buat_akun("Bob", 500)
        
        akun1.deposit(500)
        akun1.tarik(200)
        akun2.deposit(300)
        
        akun1.tampil_statement()
        akun2.tampil_statement()
        bank.save_akun()
        
    except (ValueError, KeyError) as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
```
</Example>

---

## Contoh Soal 2: Student Grade Analysis

<Example>
<strong>Soal:</strong> Buat sistem untuk:
- Load data siswa dari file
- Cari siswa berdasarkan kriteria
- Urutkan siswa berdasarkan nilai
- Hitung statistik
- Simpan hasil

```python
class Siswa:
    def __init__(self, id_siswa, nama, nilai):
        self.id_siswa = id_siswa
        self.nama = nama
        self.nilai = nilai
    
    def __str__(self):
        return f"{self.id_siswa}: {self.nama} - {self.nilai}"


class BukuNilai:
    def __init__(self, filename):
        self.filename = filename
        self.siswa = []
        self.load_data()
    
    def load_data(self):
        try:
            with open(self.filename, "r") as f:
                for baris in f:
                    parts = baris.strip().split(",")
                    if len(parts) == 3:
                        id_s, nama, nilai = parts
                        try:
                            self.siswa.append(
                                Siswa(id_s, nama, int(nilai))
                            )
                        except ValueError:
                            print(f"Data invalid: {baris}")
        except FileNotFoundError:
            print(f"File {self.filename} tidak ditemukan")
    
    def cari_by_nama(self, nama):
        for s in self.siswa:
            if s.nama.lower() == nama.lower():
                return s
        return None
    
    def cari_by_range_nilai(self, min_n, max_n):
        hasil = []
        for s in self.siswa:
            if min_n <= s.nilai <= max_n:
                hasil.append(s)
        return sorted(hasil, key=lambda x: x.nilai, reverse=True)
    
    def get_top_students(self, n=5):
        diurutkan = sorted(
            self.siswa,
            key=lambda s: s.nilai,
            reverse=True
        )
        return diurutkan[:n]
    
    def hitung_statistik(self):
        if not self.siswa:
            return None
        nilai = [s.nilai for s in self.siswa]
        return {
            "jumlah": len(nilai),
            "rata-rata": sum(nilai) / len(nilai),
            "tertinggi": max(nilai),
            "terendah": min(nilai),
        }
    
    def save_hasil(self, output_file):
        try:
            with open(output_file, "w") as f:
                stats = self.hitung_statistik()
                f.write(f"Rata-rata: {stats['rata-rata']:.2f}\n")
                f.write(f"Tertinggi: {stats['tertinggi']}\n")
                f.write(f"Terendah: {stats['terendah']}\n\n")
                f.write("TOP 5 SISWA:\n")
                for i, s in enumerate(self.get_top_students(), 1):
                    f.write(f"{i}. {s}\n")
        except IOError as e:
            print(f"Error: {e}")


def main():
    buku = BukuNilai("siswa.txt")
    stats = buku.hitung_statistik()
    if stats:
        print(f"Rata-rata: {stats['rata-rata']:.2f}")
        print(f"Tertinggi: {stats['tertinggi']}")
    buku.save_hasil("hasil.txt")

if __name__ == "__main__":
    main()
```
</Example>

---

## Tips dan Strategi

<Theory>
<strong>Sebelum Ujian:</strong>
1. Review semua materi Sesi 7-10
2. Latihan coding — tulis program sample
3. Pahami konsep, jangan hafal kode
4. Uji kode dan perbaiki error

<strong>Saat Ujian:</strong>
1. Baca soal dengan teliti
2. Rencanakan dulu — tulis pseudocode
3. Uji sering — running dengan test cases
4. Handle errors — sertakan exception handling
5. Komentari kode yang kompleks
6. Manage waktu dengan bijak

<strong>Best Practices di Ujian:</strong>
```python
# ✅ LAKUKAN INI
def proses_data(data):
    """Dokumentasi fungsi"""
    pass

try:
    hasil = fungsi(data)
except ValueError as e:
    print(f"Error: {e}")

nilai_siswa = 85  # Nama jelas

# ❌ HINDARI INI
def f(d):
    pass

x = 85  # Ambigu
```
</Theory>

---

## Common Mistakes

<Example>
<strong>1. Tidak Handle Edge Cases:</strong>
```python
# ❌ SALAH
def rata_rata(angka):
    return sum(angka) / len(angka)

# ✅ BENAR
def rata_rata(angka):
    if not angka:
        return 0
    return sum(angka) / len(angka)
```

<strong>2. Lupa Tutup File:</strong>
```python
# ❌ SALAH
f = open("file.txt")
data = f.read()

# ✅ BENAR
with open("file.txt") as f:
    data = f.read()
```

<strong>3. Tidak Validasi Input:</strong>
```python
# ❌ SALAH
def tarik(self, jumlah):
    self.saldo -= jumlah

# ✅ BENAR
def tarik(self, jumlah):
    if jumlah <= 0:
        raise ValueError("Jumlah harus positif")
    if jumlah > self.saldo:
        raise ValueError("Saldo tidak cukup")
    self.saldo -= jumlah
```
</Example>

---

## Practice Problems

<Example>
<strong>Problem 1: Employee Management</strong>
Buat sistem manage employee dengan:
- Nama, ID, gaji, departemen
- CRUD operations
- Search functionality
- Save/load dari file
- Hitung total payroll

<strong>Problem 2: Library System</strong>
Buat sistem perpustakaan dengan:
- Manajemen buku
- Peminjaman
- Pengembalian
- Search functionality
- Kalkulasi denda

<strong>Problem 3: Inventory Management</strong>
Buat sistem inventory dengan:
- Product tracking
- Stock management
- Search dan sort
- Reorder notifications

<strong>Problem 4: Quiz Application</strong>
Buat kuis interaktif dengan:
- Manajemen soal
- Kalkulasi skor
- Result tracking
- File-based storage
</Example>

---

## Kriteria Penilaian

<Theory>
<strong>Code Quality (40%):</strong>
- Implementasi benar
- Error handling
- Readability
- Dokumentasi

<strong>Functionality (30%):</strong>
- Semua requirements terpenuhi
- Edge cases di-handle
- Tidak ada bugs
- Output format benar

<strong>Efficiency (20%):</strong>
- Algoritma tepat
- Time complexity baik
- Struktur data tepat

<strong>Design (10%):</strong>
- Organisasi logis
- Komponen reusable
- Prinsip OOP
</Theory>

---

## Checklist Ujian

<Conclusion>
<strong>Sebelum Submit, Pastikan:</strong>
- [ ] Semua fungsi terimplementasi
- [ ] Semua class terdefinisi dengan benar
- [ ] Exception handling in place
- [ ] File I/O berfungsi
- [ ] Search/sort algorithms benar
- [ ] Kode diuji dengan multiple inputs
- [ ] Edge cases di-handle
- [ ] Tidak ada infinite loops
- [ ] Komentar ditambahkan
- [ ] Output format benar
- [ ] Program running tanpa error

<strong>Selamat Ujian!</strong>
Yang terpenting: <strong>Solusi terbaik adalah yang bekerja dengan benar, mudah dipahami, dan efisien.</strong>
</Conclusion>

---

## Referensi

- https://docs.python.org/3/
- https://www.bigocheatsheet.com/
