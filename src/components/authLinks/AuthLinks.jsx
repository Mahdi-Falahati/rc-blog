"use client";

import { signOut } from "next-auth/react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { useState } from "react";

export default function AuthLinks() {
  const [open, setOpen] = useState(false);
  const status = "notauthenticated";

  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span style={{ cursor: "pointer" }} onClick={signOut}>
            Logout
          </span>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span style={{ cursor: "pointer" }}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
}
