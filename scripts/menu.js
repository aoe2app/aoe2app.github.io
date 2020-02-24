function toggleMenu() {
  const menu = document.getElementById("menu");
  const button = document.getElementById("menu-button");
  if (menu.style.display === "none") {
    menu.style.display = "flex";
    button.style.color = "black";
    button.style.backgroundColor = "lightGrey";
    button.style.opacity = "0.95";
  } else {
    menu.style.display = "none";     
    button.style.color = "white";
    button.style.backgroundColor = "black"; 
    button.style.opacity = "1";
  }
  window.scrollTo(0, 0);
  return 0;
}

document.getElementById("menu-button").addEventListener("click", toggleMenu);