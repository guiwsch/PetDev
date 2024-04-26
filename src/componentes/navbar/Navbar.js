import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav>
      <div className={styles.animal}>
        <div>
          <Link to="/">
            <div>
              <img src= "https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihax74OlEISIToScS37Gu5GguFyra_MX6LTvmKgqA74E463ZjLeOgHV0jJuNTW0NWfAOW1r-3kqPDSwPW8QsGQqMn9nLBKQtumE=w1366-h599"
                alt="O logo do PetDev"
                data-testid="navbar-item-logo"
                className={styles.logo}
              />
            </div>
          </Link>
        </div>
        
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to="/animais">Animais</Link>
            </li>
            <li className={styles.item}>
              <Link to="/quiz">Quiz</Link>
            </li>
            <li className={styles.item}>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li className={styles.item}>
              <Link to="/sugestao">Sugestões</Link>
            </li>
          </ul>
        </div>
      
    </nav>

  )

}

export default Navbar;