const Mobile = {
  async render() {
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

    <div class="wrapper">
      <div class="item1" styles="background-images : url('imgmobile/kontak.png');"></div>
      <div class="item4"></div>
      <div class="item3" id="user"></div>
      <div class="item2"></div>

    </div>

    <div class="container">
        <div class="dd" id="lokasi"></div>
        <div class="ff"></div>
        <div class="gg"></div>
        <div class="hh" onclick="window.location.href='#/info+posyandu'"></div>
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

    // Mengaktifkan fungsi untuk pengalihan halaman pada tombol "Info Aplikasi"
    const footerInfo = document.querySelector('.footer-info');
    footerInfo.addEventListener('click', () => {
      window.location.href = '/#/info+aplikasi';
    });

    // Mengaktifkan fungsi untuk pengalihan halaman pada tombol "Info Posyandu"
    const hhDiv = document.querySelector('.hh');
    hhDiv.addEventListener('click', () => {
      window.location.href = '/#/info+posyandu';
    });

    // Mengaktifkan fungsi untuk pengalihan halaman pada tombol "Home"
    const footerHome = document.querySelector('.footer-home');
    footerHome.addEventListener('click', () => {
      window.location.href = '/#/';
    });

    // Mengaktifkan fungsi untuk pengalihan halaman pada tombol "GPS"
    const gps = document.getElementById('lokasi');
    gps.addEventListener('click', () => {
      window.location.href = 'https://www.google.com/maps/search/posyandu+terdekat/';
    });

    // Mengaktifkan fungsi untuk pengalihan halaman pada tombol "gg"
    const ggDiv = document.querySelector('.gg');
    ggDiv.addEventListener('click', () => {
      window.location.href = 'https://ayosehat.kemkes.go.id/home';
    });

    // Mengaktifkan fungsi untuk pengalihan halaman pada tombol "ff"
    const ffDiv = document.querySelector('.ff');
    ffDiv.addEventListener('click', () => {
      window.location.href = 'pengumuman-page-user.html';
    });

    const bagikan = document.querySelector('.item1');
    bagikan.addEventListener('click', () => {
        // Tautan yang akan dibagikan
        const link = 'https://drive.google.com/file/d/13bGE26G6uGxRZ-_HZEAS5kkhYHkVTldj/view?usp=sharing';

        // Membuat tautan untuk membagikan ke WhatsApp
        const whatsappShareLink = `https://api.whatsapp.com/send?text=Download aplikasi posyandu ${encodeURIComponent(link)}`;

        // Mengarahkan pengguna ke WhatsApp untuk membagikan tautan
           window.open(whatsappShareLink, '_blank');
    });

    const panduanUser = document.querySelector('.item2');
    panduanUser.addEventListener('click', () => {
      window.location.href = '/#/panduan+user';
    });

    const hubungi = document.querySelector('.item3#user');
    hubungi.addEventListener('click', () => {
      window.location.href = '/#/hubungi';
    });

    const cariBalita = document.querySelector('.item4');
    cariBalita.addEventListener('click', () => {
      window.location.href = 'https://script.google.com/macros/s/AKfycbyLS7kuc7S0E_cIIHdU-ASnYF84O-ZLwXD_CGuYsIbSWiE4fEk7mM7pwH9I-tnyBsJQ/exec';
    });    

  },
};

export default Mobile;
