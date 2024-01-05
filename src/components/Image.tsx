interface Props {
    children: React.ReactNode;
  }
  
  export function Image({ children }: Props) {
      return (
          <div className="flex items-center justify-center p-2 sm:p-4 border border-card-border rounded-md">
              {children}
          </div>
      )
    }
    