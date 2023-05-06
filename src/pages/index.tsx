import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import SevenSegment from "@/components/SevenSegment";
import Link from "next/link";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Seven Segments Example</title>
        <meta name="description" content="Seven segments page example" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header />
        <h1>Welcome to the seven segments experiment!</h1>
        <div style={{ display: "flex" }}>
          <SevenSegment width={80} number={0} blink />
          <SevenSegment width={80} number={1} />
          <SevenSegment width={80} number={2} blink />
          <SevenSegment width={80} number={3} />
          <SevenSegment width={80} number={4} blink />
          <SevenSegment width={80} number={5} />
          <SevenSegment width={80} number={6} blink />
          <SevenSegment width={80} number={7} />
          <SevenSegment width={80} number={8} blink />
          <SevenSegment width={80} number={9} />
        </div>
        <h2>
          This project is a simple experiment to get clock functionalities using
          a seven segments design.
        </h2>
      </main>
    </>
  );
}
