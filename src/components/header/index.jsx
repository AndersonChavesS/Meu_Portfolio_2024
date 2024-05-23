import { Link } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <div>
          <Link to='/' className={style.logo}>
            andersonChaves.dev
          </Link>
        </div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/sobre'>Sobre</Link>
          <Link to='/projetos'>Projetos</Link>
          <Link to='/contatos'>Contatos</Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
