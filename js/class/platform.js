class Plataforma {
    constructor(nombre, logo, descripcion, patrocinador, empresa, canales) {
        this.nombre = nombre;
        this.logo = logo;
        this.descripcion = descripcion;
        this.patrocinador = patrocinador;
        this.empresa = empresa;
        this.canales = canales;
        if (empresa) {
            empresa.agregarPlataforma(this);
        }
    }
    mostrarDetalle() {
        // Lógica para mostrar el detalle de la plataforma
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Logo: ${this.logo}`);
        console.log(`Descripción: ${this.descripcion}`);
        console.log(`Patrocinador: ${this.patrocinador}`);
    }
    mostrarCanales() {
        console.log("Canales:");
        if (!this.canales) {
            console.log("No hay canales aun.");
            return;
        }
        this.canales.forEach((canal) => {
            console.log(`- ${canal.nombre}`);
        });
    }
    agregarCanal(canal) {
        if (!this.canales) {
            this.canales = [];
        }
        this.canales.push(canal);
    }
    getCanales() {
        if (!this.canales) {
            this.canales = [];
        }
        return this.canales;
    }
}
class Categoria {
    constructor(nombre, descripcion, imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}
class Stream {
    constructor(url, streamers) {
        this.url = url;
        this.streamers = streamers;
    }
    mostrarDetalle() {
        console.log(`URL: ${this.url}`);
    }
    mostrarStreamers() {
        console.log("Streamers:");
        if (this.streamers) {
            this.streamers.forEach((streamer) => {
                console.log(`- ${streamer.nickname}`);
            });
        }
    }
    agregarStreamer(streamer) {
        if (!this.streamers) {
            this.streamers = [];
        }
        this.streamers.push(streamer);
    }
}
class Canal {
    constructor(nombre, banner, descripcion, categorias, streams) {
        this.nombre = nombre;
        this.banner = banner;
        this.streams = streams;
        this.descripcion = descripcion;
        this.categorias = categorias;
    }
    mostrarDetalle() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Banner: ${this.banner}`);
        console.log(`Descripción: ${this.descripcion}`);
    }
    mostrarStreams() {
        console.log("Streams:");
        if (!this.streams) {
            console.log("No streams encontrados");
            return;
        }
        this.streams.forEach((stream) => {
            console.log(`- ${stream.url}`);
        });
    }
    agregarStream(stream) {
        if (!this.streams) {
            this.streams = [];
        }
        this.streams.push(stream);
    }
}
export { Plataforma, Canal, Stream, Categoria };
