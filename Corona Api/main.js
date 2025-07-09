  fetch('http://localhost:3000/countries')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById('data');
        data.forEach(country => {
          container.innerHTML += `
            <div class="card">
              <h2>${country.name}</h2>
              <p>Cases: ${country.cases.toLocaleString()}</p>
              <p>Recovered: ${country.recovered.toLocaleString()}</p>
              <p>Deaths: ${country.deaths.toLocaleString()}</p>
            </div>
          `;
        });
      });