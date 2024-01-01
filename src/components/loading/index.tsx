import LoadingStyles from "./loading.module.scss";
import { useEffect, useRef } from "react";
import Lottie from "lottie-web";

const Loading = () => {
  const container = useRef(null);
  useEffect(() => {
    let animation: any;
    if (container.current) {
      animation = Lottie.loadAnimation({
        animationData: require("../../assets/lotties/loading.json"),
        autoplay: true,
        container: container.current,
        loop: true,
        renderer: "svg",
      });
    }

    return () => {
      if (animation) {
        animation.destroy();
      }
    };
  }, []);

  return (
    <div className={LoadingStyles.container}>
      <div
        ref={container}
        id="animation-container"
        style={{ width: "100px", height: "100px" }}
      ></div>
    </div>
  );
};

export default Loading;
