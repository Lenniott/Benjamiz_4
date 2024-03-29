import React from 'react';
import ImageComponent from '../molicules/Image';
// Interface definition
interface ShowcaseItem {
  title: string;
  link: string;
  img: string;
}

interface ShowcaseProps {
  items: ShowcaseItem[];
  imageSize?: {
    width: string; // Tailwind width classes, e.g., w-32
    height: string; // Tailwind height classes, e.g., h-48
  };
}

// Functional Component
const Showcase: React.FC<ShowcaseProps> = ({ items, imageSize = { width: 'w-32', height: 'h-48' } }) => {
  return (
    <div className="flex overflow-x-scroll py-4 scrollbar-custom h-fit items-baseline">
      {items.map((item, index) => (
        <div id={item.title} key={index} className="m-4 flex-none">
          <div className={`${imageSize.width} ${imageSize.height} overflow-hidden rounded-lg shadow-lg`}>
            <ImageComponent src={item.img} alt={item.title} className="w-full h-full object-cover" />
          </div>
          <div className={`mt-2 text-center ${imageSize.width} `}>
            <p className="text-sm">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Showcase;
