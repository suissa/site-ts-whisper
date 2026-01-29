import { FileText, Cog, Globe, Cpu, Languages, Terminal, HelpCircle } from "lucide-react";
import CodeBlock from "./CodeBlock";
import { useI18n } from "@/i18n/I18nProvider";

const options = [
  {
    flag: "--file <path>",
    descriptionKey: "cli.options.file",
    icon: FileText,
    example: `npx ts-whisper "audio.wav" --file "transcript.txt"`,
  },
  {
    flag: "--model <path>",
    descriptionKey: "cli.options.model",
    icon: Cog,
    example: `npx ts-whisper "audio.wav" --model "models/ggml-small.bin"`,
  },
  {
    flag: "--language <code>",
    descriptionKey: "cli.options.language",
    icon: Globe,
    example: `npx ts-whisper "japanese.wav" --language Japanese`,
  },
  {
    flag: "--threads <number>",
    descriptionKey: "cli.options.threads",
    icon: Cpu,
    example: `npx ts-whisper "audio.wav" --threads 8`,
  },
  {
    flag: "--binary <path>",
    descriptionKey: "cli.options.binary",
    icon: Terminal,
    example: `npx ts-whisper "audio.wav" --binary "C:\\path\\to\\whisper.exe"`,
  },
  {
    flag: "--help / -h",
    descriptionKey: "cli.options.help",
    icon: HelpCircle,
    example: `npx ts-whisper --help`,
  },
];

export const CLIReference = () => {
  const { t } = useI18n();
  return (
    <section className="relative pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary text-glow">{t("cli.title")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("cli.subtitle")}
          </p>
        </div>

        {/* Syntax */}
        <div className="max-w-lg mx-auto mb-12">
          <CodeBlock
            code="ts-whisper <audio> [options]"
            filename={t("cli.syntax")}
          />
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {options.map((option) => (
            <div key={option.flag} className="card-neon card-glow-hover p-6 group">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
                  <option.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <code className="text-primary font-mono text-sm font-semibold">{option.flag}</code>
                  <p className="text-muted-foreground text-sm mt-1 mb-3">{t(option.descriptionKey)}</p>
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
            {t("cli.combos")}
          </h3>
          <div className="space-y-6">
            <div>
              <p className="text-muted-foreground mb-3 text-sm">
                {t("cli.combos1")}
              </p>
              <CodeBlock
                className="card-neon card-glow-hover"
                code={`npx ts-whisper "audio.wav" --language pt --threads 8 --file "audio.txt"`}
              />
            </div>
            <div>
              <p className="text-muted-foreground mb-3 text-sm">
                {t("cli.combos2")}
              </p>
              <CodeBlock
                className="card-neon card-glow-hover"
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

