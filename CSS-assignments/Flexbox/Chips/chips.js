const filterInput = document.querySelector(".filter-options");
const chipsLayout = document.querySelector(".chips-container");
const chips = document.querySelector(".chips");
const addChips = (text) => {
  const createdChip = document.createElement("div");
  createdChip.style.width = `${100}px`;
  const chipText = document.createElement("span");
  chipText.innerText = filterInput.innerText;
  createdChip.appendChild(chipText);
  chipsLayout.appendChild(createdChip);
  document.body.appendChild(chipsLayout);
  // createdChip.innerHTML = "text";
  // document.body.appendChild(createdChip);
};

filterInput.addEventListener("change", addChips);
