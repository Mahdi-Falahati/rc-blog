import Link from "next/link";

export default function AuthLinks() {
  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span style={{ cursor: "pointer" }}>Logout</span>
        </>
      )}
    </>
  );
}
