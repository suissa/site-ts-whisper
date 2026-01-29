import { Terminal, Zap, Cpu } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen max-w-6xl mx-auto flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />
      
      {/* Animated scan line */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-scan" />
      </div>


      {/* Floating orbs */}
      {/* <div className="absolute top-0 left-0 w-[800px] h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-0 right-0 w-[800px] h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} /> */}
{/* <div
  className="
    absolute
    top-8
    left-1/2
    -translate-x-1/2
    w-[800px]
    h-64
    rounded-full
    bg-emerald-400/20
    blur-3xl
  "
/> */}

      <div className="container relative z-10 px-4 py-20">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
         

          {/* Title */}
          <img src="/logo-glow.png" alt="ts-whisper logo" className="w-full md:max-w-[800px] mb-4
          " />

          {/* Tagline */}
          <p
            className="text-2xl md:text-6xl tilt-neon text-shadow text-primary/80 mb-4 text-glow-sm"
            style={{ textShadow: "0px 0px 20px #00ffe7" }}
          >
            
            PARE DE GASTAR COM TRANSCRICOES!
          </p>

          {/* Description */}
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
            Biblioteca/CLI em TypeScript que "embrulha" o{" "}
            <code className="text-primary font-mono bg-primary/10 px-2 py-0.5 rounded">whisper.cpp</code>{" "}
            para você transcrever áudio <span className="text-primary">localmente</span>, sem API paga.
          </p>

          {/* Quick Start Terminal */}
          <div className="w-full max-w-2xl terminal mb-12">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500" />
              <div className="terminal-dot bg-yellow-500" />
              <div className="terminal-dot bg-green-500" />
              <span className="ml-4 text-xs text-muted-foreground font-mono">terminal</span>
            </div>
            <div className="p-6 font-mono text-sm md:text-base">
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <span className="text-primary">$</span>
                <span>npm install ts-whisper</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground mb-2">
                <span className="text-primary">$</span>
                <span>npm run build</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">$</span>
                <span className="text-foreground">npx ts-whisper "audio.wav"</span>
                <span className="cursor-blink"></span>
              </div>
            </div>
          </div>

          {/* Stats/Features Quick View */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
            <div className="card-neon card-glow-hover p-6 group">
              <Zap className="w-8 h-8 text-primary mb-3 group-hover:text-glow transition-all" />
              <h3 className="font-display text-lg text-foreground mb-2">Zero API Costs</h3>
              <p className="text-sm text-muted-foreground">Roda 100% local, só CPU/GPU</p>
            </div>
            <div className="card-neon card-glow-hover p-6 group">
              <Terminal className="w-8 h-8 text-primary mb-3 group-hover:text-glow transition-all" />
              <h3 className="font-display text-lg text-foreground mb-2">CLI & API</h3>
              <p className="text-sm text-muted-foreground">Use no terminal ou via código</p>
            </div>
            <div className="card-neon card-glow-hover p-6 group">
              <Cpu className="w-8 h-8 text-primary mb-3 group-hover:text-glow transition-all" />
              <h3 className="font-display text-lg text-foreground mb-2">whisper.cpp</h3>
              <p className="text-sm text-muted-foreground">Powered by whisper.cpp</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
