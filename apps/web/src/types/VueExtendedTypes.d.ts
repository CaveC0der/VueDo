import type { ModalPlugin } from '@/plugins/ModalPlugin';

declare module 'vue' {
  interface ComponentCustomProperties {
    $modalPlugin: ModalPlugin;
  }
}
