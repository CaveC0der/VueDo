import { inject } from 'vue';
import { MODAL_PLUGIN_KEY } from '@/common/injectionSymbols';
import { type ModalPlugin } from '@/plugins/ModalPlugin';
import { nonNullable } from '@/common/utils';

export const useModal = (name: string) => {
  const modalPlugin = nonNullable<ModalPlugin>(inject(MODAL_PLUGIN_KEY));

  return modalPlugin.useModal(name);
};
