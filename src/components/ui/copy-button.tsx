"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  code: string;
}

export function CopyButton({ code }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <button
      className="hover:bg-muted-foreground/10 rounded-md p-2 transition-colors"
      onClick={copy}
      aria-label="Copy code"
    >
      {isCopied ? (
        <Check className="h-4 w-4 text-green-500" />
      ) : (
        <Copy className="text-muted-foreground h-4 w-4" />
      )}
    </button>
  );
}
