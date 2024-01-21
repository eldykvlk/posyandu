const Admin = {
async render(){
	return `
   <nav class="navbar bg-body-primary fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">POSYANDU EDELWEIS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu Aplikasi</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Info Aplikasi</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Fitur Utama Admin
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="pengumuman-page-admin.html">Catat Pengumuman</a></li>
              <li><a class="dropdown-item" href="https://script.google.com/macros/s/AKfycbwvxkszbmmgUDABEVNdt--an3iuF-t7HFiCSNFJstUyTSslcoP8rdM8M0VKl4XNPnbA/exec">Catat Pelayanan</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>


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
      <div class="item1">1</div>
      <div class="item2">2</div>
     <div class="item3" id="logoutButton">3</div>
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
    <img id="info" src="images/info.png" alt="Info Logo">
  </div>
  <br><br>
</footer>
	`;
},


  async afterRender() {


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
      window.location.href = 'https://script.google.com/macros/s/AKfycbwvxkszbmmgUDABEVNdt--an3iuF-t7HFiCSNFJstUyTSslcoP8rdM8M0VKl4XNPnbA/exec';
    });

const footerHome = document.querySelector('.footer-home');
    footerHome.addEventListener('click', () => {
      window.location.href = '/';
    });

  // Add an event listener to the "Logout" button
        const logoutButton = document.getElementById('logoutButton');
        logoutButton.addEventListener('click', () => {
            // Redirect to the "/" route
            window.location.href = '/';
        });

  },
};

export default Admin;

