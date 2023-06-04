class Streamer {
    constructor(nickname, descripcion, url) {
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.url = url;
        this.streams = [];
        this.canales = [];
    }
    mostrarDetalle() {
        console.log(`Nickname: ${this.nickname}`);
        console.log(`Descripción: ${this.descripcion}`);
        console.log(`URL: ${this.url}`);
    }
    agregarCanal(canal) {
        // Lógica para agregar un canal al streamer
        // Suponiendo que el streamer puede tener varios canales
        this.canales.push(canal);
    }
    agregarStream(stream) {
        // Lógica para agregar un stream al streamer
        // Suponiendo que el streamer puede tener varios streams
        this.streams.push(stream);
    }
}
export { Streamer };
