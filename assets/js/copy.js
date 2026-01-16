document.addEventListener("click", async (e) => {
  const btn = e.target.closest("[data-copy]");
  if (!btn) return;

  const text = btn.getAttribute("data-copy");
  const status = btn.parentElement?.querySelector(".copy-status");

  try {
    await navigator.clipboard.writeText(text);
    btn.textContent = "Copied";
    if (status) status.textContent = "Copied to clipboard";

    setTimeout(() => {
      btn.textContent = "Copy";
      if (status) status.textContent = "";
    }, 1400);
  } catch {
    btn.textContent = "Failed";
    if (status) status.textContent = "Copy not supported";
    setTimeout(() => {
      btn.textContent = "Copy";
      if (status) status.textContent = "";
    }, 1400);
  }
});
