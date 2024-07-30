const params = new URLSearchParams(window.location.search);
const departmentId = params.get('department'); // Obtener el ID del departamento de la URL
const apiUrl = `https://api-colombia.com/api/v1/Department/${departmentId}`; // URL de la API para obtener detalles del departamento
const citiesUrl = `https://api-colombia.com/api/v1/Department/${departmentId}/cities`; // URL para obtener ciudades del departamento
const naturalAreasUrl = `https://api-colombia.com/api/v1/Department/${departmentId}/naturalareas`; // URL para obtener áreas naturales del departamento
//const naturalAreasUrl = `https://api-colombia.com/api/v1/NaturalArea`; // URL para obtener áreas naturales del departamento
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
 
    function displayDepartmentDetails(department) {
        const container = document.getElementById('details-container');
        const imageUrl = departmentImages[department.name.toLowerCase()] || 'https://example.com/default.jpg'; // URL por defecto si no hay imagen
        container.innerHTML = `
            <div class="card mb-4">
                <div class="card-body">
                    <h2 class="card-title">${department.name}</h2>
                    <p class="card-text"><strong>ID:</strong> ${department.id}</p>
                    <p class="card-text flex-grow-1">${department.description || 'Descripción no disponible.'}</p>
                    <p class="card-text"><strong>Población:</strong> ${department.population}</p>
                    <p class="card-text"><strong>Prefijo telefónico:</strong> ${department.phonePrefix}</p>
                    <p class="card-text"><strong>Superficie:</strong> ${department.surface} km²</p>
                    <img src="${imageUrl}" alt="${department.name}" class="img-thumbnail" id="imgeneral">
                    <h3>Filtrar por:</h3>
                    
                    <input type="text" id="search-input" placeholder="Buscar..." oninput="filterCards()">
                    
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


    const cityImages = {
        "valledupar": "https://www.ciencuadras.com/blog/wp-content/uploads/2022/12/760x501_Valledupar.jpg",
        "aguachica": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOIR7H63IurMhy03wPrLm4IXexyGIJdfrvw&s",
        "agustín codazzi": "https://cdn.semanariolacalle.com/2024/03/Glorieta-Agustin-Codazzi-300x200.jpg",
        "astrea":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpBCdcKOCmaz45NUuaEND94LphvEPqIN4Q6w&s",
        "becerril":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYabjAwkobh29eGrkeZmxa0vcdxf1x223hiA&s",
        "bosconia":"https://imagenes.eltiempo.com/files/image_652_366/uploads/2021/03/18/6053ebd1ede58.jpeg",
        "chimichagua":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzPf1iG3znqVQywd9JYodxPPSZYspaWvvPg&s",
        "chiriguaná":"https://elpilon.com.co/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-08-at-3_opt-1.jpg",
        "curumaní":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6TWlBMuNWLW44xHLrHouaFOy5O2AUSwW7IA&s",
        "el copey":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn6zlMNcuWtlA1edKjkucRNJ7wufCHnN1qDg&s",
        "el paso":"https://upload.wikimedia.org/wikipedia/commons/6/60/Iglesia_san_marcos.jpg",
        "gamarra":"https://pbs.twimg.com/ext_tw_video_thumb/1455928066988036096/pu/img/YTrhnsHvpFWev1HE.jpg",
        "gonzález":"https://www.colombiaturismoweb.com/DEPARTAMENTOS/CESAR/MUNICIPIOS/GONZALEZ/imagenes/PANORAMICA2_thumb_1.jpg",
        "la gloria":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiGCbPD1_HvZOnSTb8oK9mnMZbrL7AWoNa2A&s",
        "manaure":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6KkuRGappYbyf6tAhdfAoOSEBjCj5yQSgBA&s",
        "pailitas":"https://elderecho.com.co/wp-content/uploads/2021/11/pailitas1.jpg",
        "pelaya":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5by_FcwVJInTJG7lvjgDyoI73Mnf5_CYXTQ&s",
        "pueblo bello":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLc-744uqgjQYSwlaOt90PapVbhIYVH0WKFQ&s",
        "la paz":"https://www.elheraldo.co/sites/default/files/styles/widht_760/public/articulo/2021/07/31/whatsapp_image_2021-07-31_at_9.23.22_pm.jpeg",
        "san alberto":"https://elpilon.com.co/wp-content/uploads/2016/05/san-alberto.jpg",
        "san diego":"https://elpilon.com.co/wp-content/uploads/2015/02/SAN_DIEGO_CESAR_JAIDER-2-1280x720.jpg",
        "san martín":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYdpEreOHq3d87cEyXki8Itg52OkrvfASy2w&s",
        "tamalameque":"https://laamericaespanyola.com/wp-content/uploads/2015/03/tamalameque2.jpg",
        "río de oro":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2B0ZQJwkqoL4WSXS_wUW6uOpVXMdwDEJVpg&s",
        "la jagua de ibirico":"https://elpilon.com.co/wp-content/uploads/2019/09/cropped-LA-JAgua.jpg"
        
    };

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
                    cityCard.className = 'col-12 col-md-6 col-lg-3 mb-4 city-card';

                             // Obtener la imagen correspondiente a la ciudad
            const imageUrl = cityImages[city.name.toLowerCase()] || 'https://media.iatiseguros.com/wp-content/uploads/2019/10/04012100/que-hacer-colombia-1.jpg'; // URL por defecto si no hay imagen
                    cityCard.innerHTML = `
                        <div class="card">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">${city.name}</h5>
                                <p class="card-text flex-grow-1">${city.description || 'Descripción no disponible.'}</p>
                               <img src="${imageUrl}" alt="${city.name}" class="img-thumbnail" id="imgeneral">
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
                console.log('Áreas Naturales:', areas); // Verifica la respuesta aquí
                areas.forEach(area => {
                    const areaCard = document.createElement('div');
                    areaCard.className = 'col-12 col-md-6 col-lg-3 mb-4 area-card';
                    areaCard.innerHTML = `
                        <div class="card ">
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">${area.name}</h5>
                                <p class="card-text flex-grow-1">${area.description || 'Descripción no disponible.'}</p>
                                 <img src="https://cdn0.matrimonio.com.co/article/8204/3_2/1280/jpg/24028-playas-bonitas-de-colombia-para-luna-de-miel.webp" alt="${area.name}" class="img-thumbnail" id="imgeneral">
                                <p class="card-text"><strong>Superficie:</strong> ${area.surface || 'N/A'} km²</p>
                            </div>
                        </div>
                    `;
                    areasContainer.appendChild(areaCard);
                });
            });
    }

    function normalizeString(str) {
        return str
            .normalize("NFD") // Normaliza la cadena
            .replace(/[\u0300-\u036f]/g, "") // Elimina los acentos
            .toLowerCase(); // Convierte a minúsculas
    }

