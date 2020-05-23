document.getElementById("themeSwitch").addEventListener("change", function (e) {
  document.querySelector("body").classList.toggle("light");
  document.querySelector(".mode__btn").classList.toggle("mode__btn--light");
  const modeName = document.querySelector(".mode__name");
  if (document.querySelector("body").classList.contains("light")) {
    modeName.textContent = "Dark Mode";
  } else {
    modeName.textContent = "Light Mode";
  }
  e.target.checked
    ? document.body.setAttribute("data-theme", "light")
    : document.body.removeAttribute("data-theme");
});
