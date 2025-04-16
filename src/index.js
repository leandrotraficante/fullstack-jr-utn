import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AdivinaElNumero from './components/AdivinaElNumero';
// import PagesColors from './pages/PagesColor'; // importamos la pagina (con el componente reutlizable ya dentro de ella)
// import PagesFeed from './pages/PagesFeed';
// import Footer from './components/footer';
// import HookExample from './components/HookExample';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AdivinaElNumero></AdivinaElNumero>
    {/* <PagesColors></PagesColors>
    <PagesFeed></PagesFeed>
    <HookExample></HookExample>
    <Footer></Footer> */}
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
