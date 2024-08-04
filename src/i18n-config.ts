export const i18n = {
    defaultLocale: "es",
    locales: ["en", "de", "es"],
} as const;

export type Locale = (typeof i18n)["locales"][number];