import Loading from "@/components/loading";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React from "react";

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

  return <div>SingleRecipe</div>;
};

export default SingleRecipe;
