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
                    <img src="https://media.istockphoto.com/id/1318666502/es/foto/medell%C3%ADn-centro-atardecer-colombia.webp?b=1&s=170667a&w=0&k=20&c=XeSKBF4bLG0nvvUkaQaduNNM_7zHUlofrJuvsjCK6j0=" alt="${pais.name}" class="img-thumbnail" id="imgeneral">
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

    const departmentImages = {
        "casanare": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQzjo_KzFnbk_3hm6ksW6u1tKfiW-7JlZEhfPfxzyoBZowQKt1UsezKNTlvA&s",
        "cauca": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA3xEmP1uuxwmEeq_2HEgNVQSPrs8siJ4-kQ&s",
        "cesar": "https://www.familysearch.org/es/wiki/img_auth.php/thumb/9/92/Departamento_de_Cesar%2C_Colombia_Mapa.png/250px-Departamento_de_Cesar%2C_Colombia_Mapa.png",
        "chocó": "https://www.gifex.com/images/0X0/2009-09-17-5883/Departamento_del_Choco.jpg",
        "córdoba": "https://i.pinimg.com/originals/8e/b4/fc/8eb4fc5351290a6c1e8545c2dc978f52.jpg",
        "cundinamarca": "https://i.pinimg.com/originals/3c/87/65/3c87659dad15f8d0cbad74aec4ed37b4.png",
        "guaviare": "https://www.familysearch.org/es/wiki/img_auth.php/thumb/1/10/Departamento_de_Guaviare%2C_Colombia_Mapa.png/500px-Departamento_de_Guaviare%2C_Colombia_Mapa.png",
        "la guajira": "https://www.familysearch.org/es/wiki/img_auth.php/thumb/7/7f/Departamento_de_La_Guajira%2C_Colombia_Mapa.png/500px-Departamento_de_La_Guajira%2C_Colombia_Mapa.png",
        "magdalena": "https://www.familysearch.org/es/wiki/img_auth.php/thumb/a/a6/Departamento_de_Magdalena%2C_Colombia_Mapa.png/350px-Departamento_de_Magdalena%2C_Colombia_Mapa.png",
        "nariño": "https://i.pinimg.com/736x/28/e9/af/28e9afacc126d92220f7f10fc084ad9d.jpg",
        "caquetá":"https://www.familysearch.org/es/wiki/img_auth.php/thumb/4/46/Departamento_de_Caquet%C3%A1%2C_Colombia_Mapa.png/500px-Departamento_de_Caquet%C3%A1%2C_Colombia_Mapa.png",
        "guainía":"https://www.gifex.com/images/0X0/2009-09-17-5886/Departamento_del_Guainia.jpg",
        "amazonas":"https://i.pinimg.com/736x/75/81/89/758189815ece2fe2ab898a83780126cd.jpg",
        "antioquia":"https://i.pinimg.com/736x/64/e4/58/64e45833c9696d521a5d5b10556e38d6.jpg",
        "arauca":"https://i.pinimg.com/originals/2e/56/e4/2e56e4bac9c1d9965015802a2375698d.jpg",
        "atlántico":"https://www.familysearch.org/es/wiki/img_auth.php/thumb/7/72/Departamento_de_Atl%C3%A1ntico%2C_Colombia_Mapa.png/300px-Departamento_de_Atl%C3%A1ntico%2C_Colombia_Mapa.png",
        "bogotá":"https://upload.wikimedia.org/wikipedia/commons/8/8b/Bogot%C3%A1_in_New_Granada_%281810%29.svg",
        "bolívar":"https://www.familysearch.org/es/wiki/img_auth.php/thumb/2/24/Departamento_de_Bol%C3%ADvar%2C_Colombia_Mapa.png/240px-Departamento_de_Bol%C3%ADvar%2C_Colombia_Mapa.png",
        "norte de santander":"https://www.familysearch.org/es/wiki/img_auth.php/thumb/a/a9/Departamento_del_Norte_de_Santander%2C_Colombia_Mapa.png/300px-Departamento_del_Norte_de_Santander%2C_Colombia_Mapa.png",
        "putumayo":"https://www.todacolombia.com/imagenes/departamentos-de-colombia/Putumayo/Mapa_division_politica_municipios_del_departamento_del_Putumayo_1366x768.jpg",
        "quindío":"https://www.familysearch.org/es/wiki/img_auth.php/thumb/5/57/Departamento_de_Quind%C3%ADo%2C_Colombia_Mapa.png/350px-Departamento_de_Quind%C3%ADo%2C_Colombia_Mapa.png",
        "risaralda":"https://www.familysearch.org/es/wiki/img_auth.php/thumb/8/83/Departamento_de_Risaralda%2C_Colombia_Mapa.png/400px-Departamento_de_Risaralda%2C_Colombia_Mapa.png",
        "san andrés y providencia":"https://www.familysearch.org/es/wiki/img_auth.php/thumb/1/12/Departamento_de_San_Andr%C3%A9s_y_Providencia%2C_Colombia_Mapa.png/400px-Departamento_de_San_Andr%C3%A9s_y_Providencia%2C_Colombia_Mapa.png",
        "santander":"https://www.familysearch.org/es/wiki/img_auth.php/thumb/4/4e/Departamento_de_Santander%2C_Colombia_Mapa.png/350px-Departamento_de_Santander%2C_Colombia_Mapa.png",
        "tolima":"https://www.familysearch.org/es/wiki/img_auth.php/thumb/1/10/Departamento_de_Tolima%2C_Colombia_Mapa.png/350px-Departamento_de_Tolima%2C_Colombia_Mapa.png",
        "valle del cauca":"https://www.familysearch.org/es/wiki/img_auth.php/thumb/6/6b/Departamento_del_Valle_del_Cauca%2C_Colombia_Mapa.png/400px-Departamento_del_Valle_del_Cauca%2C_Colombia_Mapa.png",
        "vaupés":"https://www.familysearch.org/es/wiki/img_auth.php/thumb/2/29/Departamento_de_Vaup%C3%A9s%2C_Colombia_Mapa.png/375px-Departamento_de_Vaup%C3%A9s%2C_Colombia_Mapa.png",
        "vichada":"https://www.todacolombia.com/imagenes/departamentos-de-colombia/Vichada/Mapa_division_politica_municipios_del_departamento_del_Vichada_1366x768.jpg",
        "caldas":"https://www.familysearch.org/es/wiki/img_auth.php/thumb/5/50/Departamento_de_Caldas%2C_Colombia_Mapa.png/600px-Departamento_de_Caldas%2C_Colombia_Mapa.png",
        "boyacá":"https://www.todacolombia.com/imagenes/departamentos-de-colombia/Boyaca/rs/Municipios_departamento_Boyaca_face.jpg",      
        "huila":"https://www.todacolombia.com/imagenes/departamentos-de-colombia/Huila/Mapa_division_politica_municipios_del_departamento_del_Huila_1366x768.jpg",
        "meta":"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Mapa_de_Meta_%28subregiones%29.svg/270px-Mapa_de_Meta_%28subregiones%29.svg.png",
        "sucre":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Colombia_Sucre_location_map_%28adm_colored%29.svg/350px-Colombia_Sucre_location_map_%28adm_colored%29.svg.png",
       
    };

function displayDepartments(departments) {
    const container = document.getElementById('departments-container');
    container.innerHTML = '';

    departments.forEach(department => {
    const card = document.createElement('div');
    card.className = 'card col mb-4';

    // Obtener la imagen correspondiente al departamento
    const imageUrl = departmentImages[department.name.toLowerCase()] || 'https://example.com/default.jpg'; // URL por defecto si no hay imagen

    card.innerHTML = `
        <div class="card-body d-flex flex-column">
            <h3 class="card-title">${department.name}</h3>
            <img src="${imageUrl}" alt="${department.name}" class="img-thumbnail" id="imgeneral">
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

