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
    document.body.style.overflow = 'visible';
    // Reset styles for iOS devices
    document.body.style.position = 'static';
    document.body.style.width = 'auto';
    setIsViewerOpen(!isViewerOpen);

  }

  useEffect(() => {
    if (isViewerOpen) {

      document.body.style.overflow = 'hidden';
      // For iOS devices
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    }

    return () => {
      document.body.style.overflow = 'visible';
      // Reset styles for iOS devices
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
    };
  }, [isViewerOpen]);
  


  return (
    <div className="relative group">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`cursor-pointer hover:cursor-zoom-in rounded-md ${className}`}
        onClick={toggleViewer}
      />
      {isViewerOpen && (
        <div className="fixed inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 ">
            <div className="fixed flex flex-col items-center justify-center w-full h-full gap-4 p-4 top-0 overflow-auto">
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
                className='rounded-md  sm:h-full max-h-[80vh]'
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

