// core components
import Accordion, { initAccordions } from './components/accordion';
import Carousel, { initCarousels } from './components/carousel';
import Collapse, { initCollapses } from './components/collapse';
import Dial, { initDials } from './components/dial';
import Dismiss, { initDismisses } from './components/dismiss';
import Drawer, { initDrawers } from './components/drawer';
import Dropdown, { initDropdowns } from './components/dropdown';
import Modal, { initModals } from './components/modal';
import Popover, { initPopovers } from './components/popover';
import Tabs, { initTabs } from './components/tabs';
import Tooltip, { initTooltips } from './components/tooltip';
import InputCounter, { initInputCounters } from './components/input-counter';
import CopyClipboard, { initCopyClipboards } from './components/clipboard';
import Datepicker, { initDatepickers } from './components/datepicker';
import './components/index';
import Events from './dom/events';
var liveViewLoadEvents = new Events('phx:page-loading-stop', [
    function () { return initAccordions(); },
    function () { return initCollapses(); },
    function () { return initCarousels(); },
    function () { return initDismisses(); },
    function () { return initDropdowns(); },
    function () { return initModals(); },
    function () { return initDrawers(); },
    function () { return initTabs(); },
    function () { return initTooltips(); },
    function () { return initPopovers(); },
    function () { return initDials(); },
    function () { return initInputCounters(); },
    function () { return initCopyClipboards(); },
    function () { return initDatepickers(); },
]);
liveViewLoadEvents.init();
var regularViewLoadEvents = new Events('load', [
    function () { return initAccordions(); },
    function () { return initCollapses(); },
    function () { return initCarousels(); },
    function () { return initDismisses(); },
    function () { return initDropdowns(); },
    function () { return initModals(); },
    function () { return initDrawers(); },
    function () { return initTabs(); },
    function () { return initTooltips(); },
    function () { return initPopovers(); },
    function () { return initDials(); },
    function () { return initInputCounters(); },
    function () { return initCopyClipboards(); },
    function () { return initDatepickers(); },
]);
regularViewLoadEvents.init();
export default {
    Accordion: Accordion,
    Carousel: Carousel,
    Collapse: Collapse,
    Dial: Dial,
    Drawer: Drawer,
    Dismiss: Dismiss,
    Dropdown: Dropdown,
    Modal: Modal,
    Popover: Popover,
    Tabs: Tabs,
    Tooltip: Tooltip,
    InputCounter: InputCounter,
    CopyClipboard: CopyClipboard,
    Datepicker: Datepicker,
    Events: Events,
};
//# sourceMappingURL=index.phoenix.js.map