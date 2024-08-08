$(document).ready(function () {
  const skillsData = [
    {
      id: 1,
      name: "HTML 5",
      photoFile: "./assets/images/icons/html5.svg",
    },
    {
      id: 2,
      name: "CSS 3",
      photoFile: "./assets/images/icons/css.svg",
    },
    {
      id: 3,
      name: "JavaScript",
      photoFile: "./assets/images/icons/javascript.svg",
    },
    {
      id: 4,
      name: "PHP",
      photoFile: "./assets/images/icons/php.svg",
    },
    {
      id: 5,
      name: "MySQL",
      photoFile: "./assets/images/icons/mysql.svg",
    },
    {
      id: 6,
      name: "Bootstrap",
      photoFile: "./assets/images/icons/bootstrap.svg",
    },
    {
      id: 7,
      name: "Material UI",
      photoFile: "./assets/images/icons/material-ui.svg",
    },
    {
      id: 8,
      name: "React",
      photoFile: "./assets/images/icons/react.svg",
    },
    {
      id: 9,
      name: "CodeIgniter 3",
      photoFile: "./assets/images/icons/codeigniter.svg",
    },
    {
      id: 10,
      name: "Java",
      photoFile: "./assets/images/icons/java.svg",
    },
    {
      id: 11,
      name: "Kotlin",
      photoFile: "./assets/images/icons/kotlin.svg",
    },
    {
      id: 12,
      name: "Selenium",
      photoFile: "./assets/images/icons/selenium.svg",
    },
    {
      id: 13,
      name: "Jira",
      photoFile: "./assets/images/icons/jira.svg",
    },
    {
      id: 14,
      name: "Android Studio",
      photoFile: "./assets/images/icons/android-studio.svg",
    },
    {
      id: 15,
      name: "Adobe Photoshop",
      photoFile: "./assets/images/icons/photoshop.svg",
    },
    {
      id: 16,
      name: "Microsoft Word",
      photoFile: "./assets/images/icons/word.svg",
    },
    {
      id: 17,
      name: "Microsoft Powerpoint",
      photoFile: "./assets/images/icons/powerpoint.svg",
    },
  ];

  const skillsCard = $("#skills-card");
  const skillsCardModal = $("#skills-card-modal");

  skillsData.forEach((skill) => {
    // Check if the skill ID is within the range 1-12
    if (skill.id >= 1 && skill.id <= 12) {
      // Create the card HTML
      const cardHtml = `
              <div class="col-3 border-custom p-3 text-center" style="width: 12rem" data-aos="flip-left">
                  <img src="${skill.photoFile}" class="card-img-top" alt="${skill.name}" />
                  <h4 class="mt-3 fw-bold">${skill.name}</h4>
              </div>
          `;

      // Append the card to the container
      skillsCard.append(cardHtml);
    }
    // Check if the skill ID is 13 and above
    if (skill.id >= 13) {
      // Create the card HTML
      const cardHtml = `          
              <div class="col-3 border-custom p-3 text-center" style="width: 12rem">
                <img src="${skill.photoFile}" class="card-img-top" alt="${skill.name}" />
                <h4 class="mt-3 fw-bold">${skill.name}</h4>
              </div>
          `;

      // Append the card to the container
      skillsCardModal.append(cardHtml);
    }
  });
});
