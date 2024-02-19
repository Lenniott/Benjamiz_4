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
      // Store the current scroll position and prevent scrolling
      document.body.classList.add("overflow-y-hidden");
    }
    // Reset zoom level
    setZoom(false);
    // Cleanup function to be called when the modal is closed or the component is unmounted
    return () => {
      // Restore the scroll position and allow scrolling
      document.body.classList.remove("overflow-y-hidden");
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
        <div className="fixed inset-0 bg-background z-50 flex justify-center items-center">
          <div className="flex flex-col items-center px-2">
            <div ref={viewerRef} className={`relative h-[70vh] overflow-auto touch-auto  ${zoom ? 'w-[90vw]' : 'w-full flex items-center justify-center'} transition-all duration-300`}>
              <img
                ref={imageRef}
                src={src}
                alt={alt}
                loading="lazy"
                className={` ${zoom ? 'translate-y-[100%] -translate-x-[-100%] top-0 left-0 scale-[3] hover:cursor-zoom-out' : 'scale-100 max-h-[70vh] hover:cursor-zoom-in'}  transition-all duration-300 object-fit`}
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
