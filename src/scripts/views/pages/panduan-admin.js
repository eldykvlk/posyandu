
const PanduanAdmin = {
async render(){
	return `
<div class="margininfo">
<div class="container" id="continfo">
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <h1 class="text-center mt-4 mb-4" id="hposyandu">Panduan Aplikasi untuk admin</h1>

      <div class="text-center">
 <iframe width="auto" height="auto" src="https://www.youtube.com/embed/RcC5XFE122o?si=-buBrQuOSpRh6NS9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <h3 class="mt-4 mb-2" id="h3posyandu1">Rangkuman Transkripsi Video</h3>
      <p id="pposyandu1">Tata cara penggunaan aplikasi Posyandu Edelweiss:<br><br>

1. Login menggunakan email Posyandu Edelweiss sebagai admin.<br><br>
2. Di halaman admin, terdapat fitur "Bagikan aplikasi" untuk mengirim link Google Drive kepada pengguna lain melalui status atau WhatsApp.<br><br>
3. Terdapat panduan aplikasi dan kontak untuk bertanya tentang layanan atau aplikasi ini, serta lokasi posyandu terdekat.<br><br>
4. Fitur "Pengumuman" memungkinkan admin mengubah tanggal, judul, dan isi pengumuman, serta membuat notifikasi.<br><br>
5. Fitur "Baca Artikel" memungkinkan admin membaca artikel kesehatan.<br><br>
6. Fitur "Catatan Pelayanan" memungkinkan pencatatan data balita dan layanan yang diberikan, dengan kemudahan pengeditan dan penghapusan data serta kemampuan untuk mengunduh data dalam format PDF, Excel, atau CSV.<br><br>
7. Logo buku membuka notifikasi pengumuman dan logo posyandu.<br><br>

Sekian, terima kasih.</p>



      
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

export default PanduanAdmin;

