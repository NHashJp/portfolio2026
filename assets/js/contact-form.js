(function () {
  var form = document.getElementById("contact-form");
  var status = document.getElementById("contact-form-status");

  if (!form || !status) return;

  var emailInput = document.getElementById("contact-email");
  var submitButton = form.querySelector('input[type="submit"]');
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setStatus(message, type) {
    status.textContent = message;
    status.className = "form-status";

    if (type) {
      status.classList.add("is-" + type);
    }
  }

  function validateEmail(email) {
    return emailPattern.test(email);
  }

  function validateForm(data) {
    if (!data.name.trim()) {
      return "Please enter your name.";
    }

    if (!data.email.trim()) {
      return "Please enter your email address.";
    }

    if (!validateEmail(data.email)) {
      return "Please enter a valid email address.";
    }

    if (!data.message.trim()) {
      return "Please enter a message.";
    }

    return "";
  }

  emailInput.addEventListener("input", function () {
    var value = emailInput.value.trim();

    if (!value || validateEmail(value)) {
      emailInput.setCustomValidity("");
      return;
    }

    emailInput.setCustomValidity("Please enter a valid email address.");
  });

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    var data = {
      name: form.elements.name.value.trim(),
      email: form.elements.email.value.trim(),
      message: form.elements.message.value.trim(),
    };

    var validationError = validateForm(data);

    if (validationError) {
      setStatus(validationError, "error");
      return;
    }

    submitButton.disabled = true;
    setStatus("Sending message...", "pending");

    try {
      var response = await fetch(form.action, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      var result = await response.json().catch(function () {
        return {};
      });

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      form.reset();
      emailInput.setCustomValidity("");
      setStatus("Message sent successfully.", "success");
    } catch (error) {
      setStatus(error.message || "Unable to send your message.", "error");
    } finally {
      submitButton.disabled = false;
    }
  });
})();
