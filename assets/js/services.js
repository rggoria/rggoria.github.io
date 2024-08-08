$(document).ready(function () {
  const servicesData = [
    {
      name: "Web Application Developer",
      description:
        "I have a passion to create web applications that can help users interact easily to the website.",
      src: "https://assets3.lottiefiles.com/packages/lf20_ctaacxzb.json",
    },
    {
      name: "Mobile Application Developer",
      description:
        "I have a passion to create mobile applications that can help users interact easily to the application.",
      src: "https://assets6.lottiefiles.com/packages/lf20_Zo9feTljq8.json",
    },
    {
      name: "Quality Assurance Tester",
      description:
        "I have the responsibility of identifying and addressing bugs and errors before the project is deployed.",
      src: "https://lottie.host/7426641a-519b-4477-ad06-429e85c6a9dc/yKN5sMEiuD.json",
    },
    {
      name: "Project Manager Support",
      description:
        "I facilitate communication with developers to track progress and receive updates.",
      src: "https://lottie.host/14155774-7709-462e-9971-e6eb79c53141/2bztaHRPto.json",
    },
  ];

  const servicesCard = $("#services-card");

  servicesData.forEach((services) => {
    // Create the card HTML
    const cardHtml = `
      <div class="col-md-4 p-3 border-custom" style="width: 18rem">
        <div class="d-flex justify-content-center">
          <lottie-player
            src="${services.src}"
            background="transparent"
            speed="1"
            style="height: 150px; width: 150px"
            loop
            autoplay
          ></lottie-player>
        </div>
          <h4 class="fw-bold">${services.name}</h4>
          <p>${services.description}</p>          
      </div>
    `;
    // Append the card to the container
    servicesCard.append(cardHtml);
  });
});
