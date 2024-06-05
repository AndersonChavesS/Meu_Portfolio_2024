import style from './Home.module.css';
import { Link } from 'react-router-dom';
import ImageHome from '../../assets/developer-blue.svg'
const Home = () => {
  return (
    <section className={style.home}>
      <div className={style.apresentacao}>
        <p>
          Olá, sou
          <br />
          <span>Anderson Chaves</span>
          <br />
          Dev Front end
        </p>
        <Link to='/sobre' className={style.btn}>
          Saiba mais sobre mim
        </Link>
      </div>
      <figure>
        <img
          className={style.img}
          src={ImageHome}
          alt='Imagem de Home'
        />
      </figure>
    </section>
  );
}

export default Home;
