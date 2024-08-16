/**
 * Handle AJAX submit of newsletter signup form
 * Contact me for access to the FormZen form service
 */
function newsletterSignupFormInit(formClass: string) {
  const newsletterSignupForm = document.querySelector(`.${formClass}`) as HTMLFormElement;
  const successMessage = document.querySelector(`.newsletter-signup-form.${formClass} .form-success`) as HTMLDivElement;
  const errorMessage = document.querySelector(`.newsletter-signup-form.${formClass} .form-error`) as HTMLDivElement;
  const submitButton = document.querySelector(`.newsletter-signup-form.${formClass} .submit-button`) as HTMLButtonElement;
  const submitButtonLoadingSpinner = document.querySelector(`.newsletter-signup-form.${formClass} .submit-button-spinner`) as HTMLDivElement;

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
        form_id: "01J4WTF1VFA7MMNAJPEXSX554K",
        data: {
          email: formValues.email,
          page: formValues.page,
        }
      })
    });

    return await res.json();
  }

  if (newsletterSignupForm) {
    newsletterSignupForm.addEventListener("submit", async function(event) {
      event.preventDefault();
      const formData = new FormData(newsletterSignupForm);
      const formValues = Object.fromEntries(formData);

      // Reset any existing messages on new submit
      successMessage.style.display = "none";
      errorMessage.style.display = "none";

      setLoadingState(true);

      try {
        const data = await submitForm(formValues);

        if (data.status === "ok") {
          successMessage.style.display = "block";
          newsletterSignupForm.reset();
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

newsletterSignupFormInit("newsletter-signup-form-sidebar");
newsletterSignupFormInit("newsletter-signup-form-post-end");