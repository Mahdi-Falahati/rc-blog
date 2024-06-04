"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { toggle, theme } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <Image
        src="/moon.png"
        alt=""
        height={14}
        width={14}
        style={{ marginLeft: 2 }}
      />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 2, background: "#0f172a" }
            : { right: 2, background: "#fff" }
        }
      ></div>
      <Image
        src="/sun.png"
        alt=""
        height={14}
        width={14}
        style={{ marginRight: 2 }}
      />
    </div>
  );
}
