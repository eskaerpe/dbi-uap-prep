## Bekerja dengan Multiple File

<Intuition>
Bayangkan sebuah proyek besar seperti lemari arsip. Daripada menulis semua dokumen dalam satu tumpukan raksasa, kamu membaginya ke dalam map-map terpisah. Setiap map punya label jelas dan bisa dipinjam oleh map lain. Ini adalah <em>modularitas</em> — membagi kode ke file-file kecil yang terorganisir.
</Intuition>

<Theory>
Python mengizinkan kamu mengorganisir kode ke dalam beberapa file (modul) dan mengimpornya ke file lain.

<strong>Struktur Modul Dasar:</strong>

```python
# kalkulator.py
def tambah(a, b):
    """Menambahkan dua angka"""
    return a + b

def kurang(a, b):
    """Mengurangi dua angka"""
    return a - b
```

<strong>Mengimpor Modul:</strong>

```python
# main.py
import kalkulator

hasil1 = kalkulator.tambah(10, 5)
hasil2 = kalkulator.kurang(10, 5)
print(hasil1)  # 15
print(hasil2)  # 5
```

<strong>Import Spesifik:</strong>

```python
from kalkulator import tambah, kurang
print(tambah(10, 5))  # 15
```

<strong>Import dengan Alias:</strong>

```python
from kalkulator import tambah sebagai penjumlahan
print(penjumlahan(10, 5))  # 15
```
</Theory>

<Example>
<strong>Menggunakan __name__ untuk Testing:</strong>

```python
# kalkulator.py
def tambah(a, b):
    return a + b

# Hanya berjalan saat file ini dieksekusi langsung
if __name__ == "__main__":
    print("Testing tambah:", tambah(5, 3))  # 8
```
</Example>

---

## Menulis ke File

<Theory>
<strong>Menulis File Dasar:</strong>

```python
file = open("data.txt", "w")
file.write("Halo, Dunia!\n")
file.write("Ini file test.\n")
file.close()
```

<strong>Penting: Selalu Tutup File!</strong> Gagal menutup file bisa menyebabkan kehilangan data.

<strong>Menggunakan Context Manager (Rekomendasi):</strong>

```python
# Otomatis menutup file saat selesai
with open("data.txt", "w") as file:
    file.write("Halo, Dunia!\n")
    file.write("Ini lebih aman.\n")
```

<strong>Append ke File:</strong>

```python
with open("data.txt", "a") as file:
    file.write("Baris ini ditambahkan.\n")
```

<strong>Mode Menulis:</strong>
- <strong>"w"</strong> — Write mode (menimpa konten existing)
- <strong>"a"</strong> — Append mode (menambah ke akhir file)
- <strong>"x"</strong> — Create mode (gagal jika file sudah ada)
</Theory>

---

## Membaca dari File

<Theory>
<strong>Membaca Seluruh File:</strong>

```python
with open("data.txt", "r") as file:
    konten = file.read()
    print(konten)
```

<strong>Membaca Baris per Baris:</strong>

```python
with open("data.txt", "r") as file:
    for baris in file:
        print(baris.strip())
```

<strong>Membaca Semua Baris ke List:</strong>

```python
with open("data.txt", "r") as file:
    baris = file.readlines()
    for baris in baris:
        print(baris.strip())
```

<strong>Memproses Data File:</strong>

```python
with open("angka.txt", "r") as file:
    total = 0
    count = 0
    for baris in file:
        angka = int(baris.strip())
        total += angka
        count += 1
    
    rata_rata = total / count if count > 0 else 0
    print(f"Rata-rata: {rata_rata}")
```

<strong>Mengecek File Exists:</strong>

```python
import os

if os.path.exists("data.txt"):
    with open("data.txt", "r") as file:
        print(file.read())
else:
    print("File tidak ditemukan!")
```
</Theory>

---

## Exception Handling

<Theory>
<strong>Exception</strong> adalah error yang terjadi saat eksekusi program. Tanpa penanganan yang tepat, exception akan menghentikan program.

<strong>Try-Except Block Dasar:</strong>

