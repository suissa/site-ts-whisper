import CodeBlock from "./CodeBlock";
import { useI18n } from "@/i18n/I18nProvider";

const apiOptions = [
  { name: "file", type: "string", required: true, description: "Caminho do áudio" },
  { name: "modelPath", type: "string", required: false, description: "Caminho do modelo" },
  { name: "language", type: "string", required: false, description: "Código do idioma" },
  { name: "threads", type: "number", required: false, description: "Número de threads" },
  { name: "translate", type: "boolean", required: false, description: "Traduz para inglês" },
  { name: "binaryPath", type: "string", required: false, description: "Caminho do binário whisper.cpp" },
];

const APIReference = () => {
  const { t } = useI18n();
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
    <section className="relative pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary text-glow">{t("api.title")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("api.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Example */}
          <div className="mb-12">
            <CodeBlock 
            
                className="card-neon card-glow-hover"
            code={exampleCode} language="typescript" filename="example.ts" />
          </div>

          {/* Options Table */}
          <div className="card-neon card-glow-hover overflow-hidden">
            <div className="p-6 border-b border-primary/20">
              <h3 className="font-display text-xl text-foreground">
                {t("api.optionsTitle")}
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-primary/10">
                    <th className="text-left p-4 font-display text-sm text-muted-foreground font-medium">{t("api.table.option")}</th>
                    <th className="text-left p-4 font-display text-sm text-muted-foreground font-medium">{t("api.table.type")}</th>
                    <th className="text-left p-4 font-display text-sm text-muted-foreground font-medium">{t("api.table.required")}</th>
                    <th className="text-left p-4 font-display text-sm text-muted-foreground font-medium">{t("api.table.description")}</th>
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
                            {t("api.table.yes")}
                          </span>
                        ) : (
                          <span className="text-muted-foreground text-sm">{t("api.table.no")}</span>
                        )}
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">{t(`api.optionDescriptions.${option.name}`)}</td>
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
