import { useState, useEffect } from 'react';

interface Meme {
  url: string;
  width: number;
  height: number;
}

const useMemeGenerator = () => {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [randomMeme, setRandomMeme] = useState<Meme | null>(null);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        setMemes(memes);
      });
  }, []);

  const generateRandomMeme = () => {
    const randomIndex = Math.floor(Math.random() * memes.length);
    setRandomMeme(memes[randomIndex]);
  };

  return { randomMeme, generateRandomMeme };
};

export default useMemeGenerator;
