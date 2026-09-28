
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  document.querySelectorAll("[data-nav]").forEach(link => {
    if (link.dataset.nav === page) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  const year = document.querySelectorAll("[data-year]");
  year.forEach(el => el.textContent = new Date().getFullYear());

  const form = document.querySelector("#contactForm");
  const message = document.querySelector("#formMessage");
  if (form && message) {
    form.addEventListener("submit", (event) => {
      const email = form.querySelector("#email");
      if (email && !email.checkValidity()) {
        event.preventDefault();
        message.textContent = "Please enter a valid email address.";
        message.className = "error";
        email.focus();
        return;
      }
      // Formspree handles the real submission. This message is shown only
      // when the browser accepts the form submission event.
      message.textContent = "Your form is ready to be submitted.";
      message.className = "notice";
    });
  }
});
