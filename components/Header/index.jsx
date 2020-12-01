import styles from "./header.module.css";
import Button from "../common/Button";
export default () => {
  return (
    <section className={styles.container}>
      <div className={styles.about}>
        <h1 className={styles.title}>
          Lorem ipsum dolor sit amet adipisicing elit.
        </h1>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          blanditiis voluptas nemo excepturi saepe quo omnis ipsam nobis,
          placeat deserunt.
        </p>
        <Button />
      </div>
      <img src="./flowers.svg" alt="flower" className={styles.image} />
    </section>
  );
};
