// Smooth-scroll to a section, using Lenis when active and native scrolling otherwise.
export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: 0 });
  else el.scrollIntoView({ behavior: "smooth" });
}

export function scrollToTop() {
  if (window.__lenis) window.__lenis.scrollTo(0);
  else window.scrollTo({ top: 0, behavior: "smooth" });
}
