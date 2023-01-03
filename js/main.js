// console.log(document.getElementsByTagName("form"))

// console.log(document.getElementById("country"))

// const list = document.getElementById("container")


// fetch("https://restcountries.com/v3.1/all")
//     .then((res) => {
//         if (res.ok) {
//             return res.json()
//         }
//         console.log(document.getElementById("country").value)
//     })
//     .then((all) => {
//         for (let i = 0; i < all.length; i++) {
//             const card = document.createElement("div")
//             card.className = "card"
//             const content =
//                 `
//         <img src="${all[i].flags.svg}" alt="pic" width="200px" heigh="200px">
//         <div class="co">
//             <h3 id="Bataa">${all[i].name.common}</h3>
//         </div>
//         `

//             card.innerHTML += content

//             container.append(card)
//         }
//     })

//     // .then((all) => {
//     //     const input = document.getElementById("country").value

//     //     if (input === all[i].name.common) {
//     //         const content =
//     //             `
//     //     <img src="${all[i].flags.svg}" alt="pic" width="200px" heigh="200px">
//     //     <div class="co">
//     //         <h3>${all[i].name.common}</h3>
//     //     </div>
//     //     `
//     //     }
//     // })

document.getElementById("country-inp")
    .addEventListener("keyup", function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("search-btn").click();
        }
    });

function buttonCode() {

let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data[0]);
            // console.log(data[0].capital[0]);
            // console.log(data[0].flags.svg);
            // console.log(data[0].name.common);
            // console.log(data[0].continents[0]);
            // console.log(Object.keys(data[0].currencies)[0]);
            // console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            // console.log(
            //     Object.values(data[0].languages).toString().split(",").join(", ")
            // );
            result.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Continent:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Population:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        <div class="wrapper">
            <div class="data-wrapper">
                <h4>Currency:</h4>
                <span>${data[0].currencies[Object.keys(data[0].currencies)].name
                } - ${Object.keys(data[0].currencies)[0]}</span>
            </div>
        </div>
         <div class="wrapper">
            <div class="data-wrapper">
                <h4>Common Languages:</h4>
                <span>${Object.values(data[0].languages)
                    .toString()
                    .split(",")
                    .join(", ")}</span>
            </div>
        </div>
      `;
        })
        .catch(() => {
            if (countryName.length == 0) {
                result.innerHTML = `<h3>The input field cannot be empty</h3>`;
            } else {
                result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
            }
        });
});
}