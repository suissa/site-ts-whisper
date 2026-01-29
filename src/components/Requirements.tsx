import { HardDrive, FileAudio, Globe } from "lucide-react";
import CodeBlock from "./CodeBlock";
import { useI18n } from "@/i18n/I18nProvider";

const Requirements = () => {
  const { t } = useI18n();
  return (
    <section className="mt-16 relative pb-24 overflow-hidden max-w-4xl mx-auto">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="container relative z-10 px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary text-glow">{t("requirements.title")}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          

          {/* Model */}
          <div className="card-neon card-glow-hover p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <FileAudio className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground">{t("requirements.modelTitle")}</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              {t("requirements.modelDesc").replace("models/ggml-base.bin", "")}
              <code className="text-primary font-mono text-xs bg-primary/10 px-1.5 py-0.5 rounded">models/ggml-base.bin</code>
            </p>
          </div>

          {/* Languages */}
          <div className="card-neon card-glow-hover p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground">{t("requirements.languagesTitle")}</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              {t("requirements.languagesDesc")}
            </p>
          </div>
        </div>

        {/* Audio Formats */}
        <div className="mt-16 pb-16 max-w-4xl mx-auto">
          <div className="card-neon card-glow-hover p-8">
            <h3 className="font-display text-xl text-foreground mb-4 text-center">
              {t("requirements.audioFormatsTitle")}
            </h3>
            <p className="text-muted-foreground text-center mb-6">
              {t("requirements.audioFormatsDesc")}
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
            <p className="text-muted-foreground text-sm text-center mt-6">{t("requirements.audioFormatsNote")}</p>
          </div>
        </div>

        {/* Quick Start */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="font-display text-center text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary text-glow">{t("requirements.quickTitle")}</span>
          </h2>
          <p className="text-muted-foreground text-center mb-6">
            {t("requirements.quickSub")}
          </p>
          <div className="space-y-4">
            <CodeBlock
            className="card-neon card-glow-hover"
              code={`npm i
npm run build`}
              filename={t("requirements.quickSub")}
            />
            <p className="text-muted-foreground text-center mb-6">
              {t("requirements.quickNote")}
            </p>
            <CodeBlock
              className="card-neon card-glow-hover"
              code={`npx ts-whisper "audio.wav"`}
              filename={t("requirements.quickNote")}
            />
          </div>
        </div>
      </div>

      <div className="divider-glow mt-24" />
    </section>
  );
};

export default Requirements;
