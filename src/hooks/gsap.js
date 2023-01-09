import gsap from "gsap";
import { useEffect } from "react";

// animation for link reveal
export const useLinkDownward = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: -500,
      },
      {
        y: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2,
      }
    );
  }, [arr]);
};

// animation for line reveal
export const useLineForward = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        width: 0,
      },
      {
        width: "100%",
        duration: 2,
        delay: 1,
        ease: "power4.out",
        stagger: 0.2,
      }
    );
  }, [arr]);
};

// animation for text reveal
export const useTextUpward = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 1,
        delay: 1,
        ease: "power4.out",
        stagger: 0.2,
      }
    );
  }, [arr]);
};

// animation for box reveal
export const useBoxScaling = (arr) => {
  useEffect(() => {
    const el = arr.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 1,
        delay: 2,
        ease: "power4.out",
        stagger: 0.2,
      }
    );
  }, [arr]);
};
