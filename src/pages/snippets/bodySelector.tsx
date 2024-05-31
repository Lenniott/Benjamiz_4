import React from "react";
import { FaMagnifyingGlassPlus, FaMagnifyingGlassMinus } from "react-icons/fa6";
import { Button } from "../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../components/ui/tooltip";
import BodyInput from "./bodyInput";
import bodyParts from "./bodyParts.json";
import { BodyParts } from "./bodyParts.d";

export const BodySelector: React.FC = () => {
  const [isZoom, setIsZoom] = React.useState(false);
  const [selectedBodyPart, setSelectedBodyPart] = React.useState<string | null>(null);

  const handlePartSelection = (value: string) => {
    setSelectedBodyPart(value);
  };

  const renderOptions = (data: BodyParts) => {
    return Object.keys(data).map(group => (
      <SelectGroup key={group}>
        <SelectLabel>{group}</SelectLabel>
        {(data as BodyParts)[group as keyof BodyParts].map(item => (
          <SelectItem key={item.value} value={item.value} onClick={() => handlePartSelection(item.value)}>
            {item.label}
          </SelectItem>
        ))}
      </SelectGroup>
    ));
  };

  return (
    <>
      <div className="flex gap-4">
        {/* <Select onValueChange={handlePartSelection}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Select a body part" />
          </SelectTrigger>
          <SelectContent>{renderOptions(bodyParts as BodyParts)}</SelectContent>
        </Select>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="icon" variant="secondary" onClick={() => setIsZoom(!isZoom)}>
                {isZoom ? <FaMagnifyingGlassMinus /> : <FaMagnifyingGlassPlus />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{isZoom ? "Zoom out" : "Zoom in"}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider> */}
      </div>

      <BodyInput
      />
    </>
  );
};

export default BodySelector;
