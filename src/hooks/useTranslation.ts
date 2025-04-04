import { Language } from "@/i18n/config";
import { I18nNamespace } from "@/i18n/types/i18n";
import { useTranslation, UseTranslationOptions } from "react-i18next";

// Define the type for the useTranslation hook
type UseTranslationType = {
  <K extends I18nNamespace = I18nNamespace>(
    ns?: K | K[],
    options?: UseTranslationOptions<K>
  ): {
    t: (key: string) => string;
    i18n: any;
    ready: boolean;
  };
};

/**
 * A custom hook that wraps react-i18next's useTranslation hook with better TypeScript support
 * @param ns - The namespace(s) to use
 * @param options - Options for useTranslation
 */
export const useTranslations = (
  ns?: I18nNamespace | I18nNamespace[],
  options?: UseTranslationOptions<I18nNamespace>
) => {
  const { t, i18n, ready } = (useTranslation as UseTranslationType)(
    ns,
    options
  );

  /**
   * Changes the current language
   * @param lng - The language to switch to
   * @returns Promise that resolves when the language is changed
   */
  const changeLanguage = async (lng: Language) => {
    await i18n.changeLanguage(lng);
    return i18n.changeLanguage(lng);
  };

  /**
   * Gets the current language
   * @returns The current language code
   */
  const getCurrentLanguage = (): Language => {
    return i18n.language as Language;
  };

  /**
   * Gets all supported languages
   * @returns Array of supported language codes
   */
  const getSupportedLanguages = (): Language[] => {
    return i18n.languages as Language[];
  };

  return {
    t,
    i18n,
    ready,
    language: getCurrentLanguage(),
    changeLanguage,
    getCurrentLanguage,
    getSupportedLanguages,
  };
};
