document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("y-navbar");
  if (navbar) {
    fetch("../../components/y-u-navbar/navbar.html")
      .then((res) => res.text())
      .then((data) => {
        navbar.innerHTML = data;

        const searchToggle = document.getElementById("searchToggle");
        const searchInput = document.getElementById("searchInput");

        if (searchToggle && searchInput) {
          searchToggle.addEventListener("click", (e) => {
            e.preventDefault();
            searchInput.classList.toggle("show");
            if (searchInput.classList.contains("show")) {
              searchInput.focus();
            }
          });
        }
      })
      .catch((err) => console.error("Error loading navbar:", err));
  }

  const footer = document.querySelector("y-footer");
  if (footer) {
    fetch("../../components/y-u-footer/footer.html")
      .then((res) => res.text())
      .then((data) => {
        footer.innerHTML = data;
      })
      .catch((err) => console.error("Error loading footer:", err));
  }
});

function showSuccessPopup() {
  document.getElementById('successPopup').style.display = 'flex';
}