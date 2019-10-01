import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {
    private heroes: Heroe [] = [
        {
          nombre: "Aquaman",
          bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
          img: "assets/img/aquaman.png",
          aparicion: "1941-11-01",
          casa:"DC"
        },
        {
          nombre: "Batman",
          bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
          img: "assets/img/batman.png",
          aparicion: "1939-05-01",
          casa:"DC"
        },
        {
          nombre: "Daredevil",
          bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
          img: "assets/img/daredevil.png",
          aparicion: "1964-01-01",
          casa: "Marvel"
        },
        {
          nombre: "Hulk",
          bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
          img: "assets/img/hulk.png",
          aparicion: "1962-05-01",
          casa:"Marvel"
        },
        {
          nombre: "Linterna Verde",
          bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
          img: "assets/img/linterna-verde.png",
          aparicion: "1940-06-01",
          casa: "DC"
        },
        {
          nombre: "Spider-Man",
          bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
          img: "assets/img/spiderman.png",
          aparicion: "1962-08-01",
          casa: "Marvel"
        },
        {
          nombre: "Wolverine",
          bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
          img: "assets/img/wolverine.png",
          aparicion: "1974-11-01",
          casa: "Marvel"
        },
        {
          nombre: "Gatubela",
          bio: "es un ladrona de Gotham City que normalmente usa un traje ajustado de una sola pieza y usa un látigo como arma. Originalmente fue caracterizada como una supervillana y adversaria de Batman, pero desde la década de los 90's ha aparecido en una serie que la presenta como una antiheroína, a menudo haciendo cosas incorrectas por las razones correctas. El personaje prosperó desde sus primeras apariciones, pero tuvo una pausa prolongada desde septiembre de 1954 hasta noviembre de 1966 debido a la Autoridad del Código de Cómics en desarrollo en 1954. Estas cuestiones involucraron las reglas con respecto al desarrollo y la representación de personajes femeninos que violaban los cómics, un código que ya no está en uso. En los cómics, Holly Robinson y Eiko Hasigawa adoptaron la identidad de Catwoman, aparte de Selina Kyle.",
          img: "assets/img/catwoman.png",
          aparicion: "1940-05-01",
          casa: "DC"
        }
      ];

    constructor() {
   
    }

    getHeroes(): Heroe[] {
        return this.heroes;
    }

    getHeroe( i:number ) {
      return this.heroes[i];
    }

    buscarHeroes( x:string ):Heroe[]{
      let heroesArray:Heroe[] = [];
      x = x.toLowerCase();

      for (let heroe of this.heroes) {
        let nombre = heroe.nombre.toLowerCase();
        if (nombre.indexOf( x ) >= 0){
          heroesArray.push(heroe);
        }
      }
      return heroesArray;
    }
}

export interface Heroe {
    nombre:string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
};