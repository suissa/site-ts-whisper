import { useI18n } from "@/i18n/I18nProvider";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const LanguageMenu = () => {
  const { lang, setLang } = useI18n();
  const languages = [
    { code: "pt", name: "Português" },
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "de", name: "Deutsch" },
    { code: "fr", name: "Français" },
    { code: "it", name: "Italiano" },
    { code: "nl", name: "Nederlands" },
    { code: "pl", name: "Polski" },
    { code: "ru", name: "Русский" },
    { code: "ar", name: "العربية" },
    { code: "zh", name: "中文" },
    { code: "ja", name: "日本語" },
    { code: "ko", name: "한국어" },
    { code: "hi", name: "हिंदी" },
    { code: "bn", name: "বাংলা" },
    { code: "vi", name: "Tiếng Việt" },
    { code: "tr", name: "Türkçe" },
    { code: "th", name: "ไทย" },
    { code: "id", name: "Bahasa Indonesia" },
    { code: "he", name: "עברית" },
    { code: "fa", name: "فارسی" },
    { code: "uk", name: "Українська" },
    { code: "sv", name: "Svenska" },
  ];
  const label = lang.toUpperCase();

  return (
    <div className="fixed top-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-3 py-2 text-sm text-foreground hover:bg-primary/15 transition-colors">
          <Globe className="w-4 h-4 text-primary" />
          <span className="font-mono">{label}</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-[10rem]">
          {languages.map((l) => (
            <DropdownMenuItem key={l.code} onClick={() => setLang(l.code as any)}>
              {l.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageMenu;
