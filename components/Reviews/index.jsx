import styles from "./review.module.css";
export default () => {
  return (
    <div className={styles.container}>
      <h2>Articles</h2>
      <div className={styles.slider}>
        <SideTrack />
        <SideTrack />
      </div>
    </div>
  );
};

const SideTrack = () => {
  return (
    <div className={styles.slidertrack}>
      <Review />
      <Review />
      <Review />
      <Review />
      <Review />
      <Review />
    </div>
  );
};
const Review = () => {
  return (
    <div className={styles.slide}>
      <img src="./article.jpg" alt="" />
      <h2>Lorem ipsum dolor sit amet.</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing
        elit.Tenetur,quia!Tenetur, quia!Tenetur, quia!
      </p>
    </div>
  );
};
