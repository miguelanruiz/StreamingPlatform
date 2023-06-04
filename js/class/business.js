class Empresa {
    constructor(nombre) {
        this.nombre = nombre;
        this.plataformas = [];
    }
    agregarPlataforma(plataforma) {
        this.plataformas.push(plataforma);
    }
}
export { Empresa };
