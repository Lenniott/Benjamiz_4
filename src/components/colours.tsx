
      import React from 'react';
      import { H2 } from './typography';

      type ColorSquareProps = {
        name: string;
        color: string;
        mode: 'root' | 'dark';
      };
      const ColorSquare: React.FC<ColorSquareProps> = ({ name, color }) => {
        const formattedColor = `hsl(${color})`;
      
      
        const squareStyle: React.CSSProperties = {
          width: '100px',
          height: '100px',
          backgroundColor: formattedColor,

        };
      
        return (
          <div className='flex flex-col items-center p-2'>
            <h3 className='w-[100px] h-12'>{name}</h3>
            <div className="border-2 border-foreground" style={squareStyle}></div>
          </div>
        );
      };
      
      export const ColorPalette: React.FC = () => {
        const colors = {
          root: [
            { name: "--white", color: "210 100% 100%" },
            { name: "--grey-lightest", color: "197 30% 95%" },
            { name: "--grey-light", color: "205 22% 85%" },
            { name: "--grey", color: "201 14% 59%" },
            { name: "--grey-dark", color: "207 14% 39%" },
            { name: "--grey-darkest", color: "205 21% 27%" },
            { name: "--black", color: "204 87% 6%" },
            { name: "--error-light", color: "348 100% 60%" },
            { name: "--error-dark", color: "354 71% 36%" },
            { name: "--accent-light", color: "149 56% 52%" },
            { name: "--accent-dark", color: "150 55% 25%" },
          ],
          // ... any other colour groups you have
        };
      
  
      
      return (
        <div className="color-palette py-8  bg-background text-foreground">
            <div className="color-grid grid h-fit">
                <div>
                    <H2>Colours</H2>
                    <div className="color-group pt-2 flex flex-wrap">
                    
                    {colors.root.map((colorObj, index) => (
                        <ColorSquare
                        key={index}
                        name={colorObj.name}
                        color={colorObj.color}
                        mode="root"
                        />
                    ))}
                    </div>
                </div>
            </div>
        </div>
      );
      };
      
      