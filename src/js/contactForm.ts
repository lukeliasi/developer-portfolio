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
  } else {
    submitButton.removeAttribute("disabled");
    submitButtonLoadingSpinner.style.display = "none";
  }
}

async function submitForm(formValues: any) {
  const res = await fetch("https://new.formzen.io/api/submission", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      form_id: "01J4WTF1TCCY0B45VFGAHTT08M",
      data: {
        name: formValues.name,
        email: formValues.email,
        subject: formValues.subject,
        message: formValues.message,
      }
    })
  });

  return await res.json();
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
        const data = await submitForm(formValues);

        if (data.status === "ok") {
          successMessage.style.display = "block";
          contactForm.reset();
        } else {
          errorMessage.style.display = "block";
        }
      } catch (error) {
        errorMessage.style.display = "block";
      } finally {
        setLoadingState(false);
      }
    });
  }
}

handleContactFormSubmit();