const params = new URLSearchParams(window.location.search);
const departmentId = params.get('department'); // Obtener el ID del departamento de la URL
const apiUrl = `https://api-colombia.com/api/v1/Department/${departmentId}`; // URL de la API para obtener detalles del departamento
const citiesUrl = `https://api-colombia.com/api/v1/Department/${departmentId}/cities`; // URL para obtener ciudades del departamento
const naturalAreasUrl = `https://api-colombia.com/api/v1/Department/${departmentId}/naturalareas`; // URL para obtener áreas naturales del departamento
//const naturalAreasUrl = `https://api-colombia.com/api/v1/NaturalArea`; // URL para obtener áreas naturales del departamento

/*
const naturalAreasUrl = [
    {
      "id": 1,
      "name": "Área Natural Única",
      "departmentId": 1,
      "description": "Área geográfica que, por poseer condiciones especiales de flora o gea es un escenario natural raro.",
  "imageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkycmhIffr48_Fx5XG7uo8lbPyQKKeHBgZVA&s"

    },
    {
      "id": 2,
      "name": "Reserva Natural",
      "departmentId": 2,
      "description": "Área geográfica en la cual existen condiciones primitivas de flora, fauna y gea, y está destinada a la conservación, investigación y estudio de sus riquezas naturales.",
      "imageUrl":"https://cdn.lavoz.com.ar/sites/default/files/styles/landscape_565_318/public/nota_periodistica/Colombia_04_1614726383.jpg"
    },
    {
      "id": 3,
      "name": "Áreas de Recreación",
        "departmentId": 3,
      "description": "Espacio geográfico en el que paisajes y ecosistemas estratégicos en la escala regional mantienen su función, aunque su estructura, composición hayan sido modificadas con un potencial significativo de recuperación y cuyos valores naturales y culturales se ponen a disposición humana para destinarlos a la restauración, uso sostenible, conocimiento y disfrute. Son declaradas y administradas por las CAR.",
    "imageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2cB3DBPL-eGKYlSZb48-txTtHmcaUNSUZaA&s"
    },
    {
      "id": 4,
      "name": "Distritos de Conservación de Suelos",
        "departmentId": 4,
      "description": "Área geográfica en el que paisajes y ecosistemas estratégicos en escala regional mantienen su función, aunque su estructura, composición hayan sido modificadas y aportan esencialmente a la generación de bienes y servicios ambientales cuyos valores naturales y culturales se ponen a disposición humana para destinarlos a su preservación, restauración, conocimiento y disfrute. Su declaración y administración corresponde a las CAR.",
    "imageUrl":"https://wwfeu.awsassets.panda.org/img/018_caqueta_2018__luisbarretophotos_06149_2__baja_687096.jpg"
    },
    {
      "id": 5,
      "name": "Distritos Nacionales de Manejo Integrado",
        "departmentId": 5,
      "description": "Área geográfica en escala regional declarados y administrados por el Ministerio de Ambiente y Desarrollo Sostenible en el que los paisajes y ecosistemas mantienen su composición y función, aunque su estructura haya sido modificada y cuyos valores naturales y culturales se ponen a disposición humana para su uso sostenible, preservación, restauración, conocimiento y disfrute.",
     "imageUrl":"https://www.parquesnacionales.gov.co/wp-content/uploads/2023/05/Cinaruco.jpg"
    },
    {
      "id": 7,
      "name": "Parque Nacional Natural",
      "departmentId": 6,
      "description": "La declaración de Áreas Protegidas del Sistema de Parques corresponde al Ministerio de Ambiente y su administración y manejo a Parques Nacionales Naturales.",
      "imageUrl":"https://voydeviaje.lavoz.com.ar/resizer/gcvtHYvFNAE8MNrhJsOJXfkb-5E=/0x0:0x0/980x640/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/TK77H42RPZA3RE7ZMBDA22CE5U.jpg"
    },
    {
      "id": 8,
      "name": "Parques Naturales Regionales",
        "departmentId": 7,
      "description": "Área geográfica en el que paisajes y ecosistemas estratégicos en escala regional mantienen la estructura, composición y función, así como los procesos ecológicos y evolutivos que los sustentan y cuyos valores naturales y culturales se ponen a disposición humana para destinarlos a su preservación, restauración, conocimiento y disfrute. Su declaración y administración corresponde a las CAR.",
      "imageUrl":"https://old.parquesnacionales.gov.co/portal/wp-content/uploads/2013/06/Sandra_Esguerra1.jpg"
    },
    {
      "id": 9,
      "name": "Reserva Natural de la Sociedad Civil",
        "departmentId": 8,
      "description": "Parte o todo del área de un inmueble que conserve una muestra de ecosistema natural y sea manejado bajo principios de sustentabilidad en el uso de los recursos naturales y que por voluntad libre de su propietario se designa para su uso sostenible, preservación o restauración con vocación a largo plazo. Es iniciativa del propietario registrar la totalidad o parte de su inmueble como RNSC.",
      "imageUrl":"https://old.parquesnacionales.gov.co/portal/wp-content/uploads/2015/09/s02.jpg"
    },
    {
      "id": 10,
      "name": "Reservas Forestales Protectoras Nacionales",
        "departmentId": 9,
      "description": "Ecosistemas estratégicos en escala nacional declarados por el Ministerio de Ambiente y Desarrollo Sostenible que podrán ser destinados a la preservación, uso sostenible (hace referencia a la obtención de los frutos secundarios del bosque en lo relacionado con las actividades de aprovechamiento forestal), restauración, conocimiento y disfrute. ",
      "imageUrl":"https://cdn.biodiversidadla.org/var/biodiversidadla_org/storage/images/objetos_relacionados/image_folder/gbpgnnwgiupjjhi-556x313-nopad/814193-1-esl-ES/GbpgnnwGIupJjHi-556x313-noPad_xlarge.jpg"
    },
    {
      "id": 11,
      "name": "Reservas Forestales Protectoras Regionales",
        "departmentId": 10,
      "description": "Ecosistemas estratégicos en escala regional declarados y administrados por las CAR que podrán ser destinados a la preservación, uso sostenible (hace referencia a la obtención de los frutos secundarios del bosque en lo relacionado con las actividades de aprovechamiento forestal), restauración, conocimiento y disfrute. ",
      "imageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKIwbENQi8xz4vDB0N20I4QJxC8cxzW8hSAQ&s"
    },
    {
      "id": 12,
      "name": "Santuario de Fauna",
        "departmentId": 11,
      "description": "Área geográfica dedicada a preservar especies o comunidades de animales silvestres, para conservar recursos genéticos de la fauna nacional.",
      "imageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAc16ZXrTf8JQ1CR9w53pKpiM_82LTe70MBQ&s"
    },
    {
      "id": 13,
      "name": "Santuario de Fauna y Flora",
        "departmentId": 12,
      "description": "Área geográfica dedicada a preservar especies o cumunidades de animales silvestres y vegetales con fines de conservación genéticos.",
      "imageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_c7iAOOpD0_sHLXug9vCI0Qxpj3yXDqBzrw&s"
    },
    {
      "id": 14,
      "name": "Santuario de Flora",
        "departmentId": 13,
      "description": "Área geográfica dedicada a preservar especies o comunidades vegetales para conservar recursos genéticos de la flora nacional.",
      "imageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJtGHerq6-cJF89RqbbktAKzag8R_JM9shYQ&s"
    },
    {
      "id": 15,
      "name": "Vía Parque",
        "departmentId": 14,
      "description": "Faja de terreno con carretera, que posee bellezas panorámicas singulares o valores naturales o culturales, conservada para fines de educación y esparcimiento.",
      "imageUrl":"https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/06/26032429/Obs-de-Aves-768x512.jpg"
    },
    {
        "id": 16,
        "name": "Área Natural Única",
        "departmentId": 15,
        "description": "Área geográfica que, por poseer condiciones especiales de flora o gea es un escenario natural raro.",
    "imageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkycmhIffr48_Fx5XG7uo8lbPyQKKeHBgZVA&s"
  
      },
      {
        "id": 17,
        "name": "Reserva Natural",
        "departmentId": 16,
        "description": "Área geográfica en la cual existen condiciones primitivas de flora, fauna y gea, y está destinada a la conservación, investigación y estudio de sus riquezas naturales.",
        "imageUrl":"https://cdn.lavoz.com.ar/sites/default/files/styles/landscape_565_318/public/nota_periodistica/Colombia_04_1614726383.jpg"
      },
      {
        "id": 18,
        "name": "Áreas de Recreación",
          "departmentId": 17,
        "description": "Espacio geográfico en el que paisajes y ecosistemas estratégicos en la escala regional mantienen su función, aunque su estructura, composición hayan sido modificadas con un potencial significativo de recuperación y cuyos valores naturales y culturales se ponen a disposición humana para destinarlos a la restauración, uso sostenible, conocimiento y disfrute. Son declaradas y administradas por las CAR.",
      "imageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2cB3DBPL-eGKYlSZb48-txTtHmcaUNSUZaA&s"
      },
      {
        "id": 19,
        "name": "Distritos de Conservación de Suelos",
          "departmentId": 18,
        "description": "Área geográfica en el que paisajes y ecosistemas estratégicos en escala regional mantienen su función, aunque su estructura, composición hayan sido modificadas y aportan esencialmente a la generación de bienes y servicios ambientales cuyos valores naturales y culturales se ponen a disposición humana para destinarlos a su preservación, restauración, conocimiento y disfrute. Su declaración y administración corresponde a las CAR.",
      "imageUrl":"https://wwfeu.awsassets.panda.org/img/018_caqueta_2018__luisbarretophotos_06149_2__baja_687096.jpg"
      },
      {
        "id": 20,
        "name": "Distritos Nacionales de Manejo Integrado",
          "departmentId": 19,
        "description": "Área geográfica en escala regional declarados y administrados por el Ministerio de Ambiente y Desarrollo Sostenible en el que los paisajes y ecosistemas mantienen su composición y función, aunque su estructura haya sido modificada y cuyos valores naturales y culturales se ponen a disposición humana para su uso sostenible, preservación, restauración, conocimiento y disfrute.",
       "imageUrl":"https://www.parquesnacionales.gov.co/wp-content/uploads/2023/05/Cinaruco.jpg"
      },
      {
        "id": 21,
        "name": "Parque Nacional Natural",
        "departmentId": 20,
        "description": "La declaración de Áreas Protegidas del Sistema de Parques corresponde al Ministerio de Ambiente y su administración y manejo a Parques Nacionales Naturales.",
        "imageUrl":"https://voydeviaje.lavoz.com.ar/resizer/gcvtHYvFNAE8MNrhJsOJXfkb-5E=/0x0:0x0/980x640/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/TK77H42RPZA3RE7ZMBDA22CE5U.jpg"
      },
      {
        "id": 22,
        "name": "Parques Naturales Regionales",
          "departmentId": 21,
        "description": "Área geográfica en el que paisajes y ecosistemas estratégicos en escala regional mantienen la estructura, composición y función, así como los procesos ecológicos y evolutivos que los sustentan y cuyos valores naturales y culturales se ponen a disposición humana para destinarlos a su preservación, restauración, conocimiento y disfrute. Su declaración y administración corresponde a las CAR.",
        "imageUrl":"https://old.parquesnacionales.gov.co/portal/wp-content/uploads/2013/06/Sandra_Esguerra1.jpg"
      },
      {
        "id": 23,
        "name": "Reserva Natural de la Sociedad Civil",
          "departmentId": 22,
        "description": "Parte o todo del área de un inmueble que conserve una muestra de ecosistema natural y sea manejado bajo principios de sustentabilidad en el uso de los recursos naturales y que por voluntad libre de su propietario se designa para su uso sostenible, preservación o restauración con vocación a largo plazo. Es iniciativa del propietario registrar la totalidad o parte de su inmueble como RNSC.",
        "imageUrl":"https://old.parquesnacionales.gov.co/portal/wp-content/uploads/2015/09/s02.jpg"
      },
      {
        "id": 24,
        "name": "Reservas Forestales Protectoras Nacionales",
          "departmentId": 23,
        "description": "Ecosistemas estratégicos en escala nacional declarados por el Ministerio de Ambiente y Desarrollo Sostenible que podrán ser destinados a la preservación, uso sostenible (hace referencia a la obtención de los frutos secundarios del bosque en lo relacionado con las actividades de aprovechamiento forestal), restauración, conocimiento y disfrute. ",
        "imageUrl":"https://cdn.biodiversidadla.org/var/biodiversidadla_org/storage/images/objetos_relacionados/image_folder/gbpgnnwgiupjjhi-556x313-nopad/814193-1-esl-ES/GbpgnnwGIupJjHi-556x313-noPad_xlarge.jpg"
      },
      {
        "id": 25,
        "name": "Reservas Forestales Protectoras Regionales",
          "departmentId": 24,
        "description": "Ecosistemas estratégicos en escala regional declarados y administrados por las CAR que podrán ser destinados a la preservación, uso sostenible (hace referencia a la obtención de los frutos secundarios del bosque en lo relacionado con las actividades de aprovechamiento forestal), restauración, conocimiento y disfrute. ",
        "imageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKIwbENQi8xz4vDB0N20I4QJxC8cxzW8hSAQ&s"
      },
      {
        "id": 26,
        "name": "Santuario de Fauna",
          "departmentId": 25,
        "description": "Área geográfica dedicada a preservar especies o comunidades de animales silvestres, para conservar recursos genéticos de la fauna nacional.",
        "imageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAc16ZXrTf8JQ1CR9w53pKpiM_82LTe70MBQ&s"
      },
      {
        "id": 27,
        "name": "Santuario de Fauna y Flora",
          "departmentId": 26,
        "description": "Área geográfica dedicada a preservar especies o cumunidades de animales silvestres y vegetales con fines de conservación genéticos.",
        "imageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_c7iAOOpD0_sHLXug9vCI0Qxpj3yXDqBzrw&s"
      },
      {
        "id": 28,
        "name": "Santuario de Flora",
          "departmentId": 27,
        "description": "Área geográfica dedicada a preservar especies o comunidades vegetales para conservar recursos genéticos de la flora nacional.",
        "imageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJtGHerq6-cJF89RqbbktAKzag8R_JM9shYQ&s"
      },
      {
        "id": 29,
        "name": "Vía Parque",
          "departmentId": 28,
        "description": "Faja de terreno con carretera, que posee bellezas panorámicas singulares o valores naturales o culturales, conservada para fines de educación y esparcimiento.",
        "imageUrl":"https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/06/26032429/Obs-de-Aves-768x512.jpg"
      },
      {
        "id": 30,
        "name": "Santuario de Fauna y Flora",
          "departmentId": 29,
        "description": "Área geográfica dedicada a preservar especies o cumunidades de animales silvestres y vegetales con fines de conservación genéticos.",
        "imageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_c7iAOOpD0_sHLXug9vCI0Qxpj3yXDqBzrw&s"
      },
      {
        "id": 31,
        "name": "Santuario de Flora",
          "departmentId": 30,
        "description": "Área geográfica dedicada a preservar especies o comunidades vegetales para conservar recursos genéticos de la flora nacional.",
        "imageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJtGHerq6-cJF89RqbbktAKzag8R_JM9shYQ&s"
      },
      {
        "id": 32,
        "name": "Vía Parque",
          "departmentId": 31,
        "description": "Faja de terreno con carretera, que posee bellezas panorámicas singulares o valores naturales o culturales, conservada para fines de educación y esparcimiento.",
        "imageUrl":"https://imgs.mongabay.com/wp-content/uploads/sites/25/2018/06/26032429/Obs-de-Aves-768x512.jpg"
      },
      {
        "id": 1,
        "name": "Área Natural Única",
        "departmentId": 1,
        "description": "Área geográfica que, por poseer condiciones especiales de flora o gea es un escenario natural raro.",
    "imageUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkycmhIffr48_Fx5XG7uo8lbPyQKKeHBgZVA&s"
  
      }

  ]
*/
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
        "la jagua de ibirico":"https://elpilon.com.co/wp-content/uploads/2019/09/cropped-LA-JAgua.jpg",
        "yopal":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsd32BuiJxkp9acTifBOOT9AWtR2L3AO0RSg&s",
        "aguazul":"https://www.viajarenverano.com/wp-content/uploads/2023/03/Aguazul-Portada-800x445.gif",
        "chámeza":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFSxWpewYNTiea2ImnWdKsgbihgjGmxS5p-w&s",
        "hato corozal":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIvXswjA5ScNT6E6kk-556ZVwQ2eOgeWXGZA&s",
        "la salina":"https://www.viajarenverano.com/wp-content/uploads/2020/07/La-Salina-Alcaldia1-800x445.jpg",
        "monterrey":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJLW1kczo3NsPBNk7HYDqOZWaiDLG5IAPomQ&s",
        "pore":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Th1gbcS46r8F_-WvGsU3pjVCke1xV9U4dg&s",
        "recetor":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvnsFf82XAwVYOIakZGkSuyP7_PKxc-AhG4Q&s",
        "sabanalarga":"https://upload.wikimedia.org/wikipedia/commons/1/18/Casco_urbano_Sabanalarga_Casanare.jpg",
        "sácama":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Zq9kIXFsC10JZYLm45hlNis2ikyz1qS7Wg&s",
        "tauramena":"https://cf.bstatic.com/xdata/images/hotel/max1024x768/514295956.jpg?k=96dc8e0d8f4c404dc6007f4db37f7bd227f5973a5dc61ce33946211c9999f2dd&o=&hp=1",
        "trinidad":"https://www.casanareonline.co/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-13-at-5.52.26-AM-1024x576.jpeg",
        "villanueva":"https://ruta65.co/wp-content/uploads/2022/09/Villanueva-01-768x513.jpg",
        "san luis de gaceno":"https://www.colombiaturismoweb.com/DEPARTAMENTOS/BOYACA/MUNICIPIOS/SAN%20LUIS%20DE%20GACENO/imagenes/PANORAMICA_thumb_1.JPG",
        "paz de ariporo":"https://elnuevooriente.com/wp-content/uploads/2022/08/paz-de-ariporo.jpg",
        "nunchía":"https://www.nunchia-casanare.gov.co/MiMunicipio/PublishingImages/Paginas/Sitios-de-Interes/DJI_0257.JPG",
        "maní":"https://i.ytimg.com/vi/jTjwyH7SCTc/sddefault.jpg",
        "támara":"https://i.ytimg.com/vi/ARfuTErAvUM/maxresdefault.jpg",
        "orocué":"https://i.ytimg.com/vi/zwG0iJr_04Y/sddefault.jpg",
        "popayán":"https://i.ytimg.com/vi/ORndU1esOzY/maxresdefault.jpg",
        "almaguer":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXEZ6HQVEAH0WxT6p1TMcUq8rxrrdTsUp7Fg&s",
        "argelia":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUYm_vwUO06zH4xdv7BXLMxYJEApZaNiAFog&s",
        "balboa":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8C80FLxiM_J5_3gnzoyCFqva7wDWnyeZEuA&s",
        "bolívar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWw7mj4mb8eKIrIHBCQNOrUpuJ6woJ3_t7sA&s",
        "buenos aires":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAn44mM-FGxl3SJ3rgZ-YIM5g08lgOe5dZ-Q&s",
        "cajibío":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxQfXqSCB6VbjOwXljjpUW_j93oEbO1zCFkg&s",
        "caldono":"https://cloudfront-us-east-1.images.arcpublishing.com/elespectador/DC6W5MUHGFFUVEQDMT6AGCWS6E.jpg",
        "caloto":"https://i0.wp.com/www.srg.com.co/wp-content/uploads/2020/02/CALOTO.jpg?fit=661%2C360&ssl=1",
        "corinto":"https://s3.amazonaws.com/rtvc-assets-canalinstitucional.tv/s3fs-public/styles/interna_noticias_after_1222x547_/public/images/corinto.jpg?itok=I3mnyYFr",
        "el tambo":"https://3.bp.blogspot.com/-X8-A0Jqo4Vw/VwAUAy0RQ3I/AAAAAAAAABk/5QAp2EaqqkA3ljjp4vyDjLdUWIr1HuQbA/s1600-r/recosntruccion%2Btambo.jpg",
        "florencia":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQh7q0ohf5vtdN6L4wLuMRuDrfILIgwm_7Fg&s",
        "guachené":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR3PtrjA4O7u4EGQ3IX32Ih0WAmh-0XVdd6A&s",
        "guapi":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD0gGC79aNVmtAK0ddfOJR_6h7gQypSvwJqw&s",
        "inzá":"https://anterior.cauca.gov.co/sites/default/files/styles/large/public/field/image/unnamed_11_4.jpg?itok=G4zBTqej",
        "jambaló":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT_Oh594w-YVS8-WMMENKSOKy2-jEI54mMvQ&s",
        "la sierra":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2jbd5X_aDPe6_Xe65ifKu6sDm5Tcjm9M86A&s",
        "la vega":"https://i0.wp.com/www.srg.com.co/wp-content/uploads/2020/02/LA-VEGA.jpg?fit=598%2C361&ssl=1",
        "lópez":"https://www.playasdecolombia.info/wp-content/uploads/2024/03/la_playa_santa_barbara_colombia_1.jpg",
        "mercaderes":"https://i.ytimg.com/vi/QycemZW_Vio/maxresdefault.jpg",
        "miranda":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-54QZXZNSBxFvbVCOS5kizMJnktqFV59DkQ&s",
        "morales":"https://i0.wp.com/www.lasillavacia.com/wp-content/uploads/2021/09/morales-cauca_20210916.jpg?fit=640%2C480&ssl=1",
        "padilla":"https://www.proclamadelcauca.com/wp-content/uploads/2017/12/IMG_7847.jpg",
        "patía":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkEmasFDYn_IU-I3BcGaOtRDas6aLAFnTtg&s",
        "piamonte":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3D8WucIYNFKLlYR-UrSYO2JMLNc1tAtgxRA&s",
        "piendamó":"https://i.ytimg.com/vi/VCpeWAtLyuI/maxresdefault.jpg",
        "puerto tejada":"https://www.puertotejada.gov.co/info/ptotejada_bco/media/pubInt/thumbs/thpubInt_700X400_108968.webp",
        "puracé":"https://static.nationalgeographicla.com/files/styles/image_3200/public/purace-2.jpg?w=760&h=508",
        "rosas":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsT2PfNwzbUjQorPidL0-8y1fmhmadz5lsCw&s",
        "santa rosa":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Santa_Rosa5.jpg/220px-Santa_Rosa5.jpg",
        "silvia":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzNkvCcKdGRM8LzZUhR84fJJvX5V6BbuNiOg&s",
        "sotara":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoo2j89cs6Ls15n51Jekli-o8167FS0Fd7FQ&s",
        "suárez":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9gxmIkfbPGrYzneatgyPargrNiE_xPUviTA&s",
        "sucre":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRpu1JkveZVzDBCrAzo74kcWybf7uKbruDA&s",
        "timbío":"https://media-cdn.tripadvisor.com/media/photo-s/14/5e/71/18/timbio.jpg",
        "timbiquí":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcKYkmLF4_z8peBcTZwzHpZvxlFGMdbFOzcw&s",
        "toribio":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF4skyHWm3f0DFewhR8iXXy7Wl2MvE_7bcIw&s",
        "totoró":"https://www.las2orillas.co/wp-content/uploads/2015/01/toroto-cauca.jpg",
        "villa rica":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScH-nRp9s98rGv8Re-e4S2o1EDBkUF4Gql-Q&s",
        "santander de quilichao":"https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2H5BXDC7MVEUHOOF2ZLRZS62X4.jpg",
        "san sebastián":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8B8vXOo8HsSyHp_U5heQ_URbaAhhDbMqcKw&s",
        "páez":"https://www.departamentoscolombianos.com/wp-content/uploads/2023/08/paez-el-municipio-del-cauca-que-te-sorprendera-con-su-historia-y-belleza-natural.jpg",
        "istmina":"https://radionacional-v3.s3.amazonaws.com/s3fs-public/styles/amp_1200x900_4_3/public/node/article/field_image/istmina.jpg?itok=q8S-GgeD",
        "quibdó":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1iHT10jLCNcdhbt_7iR55a7WW60c20O6ZyA&s",
        "acandí":"https://cdn.colombia.com/sdi/2021/11/20/acandi-el-cielo-en-la-tierra-no-puede-haber-mejor-descripcion-972183-1.jpg",
        "alto baudo":"https://verdadabierta.com/wp-content/uploads/2017/10/baudo-1-5.jpg",
        "atrato":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd_9xSQotET3mVv3HXM3B6LuMFfXU9ihuYqA&s",
        "bagadó":"https://radionacional-v3.s3.amazonaws.com/s3fs-public/node/article/field_image/bagadof.jpg",
        "bahía solano":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd5kYO9KI9kuREinLoMFLHMaGJJnNne4F01g&s",
        "bajo baudó":"https://cdn.municipios.com.co/fotos/459-2017-10-21-23-12-612-L.jpg",
        "bojaya":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8_NIO0XdKM78Op_ZXcslNqHbMowu8Aghk8w&s",
        "cértegui":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8Mfsn47Pgoo3hvBcTaTPUWY1wCiQTUCKdA&s",
        "condoto":"https://image.jimcdn.com/app/cms/image/transf/none/path/s08e7e429a4d98b26/image/ied2fc1f44f5210e7/version/1580171776/image.jpg",
        "juradó":"https://choco7dias.com/wp-content/uploads/2022/08/jurado-aereo.jpg",
        "lloró":"https://www.rcnradio.com/_next/image?url=https%3A%2F%2Ffiles.rcnradio.com%2Fpublic%2Fstyles%2F16_9%2Fpublic%2F2024-05%2Flloro_choco_0.jpg%3FVersionId%3DNpoz8Skh7EPmHZAfw6ixBNeWysEgQ8JI%26itok%3DfaqChONH&w=3840&q=75",
        "medio atrato":"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/ff/90/95/atarceder-en-el-rio-atrato.jpg?w=1400&h=1400&s=1",
        "medio baudó":"https://choco7dias.com/wp-content/uploads/2020/10/puertro-meluk-medio-baudo-choco.jpg",
        "medio san juan":"https://choco7dias.com/wp-content/uploads/2021/06/andagoya-andagoyita-puente-rios-choco-medio-san-juan.jpg",
        "nóvita":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmqZh-JFVb335mIwu741GWFPOYHt4fWU_8w&s",
        "nuquí":"https://i.ytimg.com/vi/ujIIGkzACN0/hqdefault.jpg",
        "río iro":"https://choco7dias.com/wp-content/uploads/2020/09/rio-iro-panoramica-1.jpg",
        "río quito":"https://pbs.twimg.com/profile_images/1070318016209043458/mGEgxFI1_400x400.jpg",
        "riosucio":"https://radionacional-v3.s3.amazonaws.com/s3fs-public/styles/portadas_relaciona_4_3/public/node/article/field_image/riosucio_municipio-choco-768x488.jpg?h=51c06193&itok=n0yJK1f2",
        "sipí":"https://www.departamentoscolombianos.com/wp-content/uploads/2023/08/sipi-descubre-la-belleza-natural-de-este-municipio-en-choco.jpg",
        "unguía":"https://choco7dias.com/wp-content/uploads/2021/04/unguia-parque-letrero-choco-1.jpg",
        "el litoral del san juan":"https://elbaudoseno.com/wp-content/uploads/2021/11/elbaudoseno_2021_11_inundacion_litoral_de_san_juan.jpg",
        "el cantón del san pablo":"https://choco7dias.com/wp-content/uploads/2022/02/managru-canton-san-pablo-choco-1-750x375.jpg",
        "el carmen de atrato":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9pKPXIcZu0D5pBZc3v0susZq8OLNkxuQ4BA&s",
        "san josé del palmar":"https://choco7dias.com/wp-content/uploads/2021/04/san-jose-del-palmar-panoramica-nubes-choco-1.jpg",
        "belén de bajira":"https://imagenes.eltiempo.com/files/image_1200_600/uploads/2023/04/25/64486ab6999ee.jpeg",
        "carmen del darien":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUFtC3CpMAv6bPOqNkvCNpQykPvJvrE5f0FA&s",
        "tadó":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ49hO3a4Pp12LHMuseUsvnsRmjVZlYq3cYhA&s",
        "unión panamericana":"https://www.departamentoscolombianos.com/wp-content/uploads/2023/08/la-importancia-de-la-union-panamericana-en-el-desarrollo-de-los-municipios-de-choco.jpg",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",
        "":"",



        
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

                                 <img src="${area.imageUrl || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkycmhIffr48_Fx5XG7uo8lbPyQKKeHBgZVA&s"}" alt="${area.name}" class="img-thumbnail" id="imgeneral">
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

