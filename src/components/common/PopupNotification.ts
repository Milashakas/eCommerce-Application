const PopupNotification = (classMode: "notification-error" | "notification-success", message: string): string => {
  const view: string = `
  <aside class="popup-notification ${classMode}">
    <span>${message}</span>
  </aside>
  `;

  return view;
};

export default PopupNotification;
