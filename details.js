const params = new URLSearchParams(window.location.search);
const departmentId = params.get('department'); // Obtener el ID del departamento de la URL
const apiUrl = `https://api-colombia.com/api/v1/Department/${departmentId}`; // URL de la API para obtener detalles del departamento

async function fetchDepartmentDetails() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`Error fetching department details: ${response.status}`);
        }
        const department = await response.json();
        displayDepartmentDetails(department);
    } catch (error) {
        console.error(error);
        document.getElementById('details-container').innerHTML = '<p>Error al cargar los detalles del departamento.</p>';
    }
}

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
                <div id="cities-container"></div>
            </div>
        </div>
    `;
    
    // Mostrar ciudades si están disponibles
    if (department.cities && department.cities.length > 0) {
        displayCities(department.cities);
    } else {
        document.getElementById('cities-container').innerHTML = '<p>No hay ciudades disponibles.</p>';
    }
}

function displayCities(cities) {
    const container = document.getElementById('cities-container');
    container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevas ciudades
    cities.forEach(city => {
        const cityCard = document.createElement('div');
        cityCard.className = 'department-card mb-2';
        cityCard.innerHTML = `
            <h4>${city.name}</h4>
            <label><input type="checkbox"> Área Natural</label>
        `;
        container.appendChild(cityCard);
    });
}

// Llamar a la función para cargar los detalles del departamento al cargar la página
window.onload = fetchDepartmentDetails;