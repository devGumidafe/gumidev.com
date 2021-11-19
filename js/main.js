const aboutSection = document.getElementById("about-section");
const skillsSection = document.getElementById("skills-section");
const resumeSection = document.getElementById("resume-section");
const worksSection = document.getElementById("works-section");

const menuLinks = document.querySelectorAll(".menu .menu-item");

menuLinks.forEach((el) => {
  el.addEventListener("click", function () {
    let sectionToGo = aboutSection;

    switch (this.id) {
      case "skills":
        sectionToGo = skillsSection;
        break;
      case "resume":
        sectionToGo = resumeSection;
        break;
      case "works":
        sectionToGo = worksSection;
        break;
    }
    // Scroll smoothly to section
    sectionToGo.scrollIntoView({ behavior: "smooth" });
  });
});
