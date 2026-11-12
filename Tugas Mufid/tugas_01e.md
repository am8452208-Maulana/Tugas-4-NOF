# Tugas Mandiri 01e — Log Belajar Socratic Mandiri

Nama: [Abdullah Mufid A]
Topik: Bagaimana cara kerja prediksi kata pada LLM

## 1. Salinan 3 Putaran Tanya Jawab Socratic

- AI: "Bayangkan kamu sedang mengirim pesan WhatsApp kepada teman.

Kamu mengetik:

"Setiap pagi sebelum berangkat kerja, saya biasanya minum secangkir ..."

Temanmu belum membaca pesan tersebut, tetapi seseorang yang melihat kalimat itu mungkin bisa menebak bahwa kata berikutnya adalah:

"kopi"

Menariknya, ada banyak kemungkinan kata lain:

Teh
Susu
Air
Kopi

Namun, kata "kopi" terasa lebih masuk akal dibandingkan beberapa pilihan lainnya.

🤔 Pertanyaan pembuka"

Menurut kamu, apa yang membuat seseorang bisa menebak bahwa kata berikutnya kemungkinan besar adalah "kopi", padahal kata tersebut belum dituliskan?

- Saya: "menurut ku, mungkin seseorang tersebut sudah bisa menebak kemungkinan besar bahwa kata setelah nya adalah kopi, karena orang tersebut sering dikabari setiap pagi oleh dia, bahwa ia setiap pagi selalu minum secangkir kopi"
- AI: "Menarik! Jawabanmu bagus. Kamu sudah menangkap satu konsep penting, yaitu pengalaman atau informasi sebelumnya dapat membantu seseorang membuat prediksi.

Mari kita lanjutkan dengan sedikit mengubah studi kasusnya.

🧩 Studi kasus lanjutan
Sekarang bayangkan ada seseorang yang baru pertama kali bertemu dengan orang yang menulis pesan tersebut.

Dia tidak pernah menerima pesan WhatsApp sebelumnya dan tidak tahu kebiasaan minum orang itu.
Namun, dia tetap membaca kalimat:
"Setiap pagi sebelum berangkat kerja, saya biasanya minum secangkir ..."
Lalu dia menebak kata "kopi".

🤔 Pertanyaan kedua
Menurutmu, jika orang tersebut belum pernah mengenal penulis pesan dan tidak tahu kebiasaannya, dari mana dia bisa mendapatkan petunjuk untuk menebak kata "kopi"?"

- Saya: "melihat dari kebiasan orang lain yang juga setiap pagi minum secangkir kopi"

- AI: "Bagus sekali! Kamu mulai menemukan prinsip yang lebih dalam. 😊

Jawabanmu menunjukkan bahwa seseorang bisa menggunakan pola atau kebiasaan yang pernah diamati sebelumnya untuk memperkirakan sesuatu yang belum diketahui.

Sekarang kita coba hubungkan dengan cara kerja LLM.

🧩 Studi kasus ketiga
Bayangkan sebuah LLM sedang membaca banyak sekali contoh kalimat selama proses pelatihannya.

Misalnya, ia menemukan pola seperti:

"Setiap pagi saya minum secangkir kopi."

"Ayah selalu menikmati secangkir kopi."

"Sebelum bekerja, ibu membuat secangkir teh."

"Saya membeli secangkir kopi di kedai."

Kemudian, suatu hari, kamu memberikan potongan kalimat:

"Setiap pagi sebelum bekerja, saya minum secangkir ..."

LLM harus menentukan kata apa yang paling masuk akal untuk muncul berikutnya.

🤔 Pertanyaan ketiga
Menurutmu, berdasarkan contoh-contoh yang pernah dipelajarinya, bagaimana LLM menentukan apakah kata berikutnya lebih mungkin "kopi" daripada "teh"?

Apakah menurutmu LLM sekadar mengingat kalimat yang pernah dibacanya, atau ada proses lain yang membuatnya bisa memperkirakan kata berdasarkan pola?"

- Saya: "kopi, karena di percakapan sebelumnya saya setiap pagi minum kopi, kenapa bukan teh, karena yang minum teh itu si ibu bukan saya"

## 2. Kesimpulan Akhir Versi Saya:

Bahwa kerja sistem prediksi kata pada LLM adalah melihat dari percakapan sebelumnya, yang mana itu bisa menjadi prediksi kata setelahnya, walaupun kita belum memberitahukan kata tersebut kepadanya.
