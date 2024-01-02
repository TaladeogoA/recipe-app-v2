import Loading from "@/components/loading";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import CategoryStyles from "./category.module.scss";
import Link from "next/link";
import { Urbanist } from "next/font/google";
const urbanist = Urbanist({ subsets: ["latin"], weight: "500" });
import { categories } from "@/data/constants";
import RecipeCard from "@/components/recipe-card";

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
      <div
        className={CategoryStyles.hero}
        style={{
          backgroundImage: `url(${currentCategory.hero.src})`,
        }}
      >
        <div className={CategoryStyles.heroContent}>
          <ul className={CategoryStyles.categoriesNav}>
            {categories.map(({ name, value }) => (
              <TabItem
                key={name}
                name={name}
                isActive={value === category}
                value={value}
              />
            ))}
          </ul>

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

const TabItem = ({
  name,
  isActive,
  value,
}: {
  name: string;
  isActive: boolean;
  value: string;
}) => (
  <Link href={`/categories/${value}`}>
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
        fontWeight: isActive ? "bold" : "normal",
      }}
    >
      <p>{name}</p>
      <div
        style={{
          height: "10px",
          width: "10px",
          borderRadius: "50%",
          backgroundColor: "#ff8a15",
          display: isActive ? "block" : "none",
        }}
      ></div>
    </li>
  </Link>
);
