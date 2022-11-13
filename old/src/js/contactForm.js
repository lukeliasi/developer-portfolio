class ActionState {
  listeners = [];
  status = "uninitialized";

  addListener(listener) {
    this.listeners.push(listener);
  }

  removeListener(listenerToRemove) {
    this.listeners = this.listeners.filter((listener) => listenerToRemove !== listener);
  }

  notify() {
    this.listeners.forEach((listener) => listener());
  }

  setState(status) {
    this.status = status;
    this.notify();
  }

  getState() {
    return this.status;
  }
}

const contactForm = document.querySelector("#contact-form");
const contactFormState = new ActionState();
contactFormState.addListener(onFormStatusChange);

function onFormStatusChange() {
  const status = contactFormState.getState();
  const contactFormSubmitButtonSpinner = document.querySelector("#contact-form-submit-button-spinner");
  const contactFormSubmitButton = document.querySelector("#contact-form-submit-button");
  const alertSuccess = document.querySelector("#contact-form-alert-success");
  const alertError = document.querySelector("#contact-form-alert-error");

  if (status === "loading") {
    // Hide alerts while loading
    alertSuccess.classList.add("hidden");
    alertError.classList.add("hidden");

    // Add loading indicator spinner and disable the submit button
    contactFormSubmitButtonSpinner.classList.remove("hidden");
    contactFormSubmitButton.setAttribute("disabled", "");
  } else {
    // Remove loading spinner and disabled attribute on the button
    contactFormSubmitButtonSpinner.classList.add("hidden");
    contactFormSubmitButton.removeAttribute("disabled");
    if (status === "ok") {
      // Show success alert
      alertSuccess.classList.remove("hidden");
    } else {
      // Show error alert
      alertError.classList.remove("hidden");
    }
  }
}

if (contactForm) {
  contactForm.addEventListener("submit", async function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formProps = Object.fromEntries(formData);

    try {
      contactFormState.setState("loading");
      const res = await fetch("https://formzen.io/api/forms/Eg4rQD8Fuv/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          data: {
            name: formProps.name,
            email: formProps.email,
            subject: formProps.subject,
            message: formProps.message,
          },
          mailSettings: {
            replyTo: formProps.email
          }
        })
      });

      const data = await res.json();

      if (data.status === "success") {
        contactFormState.setState("ok");
        contactForm.reset();
      } else {
        contactFormState.setState("error");
      }
    } catch (error) {
      contactFormState.setState("error");
    }
  });
} else {
  contactFormState.removeListener(onFormStatusChange);
}