'use strict';

import BasisDrawerCloseZone from '../../vendor/inc2734/wp-basis/src/assets/packages/sass-basis/src/js/_drawer-close-zone.js';
import BasisDrawer from '../../vendor/inc2734/wp-basis/src/assets/packages/sass-basis/src/js/_drawer.js';

export default class SnowMonkeyHashNav {
  constructor() {
    window.addEventListener('DOMContentLoaded', () => this._DOMContentLoaded(), false);
  }

  _DOMContentLoaded() {
    this.drawer = document.getElementById('drawer-nav');
    if (! this.drawer) {
      return;
    }

    this._forEachHtmlNodes(document.querySelectorAll('a[href="#sm-drawer"]'), (element) => {
      element.addEventListener('click', (event) => this._click(event), false);
    });
  }

  _click(event) {
    event.stopPropagation();
    if ('false' === this.drawer.getAttribute('aria-hidden')) {
      BasisDrawer.close(this.drawer);
    } else {
      BasisDrawer.open(this.drawer);
    }
    return false
  }

  _forEachHtmlNodes(htmlNodes, callback) {
    if (0 < htmlNodes.length) {
      [].forEach.call(htmlNodes, (htmlNode) => callback(htmlNode));
    }
  }
}
