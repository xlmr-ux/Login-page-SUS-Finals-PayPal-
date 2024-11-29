// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const togglePasswordButton = document.getElementById("togglePassword");

  // Form submission handler
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent actual submission for testing purposes

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Validation
    if (!email || !password) {
      alert("Please fill in both fields!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    alert("Login successful (mock)!");
  });

  // Password show/hide toggle
  togglePasswordButton.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    togglePasswordButton.textContent = type === "password" ? "Show" : "Hide";
  });
});
