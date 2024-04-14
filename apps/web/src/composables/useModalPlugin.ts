import { inject } from 'vue';
import { MODAL_PLUGIN_KEY } from '@/common/injectionSymbols';
import { nonNullable } from '@/common/utils';
import type { ModalPlugin } from '@/plugins/ModalPlugin';

export const useModalPlugin = () => {
  return nonNullable<ModalPlugin>(inject(MODAL_PLUGIN_KEY));
};
