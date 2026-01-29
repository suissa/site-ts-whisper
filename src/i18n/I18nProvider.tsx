import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Lang =
  | "en"
  | "pt"
  | "es"
  | "fr"
  | "de"
  | "it"
  | "nl"
  | "pl"
  | "ru"
  | "ar"
  | "zh"
  | "ja"
  | "ko"
  | "hi"
  | "bn"
  | "vi"
  | "tr"
  | "th"
  | "id"
  | "he"
  | "fa"
  | "uk"
  | "sv";

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
  es: {
    common: { and: "y" },
    hero: {
      tagline: "¡Deja de pagar por transcripciones!",
      description:
        "Biblioteca/CLI en TypeScript que envuelve whisper.cpp para transcribir audio localmente, sin API de pago.",
      features: {
        zeroApi: { title: "Cero costos de API", desc: "Funciona 100% local, solo CPU/GPU" },
        cliApi: { title: "CLI y API", desc: "Usa en terminal o programáticamente" },
        whisper: { title: "whisper.cpp", desc: "Impulsado por whisper.cpp" },
      },
    },
    requirements: {
      title: "Configuración",
      modelTitle: "Modelo .bin",
      modelDesc: "Ubicado en models/ggml-base.bin (predeterminado) u otra ruta vía --model",
      languagesTitle: "Multi-idioma",
      languagesDesc: "Soportado por whisper.cpp: Japonés, Portugués, en, pt...",
      audioFormatsTitle: "Formatos de audio admitidos",
      audioFormatsDesc: "Los formatos dependen de tu build de whisper.cpp (y si ffmpeg está soportado)",
      audioFormatsNote: "Si un formato falla, convierte a WAV/FLAC primero",
      quickTitle: "Ejecutar local (rápido)",
      quickSub: "Instala dependencias, compila y ejecuta",
      quickNote: "Transcribe sin instalar nada",
    },
    cli: {
      title: "Referencia CLI",
      subtitle: "Todas las opciones disponibles",
      options: {
        file: "Guardar transcripción en archivo",
        model: "Elegir modelo",
        language: "Forzar idioma (ej.: Japonés, Portugués, pt, en)",
        threads: "Hilos de CPU para rendimiento",
        translate: "Traducir al inglés",
        binary: "Ruta del binario whisper.cpp",
        help: "Mostrar ayuda del CLI",
      },
      syntax: "Sintaxis",
      combos: "Combinaciones comunes",
      combos1: "Transcribir PT-BR, usando 8 hilos, guardando en archivo:",
      combos2: "Forzar modelo específico y traducir al inglés:",
    },
    api: {
      title: "API (Node.js)",
      subtitle: "Usa programáticamente en tus proyectos TypeScript/JavaScript",
      optionsTitle: "Opciones de transcribe()",
      optionDescriptions: {
        file: "Ruta del archivo de audio",
        modelPath: "Ruta del modelo",
        language: "Código de idioma",
        threads: "Número de hilos de CPU",
        translate: "Traducir al inglés",
        binaryPath: "Ruta del binario whisper.cpp",
      },
      table: {
        option: "Opción",
        type: "Tipo",
        required: "Obligatorio",
        description: "Descripción",
        yes: "Sí",
        no: "No",
      },
    },
    notes: {
      title: "Notas",
      n1: "ts-whisper no reimplementa Whisper; orquesta whisper.cpp.",
      n2: "Helpers internos como checkWhisperBinary() y checkModel() validan si existen binario/modelo y devuelven rutas resueltas.",
      n3: "Costo cero de API — corre 100% en tu hardware con CPU/GPU local.",
    },
  },
  fr: {
    common: { and: "et" },
    hero: {
      tagline: "Arrêtez de payer pour des transcriptions !",
      description:
        "Bibliothèque/CLI TypeScript qui encapsule whisper.cpp pour transcrire localement, sans API payante.",
      features: {
        zeroApi: { title: "Zéro coût d’API", desc: "Fonctionne 100% en local, CPU/GPU uniquement" },
        cliApi: { title: "CLI et API", desc: "Utilisation en terminal ou par code" },
        whisper: { title: "whisper.cpp", desc: "Propulsé par whisper.cpp" },
      },
    },
    requirements: {
      title: "Configuration",
      modelTitle: "Modèle .bin",
      modelDesc: "Situé dans models/ggml-base.bin (par défaut) ou autre via --model",
      languagesTitle: "Multi-langues",
      languagesDesc: "Pris en charge via whisper.cpp : Japonais, Portugais, en, pt...",
      audioFormatsTitle: "Formats audio pris en charge",
      audioFormatsDesc: "Les formats dépendent de votre build de whisper.cpp (et du support ffmpeg)",
      audioFormatsNote: "Si un format échoue, convertissez d’abord en WAV/FLAC",
      quickTitle: "Exécution locale (rapide)",
      quickSub: "Installez les dépendances, compilez et exécutez",
      quickNote: "Transcrire sans rien installer",
    },
    cli: {
      title: "Référence CLI",
      subtitle: "Toutes les options disponibles en ligne de commande",
      options: {
        file: "Enregistrer la transcription dans un fichier",
        model: "Choisir le modèle",
        language: "Forcer la langue (ex : Japonais, Portugais, pt, en)",
        threads: "Threads CPU pour les performances",
        translate: "Traduire en anglais",
        binary: "Chemin du binaire whisper.cpp",
        help: "Afficher l’aide CLI",
      },
      syntax: "Syntaxe",
      combos: "Combinaisons courantes",
      combos1: "Transcrire le PT-BR, utiliser 8 threads, enregistrer dans un fichier :",
      combos2: "Forcer un modèle spécifique et traduire en anglais :",
    },
    api: {
      title: "API (Node.js)",
      subtitle: "Utilisez dans vos projets TypeScript/JavaScript",
      optionsTitle: "Options de transcribe()",
      optionDescriptions: {
        file: "Chemin du fichier audio",
        modelPath: "Chemin du modèle",
        language: "Code de langue",
        threads: "Nombre de threads CPU",
        translate: "Traduire en anglais",
        binaryPath: "Chemin du binaire whisper.cpp",
      },
      table: {
        option: "Option",
        type: "Type",
        required: "Obligatoire",
        description: "Description",
        yes: "Oui",
        no: "Non",
      },
    },
    notes: {
      title: "Notes",
      n1: "ts-whisper ne réimplémente pas Whisper ; il orchestre whisper.cpp.",
      n2: "Des helpers internes comme checkWhisperBinary() et checkModel() valident l’existence du binaire/modèle et renvoient les chemins.",
      n3: "Coût d’API nul — fonctionne 100% sur votre matériel avec CPU/GPU local.",
    },
  },
  de: {
    common: { and: "und" },
    hero: {
      tagline: "Hören Sie auf, für Transkriptionen zu zahlen!",
      description:
        "TypeScript-Bibliothek/CLI, die whisper.cpp einbindet, um Audio lokal zu transkribieren – ohne kostenpflichtige API.",
      features: {
        zeroApi: { title: "Keine API-Kosten", desc: "Läuft 100% lokal, nur CPU/GPU" },
        cliApi: { title: "CLI & API", desc: "Im Terminal oder per Code verwenden" },
        whisper: { title: "whisper.cpp", desc: "Angetrieben von whisper.cpp" },
      },
    },
    requirements: {
      title: "Einrichtung",
      modelTitle: "Modell .bin",
      modelDesc: "Unter models/ggml-base.bin (Standard) oder anderer Pfad via --model",
      languagesTitle: "Mehrsprachig",
      languagesDesc: "Unterstützt durch whisper.cpp: Japanisch, Portugiesisch, en, pt...",
      audioFormatsTitle: "Unterstützte Audioformate",
      audioFormatsDesc: "Formate hängen von Ihrem whisper.cpp-Build ab (und ffmpeg-Unterstützung)",
      audioFormatsNote: "Wenn ein Format fehlschlägt, zuerst nach WAV/FLAC konvertieren",
      quickTitle: "Lokal ausführen (schnell)",
      quickSub: "Abhängigkeiten installieren, builden und starten",
      quickNote: "Transkribieren ohne Installation",
    },
    cli: {
      title: "CLI-Referenz",
      subtitle: "Alle Optionen der Kommandozeile",
      options: {
        file: "Transkription in Datei speichern",
        model: "Modell auswählen",
        language: "Sprache erzwingen (z. B. Japanisch, Portugiesisch, pt, en)",
        threads: "CPU-Threads für Leistung",
        translate: "Ins Englische übersetzen",
        binary: "Pfad zur whisper.cpp-Binärdatei",
        help: "CLI-Hilfe anzeigen",
      },
      syntax: "Syntax",
      combos: "Häufige Kombinationen",
      combos1: "PT-BR transkribieren, 8 Threads, in Datei speichern:",
      combos2: "Spezifisches Modell erzwingen und ins Englische übersetzen:",
    },
    api: {
      title: "API (Node.js)",
      subtitle: "Programmgesteuert in TypeScript/JavaScript-Projekten verwenden",
      optionsTitle: "Optionen von transcribe()",
      optionDescriptions: {
        file: "Pfad zur Audiodatei",
        modelPath: "Pfad zum Modell",
        language: "Sprachcode",
        threads: "Anzahl der CPU-Threads",
        translate: "Ins Englische übersetzen",
        binaryPath: "Pfad zur whisper.cpp-Binärdatei",
      },
      table: { option: "Option", type: "Typ", required: "Erforderlich", description: "Beschreibung", yes: "Ja", no: "Nein" },
    },
    notes: {
      title: "Hinweise",
      n1: "ts-whisper implementiert Whisper nicht neu; es orchestriert whisper.cpp.",
      n2: "Interne Helfer wie checkWhisperBinary() und checkModel() prüfen Binärdatei/Modell und geben Pfade zurück.",
      n3: "Keine API-Kosten — läuft zu 100% auf Ihrer Hardware mit lokaler CPU/GPU.",
    },
  },
  it: {
    common: { and: "e" },
    hero: {
      tagline: "Smetti di pagare per le trascrizioni!",
      description:
        "Libreria/CLI TypeScript che avvolge whisper.cpp per trascrivere audio in locale, senza API a pagamento.",
      features: {
        zeroApi: { title: "Zero costi API", desc: "Funziona 100% in locale, solo CPU/GPU" },
        cliApi: { title: "CLI e API", desc: "Usa da terminale o via codice" },
        whisper: { title: "whisper.cpp", desc: "Basato su whisper.cpp" },
      },
    },
    requirements: {
      title: "Configurazione",
      modelTitle: "Modello .bin",
      modelDesc: "In models/ggml-base.bin (predefinito) o altro percorso tramite --model",
      languagesTitle: "Multilingua",
      languagesDesc: "Supportato da whisper.cpp: Giapponese, Portoghese, en, pt...",
      audioFormatsTitle: "Formati audio supportati",
      audioFormatsDesc: "I formati dipendono dal build di whisper.cpp (e dal supporto ffmpeg)",
      audioFormatsNote: "Se un formato fallisce, converti prima in WAV/FLAC",
      quickTitle: "Esecuzione locale (rapida)",
      quickSub: "Installa dipendenze, compila ed esegui",
      quickNote: "Trascrivi senza installare nulla",
    },
    cli: {
      title: "Riferimento CLI",
      subtitle: "Tutte le opzioni disponibili",
      options: {
        file: "Salva la trascrizione su file",
        model: "Scegli il modello",
        language: "Forza lingua (es.: Giapponese, Portoghese, pt, en)",
        threads: "Thread CPU per prestazioni",
        translate: "Traduci in inglese",
        binary: "Percorso del binario whisper.cpp",
        help: "Mostra aiuto CLI",
      },
      syntax: "Sintassi",
      combos: "Combinazioni comuni",
      combos1: "Trascrivere PT-BR, usando 8 thread, salvando su file:",
      combos2: "Forzare un modello specifico e tradurre in inglese:",
    },
    api: {
      title: "API (Node.js)",
      subtitle: "Usa programmaticamente nei tuoi progetti TypeScript/JavaScript",
      optionsTitle: "Opzioni di transcribe()",
      optionDescriptions: {
        file: "Percorso del file audio",
        modelPath: "Percorso del modello",
        language: "Codice lingua",
        threads: "Numero di thread CPU",
        translate: "Traduci in inglese",
        binaryPath: "Percorso del binario whisper.cpp",
      },
      table: { option: "Opzione", type: "Tipo", required: "Obbligatorio", description: "Descrizione", yes: "Sì", no: "No" },
    },
    notes: {
      title: "Note",
      n1: "ts-whisper non reimplementa Whisper; orchestra whisper.cpp.",
      n2: "Helper interni come checkWhisperBinary() e checkModel() verificano binario/modello e restituiscono i percorsi.",
      n3: "Costo API zero — funziona al 100% sull’hardware locale con CPU/GPU.",
    },
  },
  nl: {
    common: { and: "en" },
    hero: {
      tagline: "Stop met betalen voor transcripties!",
      description:
        "TypeScript-bibliotheek/CLI die whisper.cpp omhult om lokaal audio te transcriberen, zonder betaalde API.",
      features: {
        zeroApi: { title: "Geen API-kosten", desc: "Draait 100% lokaal, alleen CPU/GPU" },
        cliApi: { title: "CLI & API", desc: "Gebruik in terminal of via code" },
        whisper: { title: "whisper.cpp", desc: "Aangedreven door whisper.cpp" },
      },
    },
    requirements: {
      title: "Instellen",
      modelTitle: "Model .bin",
      modelDesc: "In models/ggml-base.bin (standaard) of ander pad via --model",
      languagesTitle: "Meertalig",
      languagesDesc: "Ondersteund via whisper.cpp: Japans, Portugees, en, pt...",
      audioFormatsTitle: "Ondersteunde audioformaten",
      audioFormatsDesc: "Formaten hangen af van je whisper.cpp-build (en ffmpeg-ondersteuning)",
      audioFormatsNote: "Als een formaat faalt, converteer eerst naar WAV/FLAC",
      quickTitle: "Lokaal draaien (snel)",
      quickSub: "Installeer afhankelijkheden, build en run",
      quickNote: "Transcribeer zonder iets te installeren",
    },
    cli: {
      title: "CLI Referentie",
      subtitle: "Alle beschikbare commandoregels",
      options: {
        file: "Transcriptie naar bestand opslaan",
        model: "Model kiezen",
        language: "Taal forceren (bijv. Japans, Portugees, pt, en)",
        threads: "CPU-threads voor prestaties",
        translate: "Naar Engels vertalen",
        binary: "Pad naar whisper.cpp-binary",
        help: "CLI-hulp weergeven",
      },
      syntax: "Syntaxis",
      combos: "Veelgebruikte combinaties",
      combos1: "PT-BR transcriberen, 8 threads, naar bestand opslaan:",
      combos2: "Specifiek model forceren en naar Engels vertalen:",
    },
    api: {
      title: "API (Node.js)",
      subtitle: "Programmeerbaar gebruiken in TypeScript/JavaScript-projecten",
      optionsTitle: "Opties van transcribe()",
      optionDescriptions: {
        file: "Pad naar audiobestand",
        modelPath: "Pad naar model",
        language: "Taalcode",
        threads: "Aantal CPU-threads",
        translate: "Naar Engels vertalen",
        binaryPath: "Pad naar whisper.cpp-binary",
      },
      table: { option: "Optie", type: "Type", required: "Vereist", description: "Beschrijving", yes: "Ja", no: "Nee" },
    },
    notes: {
      title: "Notities",
      n1: "ts-whisper herimplementeert Whisper niet; het orkestreert whisper.cpp.",
      n2: "Interne helpers zoals checkWhisperBinary() en checkModel() valideren binary/model en geven paden terug.",
      n3: "Geen API-kosten — draait volledig op je hardware met lokale CPU/GPU.",
    },
  },
  pl: {
    common: { and: "i" },
    hero: {
      tagline: "Przestań płacić za transkrypcje!",
      description:
        "Biblioteka/CLI w TypeScript, która opakowuje whisper.cpp, aby transkrybować dźwięk lokalnie, bez płatnego API.",
      features: {
        zeroApi: { title: "Zero kosztów API", desc: "Działa w 100% lokalnie, tylko CPU/GPU" },
        cliApi: { title: "CLI i API", desc: "Używaj w terminalu lub programistycznie" },
        whisper: { title: "whisper.cpp", desc: "Oparte na whisper.cpp" },
      },
    },
    requirements: {
      title: "Konfiguracja",
      modelTitle: "Model .bin",
      modelDesc: "W models/ggml-base.bin (domyślnie) lub inna ścieżka przez --model",
      languagesTitle: "Wielo­języczność",
      languagesDesc: "Obsługiwane przez whisper.cpp: Japoński, Portugalski, en, pt...",
      audioFormatsTitle: "Obsługiwane formaty audio",
      audioFormatsDesc: "Formaty zależą od kompilacji whisper.cpp (i wsparcia ffmpeg)",
      audioFormatsNote: "Jeśli format zawiedzie, najpierw przekonwertuj do WAV/FLAC",
      quickTitle: "Uruchom lokalnie (szybko)",
      quickSub: "Zainstaluj zależności, zbuduj i uruchom",
      quickNote: "Transkrypcja bez instalowania czegokolwiek",
    },
    cli: {
      title: "Dokumentacja CLI",
      subtitle: "Wszystkie opcje linii poleceń",
      options: {
        file: "Zapisz transkrypcję do pliku",
        model: "Wybierz model",
        language: "Wymuś język (np. Japoński, Portugalski, pt, en)",
        threads: "Wątki CPU dla wydajności",
        translate: "Tłumacz na angielski",
        binary: "Ścieżka do binarnego whisper.cpp",
        help: "Pokaż pomoc CLI",
      },
      syntax: "Składnia",
      combos: "Częste kombinacje",
      combos1: "Transkrypcja PT-BR, 8 wątków, zapis do pliku:",
      combos2: "Wymuś konkretny model i tłumacz na angielski:",
    },
    api: {
      title: "API (Node.js)",
      subtitle: "Używaj programistycznie w projektach TypeScript/JavaScript",
      optionsTitle: "Opcje transcribe()",
      optionDescriptions: {
        file: "Ścieżka do pliku audio",
        modelPath: "Ścieżka do modelu",
        language: "Kod języka",
        threads: "Liczba wątków CPU",
        translate: "Tłumacz na angielski",
        binaryPath: "Ścieżka do binarnego whisper.cpp",
      },
      table: { option: "Opcja", type: "Typ", required: "Wymagane", description: "Opis", yes: "Tak", no: "Nie" },
    },
    notes: {
      title: "Uwagi",
      n1: "ts-whisper nie implementuje ponownie Whisper; orkiestruje whisper.cpp.",
      n2: "Pomocnicy jak checkWhisperBinary() i checkModel() weryfikują binaria/model i zwracają ścieżki.",
      n3: "Zero kosztów API — działa w 100% na twoim sprzęcie z lokalnym CPU/GPU.",
    },
  },
  ru: {
    common: { and: "и" },
    hero: {
      tagline: "Перестаньте платить за транскрипции!",
      description:
        "Библиотека/CLI на TypeScript, оборачивающая whisper.cpp для локальной транскрипции аудио без платного API.",
      features: {
        zeroApi: { title: "Никаких расходов на API", desc: "Работает полностью локально, только CPU/GPU" },
        cliApi: { title: "CLI и API", desc: "Использование в терминале или программно" },
        whisper: { title: "whisper.cpp", desc: "Работает на whisper.cpp" },
      },
    },
    requirements: {
      title: "Настройка",
      modelTitle: "Модель .bin",
      modelDesc: "Находится в models/ggml-base.bin (по умолчанию) или другой путь через --model",
      languagesTitle: "Многоязычность",
      languagesDesc: "Поддерживается whisper.cpp: японский, португальский, en, pt...",
      audioFormatsTitle: "Поддерживаемые аудиоформаты",
      audioFormatsDesc: "Форматы зависят от сборки whisper.cpp (и поддержки ffmpeg)",
      audioFormatsNote: "Если формат не работает, сначала конвертируйте в WAV/FLAC",
      quickTitle: "Локальный запуск (быстро)",
      quickSub: "Установите зависимости, соберите и запустите",
      quickNote: "Транскрибируйте без установки",
    },
    cli: {
      title: "Справочник CLI",
      subtitle: "Все доступные параметры командной строки",
      options: {
        file: "Сохранить транскрипцию в файл",
        model: "Выбрать модель",
        language: "Принудительно выбрать язык (например, японский, португальский, pt, en)",
        threads: "Потоки CPU для производительности",
        translate: "Перевести на английский",
        binary: "Путь к бинарнику whisper.cpp",
        help: "Показать помощь CLI",
      },
      syntax: "Синтаксис",
      combos: "Частые комбинации",
      combos1: "Транскрипция PT-BR, 8 потоков, сохранение в файл:",
      combos2: "Принудительно выбрать модель и перевести на английский:",
    },
    api: {
      title: "API (Node.js)",
      subtitle: "Использование программно в ваших проектах TypeScript/JavaScript",
      optionsTitle: "Опции transcribe()",
      optionDescriptions: {
        file: "Путь к аудиофайлу",
        modelPath: "Путь к модели",
        language: "Код языка",
        threads: "Количество потоков CPU",
        translate: "Перевести на английский",
        binaryPath: "Путь к бинарнику whisper.cpp",
      },
      table: { option: "Параметр", type: "Тип", required: "Обязателен", description: "Описание", yes: "Да", no: "Нет" },
    },
    notes: {
      title: "Примечания",
      n1: "ts-whisper не пере реализует Whisper; он оркестрирует whisper.cpp.",
      n2: "Вспомогательные функции checkWhisperBinary() и checkModel() проверяют наличие бинарника/модели и возвращают пути.",
      n3: "Нулевые расходы на API — работает полностью на вашем оборудовании с локальным CPU/GPU.",
    },
  },
  ar: {
    common: { and: "و" },
    hero: {
      tagline: "توقف عن الدفع مقابل التفريغ!",
      description:
        "مكتبة/CLI بـ TypeScript تغلّف whisper.cpp لتفريغ الصوت محليًا، دون API مدفوع.",
      features: {
        zeroApi: { title: "بدون تكلفة API", desc: "يعمل محليًا بالكامل، فقط CPU/GPU" },
        cliApi: { title: "CLI و API", desc: "استخدمه في الطرفية أو برمجيًا" },
        whisper: { title: "whisper.cpp", desc: "مدعوم بواسطة whisper.cpp" },
      },
    },
    requirements: {
      title: "الإعداد",
      modelTitle: "نموذج .bin",
      modelDesc: "في models/ggml-base.bin (الافتراضي) أو مسار آخر عبر --model",
      languagesTitle: "متعدد اللغات",
      languagesDesc: "مدعوم عبر whisper.cpp: اليابانية، البرتغالية، en، pt...",
      audioFormatsTitle: "تنسيقات الصوت المدعومة",
      audioFormatsDesc: "تعتمد التنسيقات على بناء whisper.cpp (وما إذا كان ffmpeg مدعومًا)",
      audioFormatsNote: "إذا فشل تنسيق، حوّله أولاً إلى WAV/FLAC",
      quickTitle: "تشغيل محلي (سريع)",
      quickSub: "ثبّت الاعتمادات، قم بالبناء وشغّل",
      quickNote: "تفريغ دون تثبيت أي شيء",
    },
    cli: {
      title: "مرجع CLI",
      subtitle: "كل خيارات سطر الأوامر المتاحة",
      options: {
        file: "حفظ التفريغ في ملف",
        model: "اختر النموذج",
        language: "فرض اللغة (مثل: اليابانية، البرتغالية، pt، en)",
        threads: "خيوط CPU للأداء",
        translate: "ترجمة إلى الإنجليزية",
        binary: "مسار ملف whisper.cpp التنفيذي",
        help: "إظهار مساعدة CLI",
      },
      syntax: "البنية",
      combos: "تركيبات شائعة",
      combos1: "تفريغ PT-BR، باستخدام 8 خيوط، حفظ إلى ملف:",
      combos2: "فرض نموذج محدد والترجمة إلى الإنجليزية:",
    },
    api: {
      title: "API (Node.js)",
      subtitle: "استخدمه برمجيًا في مشاريع TypeScript/JavaScript",
      optionsTitle: "خيارات transcribe()",
      optionDescriptions: {
        file: "مسار ملف الصوت",
        modelPath: "مسار النموذج",
        language: "رمز اللغة",
        threads: "عدد خيوط CPU",
        translate: "ترجمة إلى الإنجليزية",
        binaryPath: "مسار ملف whisper.cpp التنفيذي",
      },
      table: {
        option: "خيار",
        type: "نوع",
        required: "مطلوب",
        description: "الوصف",
        yes: "نعم",
        no: "لا",
      },
    },
    notes: {
      title: "ملاحظات",
      n1: "ts-whisper لا يعيد تنفيذ Whisper؛ إنه ينظم whisper.cpp.",
      n2: "يتحقق المساعدان checkWhisperBinary() و checkModel() من وجود الملف التنفيذي/النموذج ويعيدان المسارات.",
      n3: "لا توجد تكلفة API — يعمل 100% على جهازك مع CPU/GPU محلي.",
    },
  },
  zh: {
    common: { and: "和" },
    hero: {
      tagline: "停止为转录付费！",
      description:
        "封装 whisper.cpp 的 TypeScript 库/CLI，可在本地转录音频，无需付费 API。",
      features: {
        zeroApi: { title: "零 API 成本", desc: "100% 本地运行，仅需 CPU/GPU" },
        cliApi: { title: "CLI 与 API", desc: "可在终端或以编程方式使用" },
        whisper: { title: "whisper.cpp", desc: "由 whisper.cpp 驱动" },
      },
    },
    requirements: {
      title: "配置",
      modelTitle: "模型 .bin",
      modelDesc: "位于 models/ggml-base.bin（默认）或通过 --model 指定其他路径",
      languagesTitle: "多语言",
      languagesDesc: "通过 whisper.cpp 支持：日语、葡萄牙语、en、pt...",
      audioFormatsTitle: "支持的音频格式",
      audioFormatsDesc: "格式取决于你的 whisper.cpp 构建（以及是否支持 ffmpeg）",
      audioFormatsNote: "如果格式失败，请先转换为 WAV/FLAC",
      quickTitle: "本地运行（快速）",
      quickSub: "安装依赖、构建并运行",
      quickNote: "无需安装即可进行转录",
    },
    cli: {
      title: "CLI 参考",
      subtitle: "所有可用的命令行选项",
      options: {
        file: "将转录保存到文件",
        model: "选择模型",
        language: "强制语言（例如：日语、葡萄牙语、pt、en）",
        threads: "用于性能的 CPU 线程数",
        translate: "翻译成英语",
        binary: "whisper.cpp 可执行文件路径",
        help: "显示 CLI 帮助",
      },
      syntax: "语法",
      combos: "常用组合",
      combos1: "转录 PT-BR，使用 8 线程，保存到文件：",
      combos2: "强制使用特定模型并翻译成英语：",
    },
    api: {
      title: "API（Node.js）",
      subtitle: "在你的 TypeScript/JavaScript 项目中以编程方式使用",
      optionsTitle: "transcribe() 的选项",
      optionDescriptions: {
        file: "音频文件路径",
        modelPath: "模型路径",
        language: "语言代码",
        threads: "CPU 线程数",
        translate: "翻译成英语",
        binaryPath: "whisper.cpp 可执行文件路径",
      },
      table: { option: "选项", type: "类型", required: "必需", description: "描述", yes: "是", no: "否" },
    },
    notes: {
      title: "备注",
      n1: "ts-whisper 不重新实现 Whisper；它只是编排 whisper.cpp。",
      n2: "内部助手如 checkWhisperBinary() 和 checkModel() 会验证可执行文件/模型并返回路径。",
      n3: "零 API 成本——完全在你的硬件上本地运行 CPU/GPU。",
    },
  },
  ja: {
    common: { and: "と" },
    hero: {
      tagline: "文字起こしにお金を払うのはやめましょう！",
      description:
        "whisper.cpp をラップする TypeScript のライブラリ/CLI。有料 API なしでローカルで音声を文字起こしできます。",
      features: {
        zeroApi: { title: "APIコストゼロ", desc: "100%ローカルで動作、CPU/GPUのみ" },
        cliApi: { title: "CLI と API", desc: "ターミナルまたはプログラムから利用可能" },
        whisper: { title: "whisper.cpp", desc: "whisper.cpp によって動作" },
      },
    },
    requirements: {
      title: "セットアップ",
      modelTitle: "モデル .bin",
      modelDesc: "models/ggml-base.bin（デフォルト）または --model で別パス",
      languagesTitle: "多言語",
      languagesDesc: "whisper.cpp によりサポート：日本語、ポルトガル語、en、pt...",
      audioFormatsTitle: "対応オーディオ形式",
      audioFormatsDesc: "形式は whisper.cpp のビルド（ffmpeg の有無）に依存します",
      audioFormatsNote: "形式が失敗する場合は、まず WAV/FLAC に変換してください",
      quickTitle: "ローカルで実行（簡単）",
      quickSub: "依存関係をインストール、ビルドして実行",
      quickNote: "何もインストールせずに文字起こしを実行",
    },
    cli: {
      title: "CLI リファレンス",
      subtitle: "利用可能なすべてのコマンドラインオプション",
      options: {
        file: "文字起こしをファイルに保存",
        model: "モデルを選択",
        language: "言語を強制（例：日本語、ポルトガル語、pt、en）",
        threads: "パフォーマンスのための CPU スレッド数",
        translate: "英語に翻訳",
        binary: "whisper.cpp のバイナリのパス",
        help: "CLI ヘルプを表示",
      },
      syntax: "構文",
      combos: "よく使う組み合わせ",
      combos1: "PT-BR を文字起こし、8 スレッド、ファイルに保存：",
      combos2: "特定のモデルを強制し英語に翻訳：",
    },
    api: {
      title: "API（Node.js）",
      subtitle: "TypeScript/JavaScript プロジェクトでプログラム的に使用",
      optionsTitle: "transcribe() のオプション",
      optionDescriptions: {
        file: "音声ファイルのパス",
        modelPath: "モデルのパス",
        language: "言語コード",
        threads: "CPU スレッド数",
        translate: "英語に翻訳",
        binaryPath: "whisper.cpp のバイナリのパス",
      },
      table: { option: "オプション", type: "タイプ", required: "必須", description: "説明", yes: "はい", no: "いいえ" },
    },
    notes: {
      title: "注意",
      n1: "ts-whisper は Whisper を再実装しません。whisper.cpp をオーケストレーションします。",
      n2: "checkWhisperBinary() と checkModel() の内部ヘルパーがバイナリ/モデルの存在を検証し、パスを返します。",
      n3: "API コストゼロ — ローカルの CPU/GPU で 100% 実行します。",
    },
  },
  ko: {
    common: { and: "그리고" },
    hero: {
      tagline: "이제 전사에 돈을 쓰지 마세요!",
      description:
        "whisper.cpp를 감싼 TypeScript 라이브러리/CLI로 유료 API 없이 로컬에서 오디오를 전사할 수 있습니다.",
      features: {
        zeroApi: { title: "API 비용 없음", desc: "100% 로컬 실행, CPU/GPU만 사용" },
        cliApi: { title: "CLI & API", desc: "터미널 또는 코드로 사용" },
        whisper: { title: "whisper.cpp", desc: "whisper.cpp 기반" },
      },
    },
    requirements: {
      title: "설정",
      modelTitle: "모델 .bin",
      modelDesc: "models/ggml-base.bin(기본) 또는 --model로 다른 경로",
      languagesTitle: "다국어",
      languagesDesc: "whisper.cpp로 지원: 일본어, 포르투갈어, en, pt...",
      audioFormatsTitle: "지원 오디오 형식",
      audioFormatsDesc: "형식은 whisper.cpp 빌드(및 ffmpeg 지원 여부)에 따라 다릅니다",
      audioFormatsNote: "형식이 실패하면 먼저 WAV/FLAC으로 변환하세요",
      quickTitle: "로컬 실행(빠름)",
      quickSub: "의존성 설치, 빌드 및 실행",
      quickNote: "아무것도 설치하지 않고 전사 실행",
    },
    cli: {
      title: "CLI 레퍼런스",
      subtitle: "사용 가능한 모든 명령줄 옵션",
      options: {
        file: "전사를 파일로 저장",
        model: "모델 선택",
        language: "언어 강제(예: 일본어, 포르투갈어, pt, en)",
        threads: "성능을 위한 CPU 스레드 수",
        translate: "영어로 번역",
        binary: "whisper.cpp 바이너리 경로",
        help: "CLI 도움말 표시",
      },
      syntax: "구문",
      combos: "자주 쓰는 조합",
      combos1: "PT-BR 전사, 8 스레드, 파일로 저장:",
      combos2: "특정 모델 강제 및 영어로 번역:",
    },
    api: {
      title: "API (Node.js)",
      subtitle: "TypeScript/JavaScript 프로젝트에서 프로그래밍적으로 사용",
      optionsTitle: "transcribe() 옵션",
      optionDescriptions: {
        file: "오디오 파일 경로",
        modelPath: "모델 경로",
        language: "언어 코드",
        threads: "CPU 스레드 수",
        translate: "영어로 번역",
        binaryPath: "whisper.cpp 바이너리 경로",
      },
      table: { option: "옵션", type: "유형", required: "필수", description: "설명", yes: "예", no: "아니오" },
    },
    notes: {
      title: "참고",
      n1: "ts-whisper는 Whisper를 재구현하지 않습니다. whisper.cpp를 오케스트레이션합니다.",
      n2: "checkWhisperBinary() 및 checkModel() 같은 내부 헬퍼가 바이너리/모델을 검증하고 경로를 반환합니다.",
      n3: "API 비용 없음 — 로컬 CPU/GPU로 100% 실행합니다.",
    },
  },
  hi: {
    common: { and: "और" },
    hero: {
      tagline: "ट्रांसक्रिप्शन के लिए भुगतान करना बंद करें!",
      description:
        "TypeScript लाइब्रेरी/CLI जो whisper.cpp को रैप करती है ताकि आप बिना पेड API के स्थानीय रूप से ऑडियो ट्रांसक्राइब कर सकें।",
      features: {
        zeroApi: { title: "API लागत शून्य", desc: "100% लोकल, केवल CPU/GPU" },
        cliApi: { title: "CLI और API", desc: "टर्मिनल या कोड के माध्यम से उपयोग करें" },
        whisper: { title: "whisper.cpp", desc: "whisper.cpp द्वारा संचालित" },
      },
    },
    requirements: {
      title: "सेटअप",
      modelTitle: "मॉडल .bin",
      modelDesc: "models/ggml-base.bin (डिफ़ॉल्ट) में या --model के माध्यम से अन्य पथ",
      languagesTitle: "बहु-भाषा",
      languagesDesc: "whisper.cpp के माध्यम से समर्थित: जापानी, पुर्तगाली, en, pt...",
      audioFormatsTitle: "समर्थित ऑडियो फ़ॉर्मेट",
      audioFormatsDesc: "फ़ॉर्मेट आपके whisper.cpp बिल्ड पर निर्भर करते हैं (और ffmpeg सपोर्ट पर)",
      audioFormatsNote: "यदि कोई फ़ॉर्मेट विफल हो, तो पहले WAV/FLAC में बदलें",
      quickTitle: "लोकल रन (तेज़)",
      quickSub: "डिपेंडेंसी इंस्टॉल करें, बिल्ड करें और चलाएँ",
      quickNote: "कुछ भी इंस्टॉल किए बिना ट्रांसक्राइब करें",
    },
    cli: {
      title: "CLI संदर्भ",
      subtitle: "सभी कमांड-लाइन विकल्प उपलब्ध",
      options: {
        file: "ट्रांसक्रिप्शन को फ़ाइल में सहेजें",
        model: "मॉडल चुनें",
        language: "भाषा को बाध्य करें (जैसे जापानी, पुर्तगाली, pt, en)",
        threads: "प्रदर्शन के लिए CPU थ्रेड्स",
        translate: "अंग्रेज़ी में अनुवाद करें",
        binary: "whisper.cpp बाइनरी का पथ",
        help: "CLI सहायता दिखाएँ",
      },
      syntax: "वाक्य रचना",
      combos: "सामान्य संयोजन",
      combos1: "PT-BR को ट्रांसक्राइब करें, 8 थ्रेड्स, फ़ाइल में सहेजें:",
      combos2: "विशिष्ट मॉडल बाध्य करें और अंग्रेज़ी में अनुवाद करें:",
    },
    api: {
      title: "API (Node.js)",
      subtitle: "अपने TypeScript/JavaScript प्रोजेक्ट्स में प्रोग्रामेटिक रूप से उपयोग करें",
      optionsTitle: "transcribe() के विकल्प",
      optionDescriptions: {
        file: "ऑडियो फ़ाइल का पथ",
        modelPath: "मॉडल का पथ",
        language: "भाषा कोड",
        threads: "CPU थ्रेड्स की संख्या",
        translate: "अंग्रेज़ी में अनुवाद करें",
        binaryPath: "whisper.cpp बाइनरी का पथ",
      },
      table: { option: "विकल्प", type: "प्रकार", required: "आवश्यक", description: "विवरण", yes: "हाँ", no: "नहीं" },
    },
    notes: {
      title: "नोट्स",
      n1: "ts-whisper Whisper को पुनः लागू नहीं करता; यह whisper.cpp को व्यवस्थित करता है।",
      n2: "checkWhisperBinary() और checkModel() जैसे हेल्पर बाइनरी/मॉडल की जाँच करते हैं और पथ लौटाते हैं।",
      n3: "API लागत शून्य — आपकी स्थानीय CPU/GPU पर 100% चलता है।",
    },
  },
  bn: {
    common: { and: "এবং" },
    hero: {
      tagline: "ট্রান্সক্রিপশনের জন্য টাকা খরচ করবেন না!",
      description:
        "TypeScript লাইব্রেরি/CLI যা whisper.cpp মোড়কে রাখে, যাতে অর্থপ্রদত্ত API ছাড়াই লোকালভাবে অডিও ট্রান্সক্রাইব করা যায়।",
      features: {
        zeroApi: { title: "API খরচ নেই", desc: "১০০% লোকাল, শুধুমাত্র CPU/GPU" },
        cliApi: { title: "CLI ও API", desc: "টার্মিনাল বা কোডের মাধ্যমে ব্যবহার করুন" },
        whisper: { title: "whisper.cpp", desc: "whisper.cpp দ্বারা চালিত" },
      },
    },
    requirements: {
      title: "সেটআপ",
      modelTitle: "মডেল .bin",
      modelDesc: "models/ggml-base.bin (ডিফল্ট) এ বা --model এর মাধ্যমে অন্য পথ",
      languagesTitle: "মাল্টি-ভাষা",
      languagesDesc: "whisper.cpp এর মাধ্যমে সমর্থিত: জাপানি, পর্তুগিজ, en, pt...",
      audioFormatsTitle: "সমর্থিত অডিও ফরম্যাট",
      audioFormatsDesc: "ফরম্যাটগুলি নির্ভর করে আপনার whisper.cpp বিল্ডের উপর (এবং ffmpeg সমর্থন)",
      audioFormatsNote: "কোনও ফরম্যাট ব্যর্থ হলে, প্রথমে WAV/FLAC এ রূপান্তর করুন",
      quickTitle: "লোকাল রান (দ্রুত)",
      quickSub: "ডিপেনডেন্সি ইন্সটল করুন, বিল্ড করুন এবং চালান",
      quickNote: "কিছুই ইন্সটল না করেই ট্রান্সক্রাইব করুন",
    },
    cli: {
      title: "CLI রেফারেন্স",
      subtitle: "সকল কমান্ড-লাইন অপশন",
      options: {
        file: "ট্রান্সক্রিপশন ফাইলে সংরক্ষণ করুন",
        model: "মডেল নির্বাচন করুন",
        language: "ভাষা বাধ্য করুন (যেমন জাপানি, পর্তুগিজ, pt, en)",
        threads: "পারফরম্যান্সের জন্য CPU থ্রেড",
        translate: "ইংরেজিতে অনুবাদ করুন",
        binary: "whisper.cpp বাইনারির পথ",
        help: "CLI সহায়তা দেখান",
      },
      syntax: "সিনট্যাক্স",
      combos: "সাধারণ কম্বিনেশন",
      combos1: "PT-BR ট্রান্সক্রিপশন, ৮ থ্রেড, ফাইলে সংরক্ষণ:",
      combos2: "নির্দিষ্ট মডেল বাধ্য করুন এবং ইংরেজিতে অনুবাদ করুন:",
    },
    api: {
      title: "API (Node.js)",
      subtitle: "আপনার TypeScript/JavaScript প্রোজেক্টে প্রোগ্রামেটিকভাবে ব্যবহার করুন",
      optionsTitle: "transcribe() এর অপশন",
      optionDescriptions: {
        file: "অডিও ফাইলের পথ",
        modelPath: "মডেলের পথ",
        language: "ভাষা কোড",
        threads: "CPU থ্রেডের সংখ্যা",
        translate: "ইংরেজিতে অনুবাদ করুন",
        binaryPath: "whisper.cpp বাইনারির পথ",
      },
      table: { option: "অপশন", type: "ধরন", required: "প্রয়োজনীয়", description: "বিবরণ", yes: "হ্যাঁ", no: "না" },
    },
    notes: {
      title: "নোট",
      n1: "ts-whisper Whisper পুনঃবাস্তবায়ন করে না; এটি whisper.cpp কে সংগঠিত করে।",
      n2: "checkWhisperBinary() এবং checkModel() এর মতো হেল্পার বাইনারি/মডেল যাচাই করে এবং পথ রিটার্ন করে।",
      n3: "API খরচ শূন্য — আপনার হার্ডওয়্যারে ১০০% লোকাল CPU/GPU দিয়ে চলে।",
    },
  },
  vi: {
    common: { and: "và" },
    hero: {
      tagline: "Ngừng trả tiền cho việc chuyển âm!",
      description:
        "Thư viện/CLI TypeScript bao bọc whisper.cpp để bạn chuyển âm cục bộ, không cần API trả phí.",
      features: {
        zeroApi: { title: "Không tốn chi phí API", desc: "Chạy 100% cục bộ, chỉ CPU/GPU" },
        cliApi: { title: "CLI & API", desc: "Dùng trong terminal hoặc bằng mã" },
        whisper: { title: "whisper.cpp", desc: "Được hỗ trợ bởi whisper.cpp" },
      },
    },
    requirements: {
      title: "Thiết lập",
      modelTitle: "Mô hình .bin",
      modelDesc: "Nằm ở models/ggml-base.bin (mặc định) hoặc đường dẫn khác qua --model",
      languagesTitle: "Đa ngôn ngữ",
      languagesDesc: "Hỗ trợ qua whisper.cpp: Tiếng Nhật, Tiếng Bồ Đào Nha, en, pt...",
      audioFormatsTitle: "Định dạng âm thanh hỗ trợ",
      audioFormatsDesc: "Phụ thuộc vào bản build whisper.cpp (và hỗ trợ ffmpeg)",
      audioFormatsNote: "Nếu định dạng lỗi, hãy chuyển sang WAV/FLAC trước",
      quickTitle: "Chạy cục bộ (nhanh)",
      quickSub: "Cài phụ thuộc, build và chạy",
      quickNote: "Chuyển âm mà không cần cài đặt gì",
    },
    cli: {
      title: "Tham chiếu CLI",
      subtitle: "Tất cả các tùy chọn dòng lệnh",
      options: {
        file: "Lưu chuyển âm vào tệp",
        model: "Chọn mô hình",
        language: "Ép ngôn ngữ (ví dụ: Tiếng Nhật, Tiếng Bồ Đào Nha, pt, en)",
        threads: "Số luồng CPU để tăng hiệu năng",
        translate: "Dịch sang tiếng Anh",
        binary: "Đường dẫn binary whisper.cpp",
        help: "Hiển thị trợ giúp CLI",
      },
      syntax: "Cú pháp",
      combos: "Kết hợp thường dùng",
      combos1: "Chuyển âm PT-BR, dùng 8 luồng, lưu vào tệp:",
      combos2: "Ép mô hình cụ thể và dịch sang tiếng Anh:",
    },
    api: {
      title: "API (Node.js)",
      subtitle: "Dùng theo chương trình trong dự án TypeScript/JavaScript của bạn",
      optionsTitle: "Tùy chọn của transcribe()",
      optionDescriptions: {
        file: "Đường dẫn tệp âm thanh",
        modelPath: "Đường dẫn mô hình",
        language: "Mã ngôn ngữ",
        threads: "Số luồng CPU",
        translate: "Dịch sang tiếng Anh",
        binaryPath: "Đường dẫn binary whisper.cpp",
      },
      table: { option: "Tùy chọn", type: "Kiểu", required: "Bắt buộc", description: "Mô tả", yes: "Có", no: "Không" },
    },
    notes: {
      title: "Ghi chú",
      n1: "ts-whisper không tái triển khai Whisper; nó điều phối whisper.cpp.",
      n2: "Các helper nội bộ như checkWhisperBinary() và checkModel() xác thực binary/mô hình và trả về đường dẫn.",
      n3: "Chi phí API bằng 0 — chạy 100% trên phần cứng của bạn với CPU/GPU cục bộ.",
    },
  },
  tr: {
    common: { and: "ve" },
    hero: {
      tagline: "Transkripsiyon için ödeme yapmayı bırakın!",
      description:
        "whisper.cpp'yi saran TypeScript kütüphanesi/CLI ile ücretli API olmadan yerel olarak ses transkribe edin.",
      features: {
        zeroApi: { title: "API maliyeti yok", desc: "Tamamen yerel çalışır, sadece CPU/GPU" },
        cliApi: { title: "CLI ve API", desc: "Terminalde veya programatik olarak kullanın" },
        whisper: { title: "whisper.cpp", desc: "whisper.cpp tarafından desteklenir" },
      },
    },
    requirements: {
      title: "Kurulum",
      modelTitle: "Model .bin",
      modelDesc: "models/ggml-base.bin (varsayılan) veya --model ile başka bir yol",
      languagesTitle: "Çok dilli",
      languagesDesc: "whisper.cpp üzerinden desteklenir: Japonca, Portekizce, en, pt...",
      audioFormatsTitle: "Desteklenen ses formatları",
      audioFormatsDesc: "Formatlar whisper.cpp derlemenize (ve ffmpeg desteğine) bağlıdır",
      audioFormatsNote: "Bir format başarısız olursa önce WAV/FLAC'a dönüştürün",
      quickTitle: "Yerel Çalıştır (hızlı)",
      quickSub: "Bağımlılıkları kurun, build edin ve çalıştırın",
      quickNote: "Hiçbir şey kurmadan transkripsiyon yapın",
    },
    cli: {
      title: "CLI Referansı",
      subtitle: "Mevcut tüm komut satırı seçenekleri",
      options: {
        file: "Transkripsiyonu dosyaya kaydet",
        model: "Model seç",
        language: "Dili zorla (ör.: Japonca, Portekizce, pt, en)",
        threads: "Performans için CPU iş parçacığı",
        translate: "İngilizceye çevir",
        binary: "whisper.cpp ikili dosyası yolu",
        help: "CLI yardımı göster",
      },
      syntax: "Sözdizimi",
      combos: "Sık kombinasyonlar",
      combos1: "PT-BR transkript, 8 iş parçacığı, dosyaya kaydet:",
      combos2: "Belirli bir modeli zorla ve İngilizceye çevir:",
    },
    api: {
      title: "API (Node.js)",
      subtitle: "TypeScript/JavaScript projelerinde programatik olarak kullanın",
      optionsTitle: "transcribe() seçenekleri",
      optionDescriptions: {
        file: "Ses dosyası yolu",
        modelPath: "Model yolu",
        language: "Dil kodu",
        threads: "CPU iş parçacığı sayısı",
        translate: "İngilizceye çevir",
        binaryPath: "whisper.cpp ikili dosyası yolu",
      },
      table: { option: "Seçenek", type: "Tür", required: "Gerekli", description: "Açıklama", yes: "Evet", no: "Hayır" },
    },
    notes: {
      title: "Notlar",
      n1: "ts-whisper, Whisper'ı yeniden uygulamaz; whisper.cpp'yi orkestre eder.",
      n2: "checkWhisperBinary() ve checkModel() gibi yardımcılar, ikili/modeli doğrular ve yolları döndürür.",
      n3: "API maliyeti yok — yerel CPU/GPU ile %100 kendi donanımınızda çalışır.",
    },
  },
  th: {
    common: { and: "และ" },
    hero: {
      tagline: "หยุดจ่ายเงินสำหรับการถอดความ!",
      description:
        "ไลบรารี/CLI TypeScript ครอบ whisper.cpp เพื่อถอดเสียงแบบโลคัล โดยไม่ต้องใช้ API เสียเงิน",
      features: {
        zeroApi: { title: "ไม่มีค่าใช้จ่าย API", desc: "ทำงานแบบโลคัล 100% ใช้เพียง CPU/GPU" },
        cliApi: { title: "CLI และ API", desc: "ใช้ในเทอร์มินัลหรือผ่านโค้ด" },
        whisper: { title: "whisper.cpp", desc: "ขับเคลื่อนโดย whisper.cpp" },
      },
    },
    requirements: {
      title: "ตั้งค่า",
      modelTitle: "โมเดล .bin",
      modelDesc: "อยู่ที่ models/ggml-base.bin (ค่าเริ่มต้น) หรือเส้นทางอื่นผ่าน --model",
      languagesTitle: "หลายภาษา",
      languagesDesc: "รองรับโดย whisper.cpp: ญี่ปุ่น, โปรตุเกส, en, pt...",
      audioFormatsTitle: "รูปแบบเสียงที่รองรับ",
      audioFormatsDesc: "รูปแบบขึ้นอยู่กับบิลด์ whisper.cpp (และการรองรับ ffmpeg)",
      audioFormatsNote: "หากรูปแบบล้มเหลว ให้แปลงเป็น WAV/FLAC ก่อน",
      quickTitle: "รันแบบโลคัล (เร็ว)",
      quickSub: "ติดตั้ง dependencies สร้างและรัน",
      quickNote: "ถอดความโดยไม่ต้องติดตั้งอะไร",
    },
    cli: {
      title: "คู่มือ CLI",
      subtitle: "ตัวเลือกบรรทัดคำสั่งทั้งหมด",
      options: {
        file: "บันทึกการถอดความเป็นไฟล์",
        model: "เลือกโมเดล",
        language: "บังคับภาษา (เช่น ญี่ปุ่น, โปรตุเกส, pt, en)",
        threads: "เธรด CPU เพื่อประสิทธิภาพ",
        translate: "แปลเป็นภาษาอังกฤษ",
        binary: "เส้นทางไฟล์ปฏิบัติการ whisper.cpp",
        help: "แสดงความช่วยเหลือ CLI",
      },
      syntax: "ไวยากรณ์",
      combos: "ชุดคำสั่งยอดนิยม",
      combos1: "ถอดความ PT-BR ใช้ 8 เธรด บันทึกเป็นไฟล์:",
      combos2: "บังคับโมเดลที่ระบุและแปลเป็นภาษาอังกฤษ:",
    },
    api: {
      title: "API (Node.js)",
      subtitle: "ใช้เชิงโปรแกรมในโปรเจ็กต์ TypeScript/JavaScript",
      optionsTitle: "ตัวเลือกของ transcribe()",
      optionDescriptions: {
        file: "เส้นทางไฟล์เสียง",
        modelPath: "เส้นทางโมเดล",
        language: "รหัสภาษา",
        threads: "จำนวนเธรด CPU",
        translate: "แปลเป็นภาษาอังกฤษ",
        binaryPath: "เส้นทางไฟล์ปฏิบัติการ whisper.cpp",
      },
      table: { option: "ตัวเลือก", type: "ประเภท", required: "จำเป็น", description: "คำอธิบาย", yes: "ใช่", no: "ไม่" },
    },
    notes: {
      title: "หมายเหตุ",
      n1: "ts-whisper ไม่ได้ทำ Whisper ใหม่; มันจัดการ whisper.cpp",
      n2: "ตัวช่วยภายใน เช่น checkWhisperBinary() และ checkModel() ตรวจสอบ binary/โมเดล และคืนค่าเส้นทาง",
      n3: "ไม่มีค่าใช้จ่าย API — ทำงาน 100% บนอุปกรณ์ของคุณด้วย CPU/GPU แบบโลคัล",
    },
  },
  id: {
    common: { and: "dan" },
    hero: {
      tagline: "Berhenti membayar untuk transkripsi!",
      description:
        "Perpustakaan/CLI TypeScript yang membungkus whisper.cpp sehingga Anda dapat mentranskripsi audio secara lokal tanpa API berbayar.",
      features: {
        zeroApi: { title: "Biaya API nol", desc: "Berjalan 100% lokal, hanya CPU/GPU" },
        cliApi: { title: "CLI & API", desc: "Gunakan di terminal atau secara terprogram" },
        whisper: { title: "whisper.cpp", desc: "Didukung oleh whisper.cpp" },
      },
    },
    requirements: {
      title: "Penyiapan",
      modelTitle: "Model .bin",
      modelDesc: "Berada di models/ggml-base.bin (default) atau jalur lain via --model",
      languagesTitle: "Multi-bahasa",
      languagesDesc: "Didukung melalui whisper.cpp: Jepang, Portugis, en, pt...",
      audioFormatsTitle: "Format audio yang didukung",
      audioFormatsDesc: "Format bergantung pada build whisper.cpp Anda (dan dukungan ffmpeg)",
      audioFormatsNote: "Jika format gagal, konversi ke WAV/FLAC terlebih dahulu",
      quickTitle: "Jalankan lokal (cepat)",
      quickSub: "Instal dependensi, build dan jalankan",
      quickNote: "Transkripsi tanpa menginstal apa pun",
    },
    cli: {
      title: "Referensi CLI",
      subtitle: "Semua opsi baris perintah tersedia",
      options: {
        file: "Simpan transkripsi ke file",
        model: "Pilih model",
        language: "Paksa bahasa (mis. Jepang, Portugis, pt, en)",
        threads: "Thread CPU untuk kinerja",
        translate: "Terjemahkan ke bahasa Inggris",
        binary: "Jalur binary whisper.cpp",
        help: "Tampilkan bantuan CLI",
      },
      syntax: "Sintaks",
      combos: "Kombinasi umum",
      combos1: "Transkripsi PT-BR, gunakan 8 thread, simpan ke file:",
      combos2: "Paksa model tertentu dan terjemahkan ke bahasa Inggris:",
    },
    api: {
      title: "API (Node.js)",
      subtitle: "Gunakan secara terprogram dalam proyek TypeScript/JavaScript Anda",
      optionsTitle: "Opsi transcribe()",
      optionDescriptions: {
        file: "Jalur ke file audio",
        modelPath: "Jalur ke model",
        language: "Kode bahasa",
        threads: "Jumlah thread CPU",
        translate: "Terjemahkan ke bahasa Inggris",
        binaryPath: "Jalur binary whisper.cpp",
      },
      table: { option: "Opsi", type: "Tipe", required: "Wajib", description: "Deskripsi", yes: "Ya", no: "Tidak" },
    },
    notes: {
      title: "Catatan",
      n1: "ts-whisper tidak mengimplementasikan Whisper; ini hanya mengatur whisper.cpp.",
      n2: "Helper internal seperti checkWhisperBinary() dan checkModel() memvalidasi binary/model dan mengembalikan jalur.",
      n3: "Biaya API nol — berjalan 100% pada perangkat keras Anda dengan CPU/GPU lokal.",
    },
  },
  he: {
    common: { and: "ו" },
    hero: {
      tagline: "להפסיק לשלם על תמלולים!",
      description:
        "ספריית/CLI ב-TypeScript שעוטפת את whisper.cpp כדי לתמלל אודיו מקומית, ללא API בתשלום.",
      features: {
        zeroApi: { title: "ללא עלות API", desc: "רץ 100% מקומית, רק CPU/GPU" },
        cliApi: { title: "CLI ו-API", desc: "שימוש בטרמין או דרך קוד" },
        whisper: { title: "whisper.cpp", desc: "מופעל על ידי whisper.cpp" },
      },
    },
    requirements: {
      title: "הגדרות",
      modelTitle: "מודל .bin",
      modelDesc: "ב-models/ggml-base.bin (ברירת מחדל) או מסלול אחר דרך --model",
      languagesTitle: "רב-לשוני",
      languagesDesc: "נתמך באמצעות whisper.cpp: יפנית, פורטוגזית, en, pt...",
      audioFormatsTitle: "פורמטי אודיו נתמכים",
      audioFormatsDesc: "פורמטים תלויים בבילד של whisper.cpp (והאם ffmpeg נתמך)",
      audioFormatsNote: "אם פורמט נכשל, המר תחילה ל-WAV/FLAC",
      quickTitle: "הפעלה מקומית (מהיר)",
      quickSub: "התקן תלות, בנה והרץ",
      quickNote: "בצע תמלול ללא התקנה",
    },
    cli: {
      title: "מדריך CLI",
      subtitle: "כל האפשרויות הזמינות בפקודות",
      options: {
        file: "שמור תמלול לקובץ",
        model: "בחר מודל",
        language: "כפה שפה (למשל: יפנית, פורטוגזית, pt, en)",
        threads: "ת’רדים של CPU לביצועים",
        translate: "תרגם לאנגלית",
        binary: "נתיב לקובץ הבינרי של whisper.cpp",
        help: "הצג עזרה של CLI",
      },
      syntax: "תחביר",
      combos: "שילובים נפוצים",
      combos1: "תמלול PT-BR, שימוש ב-8 ת’רדים, שמירה לקובץ:",
      combos2: "כפיית מודל מסוים ותרגום לאנגלית:",
    },
    api: {
      title: "API (Node.js)",
      subtitle: "שימוש תכנותי בפרויקטים של TypeScript/JavaScript",
      optionsTitle: "אפשרויות של transcribe()",
      optionDescriptions: {
        file: "נתיב לקובץ האודיו",
        modelPath: "נתיב למודל",
        language: "קוד שפה",
        threads: "מספר ת’רדים של CPU",
        translate: "תרגם לאנגלית",
        binaryPath: "נתיב לקובץ הבינרי של whisper.cpp",
      },
      table: { option: "אפשרות", type: "סוג", required: "נדרש", description: "תיאור", yes: "כן", no: "לא" },
    },
    notes: {
      title: "הערות",
      n1: "ts-whisper לא מיישם מחדש את Whisper; הוא מארגן את whisper.cpp.",
      n2: "עוזרים פנימיים כמו checkWhisperBinary() ו-checkModel() מאמתים קיום בינרי/מודל ומחזירים נתיבים.",
      n3: "ללא עלות API — רץ 100% על החומרה שלך עם CPU/GPU מקומי.",
    },
  },
  fa: {
    common: { and: "و" },
    hero: {
      tagline: "پرداخت برای رونوشت را متوقف کنید!",
      description:
        "کتابخانه/CLI تایپ‌اسکریپت که whisper.cpp را بسته‌بندی می‌کند تا بدون API پولی، به‌صورت محلی صوت را رونوشت کنید.",
      features: {
        zeroApi: { title: "بدون هزینه API", desc: "۱۰۰٪ محلی اجرا می‌شود، فقط CPU/GPU" },
        cliApi: { title: "CLI و API", desc: "در ترمینال یا به‌صورت برنامه‌نویسی استفاده کنید" },
        whisper: { title: "whisper.cpp", desc: "توسط whisper.cpp پشتیبانی می‌شود" },
      },
    },
    requirements: {
      title: "راه‌اندازی",
      modelTitle: "مدل .bin",
      modelDesc: "در models/ggml-base.bin (پیش‌فرض) یا مسیر دیگر از طریق --model",
      languagesTitle: "چندزبانه",
      languagesDesc: "از طریق whisper.cpp پشتیبانی می‌شود: ژاپنی، پرتغالی، en، pt...",
      audioFormatsTitle: "قالب‌های صوتی پشتیبانی‌شده",
      audioFormatsDesc: "قالب‌ها بسته به بیلد whisper.cpp شما (و پشتیبانی ffmpeg) متفاوت‌اند",
      audioFormatsNote: "اگر قالبی خطا داد، ابتدا به WAV/FLAC تبدیل کنید",
      quickTitle: "اجرای محلی (سریع)",
      quickSub: "وابستگی‌ها را نصب کنید، بیلد و اجرا کنید",
      quickNote: "بدون نصب هیچ چیز، رونوشت کنید",
    },
    cli: {
      title: "مرجع CLI",
      subtitle: "همه گزینه‌های خط فرمان موجود",
      options: {
        file: "ذخیره رونوشت در فایل",
        model: "انتخاب مدل",
        language: "اجبار زبان (مثلاً ژاپنی، پرتغالی، pt، en)",
        threads: "رشته‌های CPU برای عملکرد",
        translate: "ترجمه به انگلیسی",
        binary: "مسیر فایل اجرایی whisper.cpp",
        help: "نمایش راهنمای CLI",
      },
      syntax: "نحو",
      combos: "ترکیب‌های رایج",
      combos1: "رونوشت PT-BR، با ۸ رشته، ذخیره در فایل:",
      combos2: "اجبار یک مدل خاص و ترجمه به انگلیسی:",
    },
    api: {
      title: "API (Node.js)",
      subtitle: "به‌صورت برنامه‌نویسی در پروژه‌های TypeScript/JavaScript استفاده کنید",
      optionsTitle: "گزینه‌های transcribe()",
      optionDescriptions: {
        file: "مسیر فایل صوتی",
        modelPath: "مسیر مدل",
        language: "کد زبان",
        threads: "تعداد رشته‌های CPU",
        translate: "ترجمه به انگلیسی",
        binaryPath: "مسیر فایل اجرایی whisper.cpp",
      },
      table: { option: "گزینه", type: "نوع", required: "ضروری", description: "توضیح", yes: "بله", no: "خیر" },
    },
    notes: {
      title: "توضیحات",
      n1: "ts-whisper، Whisper را دوباره پیاده‌سازی نمی‌کند؛ فقط whisper.cpp را مدیریت می‌کند.",
      n2: "ابزارهای داخلی مانند checkWhisperBinary() و checkModel() وجود فایل اجرایی/مدل را بررسی کرده و مسیرها را برمی‌گردانند.",
      n3: "بدون هزینه API — کاملاً روی سخت‌افزار شما با CPU/GPU محلی اجرا می‌شود.",
    },
  },
  uk: {
    common: { and: "і" },
    hero: {
      tagline: "Припиніть платити за транскрипції!",
      description:
        "Бібліотека/CLI на TypeScript, що огортає whisper.cpp для локальної транскрипції аудіо без платного API.",
      features: {
        zeroApi: { title: "Нульова вартість API", desc: "Працює повністю локально, лише CPU/GPU" },
        cliApi: { title: "CLI та API", desc: "Використання в терміналі або програмно" },
        whisper: { title: "whisper.cpp", desc: "Працює на whisper.cpp" },
      },
    },
    requirements: {
      title: "Налаштування",
      modelTitle: "Модель .bin",
      modelDesc: "У models/ggml-base.bin (типово) або інший шлях через --model",
      languagesTitle: "Багатомовність",
      languagesDesc: "Підтримується whisper.cpp: Японська, Португальська, en, pt...",
      audioFormatsTitle: "Підтримувані аудіоформати",
      audioFormatsDesc: "Формати залежать від збірки whisper.cpp (та підтримки ffmpeg)",
      audioFormatsNote: "Якщо формат не працює, спершу конвертуйте у WAV/FLAC",
      quickTitle: "Запуск локально (швидко)",
      quickSub: "Встановіть залежності, зберіть і запустіть",
      quickNote: "Транскрипція без встановлення",
    },
    cli: {
      title: "Довідник CLI",
      subtitle: "Усі доступні параметри командного рядка",
      options: {
        file: "Зберегти транскрипцію у файл",
        model: "Вибрати модель",
        language: "Примусити мову (наприклад, Японська, Португальська, pt, en)",
        threads: "Потоки CPU для продуктивності",
        translate: "Перекласти англійською",
        binary: "Шлях до бінарника whisper.cpp",
        help: "Показати довідку CLI",
      },
      syntax: "Синтаксис",
      combos: "Поширені комбінації",
      combos1: "Транскрибувати PT-BR, 8 потоків, зберегти у файл:",
      combos2: "Примусити конкретну модель і перекласти англійською:",
    },
    api: {
      title: "API (Node.js)",
      subtitle: "Використання програмно у ваших проектах TypeScript/JavaScript",
      optionsTitle: "Параметри transcribe()",
      optionDescriptions: {
        file: "Шлях до аудіофайлу",
        modelPath: "Шлях до моделі",
        language: "Код мови",
        threads: "Кількість потоків CPU",
        translate: "Перекласти англійською",
        binaryPath: "Шлях до бінарника whisper.cpp",
      },
      table: { option: "Параметр", type: "Тип", required: "Обов’язковий", description: "Опис", yes: "Так", no: "Ні" },
    },
    notes: {
      title: "Примітки",
      n1: "ts-whisper не пере реалізує Whisper; він координує whisper.cpp.",
      n2: "Внутрішні помічники як checkWhisperBinary() і checkModel() перевіряють бінарник/модель та повертають шляхи.",
      n3: "Нульова вартість API — працює повністю на вашому обладнанні з локальним CPU/GPU.",
    },
  },
  sv: {
    common: { and: "och" },
    hero: {
      tagline: "Sluta betala för transkriberingar!",
      description:
        "TypeScript-bibliotek/CLI som kapslar in whisper.cpp så att du kan transkribera ljud lokalt utan en betald API.",
      features: {
        zeroApi: { title: "Inga API-kostnader", desc: "Körs helt lokalt, endast CPU/GPU" },
        cliApi: { title: "CLI & API", desc: "Använd i terminalen eller programmatiskt" },
        whisper: { title: "whisper.cpp", desc: "Drivs av whisper.cpp" },
      },
    },
    requirements: {
      title: "Konfiguration",
      modelTitle: "Modell .bin",
      modelDesc: "Finns i models/ggml-base.bin (standard) eller annan sökväg via --model",
      languagesTitle: "Flerspråkigt",
      languagesDesc: "Stöds via whisper.cpp: Japanska, Portugisiska, en, pt...",
      audioFormatsTitle: "Stödda ljudformat",
      audioFormatsDesc: "Format beror på din whisper.cpp-build (och om ffmpeg stöds)",
      audioFormatsNote: "Om ett format misslyckas, konvertera först till WAV/FLAC",
      quickTitle: "Kör lokalt (snabbt)",
      quickSub: "Installera beroenden, bygg och kör",
      quickNote: "Transkribera utan att installera något",
    },
    cli: {
      title: "CLI-referens",
      subtitle: "Alla tillgängliga kommandoradsalternativ",
      options: {
        file: "Spara transkription till fil",
        model: "Välj modell",
        language: "Tvinga språk (t.ex. Japanska, Portugisiska, pt, en)",
        threads: "CPU-trådar för prestanda",
        translate: "Översätt till engelska",
        binary: "Sökväg till whisper.cpp-binär",
        help: "Visa CLI-hjälp",
      },
      syntax: "Syntax",
      combos: "Vanliga kombinationer",
      combos1: "Transkribera PT-BR, använd 8 trådar, spara till fil:",
      combos2: "Tvinga en specifik modell och översätt till engelska:",
    },
    api: {
      title: "API (Node.js)",
      subtitle: "Använd i dina TypeScript/JavaScript-projekt programmatiskt",
      optionsTitle: "Alternativ för transcribe()",
      optionDescriptions: {
        file: "Sökväg till ljudfil",
        modelPath: "Sökväg till modell",
        language: "Språkkod",
        threads: "Antal CPU-trådar",
        translate: "Översätt till engelska",
        binaryPath: "Sökväg till whisper.cpp-binär",
      },
      table: { option: "Alternativ", type: "Typ", required: "Krävs", description: "Beskrivning", yes: "Ja", no: "Nej" },
    },
    notes: {
      title: "Anteckningar",
      n1: "ts-whisper implementerar inte Whisper på nytt; den orkestrerar whisper.cpp.",
      n2: "Interna hjälpare som checkWhisperBinary() och checkModel() validerar binär/modell och returnerar sökvägar.",
      n3: "Inga API-kostnader — körs 100% på din hårdvara med lokal CPU/GPU.",
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
  const code = nav.toLowerCase();
  if (code.startsWith("pt")) return "pt";
  if (code.startsWith("en")) return "en";
  if (code.startsWith("es")) return "es";
  if (code.startsWith("fr")) return "fr";
  if (code.startsWith("de")) return "de";
  if (code.startsWith("it")) return "it";
  if (code.startsWith("nl")) return "nl";
  if (code.startsWith("pl")) return "pl";
  if (code.startsWith("ru")) return "ru";
  if (code.startsWith("ar")) return "ar";
  if (code.startsWith("zh")) return "zh";
  if (code.startsWith("ja")) return "ja";
  if (code.startsWith("ko")) return "ko";
  if (code.startsWith("hi")) return "hi";
  if (code.startsWith("bn")) return "bn";
  if (code.startsWith("vi")) return "vi";
  if (code.startsWith("tr")) return "tr";
  if (code.startsWith("th")) return "th";
  if (code.startsWith("id")) return "id";
  if (code.startsWith("he")) return "he";
  if (code.startsWith("fa")) return "fa";
  if (code.startsWith("uk")) return "uk";
  if (code.startsWith("sv")) return "sv";
  return "en";
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
