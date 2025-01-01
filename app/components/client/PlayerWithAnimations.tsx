"use client"; // Enables client-side rendering

import { useEffect } from "react";
import initPlayerAnimations from "../../utils/initPlayerAnimations";
import Player from "../final/Player";

const PlayerWithAnimations = () => {
  useEffect(() => {
    const cleanup = initPlayerAnimations(); // Initialize animations
    return () => {
      if (cleanup) cleanup(); // Cleanup animations
    };
  }, []);

  return <Player />;
};

export default PlayerWithAnimations;
