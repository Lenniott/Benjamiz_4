import { FaXmark, FaMagnifyingGlassPlus, FaMagnifyingGlassMinus } from "react-icons/fa6";
import { useState, useEffect, useRef } from "react";
import { Button } from "../ui/button";

// Define the shape of the image prop for better type checking
interface ImageProps {
    src?: string;
    alt?: string;
    text?: string;
}

interface ModalProps {
    image?: ImageProps; // Image is now an optional prop with specified structure
    modal: boolean;
    modalClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({
    image = { src: "", alt: "", text: "" },
    modal = false,
    modalClose
}) => {
    const bodyDivRef = useRef<HTMLDivElement>(null);
    const imageDivRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const [zoom, setZoom] = useState(1);
    const textBoxRef = useRef<HTMLDivElement>(null);
    const [textBoxHeight, setTextBoxHeight] = useState(0); // State to store the text box height
    const [transformOrigin, setTransformOrigin] = useState("center");
    const [flexClasses, setFlexClasses] = useState("flex");


  useEffect(() => {
    if (modal) {
      // Store the current scroll position and prevent scrolling
      document.body.classList.add("overflow-y-hidden");

    }
  
    // Reset zoom level
    setZoom(1);
  
    // Cleanup function to be called when the modal is closed or the component is unmounted
    return () => {
      // Restore the scroll position and allow scrolling
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [modal]);
  
  useEffect(() => {
    // Measure the height of the text box and update the state
    if (textBoxRef.current) {
      setTextBoxHeight(textBoxRef.current.offsetHeight);
    }
  }, [modal]); // This effect should run when the modal opens

  const handleZoomIn = () => {
    setZoom((prevZoom) => prevZoom + 0.25);
  };

  const handleZoomOut = () => {
    setZoom((prevZoom) => (prevZoom > 1 ? prevZoom - 0.25 : prevZoom));
  };

  useEffect(() => {
    const bodyDiv = bodyDivRef.current;
    const imageDiv = imageDivRef.current;

    if (bodyDiv && imageDiv) {
      const bodyDivSize = bodyDiv.getBoundingClientRect();
      const imageDivSize = imageDiv.getBoundingClientRect();

      let newFlexClasses = "flex";
      let newTransformOrigin = "";

      if (imageDivSize.width > bodyDivSize.width) {
        newTransformOrigin = "left";
      } else {
        newFlexClasses += " justify-center ";
      }

      if (imageDivSize.height > bodyDivSize.height) {
        if (newTransformOrigin.includes("left")) {
          newTransformOrigin += " top";
        } else {
          newTransformOrigin = "center top";
        }
      } else {
        newFlexClasses += " items-center ";
      }

      setFlexClasses(newFlexClasses.trim());
      setTransformOrigin(newTransformOrigin.trim());
    }
  }, [zoom, modal]);

  return (
    <>
    {modal && (
        <div
          ref={modalRef}
          key={image?.src || ""}
          className="bg-background fixed top-0 left-0 w-screen h-screen z-50  py-8 duration-500"
        >
          <div className="relative">
            <div className="pb-4 px-4 flex items-start justify-end ">
              <Button variant="ghost" size="icon" title="close" onClick={modalClose}>
                <FaXmark className="text-4xl text-slate-500 hover:text-primary-dark" />
              </Button>
            </div>
            <div
              ref={bodyDivRef}
              className={`overflow-scroll ${flexClasses} bg-red-500`}
              style={{
                height: `calc(100vh - ${textBoxHeight + 80}px)`, 
                width: `${parseFloat((imageRef.current?.getBoundingClientRect().width || 0).toString()) + 200}px`
              }}
              // Use inline style for dynamic height}
            >
              <div
                ref={imageDivRef}
                className="image container h-full "
                style={{
                  transform: `scale(${zoom})`,
                  transformOrigin: transformOrigin,
                }}
              >
                <img
                  ref={imageRef}
                  src={image?.src || ""}
                  alt={image?.alt || ""}
                  className="w-full h-auto xs:w-auto xs:h-full transition-transform duration-300 transform-gpu"
                />
              </div>
            </div>

            <div ref={textBoxRef} className="text-primary-dark  bg-background text-center my-4 w-full fixed -bottom-4 left-0 bg-primary-light border-t border-slate-300">
                <div>
                    <p className="text-primary-dark text-center px-8 z-20 my-4 mx-auto max-w-4xl">
                      {image?.text || ""}
                      <br/>
                      {imageRef.current?.getBoundingClientRect().width.toString()}
                    </p>
                </div>

                <div className=" flex items-center w-full justify-center gap-4 mb-4">
                <Button className="gap-1" variant="ghost" title="Zoom in" onClick={handleZoomIn}><FaMagnifyingGlassPlus />Zoom in</Button>
                <Button className="gap-1" variant="ghost" title="Zoom out" onClick={handleZoomOut}><FaMagnifyingGlassMinus />Zoom out</Button>
                </div>

              
            </div>
          </div>
        </div>
      )}
      </>
  );
}

