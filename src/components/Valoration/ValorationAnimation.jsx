import Feedback from "../../assets/feedback.json";
import Lottie from "react-lottie";

export default function ValorationAnimation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Feedback,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return  (
      <Lottie options={defaultOptions}  />

  ) 
}

