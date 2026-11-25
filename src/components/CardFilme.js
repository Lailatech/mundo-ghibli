import styles from './CardFilme.module.css';

function CardFilme({ titulo, duracao, sinopse, capa }) {
  return (
    <article className={styles.card}>
      <img src={capa} alt={`Capa de ${titulo}`} className={styles.capa} />
      <div className={styles.conteudo}>
        <div className={styles.topo}>
          <h3 className={styles.titulo}>{titulo}</h3>
          <span className={styles.duracao}>{duracao}</span>
        </div>
        <p className={styles.sinopse}>{sinopse}</p>
      </div>
    </article>
  );
}

export default CardFilme;