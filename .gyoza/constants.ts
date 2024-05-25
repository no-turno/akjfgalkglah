export const FALLBACK_CONSTANTS = {
	PORT: 8080,
	HOSTNAME: "0.0.0.0",
	MODE: {
		DEVELOPMENT: "development",
		PRODUCTION: "production",
	},
	IS_DEV: (mode?: string) => mode && mode === "development",
	IS_PROD: (mode?: string) => mode && mode === "production",
	CWD: process.cwd(),
};
