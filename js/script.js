const myName = "Sami Fziyen";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", () => headerEl.classList.toggle("nav-open"));

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") window.scrollTo({ top: 0, behavior: "smooth" });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link")) headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  entries => {
    const ent = entries[0];

    if (ent.isIntersecting === false) document.body.classList.add("sticky");
    if (ent.isIntersecting === true) document.body.classList.remove("sticky");
  },
  {
    root: null, // In the viewport
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  const flex = document.createElement("div");
  flex.style.cssText = "display: flex; flex-direction: column; row-gap: 1px";
  flex.innerHTML = "<div></div><div></div>";

  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1;
  document.body.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
