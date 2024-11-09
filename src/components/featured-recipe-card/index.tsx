import FeaturedRecipeStyles from "./featured.module.scss";
import Image from "next/image";
import Jollof from "@/assets/images/jollof.jpeg";
import { Recipe } from "@/types";

const FeaturedRecipeCard = ({
  recipe,
  isLoading,
}: {
  recipe: Recipe;
  isLoading: boolean;
}) => {
  if (isLoading) return <p>Loading....</p>;

  return (
    <div className={FeaturedRecipeStyles.container}>
      <div className={FeaturedRecipeStyles.image}>
        <Image
          src={recipe?.strMealThumb}
          alt="Featured Recipe"
          width={20}
          height={20}
        />
      </div>
      <div className={FeaturedRecipeStyles.content}>
        <h3>Jollof Rice</h3>
        <p>
          Jollof Rice is a popular dish in West Africa, made with rice,
          tomatoes, onions, and spices.
        </p>
        <div>
          <div>
            <p>Prep Time</p>
            <p>20 mins</p>
          </div>
          <div>
            <p>Cook Time</p>
            <p>30 mins</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRecipeCard;
