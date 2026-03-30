(()=> {

    type Gender = 'M'|'F';

    class Person{
    //     public name : string;
    //     //public name? : string; DICE QUE ES OPCIONAL
    //     public gender : Gender;
    //     public birthdate : Date;

    //     constructor(name:string,gender:Gender,birthdate:Date){
    //         this.name=name;
    //         this.gender=gender;
    //         this.birthdate=birthdate;
    //     }

    //  SON LO MISMO
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ){}
    }

    const newPerson = new Person('Dennisse','F',new Date('2004-12-03'));
    console.log({ newPerson });

})();