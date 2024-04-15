import { onUnmounted, type Ref, ref } from 'vue';

export interface VisibilityControls {
  visible: Ref<boolean>;
  show: () => void;
  hide: () => void;
  toggle: () => void;
}

const useVisible = (timeout?: number): VisibilityControls => {
  const visible = ref<boolean>(false);
  let timeoutId: number | undefined;

  const show = () => {
    visible.value = true;

    if (timeout) {
      timeoutId = setTimeout(() => {
        visible.value = false;
      }, timeout);
    }
  };

  const hide = () => {
    visible.value = false;

    if (timeout) {
      clearTimeout(timeoutId);
    }
  };

  const toggle = () => {
    if (visible.value) {
      hide();
    } else {
      show();
    }
  };

  onUnmounted(() => hide());

  return { visible, show, hide, toggle };
};

export default useVisible;
