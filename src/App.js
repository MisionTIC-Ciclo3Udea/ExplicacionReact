import './styles/App.css';
import logo from './media/navbar.png';
import borderCollie from './media/bordercollie.jpg';
import rhodesian from './media/rhodesian.jpg';

function App() {
  return (
    <div className="App">
      <header>
        <ul className="navbar">
            <li>
                <img src={logo} alt="navbar perros" className="logo"/>
            </li>
            <li>
                <button className="button mainButton">Nuevo Post</button>
            </li>
            <li>
                <div className="buscar">
                    <input placeholder="Buscar una raza"/>
                    <i className="fa fa-search button iconoBusqueda" aria-hidden="true"></i>
                </div>
            </li>
            <li>
                <button className="button secondaryButton">Login</button>
            </li>
            <li>
                <button className="button mainButton">Registro</button>
            </li>
        </ul>
    </header>
    <main>
        <section>
            <h1>Razas de Perros</h1>
            <ul className="breedCardContainer">
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={borderCollie} alt="Border Collie"/>
                    </div>
                    <span className="breedTitle">Border Collie</span>
                </li>
                <li className="breedCard">
                    <div className="contenedorImagen">
                        <img src={rhodesian} alt="Rhodesian"/>
                    </div>
                    <span className="breedTitle">Rhodesian</span>
                </li>
            </ul>
        </section>
        <section></section>
    </main>
    <footer></footer>
    </div>
  );
}

export default App;
