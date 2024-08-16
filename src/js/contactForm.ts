import { createContact, type ContactForm } from "./contactAirtable";

/**
 * Handle AJAX submit of contact form
 * Contact me for access to the FormZen form service
 */
const submitButton = document.querySelector(".contact-form-submit-button") as HTMLButtonElement;
const submitButtonLoadingSpinner = document.querySelector("#contact-form-submit-button-spinner") as HTMLDivElement;

function setLoadingState(isLoading: boolean) {
  if (isLoading) {
    submitButton.setAttribute("disabled", "");
    submitButtonLoadingSpinner.style.display = "block";
    return;
  }

  submitButton.removeAttribute("disabled");
  submitButtonLoadingSpinner.style.display = "none";
}

async function submitForm(formValues: ContactForm) {
  return await createContact(formValues);
}

export function handleContactFormSubmit() {
  const contactForm = document.querySelector("#contact-form") as HTMLFormElement;
  const successMessage = document.querySelector(".contact-form-message-success") as HTMLDivElement;
  const errorMessage = document.querySelector(".contact-form-message-error") as HTMLDivElement;

  if (contactForm) {
    contactForm.addEventListener("submit", async function(event) {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const formValues = Object.fromEntries(formData);

      // Reset any existing messages on new submit
      successMessage.style.display = "none";
      errorMessage.style.display = "none";

      setLoadingState(true);

      try {
        submitForm(formValues as ContactForm);

        successMessage.style.display = "block";
        contactForm.reset();
      } catch (error) {
        errorMessage.style.display = "block";
      } finally {
        setLoadingState(false);
      }
    });
  }
}

handleContactFormSubmit();
