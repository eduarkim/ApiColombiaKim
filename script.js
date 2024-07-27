// script.js
let urlCountry = 'https://api-colombia.com/api/v1/Country/Colombia';
let urlDepartment = 'https://api-colombia.com/api/v1/Department';

fetch(urlCountry)
    .then(response => response.json())
    .then(country => {
        fetch(urlDepartment)
            .then(response => response.json())
            .then(departments => {
                displayDepartments(departments);
                displayCountry(country);
            })
            .catch(error => {
                console.error('Error fetching departments:', error);
            });
    })
    .catch(error => {
        console.error('Error fetching country:', error);
    });

function displayCountry(country) {
    const countryName = document.getElementById('country-name');
    countryName.textContent = country.name;
    container.innerHTML = `
    <div class="card mb-4">
        <div class="card-body">
            <h2 class="card-title">${country.name}</h2>
            <p class="card-text">${country.description || 'Descripción no disponible.'}</p>
            <p class="card-text"><strong>Población:</strong> ${country.population}</p>
            <p class="card-text"><strong>Superficie:</strong> ${country.surface} km²</p>
            <p class="card-text"><strong>Departamentos:</strong> ${country.departments}</p>
            <p class="card-text"><strong>Capital:</strong> ${country.capital}</p>
            <p class="card-text"><strong>Moneda:</strong> ${country.currency}</p>
            <p class="card-text"><strong>Idioma:</strong> ${country.language}</p>
            <p class="card-text"><strong>Región:</strong> ${country.region}</p>
            
        </div>
    </div>
`;
    
}

function displayDepartments(departments) {
    const container = document.getElementById('departments-container');
    container.innerHTML = '';

    departments.forEach(department => {
        const card = document.createElement('div');
        card.className = 'card col mb-4';
        card.innerHTML = `
            <div class="card-body d-flex flex-column">
                <h3 class="card-title">${department.name}</h3>
                <p class="card-text flex-grow-1">Población: ${department.population}</p>
                <button class="btn btn-primary" onclick="location.href='details.html?department=${department.id}'">Detalles</button>
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

fetchDepartments();

