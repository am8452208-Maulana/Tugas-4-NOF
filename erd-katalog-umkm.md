```mermaid
erDiagram
   MERCHANT ||--o{ KATEGORI : memiliki
MERCHANT ||--o{ PRODUK : menjual
MERCHANT ||--o{ PESANAN : menerima
KATEGORI ||--o{ PRODUK : mengelompokkan
PESANAN ||--|{ ITEM_PESANAN : memiliki
PRODUK ||--o{ ITEM_PESANAN : dipesan
    MERCHANT {
        string id_merchant PK
        string nama_toko
        string nama_pemilik
        string no_wa
        string alamat
    }
    KATEGORI {
        string id_kategori
        date id_merchant
        string nama_kategori
    }
    PRODUK {
        string id_produk
        string id_merchant
        string id_kategori
        string nama_produk
        int harga
        int stok
        string foto_produk
    }
    ITEM_PESANAN {
        string id_item
        string id_pesanan
        string id_produk
        int jumlah-beli
        int harga_satuan
        int subtotal
    }
    PESANAN {
        string id_pesanan
        string id_merchant
        string nama_pembeli
        string no_wa_pembeli
        string tanggal_pesanan
        int total_harga
        string status_pesanan
    }