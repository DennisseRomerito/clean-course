(() => {

    // función para obtener información de una película por Id
    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastByMovieId( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( actorId: string ) {
        console.log({ actorId });
    }

    interface Movie {
        title: string, description: string, rating: number, cast: string[]
    }
    //ambas interfaces son validas pero la segunda es mas clara y entendible
    interface Movie {
        cast:           string[];
        description:    string; 
        rating:         number; 
        title:          string; 
    }

    // Crear una película
    function createMovie({title, description, rating, cast}: Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }

    //continuar







    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => { //}) => { sempre especificar tipo de dato de retorno
            //let result: number;     //let result; había que poner tipo, no poner any
            //REALMENTE NO SE NECESITA ESTA VARIABLE


        if ( isDead )  return 1500;//SE PUEDE RETORNAR DIRECTAMENTE 
        // recordar que javascript permite hacer if de 1 línea sin llaves
        
        
        if ( isSeparated ) {
            return 2500;
        }
        
        return isRetired ? 3000 : 4000;

//CONDICIONAL TERNARIO
// ESTÁ RETIRADO? SÍ :  NO
        }

        //ORIGINAL MALO
    //       const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
    //     let result;
    //     if ( isDead ) {
    //         result = 1500;
    //     } else {
    //         if ( isSeparated ) {
    //             result = 2500;
    //         } else {
    //             if ( isRetired ) {
    //                 result = 3000;
    //             } else {
    //                 result = 4000; 
    //             }
    //         }
    //     }
        
    //     return result;
    // }

        

})();




