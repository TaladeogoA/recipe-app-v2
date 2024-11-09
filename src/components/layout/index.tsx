import { NextPage } from "next";
import { ReactNode, useState } from "react";
import { Raleway, Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import layoutStyles from "./layout.module.scss";
import Image from "next/image";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useRouter } from "next/router";
import CookieIcon from "@/assets/icons/cookie.svg";
import Logo from "@/assets/images/logo.svg";

const raleway = Raleway({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

type Children = {
  children: ReactNode;
};

const GeneralLayout: NextPage<Children> = ({ children }) => {
  const router = useRouter();
  const activeRoute = router.pathname;

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Head>
        <title>ForkCasted</title>
        <meta name="" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${layoutStyles.container} ${inter.className}`}>
        {/* <div className={layoutStyles.sidebar}>
          <div className={layoutStyles.logo}>
            <Image src={Logo} alt="app logo" />
          </div>
          <nav>
            <ul>
              <NavLink href="/" text="Home" activeRoute={activeRoute} />
              <NavLink
                href="/recipes"
                text="Recipes"
                activeRoute={activeRoute}
              />
              <NavLink href="/about" text="About" activeRoute={activeRoute} />
            </ul>
          </nav>

          <div className={layoutStyles.socials}>
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div> */}
        <div className={layoutStyles.navbar}>
          <div className={layoutStyles.navContainer}>
            <div className={layoutStyles.logo}>
              <Image src={Logo} alt="app logo" />
              <p>forkcasted</p>
            </div>

            <nav className={layoutStyles.navItems}>
              <ul>
                <NavLink href="/" text="home" activeRoute={activeRoute} />
                <NavLink
                  href="/recipes"
                  text="recipes"
                  activeRoute={activeRoute}
                />
                <NavLink href="/about" text="about" activeRoute={activeRoute} />
              </ul>
            </nav>
          </div>

          <div className={layoutStyles.searchContainer}>
            <input type="text" placeholder="Search for recipes" />
            <button>Search</button>
          </div>
        </div>
        <main className={layoutStyles.main}>{children}</main>
      </div>
    </>
  );
};

export default GeneralLayout;

const NavLink = ({
  href,
  text,
  activeRoute,
}: {
  href: string;
  text: string;
  activeRoute: string;
}) => (
  <Link href={href}>
    <li>{text}</li>
  </Link>
);
