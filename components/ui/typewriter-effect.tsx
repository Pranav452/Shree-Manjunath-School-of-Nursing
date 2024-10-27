"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const TypewriterEffect = ({
  words,
  className,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (isInView && currentWordIndex < words.length) {
      const word = words[currentWordIndex].text;
      let currentIndex = 0;

      const typingInterval = setInterval(() => {
        if (currentIndex <= word.length) {
          setDisplayedText(word.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          if (currentWordIndex === words.length - 1) {
            setIsTypingComplete(true);
          } else {
            setTimeout(() => {
              setCurrentWordIndex(currentWordIndex + 1);
            }, 1000);
          }
        }
      }, 200);

      return () => clearInterval(typingInterval);
    }
  }, [isInView, currentWordIndex, words]);

  const renderWords = () => {
    return (
      <motion.div ref={ref} className="inline">
        <div className={cn("inline-block", words[currentWordIndex]?.className)}>
          {displayedText}
          {isTypingComplete && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 0.2 }}
              className="inline-block w-[3px] h-[1em] bg-white ml-1 align-middle"
            />
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="font-bold text-center">{renderWords()}</div>
    </div>
  );
};
