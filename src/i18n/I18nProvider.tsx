import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang = "en" | "pt";

type Messages = Record<string, string | Record<string, unknown>>;

const messages: Record<Lang, Messages> = {
  en: {
    common: {
      and: "and",
    },
    hero: {
      tagline: "Stop paying for transcriptions!",
      description:
        'TypeScript library/CLI that wraps the whisper.cpp so you can transcribe audio locally, with no paid API.',
      features: {
        zeroApi: {
          title: "Zero API Costs",
          desc: "Runs 100% locally, only CPU/GPU",
        },
        cliApi: {
          title: "CLI & API",
          desc: "Use in terminal or programmatically",
        },
        whisper: {
          title: "whisper.cpp",
          desc: "Powered by whisper.cpp",
        },
      },
    },
    requirements: {
      title: "Setup",
      modelTitle: "Model .bin",
      modelDesc:
        "Located at models/ggml-base.bin (default) or other path via --model",
      languagesTitle: "Multi-language",
      languagesDesc:
        "Supported via whisper.cpp: Japanese, Portuguese, en, pt...",
      audioFormatsTitle: "Supported Audio Formats",
      audioFormatsDesc:
        "Formats depend on your whisper.cpp build (and whether ffmpeg is supported).",
      audioFormatsNote: "If a format fails, convert to WAV/FLAC first",
      quickTitle: "Run Locally (quick)",
      quickSub: "Install dependencies, build and run",
      quickNote: "Run transcription without installing anything",
    },
    cli: {
      title: "CLI Reference",
      subtitle: "All command-line options available",
      options: {
        file: "Save transcription to a file",
        model: "Choose model",
        language: "Force language (e.g., Japanese, Portuguese, pt, en)",
        threads: "CPU threads for performance",
        translate: "Translate to English",
        binary: "Path to whisper.cpp binary",
        help: "Show CLI help",
      },
      syntax: "Syntax",
      combos: "Common Combinations",
      combos1: "Transcribe PT-BR, using 8 threads, saving to file:",
      combos2: "Force a specific model and translate to English:",
    },
    api: {
      title: "API (Node.js)",
      subtitle: "Use programmatically in your TypeScript/JavaScript projects",
      optionsTitle: "Options of transcribe()",
      optionDescriptions: {
        file: "Path to the audio file",
        modelPath: "Path to the model",
        language: "Language code",
        threads: "Number of CPU threads",
        translate: "Translate to English",
        binaryPath: "Path to whisper.cpp binary",
      },
      table: {
        option: "Option",
        type: "Type",
        required: "Required",
        description: "Description",
        yes: "Yes",
        no: "No",
      },
    },
    notes: {
      title: "Notes",
      n1: "ts-whisper does not reimplement Whisper; it orchestrates the whisper.cpp.",
      n2: "Internal helpers like checkWhisperBinary() and checkModel() validate if binary/model exist and return resolved paths.",
      n3: "Zero API cost — runs 100% on your hardware with local CPU/GPU.",
    },
  },
  pt: {
    common: {
      and: "e",
    },
    hero: {
      tagline: "PARE DE GASTAR COM TRANSCRIÇÕES!",
      description:
        'Biblioteca/CLI em TypeScript que "embrulha" o whisper.cpp para você transcrever áudio localmente, sem API paga.',
      features: {
        zeroApi: {
          title: "Custo zero de API",
          desc: "Roda 100% local, só CPU/GPU",
        },
        cliApi: {
          title: "CLI & API",
          desc: "Use no terminal ou via código",
        },
        whisper: {
          title: "whisper.cpp",
          desc: "Powered by whisper.cpp",
        },
      },
    },
    requirements: {
      title: "Configurações",
      modelTitle: "Modelo .bin",
      modelDesc:
        "Em models/ggml-base.bin (padrão) ou outro caminho via --model",
      languagesTitle: "Multi-idiomas",
      languagesDesc:
        "Suporte via whisper.cpp: Japanese, Portuguese, en, pt...",
      audioFormatsTitle: "Formatos de Áudio Suportados",
      audioFormatsDesc:
        "Os formatos dependem do seu build do whisper.cpp (e se tem suporte a ffmpeg)",
      audioFormatsNote: "Se algum formato falhar, converta para WAV/FLAC antes",
      quickTitle: "Rodando Local (rápido)",
      quickSub: "Instale as dependências, compile e execute",
      quickNote: "Execute a transcrição sem instalar nada",
    },
    cli: {
      title: "CLI Reference",
      subtitle: "Todas as opções disponíveis via linha de comando",
      options: {
        file: "Salvar a transcrição em arquivo",
        model: "Escolher modelo",
        language: "Forçar idioma (ex: Japanese, Portuguese, pt, en)",
        threads: "Threads de CPU para performance",
        translate: "Traduz para inglês",
        binary: "Caminho do binário whisper.cpp",
        help: "Mostra ajuda do CLI",
      },
      syntax: "Sintaxe",
      combos: "Combinações Comuns",
      combos1: "Transcrever PT-BR, usando 8 threads, salvando em arquivo:",
      combos2: "Forçar um modelo específico e traduzir para inglês:",
    },
    api: {
      title: "API (Node.js)",
      subtitle: "Use programaticamente em seus projetos TypeScript/JavaScript",
      optionsTitle: "Opções do transcribe()",
      optionDescriptions: {
        file: "Caminho do arquivo de áudio",
        modelPath: "Caminho do modelo",
        language: "Código do idioma",
        threads: "Número de threads de CPU",
        translate: "Traduz para inglês",
        binaryPath: "Caminho do binário whisper.cpp",
      },
      table: {
        option: "Opção",
        type: "Tipo",
        required: "Obrigatório",
        description: "Descrição",
        yes: "Sim",
        no: "Não",
      },
    },
    notes: {
      title: "Notas",
      n1: "ts-whisper não reimplementa o Whisper; ele só orquestra o whisper.cpp.",
      n2: "Helpers internos como checkWhisperBinary() e checkModel() validam se binário/modelo existem e retornam o caminho resolvido.",
      n3: "Custo zero de API — roda 100% no seu hardware com CPU/GPU local.",
    },
  },
};

type I18nContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function detectLanguage(): Lang {
  const nav = navigator.language || (navigator.languages && navigator.languages[0]) || "en";
  return nav.toLowerCase().startsWith("pt") ? "pt" : "en";
}

function get(messagesObj: Messages, path: string): string {
  const parts = path.split(".");
  let cur: unknown = messagesObj;
  for (const p of parts) {
    cur = cur?.[p];
    if (cur == null) return path;
  }
  if (typeof cur === "string") return cur;
  return path;
}

export const I18nProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    const initial = saved || detectLanguage();
    setLangState(initial);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  const t = useMemo(() => {
    return (key: string) => {
      const m = messages[lang] || messages.en;
      const val = get(m, key);
      if (val === key) {
        const fallback = get(messages.en, key);
        return typeof fallback === "string" ? fallback : key;
      }
      return val;
    };
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("I18nProvider missing");
  return ctx;
};
