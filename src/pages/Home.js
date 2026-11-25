import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import logoGhibli from '../assets/logototoro.jpeg';

function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.hero}>
        <img
          src={logoGhibli}
          alt="Logo do Studio Ghibli"
          className={styles.logo}
        />
        <p className={styles.heroTexto}>
          Bem-vindo ao Mundo Ghibli — um catálogo dedicado às animações que
          marcaram gerações com sensibilidade, natureza e fantasia.
        </p>
        <Link to="/catalogo" className={styles.botao}>
          Ir para o Catálogo
        </Link>
      </div>

      <article className={styles.historia}>
        <h1>Como o Studio Ghibli foi criado</h1>
        <p>
          O Studio Ghibli foi fundado em <strong>15 de junho de 1985</strong>,
          em Tóquio, no Japão, por <strong>Hayao Miyazaki</strong>,{' '}
          <strong>Isao Takahata</strong> e <strong>Toshio Suzuki</strong>. A
          criação do estúdio ganhou impulso após o sucesso de{' '}
          <em>Nausicaä do Vale do Vento</em> (1984).
        </p>
        <p>
          O nome <strong>Ghibli</strong> vem de uma palavra italiana usada para o
          vento quente do deserto do Saara, simbolizando a ideia de trazer um
          &ldquo;novo vento&rdquo; para a animação japonesa.
        </p>

        <div className={styles.fatos}>
          <div className={styles.fatoCard}>
            <strong>Fundação</strong>
            <span>1985, em Tóquio, Japão</span>
          </div>
          <div className={styles.fatoCard}>
            <strong>Fundadores</strong>
            <span>Hayao Miyazaki, Isao Takahata e Toshio Suzuki</span>
          </div>
          <div className={styles.fatoCard}>
            <strong>Primeiro Filme Oficial</strong>
            <span>O Castelo no Céu (1986)</span>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Home;