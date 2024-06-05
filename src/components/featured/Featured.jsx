import Image from "next/image";
import styles from "./featured.module.css";

export default function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, mahdi-falahati here!</b> dis Discover my stories and creative
        ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={"/p1.jpeg"} alt="" fill />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.posTitle}>
            lAute ad amet mollit amet voluptate deserunt dolore esse quis.
          </h1>
          <p className={styles.postDesc}>
            Ut elit ipsum aliqua incididunt ex ullamco sunt labore. Sit tempor
            commodo mollit velit culpa. Cupidatat irure deserunt esse cupidatat
            cillum reprehenderit id ex duis cupidatat cupidatat duis. Et labore
            occaecat in Lorem. Aliqua ad proident veniam aute esse cupidatat id
            anim est.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
}
