document.addEventListener("DOMContentLoaded", () => {
  // Form validation
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission for this mock

    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    if (!email || !password) {
      alert("Please fill in both fields!");
      return;
    }

    // Simple email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Login successful (mock)!");
  });

  // Show/Hide password toggle
  const passwordField = document.querySelector("#password");
  const toggleButton = document.querySelector("#togglePassword");

  passwordField.addEventListener("input", function () {
    toggleButton.style.display = this.value ? "inline" : "none";
  });

  toggleButton.addEventListener("click", function () {
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
    this.textContent = type === "password" ? "Show" : "Hide";
  });
});
