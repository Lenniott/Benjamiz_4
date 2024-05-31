// bodyParts.d.ts
export interface BodyPart {
    label: string;
    value: string;
    left: string;
    top: string;
  }
  
  export interface BodyParts {
    head: BodyPart[];
    torso: BodyPart[];
    arms: BodyPart[];
    legs: BodyPart[];
    otherRegions: BodyPart[];
  }
  