import React from 'react'
import useGatosApi from '../hooks/useGatosApi'
import Cats from '../components/cats/Cats'


function CatsPage() {

  const { cats, loading, error } = useGatosApi()

  if(loading){
      return (
          <>
              Cargando personajes...
          </>
      )
  }
  
  if(error){
      return (
          <>
          <h2>Error al cargar los datos</h2>
          <p> {error.message} </p>
          </>
      )
  }

  return (
    <div className='container mx-auto px-4 mt-5' >
      <Cats cats={cats} />
    </div>
  )
}

export default CatsPage