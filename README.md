# PPVW

# CSRF Mitigation and No API Auth Attack Simulation

Repositori ini berisi proyek yang mensimulasikan kerentanan dalam API, khususnya berfokus pada **No API Authentication** dan **Cross-Site Request Forgery (CSRF)**. Repositori ini juga menunjukkan strategi mitigasi, dengan penekanan pada penerapan perlindungan CSRF untuk mencegah tindakan yang tidak sah.

## 📖 Konten

### **1. No API Authentication**
**Definisi:**  
No API Authentication mengacu pada titik akhir API yang dapat diakses tanpa memverifikasi identitas pengguna. Kurangnya autentikasi ini memungkinkan pengguna yang tidak berwenang untuk mengeksploitasi fungsi sensitif seperti transaksi atau manipulasi data.

**Metodologi Serangan:**
- Mengintersepsi lalu lintas antara klien dan server menggunakan alat seperti Burp Suite atau Postman.
- Mengidentifikasi titik akhir yang tidak dilindungi (misalnya, `/donation`, `/transaction`).
- Memanipulasi permintaan untuk melakukan tindakan yang tidak sah seperti mengubah detail transaksi atau mentransfer dana tanpa validasi yang tepat.

**Tujuan Serangan:**
Memanfaatkan titik akhir yang tidak aman untuk menunjukkan potensi kerentanan dalam aplikasi yang tidak memiliki autentikasi dan otorisasi yang tepat.

---

### **2. Cross-Site Request Forgery (CSRF)**
**Definisi:**
CSRF adalah serangan yang memaksa pengguna yang diautentikasi untuk melakukan tindakan yang tidak diinginkan pada aplikasi web. Dengan memanfaatkan kepercayaan dalam sesi pengguna, penyerang dapat mengelabui browser agar mengirimkan permintaan berbahaya.

**Mitigasi:**
Penerapan token CSRF memastikan bahwa permintaan ke titik akhir yang sensitif berasal dari pengguna tepercaya, yang secara efektif memblokir tindakan tidak sah dari situs pihak ketiga.

---

## 🔧 Setup Proyek

### **Instalasi**
1. Clone repository ini:
   ```bash
   git clone https://github.com/MRifkiPratama/PPVW.git
   ```
2. Navigasi ke masing-masing folder frontend dan backend
   ```bash
   cd frontend
   cd backend
   ```
3. Eksekusi perintah `npm install` untuk dapat menjalankan program (di masing-masing folder)
   ```bash
   npm install
   ```
4. Memulai compiler
   backend
   ```bash
   node app.js
   ```
   frontend
   ```bash
   npm start
   ```
5. Program akan berjalan dan dapat digunakan.

## 💡 Link Mitigasi PPVW 
Link PPVW-Solution: https://github.com/sharifmasyhur/PPVW-Solution/tree/main
