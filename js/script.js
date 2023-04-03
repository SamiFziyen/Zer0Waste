// Define myName and h1 elements and log their values
const myName = "Sami Fziyen";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

// Add event listener to h1 element to change its text content and style on click (commented out for now)
// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

// Set current year on yearEl element
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

// Make mobile navigation work by toggling nav-open class on headerEl element when btnNavEl is clicked
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Add smooth scrolling animation to all links with a href attribute
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // If href is "#" scroll back to top with smooth behavior
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // If href starts with "#" scroll to the section with the matching ID with smooth behavior
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // If link has main-nav-link class, toggle nav-open class on headerEl to close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// Make header sticky when scrolling down by adding or removing sticky class on document.body based on sectionHeroEl visibility
const sectionHeroEl = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null, // In the viewport
    threshold: 0,
    rootMargin: "-80px", // Trigger sticky class 80px before sectionHeroEl reaches the top of the viewport
  }
);
obs.observe(sectionHeroEl);

// Check if browser supports flexbox gap property by creating a div element with flexbox and row gap, adding two child div elements, and checking if its scrollHeight is 1
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  // If flexbox gap is not supported, add no-flexbox-gap class on document.body
  if (!isSupported) {
    document.body.classList.add("no-flexbox-gap");
  }
}
checkFlexGap();

// Add CSS rules for no-flexbox-gap class to fix missing flexbox
