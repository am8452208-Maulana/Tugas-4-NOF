
# Tugas Mandiri 02b — Jembatan Kode: Fungsi Diskon & Ongkir

Nama: Ahmad Maulana

## 1. Kode JavaScript

Kode program disimpan dalam file `hitung_diskon.js`.

* javascript
function hitungTotalBayar(totalBelanja, jarakKm) {
    let diskon = 0;

    if (totalBelanja >= 100000) {
        diskon = totalBelanja * 0.10;

        if (diskon > 20000) {
            diskon = 20000;
        }
    } else {
        diskon = 0;
    }

    let ongkir = 0;

    if (jarakKm <= 3) {
        ongkir = 0;
    } else {
        ongkir = (jarakKm - 3) * 2500;
    }

    let totalAkhir = totalBelanja - diskon + ongkir;

    return totalAkhir;
}

console.log("Skenario A:", hitungTotalBayar(50000, 2));
console.log("Skenario B:", hitungTotalBayar(150000, 5));
console.log("Skenario C:", hitungTotalBayar(300000, 1));
```

## 2. Hasil Pengujian

Skenario A: 50000
Skenario B: 140000
Skenario C: 280000

## 3. Refleksi

Saya belajar menerjemahkan pseudocode menjadi JavaScript
menggunakan fungsi, variabel, dan percabangan if-else.
Hasil pengujian sudah sesuai dengan Dry Run Table.
