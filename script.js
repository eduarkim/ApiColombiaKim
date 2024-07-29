// script.js

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
                <p class="card-text flex-grow-1">Población: ${department.population}</p>
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


/*
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
*/
