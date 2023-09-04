import PopupNotification from "../components/common/PopupNotification";
import IPopupNotificationData from "../interfaces/IPopupNotificationData";
import { runPageFunctional } from "../router";

const getPopupElement = () => {
  const popupNotification = document.querySelector(".popup-notification");

  return popupNotification;
};

const popupAnimation = async () => {
  const popupNotification = getPopupElement();
  if (!popupNotification) return;

  await new Promise((resolve) => {
    setTimeout(() => {
      popupNotification.classList.remove("notification-offset");
      resolve(true);
    }, 200);
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      popupNotification.classList.add("notification-offset");
      resolve(true);
    }, 6000);
  });

  await new Promise((resolve) => {
    setTimeout(() => {
      popupNotification.remove();
      resolve(true);
    }, 300);
  });
};

const showPopupNotification = async (notificationData: IPopupNotificationData) => {
  const body: HTMLBodyElement = document.body as HTMLBodyElement;
  const prospectivePopupElement = getPopupElement();
  if (prospectivePopupElement) prospectivePopupElement.remove();

  body.innerHTML += PopupNotification(notificationData);

  runPageFunctional();
  await popupAnimation();
};

export default showPopupNotification;
