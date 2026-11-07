# 1. Formula R-C-I-C-O & Perbedaan Context vs Constraint

Formula R-C-I-C-O adalah kerangka kerja (framework) penyusunan prompt terstruktur agar LLM menghasilkan output yang presisi, relevan, dan sesuai format yang diinginkan.

R (Role): Peran atau persona yang diadopsi oleh AI (misal: Senior Web Developer, Copywriter UMKM).

C (Context): Latar belakang situasi, audiens sasaran, serta kondisi lingkungan dari tugas yang diberikan.

I (Instruction): Perintah atau tugas inti yang wajib dilakukan oleh AI secara spesifik.

C (Constraint): Batasan, aturan ketat, hal yang dilarang, atau batas cakupan kerja AI.

O (Output Format): Bentuk/struktur luaran yang diharapkan (misal: Tabel Markdown, JSON, Daftar Poin).

## Perbedaan Tegas: Context vs Constraint

| Elemen | Context (Konteks)                                                                                      | Constraint (Batasan)                                                                                      |
| ------ | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| Fungsi | Memberikan informasi latar belakang agar AI memahami situasi dan landscape masalah.                    | Menetapkan pagar/aturan main tentang apa yang boleh dan tidak boleh dilakukan AI.                         |
| Sifat  | Deskriptif & Informatif (Menjawab "Kenapa" dan "Siapa").                                               | Preskriptif & Restriktif (Menjawab "Apa batasannya" dan "Bagaimana aturannya").                           |
| Contoh | "Siti adalah pemilik UMKM busana muslimah yang menjual produk pashmina secara daring untuk anak muda." | "Dilarang menggunakan istilah teknis yang rumit, maksimal 3 paragraf, dan hindari kata sifat berlebihan." |

### Kesimpulan

- Context: Memberikan informasi latar belakang agar AI memahami situasi dan permasalahan.
- Constraint: Memberikan aturan dan batasan agar AI menghasilkan jawaban sesuai ketentuan.

## Tugas: Perbandingan Prompt Buruk dan Prompt yang Benar

# 1. Menggunakan Prompt Buruk

Prompt:
gimana cara bikin toko online laku?

Contoh hasil AI:

Bikin toko online laku dan banjir pesanan butuh kombinasi antara produk yang tepat, visibilitas (traffic), dan kepercayaan pembeli (konversi).

1. Foto & video produk asli.
2. Deskripsi jelas & lengkap.
3. Ulasan & rating pertama.
4. Respon chat cepat.
5. Promo selamat datang.
6. Fasilitas gratis ongkir.
7. Konten video pendek.
8. Live streaming.
9. Paid ads.
10. Riset kata kunci SEO.

## Kekurangan:

- Pertanyaan terlalu umum dan singkat.

- Tidak menyertakan jenis produk yang dijual.

- Tidak menyebutkan target pasar.

- Tidak memberikan batas anggaran atau strategi khusus.

- Hasil jawaban bersifat umum dan kurang spesifik pada produk tertentu.

## 1. Mengubah Menjadi Prompt yang Benar

Prompt yang sudah diperbaiki:

[Role]
Bertindaklah sebagai pakar pemasaran digital.

[Context]
Saya sudah membuat sebuah produk yang akan saya pasarkan lewat internet, yaitu sepatu lokal dengan target pemasaran kalangan pemuda dan harga jual di bawah 100 ribu rupiah. Saya sudah memiliki toko online untuk mempromosikannya.

[Instruction]
Jelaskan bagaimana caranya agar orang-orang mengetahui produk saya dan agar toko online saya tersebar di berbagai platform internet.

[Constraint]
Fokuskan pada taktik pemasaran organik yang cocok untuk anak muda dengan anggaran terbatas.

[Output]
Susun penjelasan strategi dalam bentuk poin-poin langkah kerja, serta lengkapi dengan tabel kolom: Nama Strategi Platform, Jenis Konten/Aksi, dan Alasan Diminati Pelanggan (Pemuda).

Contoh hasil AI:
Nama Strategi Platform Jenis Konten / Aksi Alasan Diminati Pelanggan (Pemuda)
TikTok & Instagram Reels Membuat konten storytelling, transisi gaya (GRWM), mix and match OOTD, dan POV anak muda. Anak muda menyukai inspirasi gaya berpakaian yang praktis, estetik, dan cepat diserap secara visual.
TikTok Live / Shopee Live Melakukan live rutin memperlihatkan detail produk, kelenturan sol, try-on, dan tanya-jawab. Memberikan transparansi bentuk fisik asli serta interaksi real-time untuk berburu promo khusus.
WhatsApp & Telegram Broadcast Membagikan info drop produk baru, kupon diskon member, atau kuis interaktif berhadiah. Terasa lebih personal, eksklusif, dan memberikan rasa diistimewakan bagi komunitas.
Pinterest Mengunggah papan inspirasi OOTD estetik yang memadukan sepatu lokal dengan celana cargo atau hoodie. Menjadi rujukan visual utama anak muda dalam mencari inspirasi gaya hidup dan referensi fashion.

