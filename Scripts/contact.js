/* ---------- Success modal element ---------- */
const contactModel = document.createElement("div");
contactModel.id = 'contactModel';
contactModel.classList.add('position-fixed', 'top-0', 'start-0', 'w-100', 'h-100', 'd-flex', 'justify-content-center', 'align-items-center', 'p-4', 'fade-backdrop', 'z-index-9999');
contactModel.innerHTML = `
  <div class="p-4 rounded-4 shadow-lg w-100" style="max-width:500px; background-color: var(--bg-primary);">
    <div class="mb-2 text-center">
      <h1 class="modal-title fs-4 fw-bold text-center pt-1" style="color: var(--text-primary);">Thank you for your interest!</h1>
    </div>
    <div class="modal-body mb-3">
      <p class="my-3 text-center"><i class="fa-solid fa-circle-check px-4 py-4 rounded-circle" style="font-size: 2.5rem; background-color: var(--green-100); color: var(--green-600);"></i></p>
      <p class="text-center" style="color: var(--text-secondary);">We appreciate you reaching out to us. We'll get back to you as soon as possible!</p>
    </div>
    <div class="modal-footer d-flex justify-content-center gap-4 flex-wrap">
      <button type="button" class="btn secondary-btn rounded-3" id="contactOkBtn"><i class="fa-solid fa-thumbs-up me-2"></i>Okay</button>
    </div>
  </div>
`;

// Function to set spinner animation
function setSpinner() {
  const spinnerDiv = document.getElementById("spinnerbox");
  const spinner = document.getElementById("spinner");
  spinnerDiv.classList.remove("d-none");
  spinner.classList.add("spinner-border");
}
function removeSpinner() {
  const spinnerDiv = document.getElementById("spinnerbox");
  const spinner = document.getElementById("spinner");
  spinnerDiv.classList.add("d-none");
  spinner.classList.remove("spinner-border");
}


/* ---------- DOM hooks ---------- */
const form = document.getElementById("contactForm");
if (!form) throw new Error("contactForm not found - ensure form has id='contactForm'");

/* ---------- Submit handler using no-cors (fire-and-forget) ---------- */
form.addEventListener("submit", async function (event) {
  event.preventDefault();

  // optimistic UX: show spinner
  setSpinner();

  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd_IX0ve1OzvHlWPVDJK6nbgv6rXk_NJwfpNFwD7cWPvOZKng/formResponse";

  try {
    await fetch(formUrl, {
      method: "POST",
      body: new FormData(form),
      mode: "no-cors"
    });

    // Assume success and show modal (optimistic UX).
    removeSpinner();
    document.body.appendChild(contactModel);

    // attach modal button handler
    const okBtn = document.getElementById("contactOkBtn");
    if (okBtn) {
      okBtn.addEventListener("click", CloseContactModel);
    }

    // reset the form, but give user a moment to see the modal
    form.reset();

  } catch (error) {
    // network errors (DNS, offline) still surface here
    contactSpinner.remove();
    console.error("Network or fetch error:", error);
    alert("⚠️ Network error. Try again later.");
  }
});

/* ---------- Close modal + reset form ---------- */
function CloseContactModel() {
  if (contactModel && contactModel.parentElement) contactModel.remove();
}

/* Close modal when clicking outside the modal content (reliable) */
contactModel.addEventListener('click', (e) => {
  if (e.target === contactModel) CloseContactModel();
});
