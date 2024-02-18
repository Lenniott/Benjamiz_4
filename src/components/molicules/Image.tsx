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
    if (isViewerOpen) {
      // Prevent scrolling when the viewer is open
      document.body.style.overflowY = 'hidden';
    } else {
      // Re-enable scrolling when the viewer is closed
      document.body.style.overflowY = 'auto';
    }
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
        <div className="fixed inset-0 bg-background z-50 flex justify-center items-center">
          <div className="flex flex-col items-center px-2">
            <div ref={viewerRef} className={`relative h-[70vh] overflow-auto touch-auto touch-pinch-zoom ${zoom ? 'w-[90vw]' : 'w-full flex items-center justify-center'} transition-all duration-300`}>
              <img
                ref={imageRef}
                src={src}
                alt={alt}
                loading="lazy"
                className={` ${zoom ? 'translate-y-[100%] -translate-x-[-100%] top-0 left-0 scale-[3] hover:cursor-zoom-out' : 'scale-100 hover:cursor-zoom-in h-auto'}  transition-all duration-300 object-fit`}
                onClick={handleZoomToggle}
              />
            </div>
            {description && (
              <p className="flex text-foreground text-center max-w-3xl mt-4 px-2">{description}</p>
            )}
            <div className="flex mt-4">
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
