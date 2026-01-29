import { HardDrive, FileAudio, Globe } from "lucide-react";
import CodeBlock from "./CodeBlock";

const Requirements = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary text-glow">Requisitos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Configure seu ambiente para rodar transcrições localmente
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Binary */}
          <div className="card-neon p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <HardDrive className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground">Binário whisper.cpp</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Compilado em <code className="text-primary font-mono text-xs bg-primary/10 px-1.5 py-0.5 rounded">bin/whisper</code> (Linux/macOS) ou{" "}
              <code className="text-primary font-mono text-xs bg-primary/10 px-1.5 py-0.5 rounded">bin/whisper.exe</code> (Windows)
            </p>
          </div>

          {/* Model */}
          <div className="card-neon p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <FileAudio className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground">Modelo .bin</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Em <code className="text-primary font-mono text-xs bg-primary/10 px-1.5 py-0.5 rounded">models/ggml-base.bin</code> (padrão) ou outro caminho via{" "}
              <code className="text-primary font-mono text-xs bg-primary/10 px-1.5 py-0.5 rounded">--model</code>
            </p>
          </div>

          {/* Languages */}
          <div className="card-neon p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground">Multi-idiomas</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Suporte via whisper.cpp: <code className="text-primary font-mono text-xs">Japanese</code>, <code className="text-primary font-mono text-xs">Portuguese</code>, <code className="text-primary font-mono text-xs">en</code>, <code className="text-primary font-mono text-xs">pt</code>...
            </p>
          </div>
        </div>

        {/* Audio Formats */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="card-neon p-8">
            <h3 className="font-display text-xl text-foreground mb-4 text-center">
              Formatos de Áudio Suportados
            </h3>
            <p className="text-muted-foreground text-center mb-6">
              Os formatos dependem do seu build do whisper.cpp (e se tem suporte a ffmpeg)
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[".wav", ".mp3", ".flac", ".m4a", ".mp4", ".ogg", ".opus", ".webm"].map((format) => (
                <span
                  key={format}
                  className="px-4 py-2 rounded-lg border border-primary/30 bg-primary/5 font-mono text-sm text-primary hover:border-primary/50 hover:bg-primary/10 transition-colors"
                >
                  {format}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground text-sm text-center mt-6">
              Se algum formato falhar, converta para WAV/FLAC antes
            </p>
          </div>
        </div>

        {/* Quick Start */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="font-display text-2xl text-foreground mb-6 text-center">
            Rodando Local <span className="text-primary">(rápido)</span>
          </h3>
          <div className="space-y-4">
            <CodeBlock
              code={`npm i
npm run build`}
              filename="Instalar dependências"
            />
            <CodeBlock
              code={`npx ts-whisper "audio.wav"`}
              filename="Transcrever áudio"
            />
          </div>
        </div>
      </div>

      <div className="divider-glow mt-24" />
    </section>
  );
};

export default Requirements;
