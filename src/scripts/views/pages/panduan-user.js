
const PanduanUser = {
async render(){
	return `
<div class="margininfo">
<div class="container" id="continfo">
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <h1 class="text-center mt-4 mb-4" id="hposyandu">Panduan Aplikasi untuk pengguna</h1>

      <div class="text-center">
  <iframe width="auto" height="auto" src="https://www.youtube.com/embed/qY8rb_3ZaKo?si=hZDBEu6lgJb9wERK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

      <h3 class="mt-4 mb-2" id="h3posyandu1">Transkripsi Video</h3>
      <p id="pposyandu1">selamat datang di aplikasi posyandu edellweis disini
saya Eldy Effendi selaku pengembang dari aplikasi ini
akan menjelaskan cara penggunaan untuk aplikasi ini
<br><br>
1.yang pertama kita punya fitur bagikan aplikasi ini
dengan klik tombol bagikan aplikasi lalu kalian bisa
membagikan aplikasi ini ke siapa saja dengan whatsapp
<br><br>
2.yang kedua kita punya fitur hubungi kami dengan klik
tombol hubungi kami maka anda akan bisa melihat kontak
ataupun alamat yang bisa anda hubungi terkait kesehatan atau
pertanyaan terkait aplikasi ini
<br><br>
3.yang ketiga kita punya fitur mencari posyandu terdekat
dengan klik tombol posyandu terdekat maka andadapat mengunjungi
posyandu dimanapun anda berada yang terdekat dengan anda
<br><br>
4.yang keempat kami punya fitur melihat pengumuman dengan
klik tombol lihat pengumuman maka anda dapat melihat pengumuman
posyandu terbaru yang akan dinotifikasi dan diberikan oleh panitia posyandu
<br><br>
5.yang kelima kami punya fitur baca artikel dari kementrian kesehatan
Indonesia dengan klik tombol baca artike maka kalian dapat
membaca informasi kesehatan yang terbaru dan terpercaya.
<br><br>
6.yang keenam kami punya fitur melihat info posyandu dengan klik
tombol info posyandu maka anda dapat melihat informasi
terkait posyandu edellweis.
<br><br>
7.Yang ketujuh kami mempunyai fitur melihat info aplikasi
dengan klik logo navigasi bawah yeng berlogo buku info
maka pengguna dapat melihat informasi aplikasi ini.</p>



      
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

