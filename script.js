const dropDown = document.querySelector(".dropdown");
const dropDownItems = document.querySelectorAll(".dd-item");
const select = document.querySelector(".select-div");
const selectText = document.querySelector(".select-text");
let isActive = false;

select.addEventListener("click", () => {
  if (isActive) {
    dropDown.classList.add("hidden");
    isActive = false;
  } else {
    dropDown.classList.remove("hidden");
    isActive = true;
  }
});

dropDownItems.forEach((item) => {
  item.addEventListener("click", () => {
    selectText.textContent = item.textContent;
    dropDown.classList.add("hidden");
    isActive = false;
  });
});
