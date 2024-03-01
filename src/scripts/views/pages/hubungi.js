const Hubungi = {
  async render() {
    return `

     <br>  <br>  <br>  <br>  <br>  
         <h1 class="text-center mb-4" id="hubungikami">Hubungi Kami</h1>
        <div class="row">
          <div class="col-md-4">
            <div class="card" id="hubungi">
              <img src="images/lokasipos.jpg" class="card-img-top" alt="Gambar 1">
              <div class="card-body">
                <h4 class="card-text">Lokasi Posyandu Edellweis</h4>
                <p class="card-text">Kunjungi Posyandu kami untuk mendapatkan pelayanan Posyandu Edellweis</p>
                <a href="https://maps.app.goo.gl/hrqGehHsPxjAQ5Rw8" target="_blank" class="btn btn-primary">Kunjungi</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card" id="hubungi">
              <img src="images/posyanduktk.jpeg" class="card-img-top" alt="Gambar 2">
              <div class="card-body">
                <h4 class="card-text">Email Posyandu Edellweis</h4>
                <p class="card-text">Hubungi Posyandu kami untuk mendapatkan informasi Posyandu Edellweis</p>
                <a href="mailto:posyanduedellweis@gmail.com" target="_blank" class="btn btn-primary">Kirim Pesan</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card" id="hubungi">
              <img src="images/lokasipos.jpg" class="card-img-top" alt="Gambar 1">
              <div class="card-body">
                <h4 class="card-text">Lokasi puskesmas Rancabungur</h4>
                <p class="card-text">Kunjungi puskesmas terdekat dengan posyandu edellweis untuk berobat untuk anak dan ibunda</p>
                <a href="https://maps.app.goo.gl/WW5J29udjhBsEXTRA" target="_blank" class="btn btn-primary">Kunjungi</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card" id="hubungi">
              <img src="images/emailpus.jpg" class="card-img-top" alt="Gambar 2">
              <div class="card-body">
                <h4 class="card-text">Email Puskesmas Rancabungur</h4>
                <p class="card-text">Hubungi Puskesmas Rancabungur untuk mendapatkan informasi puskesmas ini</p>
                <a href="mailto:upfrcb@gmail.com" target="_blank" class="btn btn-primary">Kirim Pesan</a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card" id="hubungi">
              <img src="images/emaildev.jpg" class="card-img-top" alt="Gambar 2">
              <div class="card-body">
                <h4 class="card-text">Email pengembang aplikasi Posyandu Edellweis</h4>
                <p class="card-text">Hubungi saya, Eldy Effendi, selaku pengembang aplikasi ini untuk mendapatkan bantuan di aplikasi ini</p>
                <a href="mailto:eldykoplak@gmail.com" target="_blank" class="btn btn-primary">Kirim Pesan</a>
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

export default Hubungi;
