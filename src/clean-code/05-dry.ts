type Size = ''|'S'|'M'|'XL';

class Product {
    constructor(
        // propiedades
        public name: string = '',
        public price: number = 0,
        public size: Size = '',

        //public name : string OBLIGATORIO
        //public name: string = '' OPCIONAL

    ){}

    isProductReady():boolean {
        for (const key in this) { //this hace referencia a la instancia de la clase y KEY son las propiedades
            //this[key] es computado para la propiedad, es como this.name y de largo
            
            switch( typeof this[key]){
                case 'string':
                    if ( (this[key]).length <= 0) throw Error(`${ key } is empty`); // a él le salió error ya que typescript piensa que puede ser cualquier tipo de dato, entonces él lo "casteó", como que le agregó unas comillas para que siempre sea string por así decirlo
                    // puso (this[key]+''), pero es código de javascript y dice que deberíamos de resolverlo mediante typescript
                    // y puso (<string><unknown>this[key]) es como un "trátelo como un string"

                break;
                case 'number':
                    if ( (this[key]) <= 0) throw Error(`${ key } is zero`);

                break;
                default:
                    throw Error(`${ typeof this[key]} is not valid`)
            }

        }

        return true;
    }



    toString() {
        //CÓMO RESOLVER ESTO DE PONER FULL CÓDIGOS A CADA RATO - NO DRY
        // if (this.name.length <= 0) throw Error('name is empty');
        // if (this.price <= 0) throw Error('price is zero');
        // if (this.size.length <= 0) throw Error('size is empty');
        if ( !this.isProductReady()) return true;

        return `${ this.name } (${ this.price }), ${ this.size} `
    } //interpolación en este temple string



}

//función anónima auto invocada
// (()=> {

// })();

(()=> {
    //instancia
    const bluePants = new Product('Blue Jeans',10,'M');
    console.log(bluePants.toString());
    //console.log(bluePants);

})();