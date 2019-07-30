window.onload = function() {
  let menu = document.getElementById("menu");
  menu.addEventListener("click", addClass);
  function addClass() {
    menu.classList.toggle("active");
  }
  window.sr = ScrollReveal();
  sr.reveal(".img1", {
    duration: 2000,
    origin: "left",
    viewFactor: 0.2,
    distance: "150px"
  });
  sr.reveal(".configImg", {
    duration: 2000,
    origin: "right",
    viewFactor: 0.2,
    distance: "150px"
  });
  sr.reveal(".img2", {
    duration: 2000,
    origin: "bottom",
    viewFactor: 0.2,
    distance: "100px"
  });
  sr.reveal(".reasons", {
    duration: 2000,
    origin: "left",
    viewFactor: 0.2,
    distance: "100px"
  });
  sr.reveal(".customer-list", {
    duration: 2000,
    origin: "bottom",
    viewFactor: 0.2,
    distance: "100px"
  });
  sr.reveal(".payment", {
    duration: 2000,
    origin: "top",
    viewFactor: 0.2,
    distance: "300px"
  });
};
