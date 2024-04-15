import { type App, type ObjectPlugin } from 'vue';
import { nonNullable } from '@/common/utils';
import { MODAL_PLUGIN_KEY } from '@/common/injectionSymbols';
import type { ModalControls } from '@/composables/useModal';

export class ModalPlugin implements ObjectPlugin {
  private static instance: ModalPlugin | undefined;

  private modals: Map<string, ModalControls>;

  private constructor() {
    this.modals = new Map();
  }

  static getInstance(): ModalPlugin {
    if (ModalPlugin.instance) {
      return ModalPlugin.instance;
    }

    return (ModalPlugin.instance = new ModalPlugin());
  }

  register(name: string, controls: ModalControls) {
    if (this.modals.has(name)) {
      throw new Error(`name: ${name} already registered`);
    }

    this.modals.set(name, controls);
  }

  delete(name: string) {
    this.modals.delete(name);
  }

  useModal(name: string) {
    return nonNullable(this.modals.get(name));
  }

  install(app: App) {
    app.provide(MODAL_PLUGIN_KEY, this);
    app.config.globalProperties.$modalPlugin = this;
  }
}

export default ModalPlugin.getInstance();
