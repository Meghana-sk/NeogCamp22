const btnRef = document.querySelectorAll(".btn");
const snackBarBaselineRef = document.querySelector(".snackbar-baseline");
const snackBarLeadingRef = document.querySelector(".snackbar-leading");
const snackBarStackedRef = document.querySelector(".snackbar-stacked");
const closeBtn = document.querySelector(".close-icon");

const showBaselineSnackbar = () => {
  snackBarBaselineRef.style.visibility = "visible";
};

const HideBaselineSnackbar = () => {
  snackBarBaselineRef.style.visibility = "hidden";
};

const showLeadingSnackbar = () => {
  snackBarLeadingRef.style.visibility = "visible";
};

const showStackedSnackbar = () => {
  snackBarStackedRef.style.visibility = "visible";
};

btnRef[0].addEventListener("click", showBaselineSnackbar);
btnRef[1].addEventListener("click", showLeadingSnackbar);
btnRef[2].addEventListener("click", showStackedSnackbar);

closeBtn.addEventListener("click", HideBaselineSnackbar);
