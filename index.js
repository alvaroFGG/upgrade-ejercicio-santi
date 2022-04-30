const elBoss = {

    nombre: "Jose Luis",
    edad: 194,
    poderes: [
        {
            nombre: "Paranoia",
            description: "intentandome escapar de esta paranoia",
            imagenes: [
                {
                    imagen1: {
                       url: "has conseguido hacer acceder a la primera imagen de la paranoia"
                    }
                },
                {
                    imagen2: {
                        url: "has conseguido hacer acceder a la segunda imagen de la paranoia"
                    }
                }
            ]
        },
        {
            nombre: "Petrificasió",
            description: "Te mira y te petrifica",
            imagenes: [
                {
                    imagen1: {
                       url: "has conseguido hacer acceder a la primera imagen de la petrificasió"
                    },
                },
                {
                    imagen2: {
                        url: "has conseguido hacer acceder a la segunda imagen de la petrificasió"
                    }
                }   
            ]
        },
        {
            nombre: "Fuego",
            description: "Pues eso, fuego",
            imagenes: [
                {
                    imagen1: {
                       url: "has conseguido hacer acceder a la primera imagen del fueguito"
                    }
                },
                {
                    imagen2: {
                        url: "has conseguido hacer acceder a la segunda imagen del fueguito"
                    }
                } 
            ]
        }
    ],
    familiares: [
        {
            nombre: "Julian",
            edad: 342,
            parentesco: "Primo"
        },
        {
            nombre: "Paquito",
            edad: 312,
            parentesco: "Tío"
        },
        {
            nombre: "Emma",
            edad: 13,
            parentesco: "Sobrina"
        },
        {
            nombre: "Julia",
            edad: 100,
            parentesco: "Hermana"
        }
    ],
    reto: [
        [
            {
                sigueElReto: [
                    {
                        sigueElReto2: {
                            sigueElReto3: {
                                pareceQueSabesBucearEntreObjetos: {
                                    definitivamenteSabes: [
                                        "Jose",
                                        "Luis,",
                                        "te",
                                        "miro",
                                        "y",
                                        23121,
                                        "te",
                                        "destruyo",
                                        {
                                            mensajeFinal: "Enhorabuena!, si has llegado hasta aquí te costará mucho menos tratar los datos de la pokeapi en el proyecto final de JavaScript, y si no, lograrás entenderlo con nosotros y sabrás llegar hasta aquí en otro momento"
                                        }
                                    ]
                                }
                            }
                        }
                    }
                ]
            }
        ]
    ]
}


// EJERCICIO

// tenemos un objeto llamado elBoss, como hemos visto en clase con ejemplos muy sencillitos
// podemos recorrer arrays... bucear entre objetos... y tratar datos.
// Lo que tendrás que hacer a continuación solo es complicar un poco más lo que hemos visto antes,
// pero por mucho que te pueda asustar elBoss, es lo mismo!

// Requisitos para matar a elBoss

// vamos a imaginarnos que vamos a hablar con el mediante console.logs, cada vez que pongamos
// un console.log será como hablar con el.

// entonces: // le vamos a decir = console.log()
// 1: le vamos a decir "{su nombre}, te conozco y no me das ningún miedo!";

    console.log(elBoss.nombre, " te conozco y no me das ningun miedo!");

// 2: le vamos a decir "conozco tus poderes y lo que hacen!"

    console.log("conozco tus poderes y lo que hacen!");

// 3: le vamos a decir "tu primer poder es {su primer poder} y hace {la descripción de su poder}"

    console.log("tu primer poder es ",elBoss.poderes[0].nombre," y hace ",elBoss.poderes[0].description);

//"tu segundo poder es {su segundo poder} y hace {la descripción de su poder}"

    console.log("tu segundo poder es ",elBoss.poderes[1].nombre," y hace ",elBoss.poderes[1].description);

//"tu tercero poder es {su tercero poder} y hace {la descripción de su poder}"

    console.log("tu tercer poder es ",elBoss.poderes[2].nombre," y hace ",elBoss.poderes[2].description);

// 4: le vamos a decir "También se tu punto más debil, tus familiares, y les conozco..."
// "conozco a tu {parentesco del primer familiar} {nombre del primer familiar}"

    console.log("conozco a tu ",elBoss.familiares[0].parentesco," ",elBoss.familiares[0].nombre);

// "conozco a tu {parentesco del segundo familiar} {nombre del segundo familiar}"

    console.log("conozco a tu ",elBoss.familiares[1].parentesco," ",elBoss.familiares[1].nombre);

// "conozco a tu {parentesco del tercero familiar} {nombre del tercero familiar}"

    console.log("conozco a tu ",elBoss.familiares[2].parentesco," ",elBoss.familiares[2].nombre);

// "y conozco a tu {parentesco del cuarto familiar} {nombre del cuarto familiar}"

    console.log("conozco a tu ",elBoss.familiares[3].parentesco," ",elBoss.familiares[3].nombre);


// 5: para matarlo tendrás que superar el reto y para ello tendrás que decirle las palabras
// mágicas para que el mensaje quede tal que así "Jose luis, te miro y te destruyo".
    let frase = ""; 
    const length = elBoss.reto[0][0].sigueElReto[0].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes.length;

    for(let i=0; i<length; i++){
        if(typeof elBoss.reto[0][0].sigueElReto[0].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes[i]==="string"){
            frase+=elBoss.reto[0][0].sigueElReto[0].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes[i]+" ";
        }
    }
    
    console.log(frase);

    

// Por último, como bonus, mostraremos por pantalla las urls de todas las imágenes de los poderes.

    // for(let i = 0; i<elBoss.poderes.length; i++){
    //     for(j of elBoss.poderes[i].imagenes){

    //     }
    // }

    for(let i = 0; i<elBoss.poderes.length; i++){


        console.log(elBoss.poderes[i].imagenes[1].imagen2.url);
        console.log(elBoss.poderes[i].imagenes[1].imagen2.url);
    }

// haremos la media de las edades de los familiares de elBoss.
    let sum = 0;
    let cont = 0;
    for(let i = 0; i<elBoss.familiares.length; i++){
        sum += elBoss.familiares[i].edad;
        cont++;
    }
    console.log("La media de edad de todos los familiares es: "+sum/cont);

// y mostraremos por pantalla el mensajeFinal.

    console.log(elBoss.reto[0][0].sigueElReto[0].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes[8].mensajeFinal);


    //O

    for(let i=0; i<length; i++){
        if(typeof elBoss.reto[0][0].sigueElReto[0].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes[i]==="object"){
            console.log(elBoss.reto[0][0].sigueElReto[0].sigueElReto2.sigueElReto3.pareceQueSabesBucearEntreObjetos.definitivamenteSabes[i].mensajeFinal);
        }
    }


