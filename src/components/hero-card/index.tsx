import CardStyles from "./card.module.scss";

const HeroCard = ({ recipe }: any) => {
  return (
    <div className={CardStyles.container}>
      {/* <img src={recipe.image} alt={recipe.name} /> */}
      <div className={CardStyles.content}>
        <h1>{recipe.name}</h1>
        <p>{recipe.description}</p>
      </div>
    </div>
  );
};

export default HeroCard;
