// NotFoundPage.js
import React from 'react';
import '/src/styles/App.css'
import Header from '../components/header-footer/Header';
import Footer from '../components/header-footer/Footer';


function NotFoundPage() {
  return (
    <>
    <Header/>
        <div className='container'>
      <div className="row">
        <h1> <strong className='cuatroscientoscuatro'>404</strong> - Página no encontrada</h1>
        <p>Lo sentimos, la página que buscas no existe.</p>
      </div>
    </div>
    <Footer/>
    </>

  );
}

export default NotFoundPage;