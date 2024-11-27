import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
	const babelLoader = {
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

	const fileLoader = {
		test: /\.(png|jpe?g|gif|woff2)$/i,
		type: "asset/resource",
	};

	const svgLoader = {
		test: /\.svg$/,
		use: ["@svgr/webpack"],
	};

	const cssLoader = buildCssLoader(isDev);

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	};

	return [babelLoader, cssLoader, fileLoader, svgLoader, typescriptLoader];
}
