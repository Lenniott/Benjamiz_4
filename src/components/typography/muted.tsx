export function MutedText({text: text}: {text: string}) {
    return (
        <p className="text-sm text-muted-foreground">
        {text}
      </p>
    )
  }
  