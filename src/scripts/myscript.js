import Prism from "prismjs";

import "prism-themes/themes/prism-one-dark.css";
import "prismjs/components/prism-css";
import "prismjs/components/prism-kotlin";
import "prismjs/plugins/custom-class/prism-custom-class";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "prismjs/plugins/toolbar/prism-toolbar";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/plugins/show-language/prism-show-language";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard";
import "prismjs/plugins/inline-color/prism-inline-color";
import "prismjs/plugins/inline-color/prism-inline-color.css";
//match braces resaltar parentesis llaves
import "prismjs/plugins/match-braces/prism-match-braces";
import "prismjs/plugins/match-braces/prism-match-braces.css";
/* import 'prismjs/plugins/previewers/prism-previewers'
import 'prismjs/plugins/previewers/prism-previewers.css' */
import "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js";
Prism.highlightAll();