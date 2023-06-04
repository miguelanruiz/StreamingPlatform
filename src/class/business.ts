import { Plataforma } from "./platform.js";

class Empresa {
    nombre: string;
    plataformas: Plataforma[];

    constructor(nombre: string) {
        this.nombre = nombre;
        this.plataformas = [];
    }

    agregarPlataforma(plataforma: Plataforma) : void {
        this.plataformas.push(plataforma);
    }
}

export {
    Empresa
}
  