```python
try:
    angka = int(input("Masukkan angka: "))
    hasil = 10 / angka
    print(f"Hasil: {hasil}")
except ZeroDivisionError:
    print("Error: Tidak bisa membagi dengan nol!")
except ValueError:
    print("Error: Masukkan angka yang valid!")
```

<strong>Multiple Exception Types:</strong>

```python
try:
    file = open("missing.txt", "r")
    angka = int(file.read())
    hasil = 100 / angka
except FileNotFoundError:
    print("File tidak ditemukan!")
except ValueError:
    print("Format angka tidak valid!")
except ZeroDivisionError:
    print("Tidak bisa membagi dengan nol!")
```

<strong>Try-Except-Finally:</strong>

```python
try:
    file = open("data.txt", "r")
    data = file.read()
except FileNotFoundError:
    print("File tidak ditemukan!")
finally:
    # Ini selalu dieksekusi
    if 'file' in locals():
        file.close()
```

<strong>Try-Except-Else:</strong>

```python
try:
    angka = int(input("Masukkan angka: "))
except ValueError:
    print("Input tidak valid!")
else:
    # Berjalan hanya jika tidak ada exception
    print(f"Kamu memasukkan: {angka}")
```

<strong>Melempar Exception:</strong>

```python
def validasi_umur(umur):
    if umur < 0 or umur > 150:
        raise ValueError("Umur harus antara 0 dan 150!")
    return True

try:
    validasi_umur(-5)
except ValueError as e:
    print(f"Umur tidak valid: {e}")
```
</Theory>

### Exception Umum

<Theory>
| Exception | Penyebab |
|-----------|----------|
| ZeroDivisionError | Pembagian dengan nol |
| ValueError | Nilai tidak valid untuk operasi |
| TypeError | Tipe data salah |
| IndexError | Index di luar jangkauan |
| KeyError | Key dictionary tidak ditemukan |
| FileNotFoundError | File tidak ada |
| NameError | Variabel tidak terdefinisi |
</Theory>

---

## Contoh Praktis

<Example>
<strong>Membaca File CSV Sederhana:</strong>

```python
def baca_nilai_siswa(filename):
    """Membaca nilai siswa dari file"""
    try:
        with open(filename, "r") as file:
            siswa = {}
            for baris in file:
                parts = baris.strip().split(",")
                if len(parts) == 2:
                    nama, nilai = parts
                    siswa[nama] = int(nilai)
            return siswa
    except FileNotFoundError:
        print(f"Error: {filename} tidak ditemukan!")
        return {}

nilai = baca_nilai_siswa("nilai.txt")
for nama, skor in nilai.items():
    print(f"{nama}: {skor}")
```

<strong>Menyimpan Data ke File:</strong>

```python
def simpan_nilai_siswa(filename, siswa):
    """Menyimpan nilai siswa ke file"""
    try:
        with open(filename, "w") as file:
            for nama, nilai in siswa.items():
                file.write(f"{nama},{nilai}\n")
        print(f"Data disimpan ke {filename}")
    except IOError as e:
        print(f"Error menulis file: {e}")

siswa = {"Alice": 85, "Bob": 92, "Charlie": 78}
simpan_nilai_siswa("siswa.txt", siswa)
```
</Example>

---

<Conclusion>
<strong>Best Practices:</strong>
1. Selalu gunakan context manager (<strong>with</strong>) untuk operasi file
2. Tangkap exception spesifik, bukan generic Exception
3. Gunakan <strong>finally</strong> untuk cleanup resources
4. Validasi input sebelum memproses
5. Berikan pesan error yang jelas dan membantu

<strong>Ringkasan:</strong>
- <strong>Multiple Files</strong>: Organisir kode ke modul untuk maintainability
- <strong>File Writing</strong>: Gunakan <strong>with</strong> dan mode yang sesuai (w, a, x)
- <strong>File Reading</strong>: Baca seluruh file atau baris per baris
- <strong>Exceptions</strong>: Tangani error dengan try-except blocks
- <strong>Cleanup</strong>: Selalu tutup file atau gunakan context manager
</Conclusion>

---

## Referensi

- https://docs.python.org/3/tutorial/inputoutput.html
- https://docs.python.org/3/tutorial/errors.html
