const closeBtn = document.querySelector(".close");
const mobileNavBar = document.querySelector(".mobile-nav-bar");
const openNav = document.querySelector(".open-nav");

if (closeBtn)
  closeBtn.addEventListener("click", () => {
    // @ts-ignore
    mobileNavBar.style.width = "0";
  });

openNav.addEventListener("click", () => {
  // @ts-ignore
  mobileNavBar.style.width = "60vw";
});

addEventListener("resize", () => {
  if (matchMedia("(min-width:768px)").matches)
    // @ts-ignore
    mobileNavBar.style.width = "0";
});

addEventListener("click", e => {
  if (
    // @ts-ignore
    !e.target.matches(
      ".open-nav,.open-nav > *,.mobile-nav-bar,.mobile-nav-bar > *"
    )
  )
    // @ts-ignore
    mobileNavBar.style.width = "0";
});
