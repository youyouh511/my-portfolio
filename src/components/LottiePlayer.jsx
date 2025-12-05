import React from "react";
import Lottie from "lottie-react";

const LottiePlayer = ({ src, className }) => {
    return <Lottie animationData={src} className={className} loop autoplay />;
};

export default LottiePlayer;
