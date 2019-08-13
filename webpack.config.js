const path = require("path");

const dist = path.resolve(__dirname, "dist");
const src = path.resolve(__dirname, "src");


function buildConfig(env, args){
	const { mode } = args;

	let modeOptions;
	switch(mode){
		case "development":
			modeOptions = {
				mode: "development",
				output: {
					filename: "main.js",
					path: dist,
					publicPath: "/"
				},
				devServer: {
					contentBase: dist
				}
			}
			break;
		case "production":
		default:
			modeOptions = {
				mode: "production",
				output: {
					filename: "main.js",
					path: dist,
					publicPath: "./"
				}
			}
			break;
	}

	const config = {
		entry: `${src}/index.js`,
		...modeOptions,
		module: {
			rules: [
				{
					test: /\.scss$/,
					use: [
						{
							loader: "css-loader",
							options: {
								modules: {
									localIdentName: "[folder]__[local]"
								}
							}
						}, {
							loader: "sass-loader"
						}

					]
				}
			]
		},
		resolve: {
			alias: {
				SRC: src
			}
		}
	};

	return config;
}


module.exports = buildConfig;