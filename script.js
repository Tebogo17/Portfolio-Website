// CV Download Functionality
function generateAndDownloadCV() {
  const cvContent = `Mashabane Tebogo Nelson
060 939 7230| mashabanetebogo812@gmail.com |
LinkedIn Profile: www.linkedin.com/in/tebogo-nelson-62a324275
GitHub| https://github.com/Tebogo17
Personal Website: https://tebogonelson.vercel.app/
SUMMARY City: 87, Eastbank Avenue, Alexandra, Sandton, Johannesburg
Aspiring Software Developer
Final-year BSc IT student and aspiring software engineer passionate about building efficient, user-focused solutions. Skilled in programming and software development through both academic studies and independent projects, I thrive in collaborative environments, continuously learning and solving real-world problems with innovative technology. Open to mentorship, networking, and opportunities to grow in the tech industry.
EDUCATION & CERTIFICATIONS
Tertiary Qualifications
Bachelor of Sciences in Information Technology – North West University – Present
Expected Graduation – 2026
•
Relevant Coursework: ASP.NET, .NET, OOP, Data Structures & Algorithm, Database Systems, System analysis and Design, Java OOP, React, NODE.JS.
Certifications
Microsoft Azure- 2025
AWS Cloud Computing -2025
FNB App Academy -2025
AWS Certified Developer Associate (DVA-C02) -2025
Amazon API Gateway for Serverless Applications -2025
Amazon Q Developer- 2025
Domain 1 Review: AWS Certified Developer (DVA-C02-English) -2025
AWS AppSync Getting Started
AWS Simple Queue Service (SQS) 2025
AWS Certified DevOps Engineer – Professional (DOP -C02) 2025
Amazon Simple Notification Service (Amazon SNS)- Troubleshooting -2025
Short Courses
Work Readiness Program 2025
SOFT SKILLS
Time-Management| Problem solving| Leadership| Team Collaboration| Organized| Web development| Software development| Creativity| Adaptability| Critical Thinking| Networking| Accountability| Work ethic| Goal Oriented| Attention to detail|
TOOLS & TECHNOLOGIES
•
Languages: JavaScript, Java, C#, HTML5, CSS3, SQL
•
Frameworks: (React, .NET, Git, Vite)
•
Software Tools: Visual Studio, Visual Studio Code, Oracle
•
Databases: (MySQL, SQLite)
•
Additional software: Git, Android Studio, BlueJ
ACHIEVEMENTS & HONORS
•
DevOps Member
•
Student Assistant (C#)
•
House Committee Leader (faranani Residence)
PROJECTS
Chronic- Care+ Project | React, C#, ASP.NET, MySQL JUNE 2025 - PRESENT
Dev Unity | Vanderbijlpark |https://github.com/DevUnityX/chronic-care-backend.git
•
Monitors and tracks the impact of chronic diseases on users’ health.
•
Supports ongoing management to improve treatment adherence and well-being.
Webcam Capture Project | Java (JDK), JDBC, Springboot, Oracle APR 2024 – JUL 2024
https://github.com/Tebogo17/WebcamCapture-Project.git
•
Uses facial recognition during online tests.
•
Continuously verifies the student’s identity.
•
Pauses the test if the student looks away.
•
Submits automatically after repeated violations.
MedAppoint Project | HTML, CSS, C#, ASP.NET, MySQL JUN 2024 – NOV2024
https://github.com/Tshepang01/CMPG223_MedAppoint-Group59.git
•
MedAppoint is a web platform for managing clinic appointments.
•
Patients can easily book and track visits online.
•
Doctors can receive and manage appointments efficiently.
•
Improves communication between patients and providers.
PukkeConnect Project | React, NODE.JS, PostgreSQL, TailwindCSS, Vite, JWT JUN 2025 – PRESENT
https://pukke-connect.vercel.app/
•
Digitally bridges the gap between students and societies at North-West University.
•
Uses modern technology, intuitive UI, and a matchmaking system.
•
Tackles a core student life problem.
•
Success relies on student collaboration, agile development, and strong UX design.
All Students Document Project | HTML, CSS, JAVASCRIPT JUN 2023 – OCT 2023
https://github.com/Tebogo17/ALL-STUDENTS-DOCUMENTS.git
•
All Student’s Documents is a web platform for managing student files.
•
Allows students to submit documents online.
•
Provides secure access and storage of documents.
PROFESSIONAL EXPERIENCE
Faranani Residence (NWU) | Vanderbijlpark SEP 2023 – OCT 2024
Social & Liaison officer with MPRO
Plans, coordinates, and executes recruitment related activities in collaboration with the SCC.
Coordinates the residence’s participation in the NWU’s annual Campus Open Day.
▪
MPRO Recruitment Drive:
Enhanced student engagement and improved residence applications through strategic campaigns and events.
▪
Campus Open Day Coordination:
Effectively coordinated Faranani Residence’s participation, enhancing visibility and strengthening prospective student relations
North West University | Vanderbijlpark FEB 2025 – JUN 2025
Student Assistant (C#)
Provided academic support in C# programming, assisting students with practical coding exercises, debugging, and understanding core software development concepts.
▪
Web Development:
Developed interactive web applications with robust validation and dynamic controls to ensure data accuracy and enhance user experience
▪
Mobile App Development:
Developed cross-platform apps with Xamarin, emphasizing performance, clean UI, and API integration for enhanced usability
References
Mrs Monyadiwe Ramatlotlo
Finance Department (NWU), Vanderbijlpark
078 496 6879, Monyadiwe.Ramatlotlo@nwu.ac.za
Mr Jan Kruger
Lecturer (NWU), Vanderbijlpark
083 733 2485, Jan.Kruger@nwu.ac.za
Ms Bongisa Dyosoba
Lecturer (NWU), Vanderbijlpark
+27169103292, Bongisa.Dyosoba@nwu.ac.za
`

  // Create and download the file
  const blob = new Blob([cvContent], { type: "text/plain" })
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = "Tebogo_Nelson_Mashabane_CV.txt"
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  window.URL.revokeObjectURL(url)
}

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
/*document.querySelector(".contact-form").addEventListener("submit", function (e) {
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
})*/
// Initialize EmailJS (add your actual public key below)
emailjs.init("UKTSKOK2GIbVR2XIE")

document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);
  const from_name = formData.get("from_name");
  const from_email = formData.get("from_email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!from_name || !from_email || !subject || !message) {
    alert("Please fill in all fields");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(from_email)) {
    alert("Please enter a valid email address");
    return;
  }

  const submitBtn = this.querySelector(".submit-btn");
  const originalText = submitBtn.innerHTML;

  submitBtn.innerHTML = '<span>Sending...</span><i class="fas fa-spinner fa-spin"></i>';
  submitBtn.disabled = true;

  emailjs.sendForm("service_n9mrbbm", "template_81vxtvl", this)
    .then(() => {
    // After sending main email, send auto-reply
    return emailjs.send("service_n9mrbbm", "template_8aks4au",{
      from_email,from_name
    });
  })
    .then(() => {
      alert("Thank you for your message! I'll get back to you soon.");
      this.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;

      document.querySelectorAll(".form-group label").forEach((label) => {
        label.style.top = "16px";
        label.style.fontSize = "16px";
        label.style.color = "var(--text-muted)";
      });
    })
    .catch((error) => {
      alert("Oops! Something went wrong. Please try again.");
      console.error("EmailJS Error:", error);
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    });
});

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
