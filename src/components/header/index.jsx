import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.corpo}>
      <div>
        <span className={styles.black}>Tec</span>
        <span className={styles.white}>Blog</span>
      </div>
      <div className={styles.corpo2}>
        <nav>Home</nav>
        <nav>Jogos</nav>
        <nav>Celulares</nav>
        <nav>Informática</nav>
        <nav>Eletrônica</nav>
      </div>
    </div>
  );
};
