import Loading from "@/components/loading";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import RecipeStyles from "./single-recipe.module.scss";
import Image from "next/image";
import CategoriesNav from "@/components/categories-nav";
import { IoTimer } from "react-icons/io5";
import { GiSpoon } from "react-icons/gi";
import { IoIosHourglass } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import RecommendedCard from "@/components/recipe-card/recommended";

const SingleRecipe = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
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

  const category = data?.meals[0]?.strCategory;

  const {
    data: recommendedData,
    isLoading: recommendedisLoading,
    isError: recommendedIsError,
  } = useQuery({
    queryKey: ["category", category],
    queryFn: async () => {
      const res = await fetch(`
      ${process.env.NEXT_PUBLIC_API_URL}/filter.php?c=${category}`);
      return res.json();
    },
    enabled: !!category,
  });

  if (isLoading || !data || recommendedisLoading || !recommendedData) {
    return <Loading />;
  }

  const recipe = data?.meals[0];

  const formatInstructions = (instructions: string | undefined) => {
    if (!instructions) return [];
    return instructions
      .split("\r\n")
      .filter((instruction: string) => {
        const trimmedInstruction = instruction.trim();
        return (
          trimmedInstruction !== "" && !trimmedInstruction.startsWith("STEP")
        );
      })
      .map((instruction: string, index: number) => {
        const cleanedInstruction = instruction.replace(/^\d+\)\s*|^\d+\s/, "");
        return {
          number: index + 1,
          text: cleanedInstruction,
        };
      });
  };

  const generateShoppingList = () => {
    const uncheckedItems = Object.keys(recipe).filter(
      (key) =>
        key.includes("strIngredient") && recipe[key] && !checkedItems[key]
    );
    const shoppingList = uncheckedItems.map((key) => recipe[key]).join("\n");

    const blob = new Blob([shoppingList], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `${recipe?.strMeal}-shopping-list.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className={RecipeStyles.container}>
      <CategoriesNav currentCategory={recipe?.strCategory?.toLowerCase()} />
      <div className={RecipeStyles.hero}>
        <Image
          src={recipe?.strMealThumb}
          alt={recipe?.strMeal}
          width={100}
          height={100}
        />
        <div className={RecipeStyles.heroContent}>
          <div className={RecipeStyles.tags}>
            <span>{recipe?.strArea}</span>
            <span>•</span>
            <span>{recipe?.strCategory}</span>
          </div>
          <h1>{recipe?.strMeal}</h1>
          <div className={RecipeStyles.stats}>
            <div>
              <IoTimer />
              <span>{Math.floor(Math.random() * 20) + 8} minutes to prep</span>
            </div>
            <div>
              <GiSpoon />
              <span>Serves {Math.floor(Math.random() * 5) + 1} portions</span>
            </div>
            <div>
              <IoIosHourglass />
              <span>
                Can be stored for {Math.floor(Math.random() * 2) + 1} day(s)
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={RecipeStyles.content}>
        <div className={RecipeStyles.ingredients}>
          <h2>Ingredients</h2>
          <ul>
            {Object.keys(recipe)
              .filter((key) => key.includes("strIngredient") && recipe[key])
              .map((key) => (
                <li key={key}>
                  <input
                    type="checkbox"
                    name={key}
                    id={key}
                    onChange={(e) => {
                      setCheckedItems({
                        ...checkedItems,
                        [key]: e.target.checked,
                      });
                    }}
                  />
                  <label htmlFor={key}>{recipe[key]}</label>
                </li>
              ))}
          </ul>

          <p>
            <strong>Tip: </strong>
            Select the ingredients you already have. You can then generate a
            shopping list of the ones you don&apos;t have!
          </p>
          <button onClick={generateShoppingList}>Generate shopping list</button>
        </div>
        <div className={RecipeStyles.instructions}>
          <h2>Instructions</h2>
          {formatInstructions(recipe?.strInstructions).map((instruction) => (
            <div key={instruction.number} className={RecipeStyles.instruction}>
              <div className={RecipeStyles.number}>
                Step {instruction.number}
              </div>
              <p className={RecipeStyles.text}>{instruction.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={RecipeStyles.recommended}>
        <div className={RecipeStyles.header}>
          <h2>You might also like</h2>
          <Link href="/recipes">
            <p>See more recipes</p>
            <RiArrowRightDoubleLine />
          </Link>
        </div>
        <div className={RecipeStyles.recipesGrid}>
          {recommendedData?.meals
            .filter((meal: any) => meal.idMeal !== mealId)
            .slice(0, 3)
            .map((meal: any) => (
              <RecommendedCard
                key={meal.idMeal}
                idMeal={meal.idMeal}
                strMealThumb={meal.strMealThumb}
                strMeal={meal.strMeal}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SingleRecipe;
