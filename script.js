// script.js
const urlCountry = 'https://api-colombia.com/api/v1/Country/Colombia';

    // Función para obtener la descripción del país
    fetch(urlCountry)
        .then(response => response.json())
        .then(pais => {
         
            const card = document.createElement('div');
            card.className = 'card col mb-4';
            card.innerHTML = `
                <div class="card-body d-flex flex-column">
                    <h3 class="card-title">País: ${pais.name}</h3>
                    <p class="card-text">Capital: ${pais.stateCapital}</p>
                    <p class="card-text">Superficie: ${pais.surface}</p>
                    <p class="card-text">Población: ${pais.population}</p>
                    <p class="card-text">Idioma: ${pais.languages}</p>
                    <p class="card-text text-justify">Descripción: ${pais.description}</p>
                </div>
            `;
    
            card.setAttribute('data-name', pais.name.toLowerCase());
            document.getElementById("inform-pais").appendChild(card);

        })
        .catch(error => {
            console.error('Error fetching country description:', error);
            document.getElementById('country-description').innerHTML = 'Error al cargar la descripción.';
        });


let urlDepartment = 'https://api-colombia.com/api/v1/Department';

fetch(urlDepartment)
    .then(response => response.json())
    .then(departments => {
        displayDepartments(departments);
    })
    .catch(error => {
        console.error('Error fetching departments:', error);
    });

function displayDepartments(departments) {
    const container = document.getElementById('departments-container');
    container.innerHTML = '';

    departments.forEach(department => {
        const card = document.createElement('div');
        card.className = 'card col mb-4';
        card.innerHTML = `
            <div class="card-body d-flex flex-column">
                <h3 class="card-title">${department.name}</h3>
                <p class="card-text">Población: ${department.population}</p>
                <p class="card-text text-justify flex-grow-1">Descripción: ${department.description}</p>
                <a href="details.html?department=${department.id}" class="btn btn-primary">Detalles</a>
            </div>
        `;

        card.setAttribute('data-name', department.name.toLowerCase());
        container.appendChild(card);
    });
}

function filterDepartments() {
    const input = document.getElementById('search').value.toLowerCase();
    const cards = document.querySelectorAll('#departments-container .card');
    cards.forEach(card => {
        const text = card.getAttribute('data-name');
        card.style.display = text.includes(input) ? '' : 'none';
    });
}

document.getElementById('search').addEventListener('input', filterDepartments);

