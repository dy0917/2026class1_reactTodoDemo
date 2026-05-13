import Link from "next/link";
import styles from "../../page.module.css";

// Save as page.jsx in app/about
export default function About() {
  return (
      <main className={styles.main}>
        <div className="About">
          <h1>me</h1>
          <p>
            This is the me page. Nothing to see, go{" "}
            <Link href="/">home</Link>.
          </p>
        </div>
      </main>
  );
}
