import FeaturedRecipeCard from "@/components/featured-recipe-card";
import RecipesStyles from "./recipes.module.scss";
import { useQuery } from "@tanstack/react-query";

const Recipes = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["featured"],
    queryFn: async () => {
      const res = await fetch(`
      ${process.env.NEXT_PUBLIC_API_URL}/lookup.php?i=52812`);
      return res.json();
    },
  });
  console.log("data", data);
  const recipe = data?.meals[0];

  return (
    <div className={RecipesStyles.container}>
      {/* <div className={RecipesStyles.hero}>
        <h1>All Recipes</h1>
        <p>
          Explore a wide range of recipes, from classic comfort foods to exotic
          cuisines.
        </p>
      </div> */}

      <div className={RecipesStyles.featured}>
        <div className={RecipesStyles.hero}>
          <h2>Recipe of the Day</h2>
          <p>
            Explore a wide range of recipes, from classic comfort foods to
            exotic cuisines.
          </p>
        </div>
        <FeaturedRecipeCard recipe={recipe} isLoading={isLoading} />
      </div>

      <div>
        <h3>Filter by Category</h3>
        <div>
          <p>All</p>
          <p>Breakfast</p>
          <p>Lunch</p>
          <p>Dinner</p>
          <p>Dessert</p>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
