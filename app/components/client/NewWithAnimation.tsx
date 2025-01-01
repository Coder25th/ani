"use client";
import { useEffect } from "react";
import newAnimation from "@/app/utils/newAnimation";
import New from "@/app/new/page";

const NewWithAnimation = () => {
  useEffect(() => {
    const cleanup = newAnimation();
    return () => {
      if (cleanup) cleanup();
    };
  }, []);
  return <New />;
};
export default NewWithAnimation;
