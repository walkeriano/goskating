import styles from "./animationHero.module.css";
import Image from "next/image";

export default function AnimationHero() {
  return (
    <section className={styles.sliderVertical}>
      <div className={styles.boxImgVertical}>
        <Image src="/hero-img-two.jpg" alt="img-card" fill={true} />
      </div>
      <div className={styles.boxImgVertical}>
        <Image src="/card-kids.jpg" alt="img-card" fill={true} />
      </div>
      <div className={styles.boxImgVertical}>
        <Image src="/hero-img-one.jpg" alt="img-card" fill={true} />
      </div>
      <div className={styles.boxImgVertical}>
        <Image src="/hero-img-tre.jpg" alt="img-card" fill={true} />
      </div>
    </section>
  );
}
