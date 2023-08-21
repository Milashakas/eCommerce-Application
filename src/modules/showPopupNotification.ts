import PopupNotification from "../components/common/PopupNotification";
import IPopupNotificationData from "../interfaces/IPopupNotificationData";
import { runPageFunctional } from "../router";

const popupAnimation = async () => {
  const popupNotification: HTMLElement = document.querySelector(".popup-notification") as HTMLElement;

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
  body.innerHTML += PopupNotification(notificationData);

  runPageFunctional();
  await popupAnimation();
};

export default showPopupNotification;
