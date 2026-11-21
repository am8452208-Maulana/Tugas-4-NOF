# Tugas Mandiri 02e — Detektif Audit Blueprint Cacat

Nama: [Abdullah Mufid A]

## 1. Mismatch 1 (Pseudocode vs Flowchart)

Di Pseudocode terdapat pengecekan `JIKA voucher.kuota_pakai <= 0` untuk memastikan apakah kuota voucher masih tersedia. Selain itu, terdapat proses pengurangan kuota voucher setelah voucher berhasil digunakan. Namun, di Flowchart langkah pengecekan kuota dan pengurangan kuota tersebut belum digambarkan.

## 2. Mismatch 2 (Logika vs Atribut ERD)

Pseudocode dan Flowchart sama-sama memeriksa kondisi `minimal_belanja` untuk memastikan bahwa total belanja pengguna sudah memenuhi batas minimal penggunaan voucher. Namun, di ERD entitas `VOUCHER` belum memiliki atribut `minimal_belanja (int)`.

## 3. Mismatch 3 (Konsistensi Penamaan)

Untuk menyimpan jumlah kuota voucher yang tersisa, Pseudocode menggunakan nama atribut `kuota_pakai`, sedangkan ERD menggunakan nama `sisa_kuota`. Selain itu, nama kode voucher juga berbeda, yaitu `kode_input` pada Pseudocode dan `kode_voucher` pada ERD.

**Perbaikan:** Samakan nama atribut pada Pseudocode, Flowchart, dan ERD agar tidak membingungkan. Gunakan nama `kode_voucher`, `minimal_belanja`, `nilai_potongan`, dan `kuota_pakai` secara konsisten di seluruh dokumen.
