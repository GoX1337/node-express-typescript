
export class Foo  {

    bar: string = "kek";
    baz: number = 1337;

    constructor(a: string){
        this.bar = a;
    }

    toString(){
        return `bar:${this.bar}; baz:${this.baz}`;
    }
}