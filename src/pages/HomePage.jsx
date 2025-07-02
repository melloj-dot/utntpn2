import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/header-footer/Header';
import Footer from '../components/header-footer/Footer';
import useGatosCount from '../hooks/useGatosCount';
import useGatosAdvice from '../hooks/useGatosAdvice';
import EmojisSection from '../components/cats/EmojisSection';

function HomePage() {

 
  const { catsCount} = useGatosCount()
  const { catsAdvice} = useGatosAdvice()
  return (
      
    <div className='container-fluid text-center'>
      <Header />
        <br/> {/* Refactorizar */}
        <br/>
        <br/>
        <h1>Welcome to a Michi's world</h1>
        <h4 className='text-secondary'>There are <b>{catsCount}</b> cats in <a href="https://cataas.com/">this</a> world</h4>
        <main className="flex-fill container-fluid py-4">
            <div className="row">
          </div>
          <Link to="/cats">
          <button className='btn btn-outline-success'>See and search cats</button>
          </Link>
        </main>
        <p><b>Random cats fact:</b> {catsAdvice}</p>
        <img className='main-cat' src="https://cataas.com/cat" alt="Michi" />
       { <EmojisSection/>}
      <Footer />
    </div>
  )
}

export default HomePage