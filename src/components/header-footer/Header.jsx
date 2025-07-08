import {Link} from 'react-router-dom'

function Header() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Michis</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
         <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" href="/contactus">Contact Us</a>
              </li>
            </ul>
          </div>
      </div>
    </nav>
  );
}

export default Header;
