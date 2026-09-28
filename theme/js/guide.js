(() => {
  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;

    const option = event.target.closest("[data-decision-activity] .decision-option");
    if (!option) return;

    const activity = option.closest("[data-decision-activity]");
    const feedback = activity.querySelector(".decision-feedback");

    activity.querySelectorAll(".decision-option").forEach((button) => {
      button.setAttribute("aria-pressed", String(button === option));
    });

    feedback.textContent = option.dataset.feedback;
  });
})();