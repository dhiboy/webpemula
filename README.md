HTML adalah struktur utama dari website. Bisa diibaratkan seperti kerangka bangunan.
Navbar (Menu Samping):
Saat tombol ☰ ditekan, menu samping (sidebar) akan muncul. Ada tiga menu di dalamnya: Profil, Riwayat Pendidikan, dan Riwayat Organisasi.
Konten (Profil, Pendidikan, Organisasi):
Hanya satu bagian yang muncul dalam satu waktu. Saat pertama kali dibuka, Profil akan tampil, sedangkan yang lain tersembunyi.
Footer:
Bagian bawah halaman yang berisi hak cipta.

CSS adalah desain dan tata letak dari website.
Warna:
Biru (#005bbb) untuk latar belakang navbar dan header.
Kuning (#ffcc00) untuk bagian konten.
Menu Sidebar:
Secara default disembunyikan (lebar 0px).
Saat tombol ☰ ditekan, sidebar akan melebar menjadi 250px.
Tampilan Profil, Pendidikan, dan Organisasi:
Bagian yang tidak dipilih disembunyikan dengan .hidden { display: none; }

JavaScript mengatur interaksi pengguna (misalnya membuka/menutup menu, mengganti konten)
1. openNav() → Membuka sidebar dengan mengubah lebarnya menjadi 250px.
2. closeNav() → Menutup sidebar dengan mengubah lebarnya menjadi 0px.
3. showSection(sectionId) → Menampilkan konten yang dipilih dan menyembunyikan yang lain.
4. Saat halaman pertama dibuka, otomatis menampilkan bagian Profil.

KESIMPULAN
1. HTML Menyusun halaman, membuat sidebar, dan konten.
2. CSS  Mengatur warna, tampilan, dan menyembunyikan konten yang belum dipilih.
3. JavaScript 
Membuka dan menutup sidebar.
Menampilkan konten sesuai menu yang dipilih.
Saat pertama kali dibuka, otomatis menampilkan Profil.
