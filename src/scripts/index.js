import 'regenerator-runtime';
import App from './views/app';
import '../styles/main.css';

const app = new App();

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  
});
