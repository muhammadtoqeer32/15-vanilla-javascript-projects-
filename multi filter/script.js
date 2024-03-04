document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn");
  const galleryItems = document.querySelectorAll(".box");

  buttons.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      const filterValue = this.getAttribute("data-filter");

      galleryItems.forEach(function (item) {
        item.style.display = "none";
      });

      if (filterValue === "all") {
        galleryItems.forEach(function (item) {
          item.style.display = "block";
        });
      } else {
        const filteredItems = document.querySelectorAll("." + filterValue);
        filteredItems.forEach(function (item) {
          item.style.display = "block";
        });
      }

      if (filterValue === "logo") {
        const logoItems = document.querySelectorAll(".logo");

        logoItems.forEach(function (logoItem) {
          logoItem.style.display = "block";
        });
      }
    });
  });
});
