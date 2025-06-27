import React from 'react'
import useGatosApi from '../hooks/useGatosApi'
import Cats from '../components/cats/Cats'
import Header from '../components/header-footer/Header';
import Footer from '../components/header-footer/Footer';

function CatsPage() {

  const { cats, loading, error } = useGatosApi()

  if(loading){
      return (
          <>
              ¡Loading cats! Plese wait...
          </>
      )
  }
  
  if(error){
      return (
          <>
          <h2>Error fetching data</h2>
          <p> {error.message} </p>
          </>
      )
  }

  return (

    <div className='container-fluid text-center'>
      <Header/>
      <Cats cats={cats} />
      <Footer/>
    </div>
  )
}

export default CatsPage