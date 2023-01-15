import { Link } from "react-router-dom";
import "./style.css";

function Footer() {
  function CardClicavel() {
    window.location = "http://localhost:3000"; // acessar menu de relatório, dia, semana mês
  }
  return (
    <header id="menu">
      <div class="clicavel" onClick={CardClicavel}>
        <h2>Nome do Site</h2>
      </div>

      <div className="menu">
          <Link to="/">Home</Link>
      </div>
    </header>
  );
}

export default Footer;
