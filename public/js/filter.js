document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");

  const links = document.querySelectorAll("#filters a");
  links.forEach((link) => {
    if (link.href.includes(`category=${category}`)) {
      link.classList.add("active");
    }
  });
});
