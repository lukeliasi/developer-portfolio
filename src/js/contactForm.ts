/**
 * Handle AJAX submit of contact form
 */
import { app } from "./App";

const eventBus = app.getEventBus();

type ContactFormSubmitStates = "uninitialized" | "loading" | "error" | "ok";

let CURRENT_CONTACT_FORM_SUBMIT_STATE: ContactFormSubmitStates = "uninitialized";

function updateContactFormSubmitState(newState: ContactFormSubmitStates) {
  CURRENT_CONTACT_FORM_SUBMIT_STATE = newState;
  eventBus.dispatch("contactFormSubmitStateUpdate", newState);
}

export function handleContactFormSubmit() {
  const contactForm = document.querySelector("#contact-form") as HTMLFormElement;
  const submitButton = document.querySelector(".contact-form-submit-button") as HTMLButtonElement;
  const submitButtonLoadingSpinner = document.querySelector("#contact-form-submit-button-spinner") as HTMLDivElement;
  const successMessage = document.querySelector(".contact-form-message-success") as HTMLDivElement;
  const errorMessage = document.querySelector(".contact-form-message-error") as HTMLDivElement;

  if (contactForm) {
    contactForm.addEventListener("submit", async function(event) {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const formValues = Object.fromEntries(formData);

      try {
        eventBus.dispatch("contactFormSubmit");

        // Reset any existing messages on new submit
        successMessage.style.display = "none";
        errorMessage.style.display = "none";

        updateContactFormSubmitState("loading");

        const res = await fetch("https://formzen.io/api/forms/Eg4rQD8Fuv/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            data: {
              name: formValues.name,
              email: formValues.email,
              subject: formValues.subject,
              message: formValues.message,
            },
            mailSettings: {
              replyTo: formValues.email
            }
          })
        });

        const data = await res.json();

        if (data.status === "success") {
          updateContactFormSubmitState("ok");
          contactForm.reset();
        } else {
          updateContactFormSubmitState("error");
        }
      } catch (error) {
        updateContactFormSubmitState("error");
      }
    });

    // Listen to form submit state updates
    eventBus.register("contactFormSubmitStateUpdate", (newState: ContactFormSubmitStates) => {
      // Handing loading by disabling button and showing spinner
      if (submitButtonLoadingSpinner) {
        if (newState === "loading") {
          submitButton.setAttribute("disabled", "");
          submitButtonLoadingSpinner.style.display = "block";
        } else {
          submitButton.removeAttribute("disabled");
          submitButtonLoadingSpinner.style.display = "none";
        }
      }

      // Handle success/error message
      if (newState === "ok") {
        successMessage.style.display = "block";
      }

      if (newState === "error") {
        errorMessage.style.display = "block";
      }
    });
  }
}

handleContactFormSubmit();