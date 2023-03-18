import './style.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';



const NavBar = () => {
    return (
    <div className='primario'>
        <div>
        <h1>HomeStore</h1>
        <img alt='logo' src='/img/logo.jpg'/> 
        </div>
        <div className='navbar-rs'> 
            <div className="navbar navbar-expand-md">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className='navbar-li'><NavLink 
                                 className={({isActive}) => 
                                    isActive ? 'navbtn' : 'innavbtn' 
                                 }
                                 to="/"
                                >
                                    Todos los productos
                                </NavLink>
                                </li>
                                <li className='navbar-li'><NavLink 
                                className={({isActive}) => 
                                    isActive ? 'navbtn' : 'innavbtn' 
                                 }
                                to="/category/bazar"
                                >
                                    Linea Bazar
                                </NavLink>
                                </li>
                                <li className='navbar-li'><NavLink 
                                className={({isActive}) => 
                                    isActive ? 'navbtn' : 'innavbtn' 
                                 }
                                to="/category/deco"
                                >
                                    Linea Deco
                                </NavLink>
                                </li>
                                <li className='navbar-li'><NavLink 
                                className={({isActive}) => 
                                    isActive ? 'navbtn' : 'innavbtn' 
                                 }
                                to="/category/hogar"
                                >
                                    Linea Hogar
                                </NavLink>
                                </li>
                                <li className='navbar-li'><NavLink 
                                className={({isActive}) =>  
                                    isActive ? 'navbtn' : 'innavbtn'
                                 }
                                to="/contacto"
                                >
                                    Seguinos en Redes
                                </NavLink>
                                </li>
                                <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn" type="submit">Search</button>
                                </form>
                                <div> 
                                    <CartWidget /> 
                                </div>    
                            </ul>
                            
                        </div>
                    </div>
            </div>
        </div>
    </div>
  );
};

export default NavBar