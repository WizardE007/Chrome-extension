document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    chrome.tabs.create({ url: link.href });
  });
});
