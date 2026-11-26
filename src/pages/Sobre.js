import styles from './Sobre.module.css';

function Sobre() {
  return (
    <section className={styles.sobre}>
      <h1>Sobre o Estúdio</h1>
      <p className={styles.intro}>
        A história e o catálogo do Studio Ghibli.
      </p>

      <div className={styles.grade}>
        <div className={styles.bloco}>
          <h2>Animação Artesanal</h2>
          <p>
            Destaca-se pela animação tradicional desenhada à mão, 
            com forte atenção a detalhes visuais e cenários expressivos.
          </p>
        </div>
        <div className={styles.bloco}>
          <h2>Trilha Sonora</h2>
          <p>
            Composições memoráveis de Joe Hisaishi que acompanham cada
            história.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;