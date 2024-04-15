import NotificationContext from 'contexts/notificationContext';
import { useContext } from 'react';

export const useNotification = () => {
  const { notificationState } = useContext(NotificationContext);
  return { message: notificationState.message };
};
