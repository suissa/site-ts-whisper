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
  const label = lang === "pt" ? "PT" : "EN";

  return (
    <div className="fixed top-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-3 py-2 text-sm text-foreground hover:bg-primary/15 transition-colors">
          <Globe className="w-4 h-4 text-primary" />
          <span className="font-mono">{label}</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="min-w-[8rem]">
          <DropdownMenuItem onClick={() => setLang("en")}>English</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setLang("pt")}>Português</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageMenu;
