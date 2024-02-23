
const InfoPosyandu = {
async render(){
	return `<br><br><br>
<div class="containers" id="continfo" style="margin:20px;">
  <div class="row">
    <div class="col-md-8 offset-md-2">
      <h1 class="text-center mt-4 mb-4" id="hposyandu">Informasi Posyandu Edellweis</h1>

      <div class="text-center">
        <img src="images/posyandu1.jpeg" alt="Posyandu Edelweis" class="article-img img-fluid rounded">
      </div>

      <h3 class="mt-4 mb-2" id="h3posyandu1">Peran Posyandu Edelweis</h3>
      <p id="pposyandu1">Posyandu Edelweis di Perumahan Ambar Telaga Residence, Rancabungur, Bogor, memainkan peran penting dalam meningkatkan kesehatan ibu dan anak di lingkungan tersebut. Dengan menyediakan pelayanan kesehatan secara terpadu dan berkala, Posyandu ini menjadi pusat informasi dan perawatan bagi warga sekitar.</p>

      <div class="text-center">
        <img src="images/posyandu2.jpeg" alt="Pelayanan Kesehatan" class="article-img img-fluid rounded">
      </div>

      <h3 class="mt-4 mb-2" id="h3posyandu2">Pelayanan Kesehatan Rutin</h3>
      <p id="pposyandu2">Setiap bulannya, Posyandu Edelweis menyelenggarakan berbagai kegiatan, termasuk pemeriksaan kesehatan ibu hamil, imunisasi anak, serta penyuluhan tentang pola makan sehat dan pentingnya kebersihan lingkungan. Hal ini bertujuan untuk meningkatkan kesadaran masyarakat akan pentingnya menjaga kesehatan.</p>
    </div>
  </div>
</div>

	`;
},


  async afterRender() {
   window.scrollTo(0, 0); 

},
};

export default InfoPosyandu;

