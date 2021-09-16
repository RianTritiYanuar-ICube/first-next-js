import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Members | Home</title>
        <meta name="keywords" content="members" />
      </Head>
      <div>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
          ipsum dolor sit amet
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum
          dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem
          ipsum dolor sit amet
        </p>
        <Link href="/members">
          <a className={styles.btn}>See Member List</a>
        </Link>
      </div>
    </>
  );
}
