$(document).ready(function () {
  const projectData = [
    {
      id: 1,
      type: "website",
      photoFile: "./assets/images/projects/web/betaace-web.png",
      name: "Beta Ace: Forum Web-based System",
      skills: ["Codeigniter 3", "Bootstrap 5", "MySQL"],
      codeLink: "https://github.com/rggoria/ci-betaace",
      visitLink: "",
    },
    {
      id: 2,
      type: "mobile",
      photoFile: "./assets/images/projects/mobile/technobrake-mobile.png",
      name: "TechnoBreak: Notes App with Google Firebase",
      skills: ["Kotlin", "Firebase"],
      codeLink: "https://github.com/rggoria/as-technobreak",
      visitLink: "",
    },
    {
      id: 3,
      type: "mobile",
      photoFile: "./assets/images/projects/mobile/techmobile-mobile.png",
      name: "TechMobile Software: Simple Pokemon Trivia Guide App",
      skills: ["IOS Application", "Swift"],
      codeLink: "https://github.com/rggoria/swift-techmobilesoftware",
      visitLink: "",
    },
    {
      id: 4,
      type: "website",
      photoFile: "./assets/images/projects/web/goshopping-web.png",
      name: "GoShopping: E-grocer Web-based System",
      skills: ["Codeigniter 3", "Bootstrap 5", "MySQL"],
      codeLink: "https://github.com/rggoria/ci-goshopping",
      visitLink: "",
    },
    {
      id: 5,
      type: "website",
      photoFile: "./assets/images/projects/web/thebois-web.png",
      name: "The Bois: Gundam E-commerce Web-based System",
      skills: ["Codeigniter 3", "Bootstrap 5", "MySQL"],
      codeLink: "https://github.com/rggoria/ci-thebois",
      visitLink: "",
    },
    {
      id: 6,
      type: "website",
      photoFile: "./assets/images/projects/web/coincise-web.png",
      name: "Coincise: Investment Support System with Data Visualization and Risk Identification for Ethereum Mainnet Tokens",
      skills: ["Codeigniter 3", "Bootstrap 5", "MySQL"],
      codeLink: "",
      visitLink: "",
    },
    {
      id: 7,
      type: "mobile",
      photoFile: "./assets/images/projects/mobile/coincise-mobile.png",
      name: "Coincise: Investment Support System with Data Visualization and Risk Identification for Ethereum Mainnet Tokens",
      skills: ["Kotlin", "Codeigniter 3", "MySQL"],
      codeLink: "https://github.com/rggoria/as-coincise",
      visitLink: "",
    },
    {
      id: 8,
      type: "website",
      photoFile: "./assets/images/projects/web/ves-web.png",
      name: "FEU Alabang Visitor Entry System: Tracks visitor entries and exits with RFID-enabled smart cards",
      skills: ["Codeigniter 3", "Bootstrap 3", "MySQL", "RFID"],
      codeLink: "",
      visitLink: "",
    },
    {
      id: 9,
      type: "website",
      photoFile: "./assets/images/projects/web/alumni-id-web.png",
      name: "FEU Tech Alumni ID System: Manages Alumni ID records via RFID-enabled smart cards",
      skills: ["Codeigniter 3", "Bootstrap 3", "MySQL", "RFID"],
      codeLink: "",
      visitLink: "",
    },
    {
      id: 10,
      type: "website",
      photoFile: "./assets/images/projects/web/calculator-app-web.png",
      name: "Simple React Calculator App",
      skills: ["React", "Material UI"],
      codeLink: "https://github.com/rggoria/react-calculator-app",
      visitLink: "https://rggoria.github.io/react-calculator-app/",
    },
    {
      id: 11,
      type: "website",
      photoFile: "./assets/images/projects/web/weather-app-web.png",
      name: "React Weather App",
      skills: ["React", "Material UI"],
      codeLink: "https://github.com/rggoria/react-weather-app",
      visitLink: "https://rggoria.github.io/react-weather-app/",
    },
  ];

  const websiteProjectsCard = $("#website-projects-card");
  const mobileProjectsCard = $("#mobile-projects-card");

  // Sorting by descending order
  projectData.sort((a, b) => b.id - a.id);

  projectData.forEach((project) => {
    // Create the card HTML with conditional rendering for skills
    let skillsHtml = "";

    if (project.skills[0]) {
      skillsHtml += `<div class="badge bg-primary me-2">${project.skills[0]}</div>`;
    }

    if (project.skills[1]) {
      skillsHtml += `<div class="badge bg-secondary me-2">${project.skills[1]}</div>`;
    }

    if (project.skills[2]) {
      skillsHtml += `<div class="badge bg-info me-2">${project.skills[2]}</div>`;
    }

    if (project.skills[3]) {
      skillsHtml += `<div class="badge bg-success me-2">${project.skills[3]}</div>`;
    }

    let linkHtml = "";

    if (project.visitLink && project.codeLink) {
      linkHtml += `
        <div class="mt-auto d-flex justify-content-between">
          <a href="${project.visitLink}" target="_blank" type="button" class="btn btn-lg btn-primary" style="width: 48%">
            Go to Site
          </a>
          <a href="${project.codeLink}" target="_blank" type="button" class="btn btn-lg btn-success" style="width: 48%">
            View Code
          </a>
        </div>
      `;
    } else if (project.codeLink) {
      linkHtml += `
        <a href="${project.codeLink}" target="_blank" class="mt-auto btn btn-lg btn-block btn-success" style="margin-top: auto">
          View code
        </a>
      `;
    } else if (project.visitLink) {
      linkHtml += `
        <a href="${project.visitLink}" target="_blank" class="mt-auto btn btn-lg btn-block btn-primary" style="margin-top: auto">
          View code
        </a>
      `;
    } else {
      linkHtml += `
        <button type="button" class="mt-auto btn btn-lg btn-block btn-danger">
          This project is private
        </button>
      `;
    }

    if (project.type == "website") {
      const cardHtml = `
        <div class="swiper-slide">
          <div class="card bg-gray border-custom text-white" style="height: 32rem">
            <img src="${project.photoFile}" class="card-img-top rounded-top" alt="Project Image" style="height: 250px" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${project.name}</h5>
              <ul class="list-unstyled mt-3 mb-4">
                <li>${skillsHtml}</li>
              </ul>
              ${linkHtml}
            </div>
          </div>
        </div>
      `;
      // Append the card to the container
      websiteProjectsCard.append(cardHtml);
    } else {
      const cardHtml = `
        <div class="swiper-slide">
          <div class="card bg-gray border-custom text-white" style="height: 33rem">
            <img src="${project.photoFile}" class="mx-auto d-block rounded" alt="Project Image" height="250px" />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${project.name}</h5>
              <ul class="list-unstyled mt-3 mb-4">
                <li>${skillsHtml}</li>
              </ul>
              ${linkHtml}
            </div>
          </div>
        </div>
      `;
      // Append the card to the container
      mobileProjectsCard.append(cardHtml);
    }
  });
});
