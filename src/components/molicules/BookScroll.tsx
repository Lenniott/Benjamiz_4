// BookScroll.tsx
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
interface Book {
  title: string;
  link: string;
  img: string;
}

interface BookScrollProps {
  books: Book[];
}

const BookScroll: React.FC<BookScrollProps> = ({ books }) => {
  return (
    <div className="flex overflow-x-auto space-x-4 py-4 items-start">
      {books.map((book, index) => (
        <a key={index} href={book.link} target="_blank" rel="noopener noreferrer" className=" group shrink-0 grid items-center -h28 -w45">
        <span className="invisible group-hover:visible"><FaArrowRight/></span>
          <img src={book.img} alt={book.title} className="flex justify-start items-start h-48 w-32 hover:blur-sm bg-accent" />
          <p className="w-32 text-wrap text-center text-xs mt-2">{book.title}</p>   
        </a>
      ))}
    </div>
  );
};

export default BookScroll;
