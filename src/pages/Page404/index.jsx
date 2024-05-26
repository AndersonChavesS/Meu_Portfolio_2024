import style from './Page404.module.css';

const Page404 = () => {
  return (
    <section className={style.page404}>
      <h2 className={style.titulo2}>Algo deu errado!</h2>
      <div className={style.textos}>
        <span className={style.texto_grande}>404</span>
        <br />
        <strong className={style.texto_vermelho}>Página não Localizada!</strong>
      </div>
    </section>
  );
}

export default Page404;
