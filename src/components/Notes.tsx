import { Info, Wrench, CheckCircle } from "lucide-react";

const Notes = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary text-glow">Notas</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="card-neon p-6 flex items-start gap-4">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
              <Info className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-foreground">
                <code className="text-primary font-mono bg-primary/10 px-2 py-0.5 rounded">ts-whisper</code>{" "}
                <span className="text-muted-foreground font-semibold">não reimplementa</span> o Whisper; ele só orquestra o{" "}
                <code className="text-primary font-mono bg-primary/10 px-2 py-0.5 rounded">whisper.cpp</code>.
              </p>
            </div>
          </div>

          <div className="card-neon p-6 flex items-start gap-4">
            <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
              <Wrench className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-foreground">
                Helpers internos como{" "}
                <code className="text-primary font-mono bg-primary/10 px-2 py-0.5 rounded text-sm">checkWhisperBinary()</code>{" "}
                e{" "}
                <code className="text-primary font-mono bg-primary/10 px-2 py-0.5 rounded text-sm">checkModel()</code>{" "}
                validam se binário/modelo existem e retornam o caminho resolvido.
              </p>
            </div>
          </div>

          <div className="card-neon p-6 flex items-start gap-4">
            <div className="p-2 rounded-lg bg-green-500/10 border border-green-500/20 shrink-0">
              <CheckCircle className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-foreground">
                Custo zero de API — roda 100% no seu hardware com{" "}
                <span className="text-primary font-semibold">CPU/GPU local</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notes;
