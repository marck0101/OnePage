import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  function CardClicavel() {
    // console.log("eu vou para o google");
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

export default Header;
