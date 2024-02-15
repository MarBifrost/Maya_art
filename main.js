document.querySelectorAll(".about_btn").forEach((item) => {
    item.addEventListener("click", (event) => {
        const detailId = item.getAttribute("id").replace("a", "b");
        const details = document.getElementById(detailId);
        console.log(detailId)
        details.classList.contains("hidden-data")
            ? details.classList.remove("hidden-data")
            : details.classList.add("hidden-data");

    //rotate the arrow
    const arrow = item.querySelector(".arrow");
    if (details.classList.contains("hidden-data")) {
      arrow.style.transform = "rotate(0deg)";
    } else {
      arrow.style.transform = "rotate(180deg)";
    }
    });
});


//Fetching course data from data.json file and dynamicly adds the "Courses" section  with relevant HTML elements
fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (images) {
    const placeholder = document.querySelector("#container_for_images");
    let out = ""; 

    for (let image of images) { 
      out += `

        <div class="box">
            <a href="${image.lrgImageSrc}" data-lightbox ="mygallery">
                <img src="${image.imageSrc}" alt="images" class="images" loading="lazy">
            </a>
            <div class="description">
                <h2 class="titles">${image.txt}</h2>
                <h2>${image.txt1}</h2>
                <p>${image.txt2}</p>
            </div>

        </div>
        
        `;
    }

    placeholder.innerHTML = out;

  });



