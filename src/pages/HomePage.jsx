import React, { useState } from 'react'
import {Link} from 'react-router-dom'
/* import useGatosApi from '../hooks/useGatosApi' */

function HomePage() {

  /* const [catsCount, setCatsCount] = useState([]) */
  /* const { catsCount } = useGatosApi() */
  
  return (
    <div>
        <h1>Welcome to a Michi's world</h1>
        {/* <h2>There are {}</h2> */}
        <Link to="/cats">
        Ver michis
        </Link>
        <br />
        <img src="https://cataas.com/cat" alt="Michi" />
    </div>
  )
}

export default HomePage