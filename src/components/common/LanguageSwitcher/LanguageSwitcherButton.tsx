import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useTranslations } from '@/hooks/useTranslation'
import { Language, supportedLngs } from '@/i18n/config'

export function LanguageSwitcherButton() {
  const { language, changeLanguage } = useTranslations()

  const languageNames: Record<Language, string> = {
    en: 'English',
    ja: '日本語',
    vi: 'Tiếng Việt',
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-32">
          {languageNames[language as Language]}
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