## 1. Membandingkan Hasil Prompt Buruk dan Benar

| Aspek      | Prompt Buruk                    | Prompt Benar                                           |
| ---------- | ------------------------------- | ------------------------------------------------------ |
| Instruksi  | Terlalu umum dan singkat        | Sangat spesifik dan terarah                            |
| Role       | Tidak ada                       | Pakar pemasaran digital                                |
| Context    | Tidak ada                       | Sepatu lokal, harga di bawah Rp100 ribu, target pemuda |
| Constraint | Tidak ada                       | Taktik organik dan anggaran terbatas                   |
| Output     | Poin umum bebas                 | Poin langkah kerja dan tabel terstruktur               |
| Hasil      | Tips jualan yang sangat generik | Strategi pemasaran yang kontekstual dan aplikatif      |

### Kesimpulan

Prompt yang buruk menghasilkan jawaban umum yang tidak spesifik dan kurang bisa langsung diterapkan pada produk tertentu.

Sedangkan prompt yang diperbaiki dengan menyertakan peran, konteks, batasan, dan format output menghasilkan strategi pemasaran yang jauh lebih terarah, tajam, dan sesuai dengan karakteristik target pasar.

## Tugas: Perbandingan Prompt Buruk dan Prompt yang Benar

1. Menggunakan Prompt Buruk
   Prompt:
   Kasih tahu data apa aja yang ada di warung kopi.
   Contoh hasil AI:

Data yang biasanya ada di warung kopi antara lain:

1. Nama warung kopi.
2. Alamat warung.
3. Nama pemilik.
4. Daftar menu makanan dan minuman.
5. Harga menu.
6. Data pelanggan.
7. Data karyawan.
8. Jam operasional.
9. Stok bahan baku.
10. Pendapatan warung.
    Kekurangan:

- Pertanyaan terlalu umum.
- Tidak menjelaskan tujuan penggunaan data.
- Tidak menentukan format jawaban.
- Hasilnya kurang terperinci.

2. Mengubah Menjadi Prompt yang Benar
   Prompt yang sudah diperbaiki:

[Role]
Bertindaklah sebagai konsultan bisnis UMKM yang berpengalaman dalam mengelola warung kopi.

[Context]
Saya sedang mempelajari pengelolaan data untuk sebuah usaha warung kopi sederhana yang menjual berbagai macam kopi, minuman, dan makanan ringan.

[Instruction]
Sebutkan dan jelaskan data apa saja yang perlu dimiliki oleh warung kopi agar operasional bisnis berjalan dengan baik.

[Constraint]
Gunakan bahasa Indonesia yang sederhana dan mudah dipahami oleh pemula. Jangan menggunakan istilah bisnis yang terlalu rumit.

[Output]
Susun jawaban dalam bentuk tabel dengan kolom:

1. Nomor
2. Jenis Data
3. Contoh Data
4. Kegunaan Data

## Berikan minimal 10 jenis data yang penting untuk warung kopi.

Contoh hasil AI:
No. Jenis Data Contoh Data Kegunaan

1. Identitas usaha Nama Warung Kopi Mengenalkan usaha.
2. Data pemilik Nama pemilik Mengetahui penanggung jawab.
3. Data menu Kopi Hitam, Cappuccino Mengetahui produk.
4. Data harga Rp10.000 Menentukan harga jual.
5. Data pelanggan Nama pelanggan Mengenal pelanggan.
6. Data karyawan Nama dan jabatan Mengelola pegawai.
7. Data transaksi Tanggal dan total pembelian Mencatat penjualan.
8. Data stok Kopi, gula, susu Mengontrol persediaan.
9. Data pemasukan Total pendapatan Mengetahui keuntungan.
10. Data operasional Jam buka dan tutup Mengatur kegiatan usaha.

## 3. Membandingkan Hasil Prompt Buruk dan Benar

