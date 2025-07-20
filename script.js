// Typing Animation Class
class TypeWriter {
  constructor(element, words, wait = 3000) {
    this.element = element
    this.words = words
    this.txt = ""
    this.wordIndex = 0
    this.wait = Number.parseInt(wait, 10)
    this.type()
    this.isDeleting = false
  }

  type() {
    const current = this.wordIndex % this.words.length
    const fullTxt = this.words[current]

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1)
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1)
    }

    this.element.innerHTML = this.txt

    let typeSpeed = 150 // Slow typing speed

    if (this.isDeleting) {
      typeSpeed = 100 // Slow erasing speed
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait
      this.isDeleting = true
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false
      this.wordIndex++
      typeSpeed = 1000 // Longer pause between words
    }

    setTimeout(() => this.type(), typeSpeed)
  }
}

// Initialize typing animations
document.addEventListener("DOMContentLoaded", () => {
  const nameElement = document.getElementById("typing-name")
  const positionElement = document.getElementById("typing-position")

  if (nameElement) {
    new TypeWriter(nameElement, ["Tebogo Nelson Mashabane"], 4000) // Slow pace with longer wait
  }

  if (positionElement) {
    new TypeWriter(positionElement, ["Software Engineer"], 4000) // Slow pace with longer wait
  }
})

// Mobile Navigation
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }),
)

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(10, 10, 10, 0.98)"
    navbar.style.boxShadow = "0 2px 20px rgba(220, 38, 38, 0.2)"
  } else {
    navbar.style.background = "rgba(10, 10, 10, 0.95)"
    navbar.style.boxShadow = "none"
  }
})

// Active navigation link highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")

      // Animate counters
      if (entry.target.classList.contains("stat-number") || entry.target.classList.contains("exp-number")) {
        animateCounter(entry.target)
      }

      // Animate skill bars
      if (entry.target.classList.contains("skill-item")) {
        const progressBar = entry.target.querySelector(".skill-progress")
        const width = progressBar.getAttribute("data-width")
        setTimeout(() => {
          progressBar.style.width = width + "%"
        }, 200)
      }
    }
  })
}, observerOptions)

// Animate counter numbers
function animateCounter(element) {
  const target = Number.parseInt(element.getAttribute("data-target")) || Number.parseInt(element.textContent)
  const increment = target / 50
  let current = 0

  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      element.textContent = target + "+"
      clearInterval(timer)
    } else {
      element.textContent = Math.floor(current) + "+"
    }
  }, 50)
}

// Initialize scroll animations
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(
    ".section-header, .about-left, .about-right, .service-card, .portfolio-item, .contact-info, .contact-form, .stat-number, .exp-number, .project-card, .skill-item, .award-card",
  )

  animateElements.forEach((el, index) => {
    el.classList.add("fade-in")
    observer.observe(el)

    // Add stagger delay
    el.style.transitionDelay = `${index * 0.1}s`
  })
})

// Portfolio filtering
const filterBtns = document.querySelectorAll(".filter-btn")
const portfolioItems = document.querySelectorAll(".portfolio-item")

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach((b) => b.classList.remove("active"))
    // Add active class to clicked button
    btn.classList.add("active")

    const filter = btn.getAttribute("data-filter")

    portfolioItems.forEach((item) => {
      if (filter === "all" || item.getAttribute("data-category") === filter) {
        item.style.display = "block"
        setTimeout(() => {
          item.style.opacity = "1"
          item.style.transform = "scale(1)"
        }, 10)
      } else {
        item.style.opacity = "0"
        item.style.transform = "scale(0.8)"
        setTimeout(() => {
          item.style.display = "none"
        }, 300)
      }
    })
  })
})

// Form submission
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault()

  const formData = new FormData(this)
  const name = formData.get("name")
  const email = formData.get("email")
  const subject = formData.get("subject")
  const message = formData.get("message")

  // Simple validation
  if (!name || !email || !subject || !message) {
    alert("Please fill in all fields")
    return
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address")
    return
  }

  // Simulate form submission
  const submitBtn = this.querySelector(".submit-btn")
  const originalText = submitBtn.innerHTML

  submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>'
  submitBtn.disabled = true

  setTimeout(() => {
    alert("Thank you for your message! I'll get back to you soon.")
    this.reset()
    submitBtn.innerHTML = originalText
    submitBtn.disabled = false

    // Reset form labels
    document.querySelectorAll(".form-group label").forEach((label) => {
      label.style.top = "16px"
      label.style.fontSize = "16px"
      label.style.color = "var(--text-muted)"
    })
  }, 2000)
})

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const hero = document.querySelector(".hero")
  const bgShapes = document.querySelector(".bg-shapes")

  if (hero && bgShapes && scrolled < hero.offsetHeight) {
    bgShapes.style.transform = `translateY(${scrolled * 0.5}px)`
  }
})

// Add hover effects to service cards
document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    if (!card.classList.contains("featured")) {
      card.style.transform = "translateY(-10px) scale(1.02)"
    }
  })

  card.addEventListener("mouseleave", () => {
    if (!card.classList.contains("featured")) {
      card.style.transform = "translateY(0) scale(1)"
    }
  })
})

// Add hover effects to project and award cards
document.querySelectorAll(".project-card, .award-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)"
  })

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)"
  })
})

// Add floating animation to floating cards
document.querySelectorAll(".floating-card").forEach((card, index) => {
  card.style.animationDelay = `${index * 0.5}s`
})

// Smooth reveal animation for sections
const sections = document.querySelectorAll("section")
sections.forEach((section) => {
  section.style.opacity = "0"
  section.style.transform = "translateY(50px)"
  section.style.transition = "all 0.8s ease"
})

// Reveal sections on scroll
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  },
  { threshold: 0.1 },
)

sections.forEach((section) => {
  sectionObserver.observe(section)
})

// Add loading animation
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
})

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Apply throttling to scroll events
window.addEventListener(
  "scroll",
  throttle(() => {
    // Scroll-dependent functions are already defined above
  }, 16),
) // ~60fps

// Initialize hero stats animation
document.addEventListener("DOMContentLoaded", () => {
  const statNumbers = document.querySelectorAll(".stat-number, .exp-number")
  statNumbers.forEach((stat) => {
    stat.setAttribute("data-target", stat.textContent.replace("+", ""))
  })
})

console.log("Tebogo Nelson Mashabane Portfolio loaded successfully! 🚀")
