import React from 'react';
import useMemeGenerator from '../hooks/useMemeGenerator';
import Image from 'next/image'
import Head from 'next/head';
const Home: React.FC = () => {
  const { randomMeme, generateRandomMeme } = useMemeGenerator();

  return (
    <>
    <Head>
        <title>Meme template generator - Mishat</title>
       </Head>
    <div className="min-h-screen flex items-center px-6 justify-center bg-gray-800">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Meme Template Generator</h1>
        <div className='max-w-4xl flex items-center justify-center'>        
        {randomMeme && (
          <Image
            src={randomMeme.url}
            alt="Generated meme"
            className="mb-4"
            width={randomMeme.width}
            height={randomMeme.height}
          />
        )}
        </div>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={generateRandomMeme}
        >
          Generate Meme
        </button>
      </div>
    </div>
    </>
  );
};

export default Home;
