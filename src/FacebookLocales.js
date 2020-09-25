import { supportedLocales as facebookSupportedLocales } from './Facebook'

// Facebook blanket locales, mapped to real locales by common sense.
// @see <a href='https://developers.facebook.com/docs/internationalization#locales'>Locales and Languages Supported by Facebook</a>
const facebookVirtualLocales = {
	'es_LA': [ // Spanish (Latin America)... overriding the non-exitent Spanish (Laos)
		'es_AR', // Argentina
		'es_PE', // Peru
		'es_EC', // Ecuador,
		'es_GT', // Guatemala
		'es_CU', // Cuba
		'es_BO', // Bolivia
		'es_DO', // Dominican Republic
		'es_HN', // Honduras
		'es_PY', // Paraguay
		'es_SV', // El Salvador
		'es_NI', // Nicaragua
		'es_CR', // Costa Rica
		'es_PR', // Puerto Rico
		'es_PA', // Panama
		'es_UY', // Uruguay
		'es_GQ'  // Equatorial Guinea
	],
	'ar_AR': [ // Arabic... overriding the non-existent Arabic (Argentina)
		'ar_DZ', // Algeria
		'ar_BH', // Bahrain
		'ar_TD', // Chad
		'ar_KM', // Comoros
		'ar_DJ', // Djibouti
		'ar_EG', // Egypt
		'ar_ER', // Eritrea
		'ar_GM', // The Gambia
		'ar_IQ', // Iraq
		'ar_IL', // Israel
		'ar_JO', // Jordan
		'ar_KW', // Kuwait
		'ar_LB', // Lebanon
		'ar_LY', // Libya
		'ar_MR', // Mauritania
		'ar_MA', // Morocco
		'ar_OM', // Oman
		'ar_PS', // State of Palestine
		'ar_QA', // Qatar
		'ar_SA', // Saudi Arabia
		'ar_SO', // Somalia
		'ar_SD', // Sudan
		'ar_SY', // Syria
		'ar_TN', // Tunisia
		'ar_AE', // United Arab Emirates
		'ar_YE'  // Yemen
	]
}

// Invert facebookVirtualLocales (map real locales to Facebook virtual locales)
const localesToNonStandardFacebookLocales = {};
Object.keys(facebookVirtualLocales).forEach((locale) => {
  facebookVirtualLocales[locale].reduce(( accumulator = localesToNonStandardFacebookLocales, currentValue, index) => {
    accumulator[currentValue] = locale;
  }, localesToNonStandardFacebookLocales);
});

export const bestFacebookLocaleFor = locale => {
	// Standard supported locales
	if (facebookSupportedLocales.includes(locale)) {
		return locale
	}

	// Locales that are supported in a non-standard way
	const nonStandardFacebookLocale = localesToNonStandardFacebookLocales[locale]
	if (nonStandardFacebookLocale) {
		return nonStandardFacebookLocale
	}

	// Unsupported locale, make an effort and return some supported locale with same langauge
	const language = locale.substring(0, 2)
	const supportedLocaleInLanguage = facebookSupportedLocales.find(supportedLocale => supportedLocale.indexOf(language) === 0)
	if (supportedLocaleInLanguage) {
		return supportedLocaleInLanguage
	}

	// Fallback to English (United States)
	return 'en_US'
}
