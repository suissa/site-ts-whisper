import { Github, Terminal } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 border-t border-primary/10">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container relative z-10 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
              <Terminal className="w-5 h-5 text-primary" />
            </div>
            <span className="font-display text-xl">
              <span className="text-foreground">ts-</span>
              <span className="text-primary">whisper</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm">GitHub</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            Powered by{" "}
            <a
              href="https://github.com/ggerganov/whisper.cpp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              whisper.cpp
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
