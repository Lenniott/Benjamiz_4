import React from "react";
import BodyInput from "./bodyInput";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { FaArrowLeft } from "react-icons/fa6";

export const BodySelector: React.FC = () => {

  return (
    <>
 
 <Link to="/snippets">
        <Button variant={"link"} className="flex gap-2">
          <FaArrowLeft />
          Snippets
        </Button>
      </Link>
      <BodyInput />
    </>
  );
};

export default BodySelector;
