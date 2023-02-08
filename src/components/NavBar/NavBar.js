import './style.css';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
    return (
    <div className='primario'>
        <div>
        <h1>HomeStore</h1>
        <img alt='logo' src='./img/logo.jpg'/> 
        </div>
        <div className='navbar-rs'> 
            <nav className="navbar navbar-expand-md">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <a class="nav-link" href="#home">Home</a>
                                
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#productos">Productos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#nosotros">Sobre Nosotros</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#redesSociales">Redes Sociales</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contacto">Contacto</a>
                                </li>
                                <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn" type="submit">Search</button>
                                </form>
                                <div> 
                                    <CartWidget/> 
                                </div>    
                            </ul>
                            
                        </div>
                    </div>
            </nav>
        </div>

    </div>
  )
};

export default NavBar