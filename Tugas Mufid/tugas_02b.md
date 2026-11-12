# Tugas Mandiri 02b — Jembatan Kode: Fungsi Diskon & Ongkir

Nama: [Abdullah Mufid A]

## 1. Kode JavaScript Sederhana:

```javascript
function hitungTotalBelanja(hargaBarang, jumlahBeli) {
  // 1. Hitung Total Belanja
  let totalBelanja = hargaBarang * jumlahBeli;

  // 2. Hitung Diskon
  let diskon = 0;
  if (totalBelanja >= 50000) {
    diskon = totalBelanja * 0.1;
  }

  // 3. Hitung Total Bayar
  let totalBayar = totalBelanja - diskon;

  return totalBayar;
}

// Uji coba: harga barang 15rb, beli 4
console.log("Total Bayar:", hitungTotalBelanja(15000, 4));

// Output: 54000
```

## 2. Refleksi Singkat:

Dengan membagi masalah menjadi beberapa tahap, kode JavaScript lebih mudah dibuat dan dipahami. Variabel, operasi matematika, dan kondisi if membantu menghitung total belanja dan diskon secara otomatis.
