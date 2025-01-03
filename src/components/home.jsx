"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { AuroraBackground } from "../components/ui/aurora-background";

const useTypewriter = (text, speed = 50, delay = 0) => {
  const [displayText, setDisplayText] = useState("");
  
  useEffect(() => {
    let timeout;
    const startTyping = () => {
      let currentIndex = 0;
      const typeNextChar = () => {
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
          currentIndex++;
          timeout = setTimeout(typeNextChar, speed);
        }
      };
      timeout = setTimeout(typeNextChar, delay);
    };

    startTyping();
    return () => clearTimeout(timeout);
  }, [text, speed, delay]);

  return displayText;
};

export function AuroraBackgroundDemo() {
  const mainText = useTypewriter("Crafting Code, Breathing Innovation.", 50, 300);
  const subText = useTypewriter("Turning ideas into experiences, one line at a time.", 30, 2000);

  return (
    <AuroraBackground id = "home" className="aurora-demo">
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4">
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
          {mainText}
          <span className="animate-pulse">|</span>
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
          {subText}
        </div>
        <a
          href="#about"
          className="mt-6 inline-block px-6 py-3 text-lg font-medium bg-zinc-700 text-zinc-100 rounded-full shadow-md hover:shadow-lg hover:bg-zinc-600 transition-all duration-300"
        >
          Know More              
        </a>
      </motion.div>
    </AuroraBackground>
  );
}