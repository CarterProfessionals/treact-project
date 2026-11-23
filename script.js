function openMenu() {
  document.body.classList.add("menu--open");
  document.getElementById("menu-button").setAttribute("aria-expanded", "true");
}

function closeMenu() {
  document.body.classList.remove("menu--open");
  document.getElementById("menu-button").setAttribute("aria-expanded", "false");
}