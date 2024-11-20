import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolves } from "./buildResolves";

export function buildWebpackConfig(options: BuildOptions): Configuration {
	const {paths, mode} = options;

	return {
		mode,
		entry: paths.entry,
		output: {
			filename: "[name].[contentHash].js",
			path: paths.build,
			clean: true,
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(),
		},
		resolve: buildResolves(),
	};
}
