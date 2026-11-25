import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <span className={styles.marca}>Mundo Ghibli</span>
      <ul className={styles.links}>
        <li><Link to="/" className={styles.link}>Início</Link></li>
        <li><Link to="/catalogo" className={styles.link}>Catálogo</Link></li>
        <li><Link to="/sobre" className={styles.link}>Sobre</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;