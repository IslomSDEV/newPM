const cardBox = document.querySelector(".cards_flex");
const searchInput = document.querySelector(".search_area");
const navbar = document.querySelector(".navbar");
const navbarTitle = document.querySelector(".title");

function fetchData() {
  const apiUrl = `http://213.230.120.247/kinoijro/hs/clients?usr=a`;
  const proxyUrl = "http://localhost:8080/";

  const username = "arx";
  const password = "";
  const fullUrl = proxyUrl + apiUrl;

  fetch(fullUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Basic " + btoa(`${username}:${password}`),
    },
  })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((el) => {
        const newCard = document.createElement("div");
        newCard.classList.add("card");
        newCard.innerHTML = `
          <div class="img_and_name_flex">
            <div class="img_box">
              <img class="card_img" src="https://joqargikenes.uz/wp-content/uploads/2022/05/1-7.jpg">
            </div>
            <div class="name_box">
              <span class="span_name">Name:</span>
              <h4 class="per_name">${el?.Ходим}</h4>
            </div>
          </div>

          <div class="bolim">
            <p>${el?.Булим}</p>
          </div>

          <div class="m_info">
              <div class="jami">
                  <p class="jami_text">Жами:</p>
                  <span class="jami_count">${el?.Жами}</span>
              </div>

              <div class="jami bajarilgan">
                  <p class="jami_text">Бажарилган:</p>
                  <span class="jami_count">${el?.Бажарилган}</span>
              </div>

              <div class="jami bajarilmoqda">
                  <p class="jami_text">Бажарилмокда:</p>
                  <span class="jami_count">${el?.Бажарилмокда}</span>
              </div>

              <div class="jami bajarilmagan">
                  <p class="jami_text">Бажарилмаган:</p>
                  <span class="jami_count">${el?.Бажарилмаган}</span>
              </div>

              <div class="jami kpi">
                  <p class="jami_text">KPI:</p>
                  <span class="jami_count">0</span>
              </div>

          </div>
        `;

        cardBox.appendChild(newCard);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

fetchData();

window.addEventListener("scroll", () => {
  if (scrollY >= 25) {
    navbar.classList.add("nav_active");
    navbarTitle.classList.add("title_active");
  } else {
    navbar.classList.remove("nav_active");
    navbarTitle.classList.remove("title_active");
  }
});
