import { Stream, Canal } from "./platform.js";

class Streamer {
    nickname: string;
    descripcion: string;
    url: string;
    canales: Canal[];
    streams: Stream[];

    constructor(nickname: string, descripcion: string, url: string) {
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.url = url;
        this.streams = [];
        this.canales = [];
    }

    mostrarDetalle() : void {
        console.log(`Nickname: ${this.nickname}`);
        console.log(`Descripción: ${this.descripcion}`);
        console.log(`URL: ${this.url}`);
    }

    agregarCanal(canal: Canal) : void {
        // Lógica para agregar un canal al streamer
        // Suponiendo que el streamer puede tener varios canales
        this.canales.push(canal);
    }

    agregarStream(stream: Stream) : void {
        // Lógica para agregar un stream al streamer
        // Suponiendo que el streamer puede tener varios streams
        this.streams.push(stream);
    }
}

export {
    Streamer
}