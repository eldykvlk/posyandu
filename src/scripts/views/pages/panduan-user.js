
const PanduanUser = {
async render(){
	return `
<div class="margininfo">
<div class="container" id="continfo">
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <h1 class="text-center mt-4 mb-4" id="hposyandu">Panduan Aplikasi untuk peserta</h1>

      <div class="text-center">
  <iframe width="auto" height="auto" src="https://www.youtube.com/embed/w8zmdnzuCMU?si=4k6Mae9NBc95_Qkq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <h3 class="mt-4 mb-2" id="h3posyandu1">Rangkuman Transkripsi Video</h3>
      <p id="pposyandu1">Selamat datang di aplikasi Posyandu Edelweiss! Berikut ringkasan langkah-langkahnya:<br><br>

1. Masuk dengan mengklik tombol "Peserta" di halaman utama. Fitur utama adalah "Bagikan aplikasi", memungkinkan pengguna membagikan aplikasi melalui WhatsApp untuk diunduh oleh siapapun.<br><br>
2. Cari info balita dengan fitur "Cari Info Balita", di mana Anda dapat mencari perkembangan balita Anda berdasarkan nama, gender, atau rentang tanggal pelayanan.<br><br>
3. Gunakan fitur "Hubungi Kami" untuk mendapatkan informasi kesehatan dan tentang aplikasi, termasuk kontak dan lokasi yang berkaitan.<br><br>
4. Periksa fitur "Panduan Aplikasi" untuk panduan dan transkrip video.<br><br>
5. Aktifkan lokasi dan gunakan fitur Google Map untuk mencari posyandu terdekat, memudahkan Anda menemukan posyandu di mana pun.<br><br>
6. Lihat pengumuman dari admin dalam fitur "Pengumuman".<br><br>
7. Baca artikel kesehatan dari Kemenkes menggunakan fitur "Baca Artikel".<br><br>
8. Dapatkan informasi tentang Posyandu Edelweiss dengan mengklik tombol "Informasi Posyandu".<br><br>
9. Temukan informasi tambahan tentang aplikasi di logo buku di bagian bawah kanan. Aplikasi ini dibuat dengan informasi yang berguna bagi pengguna. Terima kasih!<br><br></p>



      
    </div>
  </div>
</div>
</div>
	`;
},


  async afterRender() {
   window.scrollTo(0, 0); 

},
};

export default PanduanUser;

