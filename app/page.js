import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  return (
    <main className={styles.page}>
      <div className={styles.banner}>
        <h1>Level up your crypto portfolio</h1>
      </div>
    </main>
  );
}