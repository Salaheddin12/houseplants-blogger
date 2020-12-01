import styles from "./nav.module.css";

export default () => {
  return (
    <nav className={styles.navBar}>
      <a>HB</a>
      <ul>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Articles</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
      </ul>
    </nav>
  );
};
