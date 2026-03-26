(() => {

    // arreglo de temperaturas celsius
    const arrayOfCelsius = [33.6, 12.34];  //temperaturesCelsius

    // Dirección ip del servidor
    const serverIp = '123.123.123.123';

    // Listado de usuarios
    const userList = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];
//userList o users ya que son objectos de usuarios

    // Listado de emails de los usuarios
    const emailsList = userList.map( user => user.email );

    // Variables booleanas de un video juego
    const canJump = false;
    const canRun = true;
    const hasItems = false;
    const isLoading = false;

    // Otros ejercicios
    // tiempo inicial
    const startTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    // Tiempo al final
    const endTime = new Date().getTime() - startTime;


    // Funciones
    // Obtiene los libros
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    function getBooksByUrl( url: string) {
        throw new Error('Function not implemented.' + url);
    }
    
    // obtiene el área de un cuadrado basado en sus lados
    function getSquareArea( sideLengthInMeters: number ) {
        throw new Error('Function not implemented.' + sideLengthInMeters);
    }

    // imprime el trabajo
    function printJob() {
        throw new Error('Function not implemented.');
    }
    
    




})();
