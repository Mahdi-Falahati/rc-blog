"use client";

import Image from "next/image";
import { useState } from "react";
import ReactQuill from "react-quill";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import "react-quill/dist/quill.bubble.css";
import styles from "./writePage.module.css";

export default function WritePage() {
  const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <input type="text" placeholder="Title" className={styles.input} />
      <select className={styles.select}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="culture">culture</option>
        <option value="travel">travel</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input type="file" id="image" style={{ display: "none" }} />
            <button className={styles.addButton} title="image">
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
            <button className={styles.addButton} title="external">
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton} title="video">
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        <ReactQuill
          className={styles.textArea}
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  );
}
