import CardFilme from '../components/CardFilme';
import styles from './Catalago.module.css';

import spiretedaway from '../assets/spiritedaway.jpg';
import meuamigototoro from '../assets/meu-amigo-totoro-dvd-versátil.webp';
import princesamononoke from '../assets/princesamononoke.jpg';
import reinodosgatos from '../assets/reinodosgatos.jpeg';

function Catalogo() {
  return (
    <section className={styles.catalogo}>
      <div className={styles.topo}>
        <h1>Catálogo de Filmes</h1>
        <p>Duração e sinopse de obras marcantes do Studio Ghibli.</p>
      </div>

      <div className={styles.grid}>
        <CardFilme
          titulo="A Viagem de Chihiro"
          duracao="2h 05min"
          sinopse="Durante a mudança para uma nova cidade, Chihiro entra em um mundo mágico de espíritos e precisa trabalhar numa casa de banhos para libertar os pais."
          capa={spiretedaway}
        />
        <CardFilme
          titulo="Meu Amigo Totoro"
          duracao="1h 26min"
          sinopse="Duas irmãs mudam-se para o campo no Japão e descobrem que a floresta próxima é habitada por criaturas mágicas, incluindo o Totoro."
          capa={meuamigototoro}
        />
        <CardFilme
          titulo="O Reino dos Gatos"
          duracao="1h 15min"
          sinopse="A adolescente Haru está cansada da vida de estudante na moderna cidade de Tóquio. Ela salva a vida de um gato numa estrada movimentada e tem uma grande surpresa."
          capa={reinodosgatos}
        />
        <CardFilme
          titulo="Princesa Mononoke"
          duracao="2h 14min"
          sinopse="Em busca da cura para uma maldição, Ashitaka vê-se no meio do conflito entre os espíritos da floresta e uma colónia de mineração."
          capa={princesamononoke}
        />
      </div>
    </section>
  );
}

export default Catalogo;