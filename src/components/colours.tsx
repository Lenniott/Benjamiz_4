
      import React from 'react';

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
            <div style={squareStyle}></div>
          </div>
        );
      };
      
      export const ColorPalette: React.FC = () => {
        const colors = {
        root: [
          { name: "--background", color: "0 0% 100%" },
          { name: "--foreground", color: "222.2 84% 4.9%" },
          { name: "--card", color: "0 0% 100%" },
          { name: "--card-foreground", color: "222.2 84% 4.9%" },
          { name: "--popover", color: "0 0% 100%" },
          { name: "--popover-foreground", color: "222.2 84% 4.9%" },
          { name: "--primary", color: "222.2 47.4% 11.2%" },
          { name: "--primary-foreground", color: "210 40% 98%" },
          { name: "--secondary", color: "210 40% 96.1%" },
          { name: "--secondary-foreground", color: "222.2 47.4% 11.2%" },
          { name: "--muted", color: "210 40% 96.1%" },
          { name: "--muted-foreground", color: "215.4 16.3% 46.9%" },
          { name: "--accent", color: "210 40% 96.1%" },
          { name: "--accent-foreground", color: "222.2 47.4% 11.2%" },
          { name: "--destructive", color: "0 84.2% 60.2%" },
          { name: "--destructive-foreground", color: "210 40% 98%" },
          { name: "--border", color: "214.3 31.8% 91.4%" },
          { name: "--input", color: "214.3 31.8% 91.4%" },
          { name: "--ring", color: "222.2 84% 4.9%" },
          { name: "--radius", color: "0.5rem" },
        ],
        dark: [
          { name: "--background", color: "222.2 84% 4.9%" },
          { name: "--foreground", color: "210 40% 98%" },
          { name: "--card", color: "222.2 84% 4.9%" },
          { name: "--card-foreground", color: "210 40% 98%" },
          { name: "--popover", color: "222.2 84% 4.9%" },
          { name: "--popover-foreground", color: "210 40% 98%" },
          { name: "--primary", color: "210 40% 98%" },
          { name: "--primary-foreground", color: "222.2 47.4% 11.2%" },
          { name: "--secondary", color: "217.2 32.6% 17.5%" },
          { name: "--secondary-foreground", color: "210 40% 98%" },
          { name: "--muted", color: "217.2 32.6% 17.5%" },
          { name: "--muted-foreground", color: "215 20.2% 65.1%" },
          { name: "--accent", color: "217.2 326% 17.5%" },
          { name: "--accent-foreground", color: "210 40% 98%" },
          { name: "--destructive", color: "0 62.8% 30.6%" },
          { name: "--destructive-foreground", color: "210 40% 98%" },
          { name: "--border", color: "217.2 32.6% 17.5%" },
          { name: "--input", color: "217.2 32.6% 17.5%" },
          { name: "--ring", color: "212.7 26.8% 83.9%" },
        ],
      };
      
      return (
        <div className="color-palette bg-slate-500 text-black">
            <div className="color-grid grid grid-rows-2">
                <div>
                    <h2>Root Mode</h2>
                    <div className="color-group flex flex-wrap">
                    
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
                <div>
                    <h2>Dark Mode</h2>
                    <div className="color-group flex flex-wrap">
                    
                    {colors.dark.map((colorObj, index) => (
                        <ColorSquare
                        key={index}
                        name={colorObj.name}
                        color={colorObj.color}
                        mode="dark"
                        />
                    ))}
                    </div>
                </div>
            </div>
        </div>
      );
      };
      
      