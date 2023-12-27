import { NextPage } from "next";
import { ReactNode } from "react";
import { Raleway } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import layoutStyles from "./layout.module.scss";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const raleway = Raleway({ subsets: ["latin"] });

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
      <div className={`${layoutStyles.container} ${raleway.className}`}>
        <div className={layoutStyles.sidebar}>
          <div className={layoutStyles.logo}>
            <Image src={Logo} alt="app logo" />
          </div>
          <nav>
            <ul>
              <Link href="/">
                <li>Home</li>
              </Link>
              <Link href="/recipes">
                <li>Recipes</li>
              </Link>
              <Link href="#">
                <li>Articles</li>
              </Link>
              <Link href="#">
                <li>Newsletter</li>
              </Link>
              <Link href="#">
                <li>About</li>
              </Link>
            </ul>
          </nav>

          <div className={layoutStyles.socials}>
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
        <main className={layoutStyles.main}>{children}</main>
      </div>
    </>
  );
};

export default GeneralLayout;
