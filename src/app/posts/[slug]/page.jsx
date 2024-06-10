import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

export default function SinglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Irure ea sunt sunt tempor dolor magna fugiat ut sunt ut excepteur
            elit aliqua sit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Mahdi Falahati</span>
              <span className={styles.date}>10.03.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Ut velit magna qui esse. Laboris sit sit irure exercitation ipsum
              aliqua esse non occaecat id ut dolore. Adipisicing proident
              laborum adipisicing ullamco nulla magna consequat officia. Ea
              aliqua aliquip qui do ex labore magna nulla in labore irure
            </p>
            <h2>Aliqua consectetur adipisicing</h2>
            <p>
              Ut velit magna qui esse. Laboris sit sit irure exercitation ipsum
              aliqua esse non occaecat id ut dolore. Adipisicing proident
              laborum adipisicing ullamco nulla magna consequat officia. Ea
            </p>
            <p>
              Ut velit magna qui esse. Laboris sit sit irure exercitation ipsum
              aliqua esse non occaecat id ut dolore. Adipisicing proident
              laborum adipisicing ullamco nulla magna consequat officia. Ea
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}
