import { NextPage } from "next";
import { ReactNode } from "react";
import { Raleway } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import layoutStyles from "./layout.module.scss";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useRouter } from "next/router";

const raleway = Raleway({ subsets: ["latin"] });

type Children = {
  children: ReactNode;
};

const GeneralLayout: NextPage<Children> = ({ children }) => {
  const router = useRouter();
  const activeRoute = router.pathname;

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
              <NavLink href="/" text="Home" activeRoute={activeRoute} />
              <NavLink
                href="/recipes"
                text="Recipes"
                activeRoute={activeRoute}
              />
              <NavLink
                href="/articles"
                text="Articles"
                activeRoute={activeRoute}
              />
              <NavLink
                href="/newsletter"
                text="Newsletter"
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
