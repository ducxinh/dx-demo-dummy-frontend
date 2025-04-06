import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTranslations } from '@/hooks/useTranslation'
import { Language, supportedLngs } from '@/i18n/config'
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const { language, changeLanguage } = useTranslations()

  const languageNames: Record<Language, string> = {
    en: '🇺🇸 English',
    vi: '🇻🇳 Tiếng Việt',
    ja: '🇯🇵 日本語',
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-9 w-9 px-0 flex gap-2">
          <Globe className="h-4 w-4" />
          {language.toUpperCase()}
        </Button>
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
  )
}
