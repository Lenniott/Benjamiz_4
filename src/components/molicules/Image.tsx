// ImageComponent.tsx
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import { FaXmark} from 'react-icons/fa6';
interface ImageComponentProps {
  src: string;
  alt?: string;
  description?: string;
  className?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt, description,className }) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const toggleViewer = () => {
    const originalStyle = window.getComputedStyle(document.body).overflow;  
    document.body.style.overflow = originalStyle;
    // Reset styles for iOS devices
    document.body.style.position = '';
    document.body.style.width = '';
    setIsViewerOpen(!isViewerOpen);

  }

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;  
    if (isViewerOpen) {

      document.body.style.overflow = 'hidden';
      // For iOS devices
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    }

    return () => {
      document.body.style.overflow = originalStyle;
      // Reset styles for iOS devices
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isViewerOpen]);
  


  return (
    <div className="relative group">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`cursor-pointer hover:cursor-zoom-in ${className}`}
        onClick={toggleViewer}
      />
      {isViewerOpen && (
        <div className="fixed inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 ">
            <div className="fixed flex flex-col items-center w-full h-full gap-4 px-4 py-8 overflow-scroll top-0">
              <div className="z-10 flex w-full justify-end max-w-3xl">
                <Button
                  size={'icon'}
                  variant={'ghost'}
                  onClick={toggleViewer}
                >
                  <FaXmark className='w-4 h-4' />
                </Button>
            </div>
            <div>
              <img
                ref={imageRef}
                src={src}
                alt={alt}
                loading="lazy"
                className='rounded-md w-full max-w-2xl'
              />
            </div>
            {description && (
              <p className="flex text-foreground text-center text-sm max-w-3xl px-2">
                {description}
              </p>            
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageComponent;

