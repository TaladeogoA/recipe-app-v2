import Loading from "@/components/loading";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import CategoryStyles from "./category.module.scss";
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({ subsets: ["latin"], weight: "500" });
import { categories } from "@/data/constants";
import RecipeCard from "@/components/recipe-card";
import CategoriesNav from "@/components/categories-nav";

const Category = () => {
  const router = useRouter();
  const { category } = router.query;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["category", category],
    queryFn: async () => {
      const res = await fetch(`
      ${process.env.NEXT_PUBLIC_API_URL}/filter.php?c=${category}`);
      return res.json();
    },
    enabled: !!category,
  });

  const currentCategory = categories.find(({ value }) => value === category);
  if (isError || !currentCategory) {
    return <div>Error</div>;
  }

  return (
    <div className={CategoryStyles.container}>
      <CategoriesNav currentCategory={category as string} />
      <div
        className={CategoryStyles.hero}
        style={{
          backgroundImage: `url(${currentCategory.hero.src})`,
        }}
      >
        <div className={CategoryStyles.heroContent}>
          <div>
            <h1 className={urbanist.className}>
              {currentCategory.name} Recipes
            </h1>
            <p>{currentCategory.description}</p>
          </div>
        </div>
      </div>
      <div>
        {isLoading && <Loading />}
        {data && data.meals && data.meals.length > 0 && (
          <div className={CategoryStyles.recipesGrid}>
            {data?.meals.map((meal: any) => (
              <RecipeCard key={meal.idMeal} mealId={meal.idMeal} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
