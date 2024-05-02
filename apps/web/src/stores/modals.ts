import { defineStore } from 'pinia';
import { nonNullable } from '@/common/utils';
import type { VisibilityControls } from '@/composables/useVisible';

export interface ModalControls extends VisibilityControls {
  setMessage: (message: string) => void;
  showMessage: (message: string) => void;
}

export const useModalsStore = defineStore('modals', () => {
  const modals = new Map<string, ModalControls>();

  const register = (name: string, controls: ModalControls) => {
    if (modals.has(name)) {
      throw new Error(`name: ${name} already registered`);
    }

    modals.set(name, controls);
  };

  const unregister = (name: string) => {
    modals.delete(name);
  };

  const use = (name: string) => {
    return nonNullable(modals.get(name));
  };

  return { register, unregister, use };
});
