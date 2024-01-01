interface QuoteProps {
  quote: string;
  author?: string;
  align?: "left" | "right" | "center";
  textColor?: string;
}

export function Quote({ quote, author, align, textColor }: QuoteProps) {
  
  function authorAlign(){
    if(align === "left"){
      return "text-right"
    }else if(align === "right"){
      return "text-right"
    }else if(align === "center"){
      return "text-center"
    }
  }

  return (
    <div className="grid">
      <blockquote className={`text-lg sm:text-xl  font-light italic text-${align? align : "left"} ${textColor? textColor : "ext-quote-foreground"}`}>
        “{quote}”
      </blockquote>
      {author && <cite className={`${textColor? textColor : "text-quote-foreground"} mt-4 text-sm sm:text-base font-medium ${authorAlign()} items-end`}>- {author}</cite>}
      
    </div>
  );
}
