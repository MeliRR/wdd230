const url1 = "data/members.json";
const cards = document.querySelector("#cards");

async function getBusinessesData() {
  const response = await fetch(url1);
  const data = await response.json();
  displayBusinesses(data.businesses);
}

const displayBusinesses = (businesses) => {
  businesses.forEach((business) => {
    let card = document.createElement("section");
    let bName = document.createElement("h2");
    let logo = document.createElement("img");
    let memberSince = document.createElement("p");
    let bDescription = document.createElement("p");
    let address = document.createElement("p");
    let website = document.createElement("a");
    let membership = document.createElement("h4");

    logo.setAttribute("src", business.logo);
    logo.setAttribute("alt", `Logo of ${business.name}`);
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "auto");
    logo.setAttribute("height", "auto");

    bName.textContent = `${business.name}`;
    bDescription.textContent = `${business.description}`;
    address.textContent = `${business.address}`;
    membership.textContent = `${business.membership} Membership`;
    memberSince.textContent = `Member Since: ${business.since}`;
    website.setAttribute("href", `${business.url}`);
    website.textContent = business.url;
    website.setAttribute("target", "_blank");

    card.appendChild(logo);
    card.appendChild(bName);
    card.appendChild(bDescription);
    card.appendChild(address);
    card.appendChild(memberSince);
    card.appendChild(membership);
    card.appendChild(website);

    cards.appendChild(card);
  });
};
getBusinessesData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
  display.classList.add("grid-directory");
  display.classList.remove("list-directory");
});

listbutton.addEventListener("click", showList);

function showList() {
  display.classList.add("list-directory");
  display.classList.remove("grid-directory");
}