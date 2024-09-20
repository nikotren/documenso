import { z } from 'zod';

export const SUPPORTED_LANGUAGE_CODES = ['cs', 'en'] as const;

export const ZSupportedLanguageCodeSchema = z.enum(SUPPORTED_LANGUAGE_CODES).catch('en');

export type SupportedLanguageCodes = (typeof SUPPORTED_LANGUAGE_CODES)[number];

export type I18nLocaleData = {
  /**
   * The supported language extracted from the locale.
   */
  lang: SupportedLanguageCodes;

  /**
   * The preferred locales.
   */
  locales: string[];
};

export const APP_I18N_OPTIONS = {
  supportedLangs: SUPPORTED_LANGUAGE_CODES,
  sourceLang: 'en',
  defaultLocale: 'cs',
} as const;

type SupportedLanguage = {
  full: string;
  short: string;
};

export const SUPPORTED_LANGUAGES: Record<string, SupportedLanguage> = {
  cs: {
    full: 'Čeština',
    short: 'cs',
  },
  en: {
    full: 'English',
    short: 'en',
  },
} satisfies Record<SupportedLanguageCodes, SupportedLanguage>;
