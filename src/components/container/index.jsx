import style from './Container.module.css';

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
  return <section className={style.container}>{children}</section>;
};

export default Container;
