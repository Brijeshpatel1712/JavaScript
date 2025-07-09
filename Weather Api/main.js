function fetchData() {
  fetch("http://localhost:3000/weather")
    .then((res) => res.json())
    .then((data) => displayData(data))
    .catch((err) => console.log(err));
}
fetchData();

function displayData(data) {
  let storeData = data.map((el) => {
    // console.log(el)

    let store = `

    <div class="card">
    <h1>${el.id}</h1>
    <p>City: ${el.city}</p>
    <p>Temperature: ${el.temperature}</p>
    <i>${el.icon}</i>
  </div>
        `;
    return store;
  });

  document.getElementById("weatherList").innerHTML = storeData.join("");
}