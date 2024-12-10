import { BuildOptions } from "../types/config";

export function builBabelLoader(options: BuildOptions) {
	const { isDev } = options;
	return {
		test: /\.(js|jsx|ts|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				presets: [
					"@babel/preset-env",
					"@babel/preset-typescript",
					"@babel/preset-react",
				],
				plugins: [
					isDev && "react-refresh/babel",
					[
						"i18next-extract",
						{
							locales: ["en", "ua"],
							keyAsDefaultValue: true,
							outputPath:
								"extractedTranslations/{{locale}}/{{ns}}.json",
						},
					],
				].filter(Boolean),
			},
		},
	};
}
