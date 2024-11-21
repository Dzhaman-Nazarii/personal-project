import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
	
	const babelLoader = {
		test: /\.[jt]sx?$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"],
				plugins: isDev ? ["react-refresh/babel"] : [],
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

	const cssLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? "style-loader" : MiniCssExtractPlugin.loader,
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (resPath: string) => resPath.endsWith(".module.scss"),
						localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]",
					},
				},
			},
			"sass-loader",
		],
	};

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	};

	return [babelLoader, cssLoader, fileLoader, svgLoader, typescriptLoader];
}
