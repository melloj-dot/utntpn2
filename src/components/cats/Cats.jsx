import React from 'react'
import PropTypes from 'prop-types';
import './Cats.css';

function Cats({cats}) {

    //Validamos que cats no este vacio ni undefined
    if(!cats || cats.length === 0){
        return (
            <>
            <p>No se encontraron personajes. Intenta cargar otra pagina o verifica la conexion.</p>
            </>
        )
    }

  return (
    <div className='row' >
        {cats.map((cat) => (
            <div key={cat.id} className='col mb-5' >
                <div className='card' style={{ minWidth: '200px' }} >
                  <div className="card-header">
                    <h5 className='card-title' > Id: {cat.id} </h5>
                  </div>
                <img className="img-cat" src={`https://cataas.com/cat/${cat.tags[0]}`} alt="cat" />
                <div className='card-body'>
                    {<p className='card-text' > Tags: {cat.tags} </p>}
                </div>
                </div>
            </div>
        )) }
    </div>
  )
}

// Definición de PropTypes para el componente Cats refact
Cats.propTypes = {
  cats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // La API devuelve 'id' como str refact
      tags: PropTypes.array.isRequired,
/*       mimetype: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired, */
    })
  ).isRequired,
};

export default Cats