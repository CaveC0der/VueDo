import type { Ref } from 'vue';

export interface VisibilityControls {
  visible: Ref<boolean>;
  show: () => void;
  hide: () => void;
  toggle: () => void;
}
