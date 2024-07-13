export const expirationOptions = {
	'5m': {
		value: 5 * 60,
		label: '5 minutes'
	},
	'15m': {
		value: 15 * 60,
		label: '15 minutes'
	},
	'30m': {
		value: 30 * 60,
		label: '30 minutes'
	},
	'1h': {
		value: 60 * 60,
		label: '1 hour'
	},
	'6h': {
		value: 6 * 60 * 60,
		label: '6 hours'
	},
	'12h': {
		value: 12 * 60 * 60,
		label: '12 hours'
	},
	'24h': {
		value: 24 * 60 * 60,
		label: '24 hours'
	},
	'1w': {
		value: 7 * 24 * 60 * 60,
		label: '1 week'
	},
	'1m': {
		value: 30 * 24 * 60 * 60,
		label: '1 month'
	}
} as const;
