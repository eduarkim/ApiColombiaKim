const params = new URLSearchParams(window.location.search);
const departmentId = params.get('department'); // Obtener el ID del departamento de la URL
const apiUrl = `https://api-colombia.com/api/v1/Department/${departmentId}`; // URL de la API para obtener detalles del departamento
const citiesUrl = `https://api-colombia.com/api/v1/Department/${departmentId}/cities`; // URL para obtener ciudades del departamento
const naturalAreasUrl = `https://api-colombia.com/api/v1/Department/${departmentId}/naturalareas`; // URL para obtener áreas naturales del departamento

// Función para obtener los detalles del departamento
fetch(apiUrl)
    .then(response => response.json())
    .then(department => {
        displayDepartmentDetails(department);
        fetchCitiesAndNaturalAreas();
    })
    .catch(error => {
        console.error('Error fetching department details:', error);
        document.getElementById('details-container').innerHTML = '<p>Error al cargar los detalles del departamento.</p>';
    });

function displayDepartmentDetails(department) {
    const container = document.getElementById('details-container');
    container.innerHTML = `
        <div class="card mb-4">
            <div class="card-body">
                <h2 class="card-title">${department.name}</h2>
                <p class="card-text flex-grow-1">${department.description || 'Descripción no disponible.'}</p>
                <p class="card-text"><strong>Población:</strong> ${department.population}</p>
                <p class="card-text"><strong>Prefijo telefónico:</strong> ${department.phonePrefix}</p>
                <p class="card-text"><strong>Superficie:</strong> ${department.surface} km²</p>
                <h3>Filtrar por:</h3>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="ciudad" id="ciudad" onchange="filterCards()">
                    <label class="form-check-label" for="ciudad">Ciudad</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="areas_naturales" id="areas_naturales" onchange="filterCards()">
                    <label class="form-check-label" for="areas_naturales">Áreas Naturales</label>
                </div>
                <div id="cities-container" class="row mt-4"></div>
                <div id="natural-areas-container" class="row mt-4"></div>
            </div>
        </div>
    `;
}

function fetchCitiesAndNaturalAreas() {
    const citiesContainer = document.getElementById('cities-container');
    const areasContainer = document.getElementById('natural-areas-container');

    // Limpiar los contenedores antes de agregar nuevas tarjetas
    citiesContainer.innerHTML = '';
    areasContainer.innerHTML = '';

    // Obtener ciudades
    fetch(citiesUrl)
        .then(response => response.json())
        .then(cities => {
            cities.forEach(city => {
                const cityCard = document.createElement('div');
                cityCard.className = 'col-12 col-md-6 col-lg-3 mb-4 city-card'; // Clases de Bootstrap para el diseño
                cityCard.innerHTML = `
                    <div class="card">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${city.name}</h5>
                            <p class="card-text flex-grow-1">${city.description || 'Descripción no disponible.'}</p>
                            <p class="card-text"><strong>Superficie:</strong> ${city.surface || 'N/A'} km²</p>
                        </div>
                    </div>
                `;
                citiesContainer.appendChild(cityCard);
            });
        });

    // Obtener áreas naturales
    fetch(naturalAreasUrl)
        .then(response => response.json())
        .then(areas => {
            areas.forEach(area => {
                const areaCard = document.createElement('div');
                areaCard.className = 'col-12 col-md-6 col-lg-3 mb-4 area-card'; // Clases de Bootstrap para el diseño
                areaCard.innerHTML = `
                    <div class="card ">
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${area.name}</h5>
                             <p class="card-text flex-grow-1">${area.description || 'Descripción no disponible.'}</p>
                            <p class="card-text"><strong>Superficie:</strong> ${area.surface || 'N/A'} km²</p>
                        </div>
                    </div>
                `;
                areasContainer.appendChild(areaCard);
            });
        });
}

function filterCards() {
    const cityCheckbox = document.getElementById('ciudad');
    const areaCheckbox = document.getElementById('areas_naturales');

    const cityCards = document.querySelectorAll('.city-card');
    const areaCards = document.querySelectorAll('.area-card');

    // Mostrar u ocultar tarjetas de ciudades
    cityCards.forEach(card => {
        card.style.display = cityCheckbox.checked || !cityCheckbox.checked && !areaCheckbox.checked ? 'block' : 'none';
    });

    // Mostrar u ocultar tarjetas de áreas naturales
    areaCards.forEach(card => {
        card.style.display = areaCheckbox.checked || !cityCheckbox.checked && !areaCheckbox.checked ? 'block' : 'none';
    });
}

// Llamar a la función para cargar los detalles del departamento al cargar la página
window.onload = () => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(department => {
            displayDepartmentDetails(department);
            fetchCitiesAndNaturalAreas(); // Llamar a la función para obtener ciudades y áreas naturales
        });
};


/*
const params = new URLSearchParams(window.location.search);
const departmentId = params.get('department'); // Obtener el ID del departamento de la URL
const apiUrl = `https://api-colombia.com/api/v1/Department/${departmentId}`; // URL de la API para obtener detalles del departamento

// Función para obtener los detalles del departamento sin usar async/await
fetch (apiUrl)
    .then(response => response.json())
    .then(department => {
        displayDepartmentDetails(department);
       
    })
    .catch(error => {
        console.error('Error fetching department details:', error);
        document.getElementById('details-container').innerHTML = '<p>Error al cargar los detalles del departamento.</p>';
    });



function displayDepartmentDetails(department) {
    const container = document.getElementById('details-container');
    container.innerHTML = `
        <div class="card mb-4">
            <div class="card-body">
                <h2 class="card-title">${department.name}</h2>
                <p class="card-text">${department.description || 'Descripción no disponible.'}</p>
                <p class="card-text"><strong>Población:</strong> ${department.population}</p>
                <p class="card-text"><strong>Prefijo telefónico:</strong> ${department.phonePrefix}</p>
                <p class="card-text"><strong>Municipalidades:</strong> ${department.municipalities}</p>
                <p class="card-text"><strong>Superficie:</strong> ${department.surface} km²</p>
                <h3>Ciudades y Áreas Naturales</h3>
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="ciudad" id="ciudad">
                <label class="form-check-label" for="ciudad">Ciudad</label>
                </div>

                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="areas_naturales" id="areas_naturales">
                <label class="form-check-label" for="areas_naturales">Áreas Naturales</label>
                </div>
                <div id="cities-container">
                
                </div>
                
                <div id="natural-areas-container">
                
                </div>
            </div>
        </div>
    `;
    
      
}



// Llamar a la función para cargar los detalles del departamento al cargar la página
window.onload = fetchDepartmentDetails;

*/