| Aspek      | Prompt Buruk          | Prompt Benar                           |
| ---------- | --------------------- | -------------------------------------- |
| Instruksi  | Umum dan kurang jelas | Jelas dan terarah                      |
| Role       | Tidak ada             | Konsultan bisnis UMKM                  |
| Context    | Tidak ada             | Menjelaskan usaha warung kopi          |
| Constraint | Tidak ada             | Menggunakan bahasa sederhana           |
| Output     | Jawaban bebas         | Tabel terstruktur                      |
| Hasil      | Informasi masih umum  | Informasi lebih lengkap dan terperinci |

### Kesimpulan

Prompt yang buruk menghasilkan jawaban yang masih umum dan kurang terstruktur. Sedangkan prompt yang sudah diperbaiki menghasilkan jawaban yang lebih lengkap, jelas, dan mudah dipahami.

## 1.contoh promt yang salah

promt yang salah
jelasin apa itu diagram alur.
Alur diagram adalah gambaran visual yang menunjukkan urutan langkah atau proses dari awal sampai akhir menggunakan simbol, kotak, dan tanda panah.
Alur diagram sering disebut juga Flowchart.
Fungsi alur diagram
Mempermudah memahami suatu proses.
Menjelaskan urutan kegiatan atau pekerjaan.
Membantu menemukan kesalahan dalam proses.

Mempermudah penyampaian informasi.

Contoh alur diagram
Misalnya, alur proses membuat akun:

Mulai

Buka aplikasi

Isi formulir pendaftaran

Data sudah benar?

Ya ↓

Akun berhasil dibuat
Tidak ↓

Perbaiki data
Selesai

Simbol-simbol dalam alur diagram
Simbol

Arti

Oval

Mulai atau selesai

Persegi panjang

Proses atau kegiatan

Belah ketupat

Keputusan (Ya/Tidak)

Jajar genjang

Input atau output data

Panah

Arah alur proses

Kesimpulan: Alur diagram adalah cara menggambarkan suatu proses secara berurutan agar lebih mudah dipahami.

Kalau kamu mau, saya juga bisa mengajarkan cara membuat alur diagram untuk tugas sekolah atau kuliah.

# Prompt yang benar :

Role
Kamu adalah guru informatika yang berpengalaman dalam menjelaskan konsep teknis dengan bahasa sederhana.
Context
Saya seorang pemula yang baru belajar logika pemrograman dan ingin memahami apa itu diagram alur (flowchart) beserta kegunaannya.
Instruction
Jelaskan apa itu diagram alur, meliputi pengertian, fungsi, simbol-simbol dasar yang umum dipakai, dan satu contoh sederhana dalam kehidupan sehari-hari.
Constraints
Gunakan bahasa Indonesia yang santai dan mudah dipahami
Hindari istilah teknis yang rumit tanpa penjelasan
Maksimal 300 kata
Jangan membahas jenis-jenis diagram alur tingkat lanjut
Output
Berikan jawaban dengan struktur: (1) definisi singkat, (2) fungsi, (3) tabel simbol dasar beserta artinya, (4) contoh kasus, dan (5) ringkasan satu kalimat di akhir.
Mau saya sesuaikan, misalnya untuk tingkat pelajar SMA atau untuk konteks tertentu seperti pemrograman atau bisnis?

# hasil dari promt yang benar.

## 1. Pengertian Diagram Alur (Flowchart)

Diagram alur (flowchart) adalah gambar yang menunjukkan urutan langkah-langkah untuk menyelesaikan suatu masalah atau melakukan suatu kegiatan.

Flowchart menggunakan simbol-simbol tertentu yang dihubungkan dengan panah agar alur proses mudah dipahami.

## 2. Fungsi Diagram Alur

Diagram alur memiliki beberapa fungsi, yaitu:

- Mempermudah memahami proses: Menjelaskan langkah-langkah secara berurutan.
- Membantu menyusun logika: Melatih kita berpikir secara runtut sebelum membuat program.
- Mempermudah menemukan kesalahan: Membantu mengetahui bagian proses yang kurang tepat.
- Mempermudah komunikasi: Membuat orang lain lebih mudah memahami cara kerja suatu proses.

## 3. Simbol-Simbol Dasar Flowchart

| Simbol          | Nama         | Arti                                           |
| --------------- | ------------ | ---------------------------------------------- |
| Oval            | Terminator   | Menandakan mulai atau selesai.                 |
| Persegi panjang | Process      | Menunjukkan proses atau kegiatan.              |
| Belah ketupat   | Decision     | Menunjukkan pilihan atau keputusan (Ya/Tidak). |
| Jajar genjang   | Input/Output | Menunjukkan data yang masuk atau keluar.       |
| Panah           | Flowline     | Menunjukkan arah alur proses.                  |

## 4. Contoh Kasus: Membuat Mi Instan

