

import { NavLink } from 'react-router-dom'


const Header = ()=>{ 
    return (
      <header className="header-container">
        <div className="header-content">
          <div className="header-content__logo" aria-hidden="true">
            {/* <img className="header-content__logo-img" src={logoKasa}  alt="logo de kasa"  /> */}
          </div>
          <nav className="header-content__nav">
            <ul className="header-content__ul">
              <li><NavLink className="header-content__nav-link" to="/Home"> Accueil </NavLink></li>
              <li><NavLink className="header-content__nav-link" to="/CreateEmpl"> Création d'un profil' </NavLink></li>
              <li><NavLink className="header-content__nav-link" to="/ListEmpl"> Liste des employées </NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }

  export default Header;
