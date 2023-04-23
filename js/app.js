'use strict';

import '../js/theme-color.js';
import {actions} from '../js/actions.js';


const numpad = document.querySelector('[data-numpad]');


if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
};

numpad.addEventListener('click', actions);




