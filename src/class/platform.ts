import { Streamer } from "./character.js";
import { Empresa } from "./business.js";

class Plataforma {
    nombre: string;
    logo: string;
    descripcion: string;
    patrocinador: string;
    empresa?: Empresa;
    canales?: Canal[];

    constructor(nombre: string, logo: string, descripcion: string, patrocinador: string, empresa?: Empresa, canales?: Canal[]) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.patrocinador = patrocinador;
        this.empresa = empresa;
        this.canales = canales;
        if (empresa){
            empresa.agregarPlataforma(this);
        }
    }

    mostrarDetalle() : void {
        // Lógica para mostrar el detalle de la plataforma
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Logo: ${this.logo}`);
        console.log(`Descripción: ${this.descripcion}`);
        console.log(`Patrocinador: ${this.patrocinador}`);
    }

    mostrarCanales() : void {
        console.log("Canales:");
        if (!this.canales){
            console.log("No hay canales aun.");
            return;
        }
        this.canales.forEach((canal) => {
            console.log(`- ${canal.nombre}`);
        });
    }

    agregarCanal(canal: Canal) : void {
        if (!this.canales){
            this.canales = [];
        }
        this.canales.push(canal);
    }

    getCanales() : Canal[]{
        if(!this.canales){
            this.canales = []
        }
        return this.canales;
    }
}

class Categoria {
    nombre: string;
    descripcion: string;
    imagen: string;

    constructor(nombre: string, descripcion: string, imagen: string) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}

class Stream {
    url: string;
    streamers?: Streamer[];

    constructor(url:string, streamers?: Streamer[]) {
        this.url = url;
        this.streamers = streamers;
    }

    mostrarDetalle() : void {
        console.log(`URL: ${this.url}`);
    }
    
    mostrarStreamers() : void {
        console.log("Streamers:");
        if (this.streamers) {
        this.streamers.forEach((streamer) => {
            console.log(`- ${streamer.nickname}`);
        });
        }
    }

    agregarStreamer(streamer: Streamer) : void {
        if (!this.streamers) {
            this.streamers = [];
        }
        this.streamers.push(streamer);
    }
}

class Canal {
    nombre: string;
    banner: string;
    descripcion: string;
    streams?: Stream[];
    categorias?: Categoria[];

    constructor(nombre: string, banner: string, descripcion: string, categorias?: Categoria[], streams?: Stream[]) {
        this.nombre = nombre;
        this.banner = banner;
        this.streams = streams;
        this.descripcion = descripcion;
        this.categorias = categorias;
    }

    mostrarDetalle() : void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Banner: ${this.banner}`);
        console.log(`Descripción: ${this.descripcion}`);
    }
    
    mostrarStreams() : void {
        console.log("Streams:");
        if(!this.streams){
            console.log("No streams encontrados");
            return;
        }
        this.streams.forEach((stream) => {
        console.log(`- ${stream.url}`);
        });
    }

    agregarStream(stream: Stream) : void {
        if(!this.streams){
            this.streams = []
        }
        this.streams.push(stream);
    }
}

export {
    Plataforma,
    Canal,
    Stream,
    Categoria
}