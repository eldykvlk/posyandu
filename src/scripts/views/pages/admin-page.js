const Admin = {
async render(){
	return `



    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="images/1.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="images/2.png" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="images/3.png" class="d-block w-100" alt="...">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

    <div class="wrapper" id="wrapperadmin">
      <div class="item1"></div>
      <div class="item2" id="admin"></div>
      <div class="item3" id="user"></div>
    </div>

<div class="container" id="contadmin">
  <div class="dd" id="lokasi"></div>
  <div class="ff" id="pengumuman-admin"></div>
  <div class="gg"></div>
  <div class="ii"></div>
</div>

<br><br><br>

<footer class="mobile-footer">
  <div class="footer text-center">
    <img src="images/home.png" alt="Home Logo" class="footer-home">
    <img id="info" src="images/info.png" alt="Info Logo" class="footer-info">
  </div>
  <br><br>
</footer>
	`;
},


  async afterRender() {

 const nextButton = document.querySelector('.carousel-control-next');

    // Men-trigger klik pertama pada tombol "Next" setelah 1 detik
    const intervalPertama = setTimeout(() => {
     const nextButton = document.querySelector('.carousel-control-next');
    nextButton.click();
  }, 1000);

    window.addEventListener('hashchange', () => {
    clearInterval(intervalPertama);
  });

    // Mengaktifkan fungsi Carousel otomatis
    $('#carouselExampleControls').carousel({
      interval: 5000 // Menyetel interval carousel menjadi 5 detik
    });

    // Klik otomatis pada tombol "Next" setiap 5 detik
  const carouselInterval = setInterval(() => {
    const nextButton = document.querySelector('.carousel-control-next');
    nextButton.click();
  }, 5000);

    window.addEventListener('hashchange', () => {
    clearInterval(carouselInterval);
  });
        
  const gps = document.getElementById('lokasi')
    gps.addEventListener('click', () => {
      window.location.href = 'https://www.google.com/maps/search/posyandu+terdekat/';
    });


const ggDiv = document.querySelector('.gg');
    ggDiv.addEventListener('click', () => {
      window.location.href = 'https://ayosehat.kemkes.go.id/home';
    });

const ffadmDiv = document.querySelector('.ff#pengumuman-admin');
    ffadmDiv.addEventListener('click', () => {
      window.location.href = 'pengumuman-page-admin.html';
    });

const iiDiv = document.querySelector('.ii');
iiDiv.addEventListener('click', () => {
  window.open('https://script.google.com/macros/s/AKfycbyc-XOQRtBAmHDKH1vktA1I2ctYAnud2Kb7fYSNz_11AgC3cFeGXm1ASDFYptxYCLzo/exec', '_blank');
});


    const footerHome = document.querySelector('.footer-home');
    footerHome.addEventListener('click', () => {
      window.location.href = '/#/admin';
    });

    const footerInfo = document.querySelector('.footer-info');
    footerInfo.addEventListener('click', () => {
      window.location.href = '/#/admin+info+aplikasi';
    });

    const panduanAdmin = document.querySelector('.item2#admin');
    panduanAdmin.addEventListener('click', () => {
      window.location.href = '/#/panduan+admin';
    });

    const bagikan = document.querySelector('.item1');
    bagikan.addEventListener('click', () => {
        // Tautan yang akan dibagikan
        const link = 'https://drive.google.com/file/d/1N2pSyCoZhDvY-RQ0HE3EYEv5H0G27I0V/view?usp=sharing';

        // Membuat tautan untuk membagikan ke WhatsApp
        const whatsappShareLink = `https://api.whatsapp.com/send?text=Download aplikasi posyandu ${encodeURIComponent(link)}`;

        // Mengarahkan pengguna ke WhatsApp untuk membagikan tautan
            window.open(whatsappShareLink, '_blank');
    });

    const hubungi = document.querySelector('.item3');
    hubungi.addEventListener('click', () => {
      window.location.href = '/#/hubungi';
    });

  },
};

export default Admin;

