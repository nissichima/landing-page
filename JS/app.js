const barMenu = document.querySelector("#navbar__list");
const menuSections = document.querySelectorAll("[id^=sec]");

// build the nav
function navBuilder() {
  const frag = document.createDocumentFragment();

  menuSections.forEach((menuSection) => {
    const liTag = document.createElement("li");
    let aTag = document.createElement("a");
    aTag.innerText = menuSection.getAttribute("data-nav");
    aTag.setAttribute("class", "menu__link");
    aTag.href = "#somelink url";
    
    //scroll to anchor ID using scroll to event
        aTag.addEventListener("click", () => {
            menuSection.scrollIntoView({behavior: "smooth"});
            });

    liTag.appendChild(aTag);
    frag.appendChild(liTag);
  });

  barMenu.appendChild(frag);
};



function getvisIndex() {
  let minor = window.innerHeight;
  visIndex = -1;

  menuSections.forEach((menuSection, index) => {
    let offset = menuSection.getBoundingClientRect();
    if (Math.abs(offset.top) < minor) {
      minor = Math.abs(offset.top);
      visIndex = index;
    }
  });
  return visIndex;
}

function activeSection() {
  visIndex = getvisIndex();

  // If visibleSection exists
  if (visIndex != -1) {
    // create a list of Atags from navigation menu
    let navATagList = document.querySelectorAll(".menu__link");

    // Loop through all section
    for (let i = 0; i < menuSections.length; i++) {
      // For section in viewport: Add active state to the section and navigation
      if (i == visIndex) {
        menuSections[i].classList.add("your-active-class");
        navATagList[i].classList.add("your-active-class");
      }
      // For other sections: Remove active state from the section and navigation
      else {
        menuSections[i].classList.remove("your-active-class");
        navATagList[i].classList.remove("your-active-class");
      }
    }
  }
}

// Call function that builds navigation menu
navBuilder();

document.addEventListener("scroll", activeSection);