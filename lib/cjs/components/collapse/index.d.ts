import type { CollapseOptions } from './types';
import type { InstanceOptions, RootElement } from '../../dom/types';
import { CollapseInterface } from './interface';
declare class Collapse implements CollapseInterface {
    _instanceId: string;
    _targetEl: HTMLElement | null;
    _triggerEl: HTMLElement | null;
    _options: CollapseOptions;
    _visible: boolean;
    _initialized: boolean;
    _clickHandler: EventListenerOrEventListenerObject;
    constructor(targetEl?: HTMLElement | null, triggerEl?: HTMLElement | null, options?: CollapseOptions, instanceOptions?: InstanceOptions);
    init(): void;
    destroy(): void;
    removeInstance(): void;
    destroyAndRemoveInstance(): void;
    collapse(): void;
    expand(): void;
    toggle(): void;
    updateOnCollapse(callback: () => void): void;
    updateOnExpand(callback: () => void): void;
    updateOnToggle(callback: () => void): void;
}
export declare function initCollapses($rootElement?: RootElement): void;
export declare function initCollapseByElement($triggerEl: Element): void;
export default Collapse;
//# sourceMappingURL=index.d.ts.map