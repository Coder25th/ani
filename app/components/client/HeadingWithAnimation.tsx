// app/components/HeadingWithAnimation.js
"use client";

import { useEffect } from "react";
import headingAnimation from "../../utils/headingAnimation";
import Heading from "@/app/components/final/Heading";

const HeadingWithAnimation = () => {
  useEffect(() => {
    const cleanup = headingAnimation(); // Initialize animations
    return () => {
      if (cleanup) cleanup(); // Cleanup animations on unmount
    };
  }, []);

  return <Heading />;
};

export default HeadingWithAnimation;
