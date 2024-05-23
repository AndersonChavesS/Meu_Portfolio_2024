import { FaJs } from 'react-icons/fa6';
import style from './Card.module.css';
import { FaCss3Alt, FaHtml5, FaReact } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';

// eslint-disable-next-line react/prop-types
const Card = ({ name, description, html_url }) => {
  return (
    <section className={style.card}>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className={style.card_footer}>
        <div className={style.card_icones}>
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <FaReact />
        </div>
        <a
          href={html_url}
          target='_blank'
          rel='noopenner noreferrer'
          className={style.btn}
        >
          <BsArrowRight />
        </a>
      </div>
    </section>
  );
};

export default Card;
