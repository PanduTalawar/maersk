const cardsArr = [
  {
    id: 1,
    color: "#6F98A8",
  },
  {
    id: 2,
    color: "#2B8EAD",
  },
  {
    id: 3,
    color: "#2F454E",
  },
  {
    id: 4,
    color: "#2B8EAD",
  },
  {
    id: 5,
    color: "#2F454E",
  },
  {
    id: 6,
    color: "#BFBFBF",
  },
  {
    id: 7,
    color: "#BFBFBF",
  },
  {
    id: 8,
    color: "#6F98A8",
  },
  {
    id: 9,
    color: "#2F454E",
  },
];

const myCard = document.querySelector(".myCard");

window.addEventListener("DOMContentLoaded", function () {
  const showInHtml = cardsArr
    .map((card) => {
      return `
          <div style="background-color: ${card.color}">
          <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">${card.id}</h5>
              </div>
            </div>
        </div>
          `;
    })
    .join("\n");

  myCard.innerHTML = showInHtml;
});

function sortCards() {
  const sortCardsArr = cardsArr.sort((a, b) => {
    return a.id - b.id;
  });
  const showInHtml = sortCardsArr
    .map((card) => {
      return `
              <div style="background-color: ${card.color}">
              <div class="card" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">${card.id}</h5>
                  </div>
                </div>
            </div>
              `;
    })
    .join("\n");

  myCard.innerHTML = showInHtml;
}

function shuffleCards() {
  const shufCardsArr = cardsArr.sort(() => Math.random() - 0.5);
  const showInHtml = shufCardsArr
    .map((card) => {
      return `
              <div style="background-color: ${card.color}">
              <div class="card" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">${card.id}</h5>
                  </div>
                </div>
            </div>
              `;
    })
    .join("\n");

  myCard.innerHTML = showInHtml;
}
