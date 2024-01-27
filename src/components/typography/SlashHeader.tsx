interface Props {
    children: React.ReactNode;
    to?: string;
    className?: string;
  }
  

  
  export function SlashHeader({ to, className = '', children }: Props) {
  
    return (
      <a href={to} className={`group flex ${className}`}>
      <span className="transition group-hover:-translate-x-2 text-foreground">/</span>
      {children}
    </a>
  );
}
