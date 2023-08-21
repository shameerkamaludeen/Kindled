/* || Component - Navbar responsive manu center
   ========================================================================== */

export default function addNavbarRMCEvents() {

  // Navigation button toggler click for animation
  const navbarTogglerElem = document.querySelectorAll('.navbar-toggler');
  navbarTogglerElem[0].addEventListener('click', function () {
    gsap.fromTo(this, { opacity: 0.2, duration: 2, ease: "power3.out" }, { opacity: 1, duration: 2, ease: "power3.out" });
  });
}