const boxes = document.querySelectorAll(".box-content");
const boxHeaders = document.querySelectorAll(".box-header");

if (window.innerWidth < 768) {
  boxHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      boxHeaders.forEach((header) => {
        header.classList.remove("active");
        header.querySelector("i").style.transform = "rotate(0deg)";
        header.nextElementSibling.style.maxHeight = "0";
      });
      if (header.classList.contains("active")) {
        header.nextElementSibling.style.maxHeight = "0";
        header.classList.remove("active");
        header.querySelector("i").style.transform = "rotate(0deg)";
      } else {
        header.nextElementSibling.style.maxHeight = `144px`;
        header.classList.add("active");
        header.querySelector("i").style.transform = "rotate(180deg)";
      }
    });
  });
}
