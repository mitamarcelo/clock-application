import { useRouter } from "next/router";
import React from "react";
import styles from "@/styles/Home.module.scss";
import Link from "next/link";
import classNames from "classnames";

const Header = () => {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <Link href="/">
        <span
          className={classNames(styles.link, {
            [styles.activeLink]: router.pathname === "/",
          })}
        >
          Home
        </span>
      </Link>

      <Link href="/time-now">
        <span
          className={classNames(styles.link, {
            [styles.activeLink]: router.pathname === "/time-now",
          })}
        >
          Go to Clock
        </span>
      </Link>

      <Link href="/stop-watch">
        <span
          className={classNames(styles.link, {
            [styles.activeLink]: router.pathname === "/stop-watch",
          })}
        >
          Go to Stopwatch
        </span>
      </Link>

      <Link href="/countdown-timer">
        <span
          className={classNames(styles.link, {
            [styles.activeLink]: router.pathname === "/countdown-timer",
          })}
        >
          Go to Countdown
        </span>
      </Link>
    </div>
  );
};

export default Header;
