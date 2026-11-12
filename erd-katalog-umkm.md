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
        string id_kategori PK
        date id_merchant FK
        string nama_kategori
    }
    PRODUK {
        string id_produk PK
        string id_merchant FK
        string id_kategori FK
        string nama_produk
        int harga
        int stok
        string foto_produk
    }
    ITEM_PESANAN {
        string id_item PK
        string id_pesanan FK
        string id_produk FK
        int jumlah-beli
        int harga_satuan
        int subtotal
    }
    PESANAN {
        string id_pesanan PK
        string id_merchant FK
        string nama_pembeli
        string no_wa_pembeli
        string tanggal_pesanan
        int total_harga
        string status_pesanan
    }