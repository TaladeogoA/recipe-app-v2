import { NextPage } from "next";
import { ReactNode } from "react";
import { Raleway, Titillium_Web } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Head from "next/head";
import Link from "next/link";
import Fork from "@/assets/icons/fork";
import layoutStyles from "./layout.module.scss";

const raleway = Raleway({ subsets: ["latin"] });
const titillium = Titillium_Web({
  weight: "600",
  subsets: ["latin"],
});

type Children = {
  children: ReactNode;
};

const GeneralLayout: NextPage<Children> = ({ children }) => {
  return (
    <>
      <Head>
        <title>ForkCasted</title>
        <meta name="" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.main} ${raleway.className}`}>
        <header className={layoutStyles.header}>
          <div className={layoutStyles.logo}>
            <h1 className={titillium.className}>ForkCasted</h1>
            <Fork />
          </div>
          <nav>
            <ul>
              <Link href="/">
                <li>HOME</li>
              </Link>
              <Link href="/recipes">
                <li>RECIPES</li>
              </Link>
              <Link href="#">
                <li>ARTICLES</li>
              </Link>
              <Link href="#">
                <li>NEWSLETTER</li>
              </Link>
              <Link href="#">
                <li>ABOUT</li>
              </Link>
            </ul>
          </nav>
          <input type="text" placeholder="SEARCH..." />
        </header>
        <main className={layoutStyles.main}>{children}</main>
      </div>
    </>
  );
};

export default GeneralLayout;
