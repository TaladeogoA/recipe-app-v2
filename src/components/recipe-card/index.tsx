import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import RecipeStyles from "./recipe-card.module.scss";
import Loading from "../loading";

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

  // Determine the number of extra ingredients
  const extraIngredients = Math.max(0, ingredients.length - 5);

  return (
    <div className={RecipeStyles.container}>
      <Image
        src={recipe?.strMealThumb}
        alt={recipe?.strMeal}
        width={100}
        height={100}
      />
      <div className={RecipeStyles.details}>
        <p className={RecipeStyles.title}>{recipe?.strMeal}</p>
        <div className={RecipeStyles.tags}>
          {recipe?.strTags
            ? recipe?.strTags.split(",").map((tag: any) => (
                <span key={tag} className={RecipeStyles.tag}>
                  {tag}
                </span>
              ))
            : null}
        </div>
      </div>
      <div className={RecipeStyles.overlay}>
        {ingredients.slice(0, 5).map((ingredient, index) => (
          <p key={index}>{ingredient}</p>
        ))}
        {extraIngredients > 0 && <p>And {extraIngredients} more...</p>}
      </div>
    </div>
  );
};

export default RecipeCard;
