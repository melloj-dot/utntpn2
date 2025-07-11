import { useState, React }  from 'react'
import Header from '../components/header-footer/Header';
import Footer from '../components/header-footer/Footer';




function ContactUs() {

    
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')
  const [commentary, setCommentary] = useState('')
  const [reason, setReason] = useState('');

    // Función para manejar los cambios en los inputs
  const handleChange = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case 'nombre':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'telefono':
        setTelephone(value);
        break;
      case 'comentario':
        setCommentary(value);
        break;
      case 'motivo':
        setReason(value);
        break;
      default:
        break;
    }
  };


    // funcion para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // evita que la pág se recargue al enviar el formulario

    
    const formData = {
      name,
      email,
      telephone,
      commentary,
      reason,
    };

    console.log('clg:', formData);
  }



  return (
    <div className='contactForm'>
      <Header/> 
      <div className="row">
        <div className="card shadow">
          <div className="card-header text-white">
            <h1>Contáctanos</h1>
          </div>
          <div className="card-body">
            <h5>Por favor, complete el siguiente formulario con sus datos:</h5>
            <form onSubmit={handleSubmit}> {/* Asocia la función handleSubmit al evento onSubmit */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="nombre"
                  placeholder="Nombre"
                  value={name} // Conecta el valor del input con el estado 'name'
                  onChange={handleChange} // Llama a handleChange cada vez que el valor cambia
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="tucorreo@ejemplo.com"
                  value={email} // Conecta el valor del input con el estado 'email'
                  onChange={handleChange} // Llama a handleChange cada vez que el valor cambia
                />
              </div>

              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="telefono"
                  placeholder="+54"
                  value={telephone} // Conecta el valor del input con el estado 'telephone'
                  onChange={handleChange} // Llama a handleChange cada vez que el valor cambia
                />
              </div>
              <div>
                <textarea
                  className="mb-3 form-control"
                  id="comentario"
                  rows="4"
                  placeholder="Escriba su mensaje..."
                  value={commentary} // Conecta el valor del textarea con el estado 'commentary'
                  onChange={handleChange} // Llama a handleChange cada vez que el valor cambia
                ></textarea>
              </div>

              <div className="mb-3">
                <select
                  className="form-select"
                  id="motivo"
                  value={reason} // Conecta el valor del select con el estado 'reason'
                  onChange={handleChange} // Llama a handleChange cada vez que el valor cambia
                >
                  <option value="" disabled>Seleccionar</option> {/* Valor vacío para la opción "Seleccionar" */}
                  <option value="consulta">Consulta</option>
                  <option value="sugerencia">Sugerencia</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              <div className="d-flex justify-content-end gap-2">
                <button type="reset" className="btn btn-secondary" onClick={() => {
                  // resetear manualmente los estados al hacer clic en Reset
                  setName('');
                  setEmail('');
                  setTelephone('');
                  setCommentary('');
                  setReason('');
                }}>Reset</button>
                <button type="submit" className="btn btn-primary">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
       <Footer/>
    </div>


  )
}

export default ContactUs