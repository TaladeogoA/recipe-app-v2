import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import RecipeStyles from "./recipe-card.module.scss";
import Loading from "../loading";
import { Fragment } from "react";
import { IoTimeOutline } from "react-icons/io5";
import Link from "next/link";

const RecipeCard = ({ mealId }: { mealId: string }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["recipe", mealId],
    queryFn: async () => {
      const res = await fetch(`
      ${process.env.NEXT_PUBLIC_API_URL}/lookup.php?i=${mealId}`);
      return res.json();
    },
    enabled: !!mealId,
  });

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div>Error</div>;
  }

  const recipe = data?.meals[0];
  console.log(recipe);

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    if (ingredient) {
      ingredients.push(ingredient);
    }
  }

  const extraIngredients = Math.max(0, ingredients.length - 5);

  return (
    <Link href={`/recipes/${recipe?.idMeal}`} passHref>
      <div className={RecipeStyles.container}>
        <span className={RecipeStyles.timeTag}>
          <IoTimeOutline />
          {Math.floor(Math.random() * 20) + 30} mins
        </span>
        <Image
          src={recipe?.strMealThumb}
          alt={recipe?.strMeal}
          width={100}
          height={100}
        />
        <div className={RecipeStyles.details}>
          <p className={RecipeStyles.title}>{recipe?.strMeal}</p>
          <div className={RecipeStyles.tags}>
            {recipe?.strTags ? (
              recipe?.strTags
                .split(",")
                .map((tag: any, index: number, array: any[]) => (
                  <Fragment key={tag}>
                    <span className={RecipeStyles.tag}>{tag}</span>

                    {index !== array.length - 1 && <span>•</span>}
                  </Fragment>
                ))
            ) : (
              <>
                <span className={RecipeStyles.tag}>General</span>
                <span>•</span>
                <span className={RecipeStyles.tag}>Classic</span>
              </>
            )}
          </div>
        </div>
        <div className={RecipeStyles.overlay}>
          <p className="title">INGREDIENTS LIST</p>
          {ingredients.slice(0, 5).map((ingredient, index) => (
            <p key={index}>{ingredient}</p>
          ))}
          {extraIngredients > 0 && <p>And {extraIngredients} more...</p>}
          <p>See full recipe</p>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
