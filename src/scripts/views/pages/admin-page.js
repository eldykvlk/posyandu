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
// components/Admin.js
        // Add an event listener to the "Logout" button
        const logoutButton = document.getElementById('logoutButton');
        logoutButton.addEventListener('click', () => {
          // Send a message to the React Native code to initiate logout
          window.ReactNativeWebView.postMessage(JSON.stringify({ action: 'logout' }));
        });



  },
};

export default Admin;

