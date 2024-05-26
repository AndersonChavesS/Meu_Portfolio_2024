import { Link } from 'react-router-dom';
import style from './Header.module.css';
import { useState } from 'react';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toogleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className={style.header}>
        <div>
          <Link to='/' className={style.logo}>
            andersonChaves.dev
          </Link>
        </div>
        <nav className={`${style.menuSandwich} ${showMenu ? style.show : ''}`} onClick={toogleMenu}>
          <Link to='/'>Home</Link>
          <Link to='/sobre'>Sobre</Link>
          <Link to='/projetos'>Projetos</Link>
          <Link to='/contatos'>Contatos</Link>
        </nav>
        <div className={style.menuButton} onClick={toogleMenu}>
          <span className={style.linha}></span>
          <span className={style.linha}></span>
          <span className={style.linha}></span>
        </div>
      </header>
    </>
  );
};

export default Header;
