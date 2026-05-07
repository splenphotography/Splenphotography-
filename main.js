// =========================
// LENIS SMOOTH SCROLL
// =========================

const lenis = new Lenis({
  smooth: true
})

function raf(time) {

  lenis.raf(time)

  requestAnimationFrame(raf)

}

requestAnimationFrame(raf)


// =========================
// HERO ANIMATION
// =========================

gsap.from(".hero-subtitle",{
  y:30,
  opacity:0,
  duration:1,
  delay:0.3
})

gsap.from(".hero h1",{
  y:50,
  opacity:0,
  duration:1.2,
  delay:0.5
})

gsap.from(".hero-button",{
  y:20,
  opacity:0,
  duration:1,
  delay:0.8
})


// =========================
// MOBILE MENU
// =========================

const menuToggle = document.querySelector(".menu-toggle")

const navLinks = document.querySelector(".nav-links")

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active")

})
