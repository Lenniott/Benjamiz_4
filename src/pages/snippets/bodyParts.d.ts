export interface BodyPart {
    label: string;
    x: number;
    y: number;
    value: string;
  }
  
  export interface BodyPartsData {
    front: BodyPart[];
    back: BodyPart[];
  }
  
  declare const bodyPartsData: BodyPartsData;
  export default bodyPartsData;