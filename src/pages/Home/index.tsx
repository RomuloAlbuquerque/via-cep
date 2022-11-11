import { Link } from "react-router-dom";

import "./styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <Link to="/cepsearch">
        <div className="welcome">
          <h2>Seja Bem Vindo ao App romulo.ViaCEP</h2>
        </div>
        <div className="button-container">
          <button className="btn btn-primary btn-lg start-button">
            Iniciar
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Home;
