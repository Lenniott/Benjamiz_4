// ImageComponent.tsx
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';;
interface ImageComponentProps {
  src: string;
  alt?: string;
  description?: string;
  className?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt, description,className }) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [zoom, setZoom] = useState(false); // Consider renaming to isZoomed for clarity
  const imageRef = useRef<HTMLImageElement>(null);
  const viewerRef = useRef<HTMLDivElement>(null);

  const toggleViewer = () => setIsViewerOpen(!isViewerOpen);
  const handleZoomToggle = () => setZoom(!zoom); // Renamed for clarity

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;  
    if (isViewerOpen) {
      document.body.style.overflow = 'hidden';
      // For iOS devices
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    }
    // Reset zoom level
    setZoom(false);
    // Cleanup function
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
        <div className="fixed inset-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center p-8 ">
          <div className="flex flex-col items-center gap-4 px-2 py-8 rounded-md ">
            <div ref={viewerRef} className={`relative overflow-auto touch-auto rounded-md ${zoom ? '' : 'w-full flex items-center justify-center'} transition-all duration-300`}>
              <img
                ref={imageRef}
                src={src}
                alt={alt}
                loading="lazy"
                className={` ${zoom ? 'translate-y-[100%] -translate-x-[-100%] top-0 left-0 scale-[3] hover:cursor-zoom-out' : 'scale-100 max-h-[70vh] hover:cursor-zoom-in'}  transition-all duration-300 object-fit overflow-x-scroll`}
                onClick={handleZoomToggle}
              />
            </div>
            {description && (
              <p className="flex text-foreground text-left text-sm max-w-3xl max-h-24 px-2 overflow-scroll">{description}</p>
            )}
            <div className="flex ">
              <Button
                variant={'secondary'}
                onClick={toggleViewer}
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageComponent;
