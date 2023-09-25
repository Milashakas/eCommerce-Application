import IPopupNotificationData from "../../interfaces/IPopupNotificationData";

const PopupNotification = (notificationData: IPopupNotificationData): string => {
  const view: string = `
  <aside class="popup-notification notification-offset ${notificationData.classMode}">
    <span>${notificationData.message}</span>
  </aside>
  `;

  return view;
};

export default PopupNotification;
