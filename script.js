window.onload = function() {
  let menu = document.getElementById("menu");
  menu.addEventListener("click", addClass);
  function addClass() {
    menu.classList.toggle("active");
  }
  window.sr = ScrollReveal();
  sr.reveal(".img1", {
    duration: 1800,
    origin: "left",
    viewFactor: 0.1,
    distance: "150px"
  });
  sr.reveal(".configImg", {
    duration: 1800,
    origin: "right",
    viewFactor: 0.1,
    distance: "150px"
  });
  sr.reveal(".img2", {
    duration: 1800,
    origin: "bottom",
    viewFactor: 0.1,
    distance: "100px"
  });
  sr.reveal(".reasons-row", {
    duration: 1800,
    origin: "left",
    viewFactor: 0.1,
    distance: "100px"
  });
  sr.reveal(".customer-list", {
    duration: 1800,
    origin: "bottom",
    viewFactor: 0.1,
    distance: "100px"
  });
  sr.reveal(".payment", {
    duration: 1800,
    origin: "top",
    viewFactor: 0.1,
    distance: "300px"
  });
};
