import { NavLink } from 'react-router-dom';


const Header = ()=>{ 
    return (
      <header className="header-container">
        <div className="header-content">
          <div className="header-content__logo" aria-hidden="true">
          </div>
          <nav className="header-content__nav">
            <ul className="header-content__ul">
              <li><NavLink className="header-content__nav-link" to="/Home"><img className= "header-content__nav-link_icons"alt="home" src={process.env.PUBLIC_URL + '/icons/home.png'} srcSet={process.env.PUBLIC_URL + '/icons/home.png'}/></NavLink></li>
              <li><NavLink className="header-content__nav-link" to="/CreateEmpl"><img className= "header-content__nav-link_icons"alt="home" src={process.env.PUBLIC_URL + '/icons/useradd.png'} srcSet={process.env.PUBLIC_URL + '/icons/useradd.png'}/></NavLink></li>
              <li><NavLink className="header-content__nav-link" to="/ListEmpl"><img className= "header-content__nav-link_icons"alt="home" src={process.env.PUBLIC_URL + '/icons/usersearch.png'} srcSet={process.env.PUBLIC_URL + '/icons/usersearch.png'}/></NavLink></li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }

  export default Header;
