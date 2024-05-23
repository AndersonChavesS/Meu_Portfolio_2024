import { useEffect, useState } from 'react';
import Card from '../../components/card';
import style from './Projetos.module.css';

const Projetos = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const buscarRepositorios = async () => {
      const response = await fetch(
        'https://api.github.com/users/AndersonChavesS/repos?page=1&per_page=50'
      );

      const data = await response.json();
      setRepositories(data);
    };
    buscarRepositorios();
  }, []);

  return (
    <section className={style.projetos}>
      <h2>Projetos</h2>
      {repositories.length > 0 ? (
        <section className={style.lista}>
          {repositories.map((repo) => (
            <Card
              key={repo.id}
              name={repo.name}
              description={repo.description}
              html_url={repo.html_url}
            />
          ))}
        </section>
      ) : (
        <p>Carregando repositórios...</p>
      )}
    </section>
  );
};
export default Projetos;
