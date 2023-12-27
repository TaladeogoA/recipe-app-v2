import HeroCard from "@/components/hero-card";
import HomeStyles from "../styles/Home.module.scss";
import Chicken from "../assets/images/chicken.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className={HomeStyles.hero}>
        <video className={HomeStyles.video} autoPlay muted loop>
          <source src="/assets/videos/food-video.mp4" type="video/mp4" />
        </video>

        <div className={HomeStyles.heroContent}>
          <h1>Recipes That Speak to Your Taste Buds</h1>
          <p>
            Indulge in a world of flavors with our carefully crafted recipes.
          </p>
        </div>
      </div>

      <div className={HomeStyles.mainContent}>
        <div className={HomeStyles.categories}>
          <div className={HomeStyles.categoryWrapper}>
            <div>
              <Image src={Chicken} alt="Chicken" />
            </div>
            <p>Breakfast</p>
          </div>
          <div className={HomeStyles.categoryWrapper}>
            <div>
              <Image src={Chicken} alt="Chicken" />
            </div>
            <p>Pasta</p>
          </div>
          <div className={HomeStyles.categoryWrapper}>
            <div>
              <Image src={Chicken} alt="Chicken" />
            </div>
            <p>Vegetarian</p>
          </div>
          <div className={HomeStyles.categoryWrapper}>
            <div>
              <Image src={Chicken} alt="Chicken" />
            </div>
            <p>Dessert</p>
          </div>
          <div className={HomeStyles.categoryWrapper}>
            <div>
              <Image src={Chicken} alt="Chicken" />
            </div>
            <p>Starters</p>
          </div>
        </div>
      </div>
    </>
  );
}
