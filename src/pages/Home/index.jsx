import style from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className={style.home}>
      <div className={style.apresentacao}>
        <p>
          Olá, sou
          <br />
          <span>Anderson Chaves</span>
          <br />
          Dev Full Stack
        </p>
        <Link to='/sobre' className={style.btn}>
          Saiba mais sobre mim
        </Link>
      </div>
      <figure>
        <img
          className={style.img}
          src='../public/developer-blue.svg'
          alt='Imagem de Home'
        />
      </figure>
    </section>
  );
}

export default Home;
