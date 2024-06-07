import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

export default function Comments() {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="Write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Loging to write comments</Link>
      )}

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              width={50}
              height={50}
              alt=""
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Mahdi Falahati</span>
              <span className={styles.date}>10.10.2024</span>
            </div>
          </div>
          <p className={styles.desc}>
            Aliquip esse dolor cillum qui ea occaecat. Ullamco deserunt id
            occaecat anim exercitation non. Occaecat ut id veniam aliquip
            incididunt exercitation veniam nostrud eiusmod excepteur pariatur
            exercitation. Laborum ut aliqua ex aliqua anim occaecat.
          </p>
        </div>
      </div>
    </div>
  );
}
