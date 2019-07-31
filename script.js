window.onload = function() {
  let menu = document.getElementById("menu");
  menu.addEventListener("click", addClass);
  function addClass() {
    menu.classList.toggle("active");
  }
  window.sr = ScrollReveal();
  sr.reveal(".img1", {
    duration: 1000,
    origin: "left",
    viewFactor: 0.1,
    reset: true,
    easing: "ease-in-out",
    distance: "150px"
  });
  sr.reveal(".configImg", {
    duration: 1000,
    origin: "right",
    viewFactor: 0.1,
    reset: true,
    easing: "ease-in-out",
    distance: "150px"
  });
  sr.reveal(".img2", {
    duration: 1000,
    origin: "bottom",
    viewFactor: 0.1,
    reset: true,
    easing: "ease-in-out",
    distance: "100px"
  });
  sr.reveal(".reasons-row", {
    duration: 1000,
    origin: "left",
    viewFactor: 0.1,
    reset: true,
    easing: "ease-in-out",
    distance: "100px"
  });
  sr.reveal(".customer-list", {
    duration: 1000,
    origin: "bottom",
    viewFactor: 0.1,
    reset: true,
    easing: "ease-in-out",
    distance: "100px",
    scale: 0.9
  });
  sr.reveal(".payment", {
    duration: 1000,
    origin: "top",
    viewFactor: 0.1,
    reset: true,
    easing: "ease-in-out",
    distance: "300px"
  });
};
