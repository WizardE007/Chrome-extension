document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    chrome.tabs.create({ url: link.href });
  });
});

const orderedList = document.getElementById("shortcut-list");
let draggedItem = null;

orderedList.addEventListener("dragstart", (event) => {
  draggedItem = event.currentTargett;
  event.target.classList.add("dragging");
});

orderedList.addEventListener("dragend", (event) => {
  // reset the transparency
  event.target.classList.remove("dragging");
  draggedItem = null;
});

orderedList.addEventListener("dragover", (event) => {
  event.preventDefault();
});

orderedList.addEventListener("drop", (event) => {
  event.preventDefault();
  const targetItem = event.target.closest("li");
  if (targetItem && targetItem !== draggedItem) {
    orderedList.insertBefore(draggedItem, targetItem);
  }
  // if (event.target.className === "ol" && event.target !== draggedItem) {
  //   orderedList.insertBefore(draggedItem, event.target.nextSibling);
  // }
});
