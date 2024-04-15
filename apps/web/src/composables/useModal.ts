import { inject } from 'vue';
import { MODAL_PLUGIN_KEY } from '@/common/injectionSymbols';
import { type ModalPlugin } from '@/plugins/ModalPlugin';
import { nonNullable } from '@/common/utils';
import type { VisibilityControls } from '@/composables/useVisible';

export interface ModalControls extends VisibilityControls {
  setMessage: (message: string) => void;
  showMessage: (message: string) => void;
}

export const useModal = (name: string): ModalControls => {
  const modalPlugin = nonNullable<ModalPlugin>(inject(MODAL_PLUGIN_KEY));

  return modalPlugin.useModal(name);
};
