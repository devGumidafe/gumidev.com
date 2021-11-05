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

const getAge = (dateString) => {
  let today = new Date();
  let birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  let differenceMonths = today.getMonth() - birthDate.getMonth();
  if (
    differenceMonths < 0 ||
    (differenceMonths === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
};

const age = document.getElementById("age");
age.innerHTML = getAge("1983/08/07");
