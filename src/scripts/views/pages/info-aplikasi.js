const InfoAplikasi = {
  async render(){
    return `<br><br><br>
      <div class="containers" id="continfo" style="margin:20px;">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <h1 class="text-center mt-4 mb-4" id="hposyandu">Informasi Aplikasi Posyandu</h1>

            <div class="text-center">
              <img src="images/logoInfo.png" alt="Posyandu Edelweis" class="article-img img-fluid rounded" id="imgLogoInfo">
            </div>

            <h3 class="mt-4 mb-2" id="h3posyandu1">Manfaat adanya aplikasi Posyandu</h3>
            <p id="pposyandu1">Aplikasi Posyandu ini memberikan manfaat besar bagi masyarakat. Fitur notifikasi pengumuman posyandu memungkinkan masyarakat untuk selalu mendapatkan informasi terbaru tentang kegiatan Posyandu di sekitar mereka. Selain itu, kemampuan untuk mencari posyandu terdekat secara mudah membantu dalam mempercepat akses layanan kesehatan. Bagi panitia dan peserta Posyandu, aplikasi ini mempermudah dalam proses pelayanan, serta menyediakan informasi kesehatan yang dapat diakses langsung dari Kementerian Kesehatan atau Kementerian Sosial.</p>

            <div class="text-center">
              <img src="images/logoUnpam.png" alt="Pelayanan Kesehatan" class="article-img img-fluid rounded" id="imgLogounpam">
            </div>

            <h3 class="mt-4 mb-2" id="h3posyandu2">Bentuk kepedulian mahasiswa dengan masyarakat</h3>
            <p id="pposyandu2">Universitas Pamulang, diwakili oleh mahasiswa, Eldy Effendi, menunjukkan bentuk kepeduliannya terhadap masyarakat melalui pengembangan aplikasi Posyandu ini. Dengan menyediakan akses mudah terhadap informasi kesehatan dan pelayanan posyandu, mahasiswa dari Universitas Pamulang berkontribusi secara langsung dalam meningkatkan kesejahteraan masyarakat.</p>
          </div>
        </div>
      </div>`;
  },

  async afterRender() {
    window.scrollTo(0, 0); 
  },
};

export default InfoAplikasi;
