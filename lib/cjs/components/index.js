"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initFlowbite = void 0;
var accordion_1 = require("./accordion");
var carousel_1 = require("./carousel");
var clipboard_1 = require("./clipboard");
var collapse_1 = require("./collapse");
var dial_1 = require("./dial");
var dismiss_1 = require("./dismiss");
var drawer_1 = require("./drawer");
var dropdown_1 = require("./dropdown");
var input_counter_1 = require("./input-counter");
var modal_1 = require("./modal");
var popover_1 = require("./popover");
var tabs_1 = require("./tabs");
var tooltip_1 = require("./tooltip");
var datepicker_1 = require("./datepicker");
function initFlowbite($rootElement) {
    if ($rootElement === void 0) { $rootElement = document; }
    (0, accordion_1.initAccordions)($rootElement);
    (0, collapse_1.initCollapses)($rootElement);
    (0, carousel_1.initCarousels)($rootElement);
    (0, dismiss_1.initDismisses)($rootElement);
    (0, dropdown_1.initDropdowns)($rootElement);
    (0, modal_1.initModals)($rootElement);
    (0, drawer_1.initDrawers)($rootElement);
    (0, tabs_1.initTabs)($rootElement);
    (0, tooltip_1.initTooltips)($rootElement);
    (0, popover_1.initPopovers)($rootElement);
    (0, dial_1.initDials)($rootElement);
    (0, input_counter_1.initInputCounters)($rootElement);
    (0, clipboard_1.initCopyClipboards)($rootElement);
    (0, datepicker_1.initDatepickers)($rootElement);
}
exports.initFlowbite = initFlowbite;
if (typeof window !== 'undefined') {
    window.initFlowbite = initFlowbite;
}
//# sourceMappingURL=index.js.map