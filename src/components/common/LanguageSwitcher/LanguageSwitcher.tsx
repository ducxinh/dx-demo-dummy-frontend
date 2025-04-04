import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslations } from '@/hooks/useTranslation';
import { Language, supportedLngs } from '@/i18n/config';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, changeLanguage } = useTranslations()

  const languageNames: Record<Language, string> = {
    en: 'English',
    ja: '日本語',
    vi: 'Tiếng Việt',
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100"
          aria-label="Change language"
        >
          <Globe className="h-4 w-4" />
          {language.toUpperCase()}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-32">
        {supportedLngs.map((lng) => (
          <DropdownMenuItem
            key={lng}
            onClick={() => changeLanguage(lng)}
            className="cursor-pointer hover:bg-gray-100"
          >
            {languageNames[lng]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );


}