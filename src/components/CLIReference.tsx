import { FileText, Cog, Globe, Cpu, Languages, Terminal, HelpCircle } from "lucide-react";
import CodeBlock from "./CodeBlock";

const options = [
  {
    flag: "--file <path>",
    description: "Salvar a transcrição em arquivo",
    icon: FileText,
    example: `npx ts-whisper "audio.wav" --file "transcript.txt"`,
  },
  {
    flag: "--model <path>",
    description: "Escolher modelo",
    icon: Cog,
    example: `npx ts-whisper "audio.wav" --model "models/ggml-small.bin"`,
  },
  {
    flag: "--language <code>",
    description: "Forçar idioma (ex: Japanese, Portuguese, pt, en)",
    icon: Globe,
    example: `npx ts-whisper "japanese.wav" --language Japanese`,
  },
  {
    flag: "--threads <number>",
    description: "Threads de CPU para performance",
    icon: Cpu,
    example: `npx ts-whisper "audio.wav" --threads 8`,
  },
  {
    flag: "--translate",
    description: "Traduz para inglês",
    icon: Languages,
    example: `npx ts-whisper "audio.wav" --translate`,
  },
  {
    flag: "--binary <path>",
    description: "Caminho do binário whisper.cpp",
    icon: Terminal,
    example: `npx ts-whisper "audio.wav" --binary "C:\\path\\to\\whisper.exe"`,
  },
  {
    flag: "--help / -h",
    description: "Mostra ajuda do CLI",
    icon: HelpCircle,
    example: `npx ts-whisper --help`,
  },
];

const CLIReference = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary text-glow">CLI</span> Reference
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Todas as opções disponíveis via linha de comando
          </p>
        </div>

        {/* Syntax */}
        <div className="max-w-3xl mx-auto mb-12">
          <CodeBlock
            code="ts-whisper <audio> [options]"
            filename="Sintaxe"
          />
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {options.map((option) => (
            <div key={option.flag} className="card-neon p-6 group">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                  <option.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <code className="text-primary font-mono text-sm font-semibold">{option.flag}</code>
                  <p className="text-muted-foreground text-sm mt-1 mb-3">{option.description}</p>
                  <div className="terminal text-xs">
                    <div className="p-3 overflow-x-auto">
                      <code className="text-foreground/80 whitespace-nowrap">{option.example}</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Common Combinations */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="font-display text-2xl text-foreground mb-8 text-center">
            Combinações <span className="text-primary">Comuns</span>
          </h3>
          <div className="space-y-6">
            <div>
              <p className="text-muted-foreground mb-3 text-sm">
                Transcrever PT-BR, usando 8 threads, salvando em arquivo:
              </p>
              <CodeBlock
                code={`npx ts-whisper "audio.wav" --language pt --threads 8 --file "audio.txt"`}
              />
            </div>
            <div>
              <p className="text-muted-foreground mb-3 text-sm">
                Forçar um modelo específico e traduzir para inglês:
              </p>
              <CodeBlock
                code={`npx ts-whisper "audio.wav" --model "models/ggml-small.bin" --translate`}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="divider-glow mt-24" />
    </section>
  );
};

export default CLIReference;
