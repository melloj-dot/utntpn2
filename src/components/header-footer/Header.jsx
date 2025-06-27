import {Link} from 'react-router-dom'

function Header() {
  return (
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"> 
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"> 
       
      <span className="fs-4">Michiverso</span></a> 
      <ul className="nav nav-pills"> <li className="nav-item"><button className='btn btn-primary'>About Us</button></li>
       
      </ul>
      </header>
  );
}

export default Header;
