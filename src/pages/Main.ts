export const setMain = ():void => {
  const main = document.querySelector("main") as HTMLElement;
  console.log(main);
  const code = `
    <div class="test">
   <div class="back"></div>
    </div>
    `;
  main.innerHTML = code;
};
