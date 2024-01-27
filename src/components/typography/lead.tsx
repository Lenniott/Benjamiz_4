interface Props {
  children: React.ReactNode;
  className?: string;
  headingType: 'h1' | 'h2' | 'h3' | 'h4';
}

export function LeadText({ children, className, headingType }: Props) {
    const forClass = {
        h1: "text-2xl sm:text-3xl mb-2",
        h2: "text-xl sm:text-2xl mb-2",
        h3: "text-2xl sm:text-3xl",
        h4: "text-2xl sm:text-3xl",
    };

    return (
        <p className={`${className} font-light self-stretch items-start ${forClass[headingType]} font-sans text-foreground`}>
            {children}
        </p>
    );
}
