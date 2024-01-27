
      import React from 'react';
      import { useState, useEffect } from 'react';

      type ColorSquareProps = {
        name: string;
        color: string;
      };
      
      const ColorSquare: React.FC<ColorSquareProps> = ({ name, color }) => {
        const formattedColor = `hsl(${color})`;
        const squareStyle: React.CSSProperties = {
          backgroundColor: formattedColor,
        };
      
        return (
          <div className='flex flex-col gap-4 place-items-center h-20'>
            <h3 className='w-full h-12'>{name}</h3>
            <div className="border-2 border-foreground w-full h-full rounded-md" style={squareStyle}></div>
          </div>
        );
      };

export const ColorPalette: React.FC = () => {
  const [colors, setColors] = useState<Array<{ name: string, color: string }>>([]);

  useEffect(() => {
    const fetchColors = () => {
      const rootStyles = getComputedStyle(document.documentElement);
      return [
            { name: "white", color: rootStyles.getPropertyValue('--white').trim()  },
            { name: "grey-lightest", color: rootStyles.getPropertyValue('--grey-lightest').trim()  },
            { name: "grey-light", color: rootStyles.getPropertyValue('--grey-light').trim() },
            { name: "grey", color: rootStyles.getPropertyValue('--grey').trim() },
            { name: "grey-dark", color: rootStyles.getPropertyValue('--grey-dark').trim() },
            { name: "grey-darkest", color:rootStyles.getPropertyValue('--grey-darkest').trim() },
            { name: "black", color: rootStyles.getPropertyValue('--black').trim() },
            { name: "error-light", color: rootStyles.getPropertyValue('--error-light').trim()  },
            { name: "error-dark", color:rootStyles.getPropertyValue('--error-dark').trim()  },
            { name: "accent-light", color: rootStyles.getPropertyValue('--accent-light').trim()  },
            { name: "accent-dark", color: rootStyles.getPropertyValue('--accent-dark').trim()  },
        ];
      };
  
      setColors(fetchColors());
    }, []);
  
      
      return (
        <div className="flex flex-col pb-8 ">
            <div className="color-grid grid h-fit">
                <div>
                    <div className="color-group pt-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {colors.map((colorObj, index) => (
                    <ColorSquare
                    key={index}
                    name={colorObj.name}
                    color={colorObj.color}
                    />
                    ))}
                    </div>
                </div>
            </div>
        </div>
      );
      };
      
      