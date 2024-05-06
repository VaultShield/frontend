import { useState } from 'react';

export const useSeedWords = () => {
  const [showWords, setShowWords] = useState(false);
  const [seedWords, setSeedsWords] = useState<string[]>([]);
  const handleSeedWords = () => {
    setShowWords(!showWords);
  };
  const handleAddWords = (words: string[]) => {
    setSeedsWords(words);
  };

  return {
    handleSeedWords,
    showWords,
    seedWords,
    handleAddWords
  };
};
