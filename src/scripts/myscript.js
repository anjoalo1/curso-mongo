import Prism from 'prismjs';
import 'prism-themes/themes/prism-dracula.css';
/* import 'prismjs/themes/prism-okaidia.css' */
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/plugins/custom-class/prism-custom-class';

import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import 'prismjs/plugins/toolbar/prism-toolbar.css';
import 'prismjs/plugins/toolbar/prism-toolbar.js';
import 'prismjs/plugins/download-button/prism-download-button.js';

import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js';
Prism.highlightAll();
Prism.plugins.NormalizeWhitespace.setDefaults({
    'remove-trailing': true,
    'remove-indent': true,
    'left-trim': true,
    'right-trim': true
    /*'break-lines': 80,
      'indent': 2,
      'remove-initial-line-feed': false,
      'tabs-to-spaces': 4,
      'spaces-to-tabs': 4*/
  });