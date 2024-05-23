import style from './Contatos.module.css';
import { TfiEmail } from 'react-icons/tfi';
import { BsInstagram, BsGithub, BsLinkedin, BsWhatsapp } from 'react-icons/bs';

const Contatos = () => {
  return (
    <section className={style.contatos}>
      <h2>Vamos trabalhar juntos!</h2>
      <h3>Entre em contato</h3>
      <p>Para que possamos conversar sobre</p>
      <div className={style.icones}>
        <a
          href='mailto:andersonchaves30@Gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <TfiEmail className={style.icone} />
        </a>
        <a
          href='https://www.instagram.com/andersonchaves53/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsInstagram className={style.icone} />
        </a>
        <a
          href='https://github.com/AndersonChavesS'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsGithub className={style.icone} />
        </a>
        <a
          href='https://www.linkedin.com/in/anderson-chaves-1b0a79265/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsLinkedin className={style.icone} />
        </a>
        <a
          href='https://wa.me/5593991931335'
          target='_blank'
          rel='noopener noreferrer'
        >
          <BsWhatsapp className={style.icone} />
        </a>
      </div>
    </section>
  );
}
export default Contatos;
