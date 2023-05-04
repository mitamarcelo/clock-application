import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import SevenSegment from "@/components/SevenSegment";
import Clock from "@/components/Clock";

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
        <h1>Welcome to the seven segments experiment!</h1>
        <div style={{ display: "flex" }}>
          <SevenSegment width={80} number={0} />
          <SevenSegment width={80} number={1} />
          <SevenSegment width={80} number={2} />
          <SevenSegment width={80} number={3} />
          <SevenSegment width={80} number={4} />
          <SevenSegment width={80} number={5} />
          <SevenSegment width={80} number={6} />
          <SevenSegment width={80} number={7} />
          <SevenSegment width={80} number={8} />
          <SevenSegment width={80} number={9} />
        </div>
        <h2>Time of Access: </h2>
        <Clock date={new Date()} />
        <h2>
          This project is a simple experiment to get clock functionalities using
          a seven segments design.
        </h2>
      </main>
    </>
  );
}
