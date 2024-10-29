document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    chrome.tabs.create({ url: link.href });
  });
});

const orderedList = document.getElementById("shortcut-list");
let draggedItem = null;

orderedList.addEventListener("dragstart", (event) => {
  draggedItem = event.target;
  event.target.classList.add("dragging");
});

orderedList.addEventListener("dragend", (event) => {
  // reset the transparency
  event.target.classList.remove("dragging");
  draggedItem = null;
});

