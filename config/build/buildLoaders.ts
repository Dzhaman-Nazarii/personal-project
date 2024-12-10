import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { builBabelLoader } from "./loaders/buildBabelLoader";

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
	const { isDev } = options;
	const babelLoader = builBabelLoader(options);

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
