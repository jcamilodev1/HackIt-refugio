const Menu = document.querySelector("#hamburgerMenu");

const toggleMenu = () => {
  const MenuLinks = document.querySelector("#listMenu");
  MenuLinks.classList.toggle("hidden");
};

Menu.addEventListener("click", toggleMenu);
