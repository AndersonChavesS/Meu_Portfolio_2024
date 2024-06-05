import style from './Sobre.module.css';
import profile from './images/img-profile.jpg';
import Html_icon from './images/icon-html.svg';
import Css_icon from './images/icon-css.svg';
import JS_icon from './images/icon-js.svg';
import React_icon from './images/icon-react.svg';
import Java_icon from './images/icon-java.svg';

const Sobre = () => {
  return (
    <section className={style.sobre}>
      <div className={style.bio}>
        <img src={profile} alt='Avatar' className={style.avatar} />
        <div className={style.description}>
          <h2>Sobre</h2>
          <p>
            Sou <span>Anderson Chaves</span>
            <br />
            <strong>Dev Full Stack</strong>
          </p>
          <p>Estudante do Curso de graduação em <strong>Ciência da Computação</strong> pela Faculdade São Francisco de Assis, e também fazendo o Curso FullStack da Rocket Seat.</p>
          <p>Sou apaixonado por transformar ideias em realidade digital.</p>
          <p>
            Estou participando da construção de um site (utilizando React, java e
            bootstrap) sob a mentoria da instituição de ensino{' '}
            <strong>Programar Com Você</strong> em parceria com a{' '}
            <strong>Elastic Code</strong>.
          </p>
        </div>
      </div>

      <div className={style.techs}>
        <h3>Techs</h3>
        <div className={style.techs_images}>
          <figure>
            <img className={style.image} src={Html_icon} alt='Ícone Html' />
            <figcaption>HTML</figcaption>
          </figure>
          <figure>
            <img className={style.image} src={Css_icon} alt='Ícone Css' />
            <figcaption>CSS</figcaption>
          </figure>
          <figure>
            <img className={style.image} src={JS_icon} alt='Ícone JavaScript' />
            <figcaption>JavaScript</figcaption>
          </figure>

          <figure>
            <img className={style.image} src={React_icon} alt='Ícone React' />
            <figcaption>React</figcaption>
          </figure>
          <figure>
            <img className={style.image} src={Java_icon} alt='Ícone Java' />
            <figcaption>Java</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
export default Sobre;
