import AboutStyles from "./about.module.scss";

const About = () => {
  return (
    <div className={AboutStyles.container}>
      <div className={AboutStyles.heroContent}>
        <h1>More Than Recipes: Predicting the Future of Food</h1>
        <p>
          At Forkcasted, we're not just cooks; we're chefs of the future. Our
          innovative approach to cuisine is driven by a passion for culinary
          artistry and a commitment to pushing the boundaries of what's
          possible.
        </p>
        <button>About Us</button>
      </div>

      <div className={AboutStyles.aboutContent}>
        <h2>Founder's Story</h2>
        <p>
          Nnamdi Okoye, a passionate foodie from Lagos, Nigeria, has always been
          drawn to the vibrant and diverse culinary scene of his hometown.
          Growing up, he spent countless hours in his grandmother's kitchen,
          learning traditional Nigerian recipes and discovering the joy of
          cooking. As Nnamdi grew older, his interest in food expanded beyond
          his local cuisine. He became fascinated by the global food landscape,
          from the spicy flavors of Southeast Asia to the comforting dishes of
          Europe. He started experimenting with different ingredients and
          techniques, creating his own unique fusion dishes. Inspired by his
          love of food and his desire to share his culinary adventures, Nnamdi
          founded Forkcasted. He envisioned a platform that would not only
          provide delicious recipes but also help people discover the latest
          food trends and connect with like-minded foodies.
        </p>
      </div>

      <div className={AboutStyles.aboutContent}>
        <h2>How Forkcasted Works</h2>
        <p>
          At Forkcasted, we believe that data can predict the future of food.
          Our advanced algorithms analyze a vast array of information,
          including:
          <ul>
            <li>
              Social media trends: We monitor popular platforms like Instagram,
              TikTok, and Pinterest to identify emerging food trends and
              hashtags.
            </li>
            <li>
              Search engine data: We analyze search engine queries to determine
              the most popular foods and cooking techniques.
            </li>
            <li>
              Seasonal availability: We consider the availability of ingredients
              throughout the year to predict seasonal trends.
            </li>
            <li>
              Food blogs and reviews: We analyze food blogs and reviews to gauge
              public sentiment and preferences.
            </li>
          </ul>
          By combining these data points, we can accurately forecast which
          recipes and ingredients will be trending in the coming months. Our
          goal is to provide you with the most up-to-date information so you can
          stay ahead of the culinary curve.
        </p>
      </div>

      <div className={AboutStyles.testimonials}>
        <h2>What Our Readers Say</h2>
        <div>
          <p>"A Foodie's Dream"</p>

          <p>
            "Forkcasted has completely changed the way I approach cooking. The
            trend predictions are spot-on, and I've discovered so many new and
            delicious recipes."
          </p>
          <p>By Alex Carter</p>
        </div>

        <div>
          <p>"The Future of Food"</p>
          <p>
            "I love how Forkcasted uses data to predict the next big food
            trends. It&apos;s like having a culinary crystal ball!"
          </p>
          <p>By Sarah Thompson</p>
        </div>

        <div>
          <p>"A Culinary Adventure"</p>
          <p>
            "Forkcasted has opened up a whole new world of cooking for me. The
            recipes are delicious, and the trend predictions are always
            exciting."
          </p>
          <p>By Michael Nguyen</p>
        </div>

        <div>
          <p>"A Game-Changer"</p>
          <p>
            "Forkcasted is a game-changer for anyone who loves food. The trend
            predictions are so accurate, and the recipes are delicious. I
            can&apos;t imagine cooking without it now!"
          </p>
          <p>By Emily Kim</p>
        </div>
      </div>
    </div>
  );
};

export default About;
