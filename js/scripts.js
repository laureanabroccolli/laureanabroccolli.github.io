function reemplazar_datos(datos) {
    let nombre = datos.results[0].name.first + " " + datos.results[0].name.last;
    console.log(nombre);
    let numero_calle = datos.results[0].location.street.number;
    let nombre_calle = datos.results[0].location.street.name;
    let ciudad = datos.results[0].location.city;
    let estado = datos.results[0].location.state;
    let pais = datos.results[0].location.country;
    let latitud = datos.results[0].location.coordinates.latitude;
    let longitud = datos.results[0].location.coordinates.longitude;
    let direccion =
      numero_calle +
      " " +
      nombre_calle +
      ", " +
      ciudad +
      ", " +
      estado +
      ", " +
      pais;
    let coordenadas = `http://www.google.com/maps/place/${latitud},${longitud}`;
    console.log(coordenadas);
    console.log(direccion);
    let foto_perfil = datos.results[0].picture.large;
    console.log(foto_perfil);
    let telefono = datos.results[0].phone;
    let telefono_link = `tel:${telefono.split(" ").join("")}`;
    console.log(telefono);
    let correo = datos.results[0].email;
    console.log(correo);
    let nacimiento = datos.results[0].dob.date;
    nacimiento = nacimiento.slice(0, 10);
    console.log(nacimiento);
    // reemplazar contenido en elementos HTML
    document.getElementsByTagName("h1")[0].innerHTML = nombre;
    document.getElementById("foto-de-perfil-img").setAttribute("src", foto_perfil);
    document.getElementById("direccion-correo").innerHTML = correo;
    document.getElementById("fecha-nacimiento").innerHTML = nacimiento;
    document
      .getElementById("fecha-nacimiento")
      .setAttribute("datetime", nacimiento);
    document.getElementById("direccion").innerHTML = direccion;
    document.getElementById("direccion").setAttribute("href", coordenadas);
    document.getElementById("telefono").innerHTML = telefono;
    document.getElementById("telefono").setAttribute("href", telefono_link);
  }
  
  function mostrar_info(nombre_contenido, icono) {
    if (document.getElementById(nombre_contenido).style.display !== "none") {
      document.getElementById(nombre_contenido).style.display = "none";
      document.getElementById(icono).className = "fa-solid fa-plus";
    } else {
      document.getElementById(nombre_contenido).style.display = "block";
      document.getElementById(icono).className = "fa-solid fa-minus";
    }
  }
  
  