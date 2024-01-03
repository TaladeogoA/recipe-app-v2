import Link from "next/link";
import RecipeStyles from "./recipe-card.module.scss";
import { IoTimeOutline } from "react-icons/io5";
import Image from "next/image";

const RecommendedCard = ({
  idMeal,
  strMealThumb,
  strMeal,
}: {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
}) => {
  return (
    <Link href={`/recipes/${idMeal}`} passHref>
      <div
        className={RecipeStyles.container}
        style={{
          height: "20rem",
        }}
      >
        <span className={RecipeStyles.timeTag}>
          <IoTimeOutline />
          {Math.floor(Math.random() * 20) + 30} mins
        </span>
        <Image
          src={strMealThumb}
          alt={strMeal}
          width={100}
          height={100}
          style={{
            height: "85%",
          }}
        />
        <div className={RecipeStyles.details}>
          <p className={RecipeStyles.title}>{strMeal}</p>
        </div>
      </div>
    </Link>
  );
};

export default RecommendedCard;
