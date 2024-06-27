import logo from 'media/navbar.png';

const Header = () =>{
    return (
        <header>
            <ul className='navbar'>
                <li>
                    <img src={logo} alt='navbar perros' className='logo'/>
                </li>
                <li>
                    <button className="button mainButton">Nuevo Post</button>
                </li>
                <li>
                    <div className='buscar'>
                        <input placeholder='Buscar una raza'/>
                        <i className='fa fa-search button iconoBusqueda' aria-hidden='true'></i>
                    </div>
                </li>
                <li>
                    <button className='button secondaryButton'>Login</button>
                </li>
                <li>
                    <button className='button mainButton'>Registro</button>
                </li>
            </ul>
        </header>
    )
}

export default Header;