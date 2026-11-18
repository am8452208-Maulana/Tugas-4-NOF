# Tugas Mandiri 02e — Detektif Audit Blueprint Cacat

**Nama:** Ahmad Maulana  
**Topik:** Audit Blueprint Fitur Terapkan Kode Voucher Diskon Toko

## 1. Mismatch 1 (Pseudocode vs Flowchart)

Di dalam pseudocode terdapat pengecekan kuota voucher menggunakan kondisi `voucher.kuota_pakai <= 0`. Jika kuota sudah habis, sistem harus menampilkan pesan "Kuota voucher sudah habis".

Selain itu, pseudocode juga mengurangi kuota voucher sebanyak 1 setelah voucher berhasil digunakan.

Namun, langkah pengecekan dan pengurangan kuota tersebut belum digambarkan di dalam flowchart.

**Perbaikan:** Tambahkan proses pengecekan kuota voucher dan proses pengurangan kuota setelah voucher berhasil digunakan.

## 2. Mismatch 2 (Logika vs Atribut ERD)

Di dalam pseudocode dan flowchart terdapat pengecekan `minimal_belanja` untuk memastikan total belanja pembeli sudah memenuhi syarat penggunaan voucher.

Namun, pada tabel ERD `VOUCHER`, atribut `minimal_belanja` belum tersedia.

Akibatnya, sistem tidak memiliki tempat untuk menyimpan batas minimal belanja setiap voucher.

**Perbaikan:** Tambahkan atribut berikut ke dalam entitas VOUCHER:

- `minimal_belanja` dengan tipe data `int`.

## 3. Mismatch 3 (Konsistensi Penamaan)

Terdapat perbedaan nama atribut antara pseudocode dan ERD.

- Di pseudocode menggunakan nama `kuota_pakai`.
- Di ERD menggunakan nama `sisa_kuota`.

Selain itu, input kode voucher menggunakan nama `kode_input`, sedangkan identitas voucher pada ERD menggunakan `kode_voucher`.

Perbedaan nama ini dapat membuat developer bingung ketika menghubungkan logika program dengan database.

**Perbaikan:** Gunakan nama atribut yang konsisten di seluruh rancangan, yaitu:

- `kode_voucher`
- `minimal_belanja`
- `nilai_potongan`
- `kuota_pakai`

## 4. Kesimpulan

Dari tugas ini, saya belajar bahwa pseudocode, flowchart, dan ERD harus saling berhubungan dan memiliki aturan yang sama. Jika ada proses yang hilang atau nama atribut berbeda, developer bisa mengalami kesulitan saat membuat program. Oleh karena itu, ketiga rancangan harus diperiksa terlebih dahulu sebelum mulai membuat kode program.