Berikut contoh alur sederhana dalam kehidupan sehari-hari:

Mulai

Siapkan bahan dan alat

Rebus air

Masukkan mi

Masukkan bumbu

Selesai

Dari contoh tersebut, kita bisa melihat bahwa membuat mi instan memiliki urutan langkah yang jelas. Jika urutannya tidak tepat, hasilnya bisa berbeda.

## 5. Ringkasan

Flowchart adalah diagram yang menggambarkan urutan langkah suatu proses menggunakan simbol dan panah agar lebih mudah dipahami dan diterapkan.

Dengan belajar flowchart, kamu akan lebih mudah memahami dasar logika pemrograman sebelum mulai menulis kode.

## dan perbandingan antara dua promt tersebut.

Kedua prompt tersebut sama-sama meminta penjelasan tentang diagram alur (flowchart), tetapi memiliki perbedaan dalam cara memberikan instruksi, tujuan, dan hasil jawaban yang diharapkan.

## 1. Perbandingan Dua Prompt

| Aspek                 | Prompt 1                                           | Prompt 2                                                 |
| --------------------- | -------------------------------------------------- | -------------------------------------------------------- |
| Peran (Role)          | Tidak ditentukan                                   | Guru informatika berpengalaman                           |
| Konteks (Context)     | Bertanya secara umum tentang flowchart             | Pemula yang sedang belajar logika pemrograman            |
| Instruksi             | Menjelaskan pengertian, fungsi, simbol, dan contoh | Menjelaskan materi yang sama secara lebih terstruktur    |
| Batasan (Constraints) | Tidak ada batasan khusus                           | Maksimal 300 kata, bahasa sederhana, tanpa istilah rumit |
| Format Output         | Bebas                                              | Harus mengikuti 5 bagian tertentu                        |
| Gaya Bahasa           | Penjelasan umum                                    | Santai, sederhana, dan edukatif                          |
| Tujuan                | Memahami apa itu flowchart                         | Memahami flowchart sebagai dasar logika pemrograman      |

## 2. Perbedaan Hasil Jawaban

Prompt 1:

- Jawaban lebih bebas dan fleksibel.
- Penjelasan cenderung umum.
- Tidak memiliki batasan jumlah kata.
- Cocok untuk mendapatkan gambaran awal tentang flowchart.

Prompt 2:

- Jawaban lebih terarah dan sistematis.
- Memiliki struktur pembahasan yang jelas.
- Menyesuaikan penjelasan dengan pemula.
- Lebih mudah digunakan sebagai bahan belajar.

## 3. Kelebihan dan Kekurangan

| Prompt   | Kelebihan                         | Kekurangan                   |
| -------- | --------------------------------- | ---------------------------- |
| Prompt 1 | Sederhana dan mudah dibuat        | Hasil jawaban kurang terarah |
| Prompt 2 | Detail, terstruktur, dan spesifik | Instruksinya lebih panjang   |

## 4. Kesimpulan

Lebih direkomendasikan: Prompt 2Prompt 2 lebih baik untuk pembelajaran karena menerapkan unsur-unsur penyusunan prompt yang jelas, yaitu:

- Role: Menentukan peran AI.
- Context: Memberikan latar belakang pengguna.
- Instruction: Menentukan tugas AI.
- Constraints: Memberikan batasan jawaban.
- Output: Menentukan format hasil.

Kelima unsur tersebut membuat jawaban AI lebih terarah, relevan, dan sesuai kebutuhan pengguna.

Intinya: Prompt 1 berfokus pada apa yang ingin ditanyakan, sedangkan Prompt 2 menjelaskan secara lebih lengkap bagaimana AI harus menjawab pertanyaan tersebut.

# Prompt Few-Shot format rapi :

ubah menjadi kartu informasi produk yang rapi :

Contoh :
Masukan: "kerudung pashmina bahan viscose ukuran 180 cm x 75 cm sisa 10 pcs harga seratus lima puluh ribu"
Hasil:

- Nama Barang: Kerudung pashmina
- Kategori : Pakaian syar'i
- Ukuran : 180cm x 75cm
- Bahan : viscose
- Stok: 10 pcs
- Harga: Rp 150.000,00

Sekarang ubah data berikut sesuai format di atas:
Masukan: "jubah lengan panjang dengan bahan polyester ukuran XL sisa 3 pcs harga dua ratus ribu"
Hasil:

Nama Barang: Jubah lengan panjang
Kategori: Pakaian syar'i
Ukuran: XL
Bahan: Polyester
Stok: 3 pcs
Harga: Rp 200.000,00
