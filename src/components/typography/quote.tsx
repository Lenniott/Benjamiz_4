interface QuoteProps {
  quote: string;
  author: string;
}

export function Quote({ quote, author }: QuoteProps) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-8">
      <blockquote className="text-xl font-semibold italic text-center text-quote-foreground">
        “{quote}”
      </blockquote>
      <cite className="mt-4 text-sm font-medium text-right text-quote-author">- {author}</cite>
    </div>
  );
}
