const Mobile = {
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

    <div class="wrapper">
      <div class="item1" styles="background-images : url('imgmobile/kontak.png');">1</div>
      <div class="item2">2</div>
      <div class="item3">3</div>
    </div>

<div class="container">
  <div class="dd" id="lokasi"></div>
  <div class="ff"></div>
  <div class="gg"></div>
  <div class="hh"></div>
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

  const isAdminSession = sessionStorage.getItem("isAdmin");

        // Check if the user is an admin based on the local storage item
        const isAdminLocalStorage = localStorage.getItem("isAdmin");

        if (isAdminSession === "true" || isAdminLocalStorage === "true") {
            // Redirect to the admin page
            window.location.href = '/#/admin';
        }


  const gps = document.getElementById('lokasi')
    gps.addEventListener('click', () => {
      window.location.href = 'https://www.google.com/maps/search/posyandu+terdekat/';
    });

const ggDiv = document.querySelector('.gg');
    ggDiv.addEventListener('click', () => {
      window.location.href = 'https://ayosehat.kemkes.go.id/home';
    });

const ffDiv = document.querySelector('.ff');
    ffDiv.addEventListener('click', () => {
      window.location.href = 'pengumuman-page-user.html';
    });

const login = document.querySelector('.item3');
    login.addEventListener('click', () => {
      window.location.href = 'login.html';
    }); 

const footerHome = document.querySelector('.footer-home');
    footerHome.addEventListener('click', () => {
      window.location.href = '/';
    });   
  },
};

export default Mobile;

