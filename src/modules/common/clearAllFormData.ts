/* eslint-disable */
const clearAllFormData = (formClassName: string) => {
  const allInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(`.${formClassName} input`);
  allInputs.forEach((input: HTMLInputElement) => (input.value = ""));
};

export default clearAllFormData;
