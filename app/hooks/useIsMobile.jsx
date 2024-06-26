"use client";

import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [width, setWidth] = useState(undefined);

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width <= 1023;
};

export default useIsMobile;
