import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Conoce PS6.com</h3>
            <ul>
              <il>Acerca de nosotros</il>
              <il></il>
              <il></il>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Atención al cliente</h3>
            <ul>
              <li>Centro de ayuda</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Mi cuenta</h3>
            <ul>
              <li>Mi cuenta</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Siguenos</h3>.
            <ul>
              <li>Instagram</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} PS6.com Todos los derechos
            reservados
          </span>

          <nav>
            <a href="/privacy">Privacidad</a>
            <a href="/terms">Terminos y condiciones</a>
            <a href="/cookies">Cookies</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
