alert ("escoge la pelicula que más te guste");

function Pelicula(nombre, director, genero, actor1,actor2){
this.nombre= nombre;
this.director= director;
this.genero= genero;
this.actor1= actor1;
this.actor2= actor2;
}

const casaBlanca= new Pelicula("Casa blanca", "Michael Curtiz", "Drama", "Humphrey Bogart","Ingrid Bergman",)

const tiburon= new Pelicula("Tiburon","Steven Spielberg","Suspenso","Roy Scheider","Robert Shaw",)

const terminator= new Pelicula("Terminator","James Cameron","Ciencia Ficcion","Arnold Schwarzenegger","Linda Hamilton",)

const elExorcista= new Pelicula("El exorcista","William Friedkin","Terror","Ellen Burstin","Jazon Miller",)

const peliculas= [casaBlanca,tiburon,terminator,elExorcista];

function cargarPelicula(peliculas, eleccion){

    peliculas.push(eleccion)
}

 function eliminarPelicula(){
    
    peliculas.splice(eliminada,1)
 }

 function votacion(){
   
 }
let voto = prompt("Porfavor ingrese el numero de la opción que prefiera para la noche de peliculas \n 1- Casa Blanca \n 2- Tiburon \n 3- Terminator \n 4- El exorcista \n 5- Sugiere tu propia pelicula \n 6- sugiere que eliminen una pelicula de las opciones \n 7- salir");
while (voto != "7"){
if (voto== "1"){
    alert("Has votado por Casa blanca")
    
}else if(voto =="2"){
    alert ("Has votado por Tiburon")
    }else if(voto =="3"){
    alert ("Has votado por Terminator")
    }else if(voto =="4"){
    alert ("Has votado por El exorcista")
    }else if(voto =="5"){
    let sugerencia= prompt("Sugiere que pelicula te gustaria ver")
    cargarPelicula(peliculas,sugerencia)
    alert("Agregaremos a " +sugerencia+ " a la opciones")
}else if(voto =="6"){
    let eliminada= prompt ("Escoge la opcion que quisieras eliminar \n 0- Casa Blanca \n 1- Tiburon \n 2- Terminator \n 3- El exorcista")
   eliminarPelicula
   alert("La eliminaremos de las opciones")
} else if(voto =="7"){}{alert("Escribe 7 para salir o una opcion diferente para cambiar tu voto")
voto = prompt("Porfavor ingrese el numero de la opción que prefiera para la noche de peliculas \n 1- Casa Blanca \n 2- Tiburon \n 3- Terminator \n 4- El exorcista \n 5- Sugiere tu propia pelicula \n 6- sugiere que eliminen una pelicula de las opciones \n 7- salir");
}
}