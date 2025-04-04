import styles from './postagem.module.css'
import Img1 from '../imagens/imagem1.jpg'
import Img2 from '../imagens/imagem2.jpg'

export default function Postagens(){
    return (
      <div className={styles.corpo}>
        <h1>Titulo da postagem 1</h1>
        <p>Postado 20 marça 2024</p>
        <hr/>
        <br/>
        <img src={Img1} alt="cafe e computador" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          gravida neque sed metus ornare, quis interdum ligula commodo.
          Pellentesque commodo elit a volutpat consequat. Fusce ac blandit
          metus, fermentum interdum massa. Sed maximus, lectus eget feugiat
          mattis, lorem sem varius quam, id facilisis ligula sapien et felis.
          Maecenas a aliquet tellus, sit amet porta nisl. Phasellus sed rhoncus
          elit. Etiam neque dolor, fringilla nec quam vitae, venenatis tristique
          quam. Vivamus mi ex, accumsan vitae eleifend pulvinar, gravida sed
          lorem. Cras scelerisque ex et turpis finibus, a facilisis nulla
          lacinia. Quisque ex libero, suscipit id orci eget, pharetra fringilla
          nulla. Pellentesque velit est, euismod aliquam mollis nec, dictum vel
          risus. Sed sit amet tincidunt metus.
        </p>
        <br />
        <p className={styles.pp}>Leia mais</p>
        <p className={styles.faixa}></p>

        <h1>Titulo da postagem 1</h1>
        <p>Postado 20 marça 2024</p>
        <hr/>
        <br/>
        <img src={Img2} alt="cafe e computador" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          gravida neque sed metus ornare, quis interdum ligula commodo.
          Pellentesque commodo elit a volutpat consequat. Fusce ac blandit
          metus, fermentum interdum massa. Sed maximus, lectus eget feugiat
          mattis, lorem sem varius quam, id facilisis ligula sapien et felis.
          Maecenas a aliquet tellus, sit amet porta nisl. Phasellus sed rhoncus
          elit. Etiam neque dolor, fringilla nec quam vitae, venenatis tristique
          quam. Vivamus mi ex, accumsan vitae eleifend pulvinar, gravida sed
          lorem. Cras scelerisque ex et turpis finibus, a facilisis nulla
          lacinia. Quisque ex libero, suscipit id orci eget, pharetra fringilla
          nulla. Pellentesque velit est, euismod aliquam mollis nec, dictum vel
          risus. Sed sit amet tincidunt metus.
        </p>
        <br />
        <p className={styles.pp}>Leia mais</p>
      </div>
    );
}