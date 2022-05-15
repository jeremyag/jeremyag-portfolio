import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypingEffect = ({ text, listText }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextValue, setCurrentTextValue] = useState("");
  const waitTimeSeconds = 250;
  const waitResetTime = 3000;
  const waitResetErrorTime = 100;

  useEffect(() => {
    setTimeout(() => {
      setCurrentWordIndex(0);
      setCurrentTextValue(listText[0][0]);
    }, waitTimeSeconds);
  }, []);

  useEffect(() => {
    const reset = (waitTime) => {
      setTimeout(() => {
        setCurrentIndex(0);
        setCurrentTextValue("");
      }, waitTime);
    };

    const currentWord = listText[currentWordIndex];
    if (!currentWord.includes(currentTextValue)) {
      reset(waitResetErrorTime);
      return;
    }

    if (currentWord.length <= currentTextValue.length) {
      if (currentWordIndex < listText.length - 1) {
        setCurrentWordIndex(currentWordIndex + 1);
      } else {
        setCurrentWordIndex(0);
      }
      reset(waitResetTime);
      return;
    }

    setTimeout(() => {
      const currentLetter = listText[currentWordIndex][currentIndex];
      if (currentLetter === undefined) {
        reset(waitResetErrorTime);
      }
      setCurrentTextValue(currentTextValue + currentLetter);
    }, waitTimeSeconds);
    setCurrentIndex(currentIndex + 1);
  }, [currentTextValue]);

  return (
    <>
      <span className="text-secondary">{currentTextValue}</span>
      <motion.span
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        |
      </motion.span>
    </>
  );
};

export default TypingEffect;
