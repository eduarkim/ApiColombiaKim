// species.js


let url = 'https://api-colombia.com/api/v1/InvasiveSpecie';
fetch(url)
    .then(response => response.json())
    .then(data => {
        // Obtener el contenedor de la tabla
        let tableBody = document.getElementById('species-container');
        tableBody.innerHTML = '';

        // Recorrer los datos obtenidos
        data.forEach((specie) => {
            let row = document.createElement('tr');


            const riskLevel = parseInt(specie.riskLevel);

            if (riskLevel === 1) {
                row.classList.add('table-primary'); // Azul
            } else if (riskLevel === 2) {
                row.classList.add('table-success'); // Verde
            }

            row.innerHTML = `
                    <td>${specie.name}</td>
                    <td>${specie.scientificName}</td>
                    <td>${specie.impact}</td>
                    <td>${specie.manage}</td>
                    <td>${riskLevel}</td>
                    <td><img src="${specie.urlImage}" alt="${specie.name}" class="img-thumbnail" id="imgtabla"></td>
                `;

            tableBody.appendChild(row);
        });
    })
    .catch(e => console.log(e));

//Nombre,Nombre Cientifico,impacto,Manejo,Nivel de riesgo,Imagen,

/*
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
*/