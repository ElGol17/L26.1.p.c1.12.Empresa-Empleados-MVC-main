export default class Cl_mArticulo {
    private _nombre: string = '';
    private _sexo: string = '';

    constructor({ nombre, sexo }: { nombre: string, sexo: 'F' | 'M' }) {
        this.nombre = nombre;
        this.sexo = sexo;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    get nombre(): string {
        return this._nombre;
    }

    set sexo(sexo: string) {
        this._sexo = sexo;
    }

    get sexo(): string {
        return this._sexo;
    }

}
