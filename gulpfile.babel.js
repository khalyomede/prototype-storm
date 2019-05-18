import { src, dest, series, parallel, watch } from "gulp";
import typescript from "gulp-typescript";
import plumber from "gulp-plumber";
import clean from "gulp-clean";
import jsdocToMarkdown from "./extra/gulp-plugin/jsdoc-to-markdown";
import concat from "gulp-concat";
import bro from "gulp-bro";

const js = () =>
	src("src/**/*.ts")
		.pipe(plumber())
		.pipe(typescript())
		.pipe(dest("lib/"));

const dist = () =>
	src("lib/**/*.js")
		.pipe(plumber())
		.pipe(
			bro({
				transform: ["babelify"]
			})
		)
		.pipe(dest("dist"));

const clearLib = () =>
	src("lib", {
		allowEmpty: true
	})
		.pipe(plumber())
		.pipe(clean());

const clearDist = () =>
	src("dist", {
		allowEmpty: true
	})
		.pipe(plumber())
		.pipe(clean());

const doc = () =>
	src("lib/**/*.js")
		.pipe(plumber())
		.pipe(jsdocToMarkdown())
		.pipe(concat("prototypes.md"))
		.pipe(dest("./"));
const build = series(clearLib, js, parallel(doc, series(clearDist, dist)));
const start = () => {
	watch("src/**/*.ts", js);
};

export { build, start };
