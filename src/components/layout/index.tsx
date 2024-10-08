import { NextPage } from "next";
import { ReactNode, useState } from "react";
import { Raleway } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import layoutStyles from "./layout.module.scss";
import Image from "next/image";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useRouter } from "next/router";
import CookieIcon from "@/assets/icons/cookie.svg";
import Logo from "@/assets/images/logo.svg";

const raleway = Raleway({ subsets: ["latin"] });

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
      <div className={`${layoutStyles.container} ${raleway.className}`}>
        <div
          className={layoutStyles.cookieButton}
          onClick={() => setShowModal(true)}
        >
          <Image src={CookieIcon} width={35} height={35} alt="accept cookies" />
        </div>
        {showModal && (
          <div className={layoutStyles.modal}>
            <div className={layoutStyles.modalContent}>
              <h2>No Cookies Here! 🍪</h2>
              <p>
                Just me having a bit of fun! I drew that cute cookie SVG and
                thought it would be fun to add it to the site.
              </p>
              <button onClick={() => setShowModal(false)}>Ciao!</button>
            </div>
          </div>
        )}
        <div className={layoutStyles.sidebar}>
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
    <li className={activeRoute === href ? layoutStyles.active : undefined}>
      {text}
    </li>
  </Link>
);
