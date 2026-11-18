
function hitungTotalBayar(totalBelanja, jarakKm) {

    // Menghitung diskon
    let diskon = 0;

    if (totalBelanja >= 100000) {
        diskon = totalBelanja * 0.10;

        if (diskon > 20000) {
            diskon = 20000;
        }
    } else {
        diskon = 0;
    }

    // Menghitung ongkir
    let ongkir = 0;

    if (jarakKm <= 3) {
        ongkir = 0;
    } else {
        ongkir = (jarakKm - 3) * 2500;
    }

    // Menghitung total akhir
    let totalAkhir = totalBelanja - diskon + ongkir;

    return totalAkhir;
}

// Pengujian tiga skenario
console.log("Skenario A:", hitungTotalBayar(50000, 2));
console.log("Skenario B:", hitungTotalBayar(150000, 5));
console.log("Skenario C:", hitungTotalBayar(300000, 1));
