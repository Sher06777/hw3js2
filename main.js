const containerEl = document.querySelector(".container");

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    console.log(containerEl);
    data.map((el) => {
      if (el.id <= 100) {
        const wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");
        wrapper.innerHTML += `
            <img class = "img" src="${el["url"]}" alt="">
            <p><h2>${el["title"]}</h2></p>`;
        containerEl.appendChild(wrapper);

        const img = wrapper.querySelector(".img");
        img.addEventListener("click", () => {
            if (img.style.position) {
                img.style.position = "";
                img.style.top = "";
                img.style.left = "";
                img.style.width = "";
                img.style.height = "";
              } else {
                img.style.position = "absolute";
                img.style.position = "fixed";
                img.style.top = "100px";
                img.style.left = "500px";
                img.style.width = "500px";
                img.style.height = "500px";
              }
        });
      }
    });
  })
  .catch((err) => {
    console.log(err);
});
