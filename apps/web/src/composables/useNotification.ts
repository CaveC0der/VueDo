import { onUnmounted, ref } from 'vue';
import { NOTIFICATION_TIMEOUT } from '@/common/constants';

const useNotification = () => {
  const notification = ref({ visible: false, text: '' });
  let notificationTimeoutId: number | undefined;

  const showNotification = (text: string) => {
    notification.value.text = text;
    notification.value.visible = true;
    notificationTimeoutId = setTimeout(() => {
      notification.value.visible = false;
    }, NOTIFICATION_TIMEOUT);
  };

  const hideNotification = () => {
    notification.value.visible = false;
    clearTimeout(notificationTimeoutId);
  };

  onUnmounted(() => clearTimeout(notificationTimeoutId));

  return { notification, showNotification, hideNotification };
};

export default useNotification;
