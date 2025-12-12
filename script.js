  document.querySelectorAll(".dropdown-btn").forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentElement.classList.toggle("open");
    });
  });
