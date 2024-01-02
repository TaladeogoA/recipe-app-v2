import HeroCard from "@/components/hero-card";
import HomeStyles from "../styles/Home.module.scss";
import Chicken from "../assets/images/chicken.webp";
import Breakfast from "../assets/images/breakfast.webp";
import Pasta from "../assets/images/pasta.webp";
import Vegan from "../assets/images/vegan.jpg";
import Sides from "../assets/images/sides.webp";
import Beef from "../assets/images/beef.webp";
import Image from "next/image";
import { Urbanist } from "next/font/google";
import Link from "next/link";

const urbanist = Urbanist({ subsets: ["latin"], weight: "500" });

export default function Home() {
  return (
    <>
      <div className={HomeStyles.hero}>
        <video className={HomeStyles.video} autoPlay muted loop>
          <source src="/assets/videos/food-video.mp4" type="video/mp4" />
        </video>
        <div className={HomeStyles.overlay}></div>

        <div className={HomeStyles.heroContent}>
          <h1 className={urbanist.className}>
            Recipes That Speak <br />
            to Your Taste Buds.
          </h1>

          {/* Search bar */}
          <div className={HomeStyles.searchBar}>
            <input type="text" placeholder="Search for recipes" />
            {/* <button>Search</button> */}
          </div>

          <div className={HomeStyles.categories}>
            <Link href="/recipes/category/breakfast">
              <div className={HomeStyles.categoryWrapper}>
                <div>
                  <Image src={Breakfast} alt="Breakfast" />
                </div>
                <p>Breakfast</p>
              </div>
            </Link>

            <Link href="/recipes/category/pasta">
              <div className={HomeStyles.categoryWrapper}>
                <div>
                  <Image src={Pasta} alt="Pasta" />
                </div>
                <p>Pasta</p>
              </div>
            </Link>

            <Link href="/recipes/category/vegan">
              <div className={HomeStyles.categoryWrapper}>
                <div>
                  <Image src={Vegan} alt="Vegan" />
                </div>
                <p>Vegan</p>
              </div>
            </Link>

            <Link href="/recipes/category/side">
              <div className={HomeStyles.categoryWrapper}>
                <div>
                  <Image src={Sides} alt="Sides" />
                </div>
                <p>Sides</p>
              </div>
            </Link>

            <Link href="/recipes/category/chicken">
              <div className={HomeStyles.categoryWrapper}>
                <div>
                  <Image src={Chicken} alt="Chicken" />
                </div>
                <p>Chicken</p>
              </div>
            </Link>

            <Link href="/recipes/category/beef">
              <div className={HomeStyles.categoryWrapper}>
                <div>
                  <Image src={Beef} alt="Beef" />
                </div>
                <p>Beef</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
