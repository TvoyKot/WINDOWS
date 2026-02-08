const checkStringInput = (selector) => {
  const stringInputs = document.querySelectorAll(selector);
  stringInputs.forEach((item) => {
    item.addEventListener("input", () => {
      item.value = item.value.replace(/[^А-Яа-яёЁ\s]+/g, "");
    });
    item.addEventListener("blur", () => {
      item.value = item.value.trim().replace(/\s+/g, " ");
    });
  });
};
export default checkStringInput;
