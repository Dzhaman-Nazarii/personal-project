import path from "path";
import { Configuration } from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths } from "./config/build/types/config";

export default (env: BuildEnv) => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, "src", "index.tsx"),
		build: path.resolve(__dirname, "build"),
		html: path.resolve(__dirname, "public", "index.html"),
		src: path.resolve(__dirname, "src"),
		locales: path.resolve(__dirname, "public", "locales"),
		buildLocales: path.resolve(__dirname, "build", "locales"),
	};

	const PORT = env.port || 3000;
	const mode = env.mode || "development";
	const isDev = mode === "development";
	const apiUrl = env.apiUrl || "https://personal-project-backend-beryl.vercel.app";

	const config: Configuration = buildWebpackConfig({
		mode,
		paths,
		isDev,
		port: PORT,
		apiUrl,
		project: "frontend",
	});

	return config;
};
