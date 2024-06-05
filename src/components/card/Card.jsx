import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

export default function Card() {
  return (
    <div className={styles.container}>
      <section className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </section>
      <section className={styles.textContainer}>
        <section className={styles.detail}>
          <span className={styles.date}>11.02.2023</span>
          <span className={styles.dash}>-</span>
          <span className={styles.category}>CLUTURE</span>
        </section>
        <Link href="/">
          <h3>Deserunt dolor aliquip duis quis nisi commodo.</h3>
        </Link>
        <p className={styles.desc}>
          Duis fugiat nisi ut enim non enim fugiat ex fugiat veniam aliquip
          ullamco fugiat incididunt. Cupidatat Lorem pariatur fugiat pariatur
          fugiat cupidatat officia Lorem quis id labore laborum. Aliquip velit
          irure tempor labore nulla cillum duis dolore.
        </p>
        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </section>
    </div>
  );
}
