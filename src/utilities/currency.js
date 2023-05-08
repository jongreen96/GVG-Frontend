export const exchangeRateCache = {
	GBP: 1,
	USD: 1.265647,
	CAD: 1.688316,
	AUD: 1.863794,
	NZD: 1.994286,
	ZAR: 23.213486,
	INR: 103.509352,
	EUR: 1.145815,
	JMD: 194.449651,
	BRL: 6.31,
	TTD: 8.548116,
	PHP: 69.970059,
	JPY: 170.887957,
	CNY: 8.754981,
	CHF: 1.12491,
	HKD: 9.932398,
	SEK: 12.843368,
	KRW: 1672.463559,
	IDR: 18578.73,
	TRY: 24.62,
	ARS: 287.22,
};

const currencyMap = {
	'en-US': 'USD',
	'en-GB': 'GBP',
	'en-CA': 'CAD',
	'en-AU': 'AUD',
	'en-NZ': 'NZD',
	'en-ZA': 'ZAR',
	'en-IN': 'INR',
	'en-IE': 'EUR',
	'en-JM': 'JMD',
	'pt-BZ': 'BRL',
	'en-TT': 'TTD',
	'en-PH': 'PHP',
	'ja-JP': 'JPY',
	'zh-CN': 'CNY',
	'fr-CH': 'CHF',
	'zh-HK': 'HKD',
	'sv-SE': 'SEK',
	'ko-KR': 'KRW',
	'id-ID': 'IDR',
	'tr-TR': 'TRY',
	'es-ES': 'EUR',
	'fr-FR': 'EUR',
	'de-DE': 'EUR',
	'it-IT': 'EUR',
	'es-AR': 'ARS',
};

export const currencyFormatter = (amount) => {
	// guess currency based on locale
	const userLocale = navigator.language;
	return new Intl.NumberFormat(undefined, {
		style: 'currency',
		currency: currencyMap[userLocale] || 'GBP',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	}).format(amount * (exchangeRateCache[currencyMap[userLocale]] || 1));
};

export const currencyTicker = () => {
	const userLocale = navigator.language;
	return currencyMap[userLocale] || 'GBP';
};
