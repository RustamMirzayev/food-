window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabheader__item"),
    tabsContent = document.querySelectorAll(".tabcontent");

  function hideTabContent() {
    tabsContent.forEach((item) => {
      item.classList.add("none");
      item.classList.remove("show", "fade");
    });

    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add("show", "fade");
    tabsContent[i].classList.remove("none");
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();

  tabs.forEach((item, i) => {
    item.addEventListener("click", (event) => {
      if (event.target == item) {
        hideTabContent();
        showTabContent(i);
      }
    });
  });
});
