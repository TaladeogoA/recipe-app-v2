import Link from "next/link";
import CategoryStyles from "./categories-nav.module.scss";
import { categories } from "@/data/constants";

const CategoriesNav = ({ currentCategory }: { currentCategory: string }) => {
  return (
    <ul className={CategoryStyles.categoriesNav}>
      {categories.map(({ name, value }) => (
        <TabItem
          key={name}
          name={name}
          isActive={value === currentCategory}
          value={value}
        />
      ))}
    </ul>
  );
};

export default CategoriesNav;

const TabItem = ({
  name,
  isActive,
  value,
}: {
  name: string;
  isActive: boolean;
  value: string;
}) => (
  <Link href={`/recipes/category/${value}`}>
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
        fontWeight: isActive ? "700" : "400",
        color: isActive ? "#9E6332" : "#000",
      }}
    >
      <p>{name}</p>
    </li>
  </Link>
);
