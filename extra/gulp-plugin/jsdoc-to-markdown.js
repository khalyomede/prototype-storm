const jsdocApi = require("jsdoc-api");
const PluginError = require("plugin-error");
const through = require("through2");

// consts
const PLUGIN_NAME = "gulp-jsdoc-to-markdown";

module.exports = function() {
	return through.obj(function(file, encoding, callback) {
		if (file.isNull()) {
			return callback(null, file);
		}

		if (file.isStream()) {
			this.emit(
				"error",
				new PluginError(PLUGIN_NAME, "Streams not supported!")
			);
		} else if (file.isBuffer()) {
			jsdocApi
				.explain({
					source: file.contents
				})
				.then(explainations => {
					let markdowns = [];

					for (const explaination of explainations) {
						if (explaination.kind !== "function") {
							continue;
						}

						const title = `## ${explaination.memberof}.${explaination.name}()`;
						const description = `${explaination.description}`;
						const returns =
							"**return**\n" +
							explaination.returns
								.map(record => record.type.names.join("|"))
								.join("|");
						const examples = explaination.examples
							.map(example => "```javascript\n" + example + "\n```")
							.join("\n");

						markdowns.push(
							`${title}\n\n${description}\n\n${returns}\n\n${examples}`
						);
					}

					file.contents = Buffer.from(markdowns.join("\n\n"));

					callback(null, file);
				});
		}
	});
};
