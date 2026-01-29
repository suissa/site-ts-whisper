import CodeBlock from "./CodeBlock";

const apiOptions = [
  { name: "file", type: "string", required: true, description: "Caminho do áudio" },
  { name: "modelPath", type: "string", required: false, description: "Caminho do modelo" },
  { name: "language", type: "string", required: false, description: "Código do idioma" },
  { name: "threads", type: "number", required: false, description: "Número de threads" },
  { name: "translate", type: "boolean", required: false, description: "Traduz para inglês" },
  { name: "binaryPath", type: "string", required: false, description: "Caminho do binário whisper.cpp" },
];

const APIReference = () => {
  const exampleCode = `import { transcribe } from "ts-whisper";

const result = await transcribe({
  file: "audio.wav",
  language: "pt",
  threads: 8,
  // modelPath: "models/ggml-small.bin",
  // translate: true,
  // binaryPath: "C:\\\\path\\\\to\\\\whisper.exe",
});

console.log(result.text);
console.log(result.segments); // [{ start, end, text }, ...]`;

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary text-glow">API</span> (Node.js)
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Use programaticamente em seus projetos TypeScript/JavaScript
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Example */}
          <div className="mb-12">
            <CodeBlock code={exampleCode} language="typescript" filename="example.ts" />
          </div>

          {/* Options Table */}
          <div className="card-neon card-glow-hover overflow-hidden pb-4">
            <div className="p-6 border-b border-primary/20">
              <h3 className="font-display text-xl text-foreground">
                Opções do <code className="text-primary font-mono">transcribe()</code>
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-primary/10">
                    <th className="text-left p-4 font-display text-sm text-muted-foreground font-medium">Opção</th>
                    <th className="text-left p-4 font-display text-sm text-muted-foreground font-medium">Tipo</th>
                    <th className="text-left p-4 font-display text-sm text-muted-foreground font-medium">Obrigatório</th>
                    <th className="text-left p-4 font-display text-sm text-muted-foreground font-medium">Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  {apiOptions.map((option, index) => (
                    <tr
                      key={option.name}
                      className={`border-b border-primary/5 hover:bg-primary/5 transition-colors ${
                        index === apiOptions.length - 1 ? "border-b-0" : ""
                      }`}
                    >
                      <td className="p-4">
                        <code className="text-primary font-mono text-sm">{option.name}</code>
                      </td>
                      <td className="p-4">
                        <code className="text-muted-foreground font-mono text-sm">{option.type}</code>
                      </td>
                      <td className="p-4">
                        {option.required ? (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/20 text-primary border border-primary/30">
                            Sim
                          </span>
                        ) : (
                          <span className="text-muted-foreground text-sm">Não</span>
                        )}
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">{option.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-glow mt-24" />
    </section>
  );
};

export default APIReference;
