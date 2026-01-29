import { Copy, Check } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  className?: string;
}

const CodeBlock = ({ code, language = "bash", filename, className }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("terminal group", className)}>
      <div className="terminal-header justify-between">
        <div className="flex items-center gap-2">
          <div className="terminal-dot bg-red-500/80" />
          <div className="terminal-dot bg-yellow-500/80" />
          <div className="terminal-dot bg-green-500/80" />
          {filename && (
            <span className="ml-4 text-xs text-muted-foreground font-mono">{filename}</span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md hover:bg-primary/10 transition-colors opacity-0 group-hover:opacity-100"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
      </div>
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm">
          <code className="text-foreground/90">{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