function filterCards() {
    const cityCheckbox = document.getElementById('ciudad');
    const areaCheckbox = document.getElementById('areas_naturales');
    const searchInput = normalizeString(document.getElementById('search-input').value);

    const cityCards = document.querySelectorAll('.city-card');
    const areaCards = document.querySelectorAll('.area-card');

    // Mostrar u ocultar tarjetas de ciudades
    cityCards.forEach(card => {
        const cardTitle = normalizeString(card.querySelector('.card-title').textContent);
        const shouldDisplay = (cityCheckbox.checked || !cityCheckbox.checked && !areaCheckbox.checked) &&
                             (cardTitle.includes(searchInput));
        card.style.display = shouldDisplay ? 'block' : 'none';
    });

    // Mostrar u ocultar tarjetas de áreas naturales
    areaCards.forEach(card => {
        const cardTitle = normalizeString(card.querySelector('.card-title').textContent);
        const shouldDisplay = (areaCheckbox.checked || !cityCheckbox.checked && !areaCheckbox.checked) &&
                             (cardTitle.includes(searchInput));
        card.style.display = shouldDisplay ? 'block' : 'none';
    });
}

window.onload = () => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(department => {
            displayDepartmentDetails(department);
            fetchCitiesAndNaturalAreas(); // Llamar a la función para obtener ciudades y áreas naturales
        });
};

