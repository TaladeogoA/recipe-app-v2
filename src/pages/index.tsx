import HomeStyles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <video className={HomeStyles.video} autoPlay muted loop>
        <source src="/assets/videos/food-video.mp4" type="video/mp4" />
      </video>

      <div className={HomeStyles.content}>
        <h1>Food</h1>
        <p>Discover the best food in the world</p>
      </div>
    </div>
  );
}
