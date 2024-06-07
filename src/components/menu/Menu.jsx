import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";

export default function Menu() {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt=""
              height={60}
              width={60}
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>
              Non exercitation veniam consequat dolor.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Mahdi Falahati</span>
              <span className={styles.dash}>-</span>
              <span className={styles.date}>10.03.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt=""
              height={60}
              width={60}
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.culture}`}>
              Culture
            </span>
            <h3 className={styles.postTitle}>
              Non exercitation veniam consequat dolor.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Mahdi Falahati</span>
              <span className={styles.dash}>-</span>
              <span className={styles.date}>10.03.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt=""
              height={60}
              width={60}
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>Food</span>
            <h3 className={styles.postTitle}>
              Non exercitation veniam consequat dolor.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Mahdi Falahati</span>
              <span className={styles.dash}>-</span>
              <span className={styles.date}>10.03.2024</span>
            </div>
          </div>
        </Link>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image
              src="/p1.jpeg"
              alt=""
              height={60}
              width={60}
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              Fashion
            </span>
            <h3 className={styles.postTitle}>
              Non exercitation veniam consequat dolor.
            </h3>
            <div className={styles.detail}>
              <span className={styles.username}>Mahdi Falahati</span>
              <span className={styles.dash}>-</span>
              <span className={styles.date}>10.03.2024</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
