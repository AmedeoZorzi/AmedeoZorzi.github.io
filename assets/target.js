document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href]').forEach((a) => {
    const href = a.getAttribute("href");
    if (!href) return;

    // skip anchors and special links
    if (
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("javascript:")
    ) return;

    // apply to ALL links
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
  });
});
