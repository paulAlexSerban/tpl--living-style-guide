import { task, series, parallel, watch } from "gulp";
import { paths } from "./config/paths";
import { lintScss } from "./tasks/lintScss";
import { compileScssPages } from "./tasks/compileScssPages";

// ---------------------------------------------------------------------
// | Helper tasks                                                      |
// ---------------------------------------------------------------------
task("compile:pages", series(compileScssPages));

// ---------------------------------------------------------------------
// | Main tasks                                                        |
// ---------------------------------------------------------------------
task("lint", parallel(lintScss));
task("compile", parallel("compile:pages"));
task("watch", () => {
  watch(paths.src.styles.scssFiles, series("lint"));
});
