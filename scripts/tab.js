function changeTab(selected) {
  const tabs = [
    document.getElementById("overview-tab"),
    document.getElementById("techs-tab"),
    document.getElementById("strategy-tab")
  ];
  const divs = [
    document.getElementById("overview"),
    document.getElementById("techs"),
    document.getElementById("strategy")
  ];
  for (index = 0; index < 3; index++) {
    if (index === selected) {
      tabs[index].className = "selected";
      divs[index].style.display = "block";
    } else {
      tabs[index].className = "unselected";
      divs[index].style.display = "none";
    }
  }
  return 0;
}

document.getElementById("overview-tab").addEventListener("click", () => changeTab(0));
document.getElementById("techs-tab").addEventListener("click", () => changeTab(1));
document.getElementById("strategy-tab").addEventListener("click", () => changeTab(2));