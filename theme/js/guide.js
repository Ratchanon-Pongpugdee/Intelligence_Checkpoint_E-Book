(() => {
  const bootstrapCss = document.createElement("link");
  bootstrapCss.rel = "stylesheet";
  bootstrapCss.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
  document.head.append(bootstrapCss);

  const bootstrapScript = document.createElement("script");
  bootstrapScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
  bootstrapScript.defer = true;
  document.head.append(bootstrapScript);

  document.addEventListener("click", (event) => {
    const option = event.target.closest("[data-decision-activity] .decision-option");
    if (!option) return;

    const activity = option.closest("[data-decision-activity]");
    const feedback = activity.querySelector(".decision-feedback");
    feedback.textContent = option.dataset.feedback;
  });
})();