import React from 'react';
import useMemeGenerator from '../hooks/useMemeGenerator';
import Image from 'next/image'

const Home: React.FC = () => {
  const { randomMeme, generateRandomMeme } = useMemeGenerator();

  return (
    <div className="min-h-screen flex items-center px-6 justify-center bg-gray-800">
      <div className="text-center">
        <h1 className="text-4xl mb-4">Developer Meme Generator</h1>
        {randomMeme && (
          <Image
            src={randomMeme.url}
            alt="Generated meme"
            className="mb-4"
            width={randomMeme.width}
            height={randomMeme.height}
          />
        )}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={generateRandomMeme}
        >
          Generate Meme
        </button>
      </div>
    </div>
  );
};

export default Home;
