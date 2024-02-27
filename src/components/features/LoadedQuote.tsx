import React, { useEffect, useState } from 'react';
import { Container } from '../container';
import {Quote} from '../molicules/quote';
import quotesArray from '../../assets/data/quotes.json';
  
interface Quote {
    quote: string;
    author: string;
    source: string;
  }
  
const LoadedQuote: React.FC= () => {
  const [quote, setQuote] = useState<Quote | null>(null);
  

  useEffect(() => {
    const quotes: Quote[] = quotesArray;
    const randomNumber: number = Math.floor(Math.random() * quotes.length);

    // Retrieve the current index from localStorage or set it to a random value if it doesn't exist
    let currentIndex: number = parseInt(localStorage.getItem('quoteIndex') || randomNumber.toString(), 10);
    if (isNaN(currentIndex) || currentIndex < 0 || currentIndex >= quotes.length) {
      currentIndex = Math.floor(Math.random() * quotes.length);
    }

    // Set the quote based on the currentIndex
    setQuote(quotes[currentIndex]);

    // Increment the index for next time, wrapping around if necessary
    const nextIndex: number = (currentIndex + 1) % quotes.length;
    localStorage.setItem('quoteIndex', nextIndex.toString());
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div>
      <Container horizontal={false} variant='solid' className='gap-4 h-full'>
        {quote && <Quote quote={quote?.quote} author={quote?.author} source={quote?.source} />}
      </Container>
    </div>
  );
};

export default LoadedQuote;
