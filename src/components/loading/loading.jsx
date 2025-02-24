import styles from "./loading.module.css";
import Image from "next/image";

export default function Loading() {
  return (
    <div className={styles.contLoading}>
      <Image
        src="/logo-goskating.png"
        alt="logo-goskating"
        width={300}
        height={90}
      />
      <div className={styles.loader}></div>
    </div>
  );
}
