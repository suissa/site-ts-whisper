import { Github, Terminal } from "lucide-react";

const Footer = () => {
  return (
    <footer className="max-w-3xl mx-auto relative py-12 border-t border-primary/10">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="container relative z-10 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img className="max-w-[200px]" src="/logo-footer.png" />
          </div>


          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            <img 
              src="/purecore.png"
              alt="purecore"
              className="w-full max-w-[200px] h-auto inline-block"
            />
            
          </p>
          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/suissa/ts-whisper"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary hover:text-[#ccc] transition-colors"
            >
              <Github className="w-12 h-12" />
              <span className="text-2xl font-nixmat font-thin">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
