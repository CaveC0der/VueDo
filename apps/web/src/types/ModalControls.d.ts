import type { VisibilityControls } from '@/types/VisibilityControls';

export interface ModalControls extends VisibilityControls {
  setMessage: (message: string) => void;
  showMessage: (message: string) => void;
}
