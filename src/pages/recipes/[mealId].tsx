import Loading from "@/components/loading";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import RecipeStyles from "./single-recipe.module.scss";
import Image from "next/image";
import CategoriesNav from "@/components/categories-nav";

const SingleRecipe = () => {
  const router = useRouter();
  const { mealId } = router.query;

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

  return (
    <div className={RecipeStyles.container}>
      <CategoriesNav currentCategory={recipe.strCategory.toLowerCase()} />
      <div className={RecipeStyles.hero}>
        <Image
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          width={100}
          height={100}
        />
        <div>
          <p>
            {recipe.strArea} | {recipe.strCategory}
          </p>
          <h1>{recipe.strMeal}</h1>
        </div>
        C
      </div>
      <div className={RecipeStyles.ingredients}>
        <h2>Ingredients</h2>
        <ul>
          {Object.keys(recipe)
            .filter((key) => key.includes("strIngredient") && recipe[key])
            .map((key) => (
              <li key={key}>{recipe[key]}</li>
            ))}
        </ul>
      </div>
      <div className={RecipeStyles.instructions}>
        <h2>Instructions</h2>
        <p>{recipe.strInstructions}</p>
      </div>
    </div>
  );
};

export default SingleRecipe;
