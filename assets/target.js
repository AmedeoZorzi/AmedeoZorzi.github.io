document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href]').forEach((a) => {
    const href = a.getAttribute("href");
    if (!href) return;

    // Skip anchors + special links
    if (
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      href.startsWith("javascript:")
    ) return;

    // Resolve relative URLs safely
    let url;
    try {
      url = new URL(href, window.location.href);
    } catch {
      return;
    }

    // Only external links (different origin)
    if (url.origin !== window.location.origin) {
      a.setAttribute("target", "_blank");
      a.setAttribute("rel", "noopener noreferrer");
    }
  });
});