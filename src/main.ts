import { Empresa } from "./class/business.js";
import { Plataforma, Canal, Categoria, Stream } from "./class/platform.js";
import { Streamer } from "./class/character.js";

const empresa = new Empresa("Empresa Frutos del dinero");

const plataforma1 = new Plataforma("Plataforma 1", "logo1.png", "Descripción 1","Bavaria", empresa);
const plataforma2 = new Plataforma("Plataforma 2", "logo2.png", "Descripción 2","Fox", empresa);
const plataforma3 = new Plataforma("Plataforma 3", "logo3.png", "Descripción 3","Amazon", empresa);

const canal1 = new Canal("Canal 1", "banner1.png", "Descripción canal 1");
const canal2 = new Canal("Canal 2", "banner2.png", "Descripción canal 2");

const stream1 = new Stream("stream1-url");
const stream2 = new Stream("stream2-url");

const streamer1 = new Streamer("Streamer 1", "Descripción streamer 1", "url-streamer1");
const streamer2 = new Streamer("Streamer 2", "Descripción streamer 2", "url-streamer2");

empresa.agregarPlataforma(plataforma1);
empresa.agregarPlataforma(plataforma2);

plataforma1.agregarCanal(canal1);
plataforma1.agregarCanal(canal2);

canal1.agregarStream(stream1);
canal2.agregarStream(stream2);

stream1.agregarStreamer(streamer1);
stream2.agregarStreamer(streamer2);

empresa.plataformas[0].mostrarDetalle();
empresa.plataformas[0].mostrarCanales();
empresa.plataformas.forEach(element => {
    element.mostrarDetalle();
    const channels = element.getCanales();
    channels.forEach(channel => {
        channel.mostrarDetalle();
        channel.agregarStream(stream1);
        channel.agregarStream(stream2);
        stream1.agregarStreamer(new Streamer("Nuevo Streamer 1", "Descripción nuevo streamer", "slack.com"));
        stream2.agregarStreamer(new Streamer("Nuevo Streamer 2", "Descripción nuevo streamer", "discord.com"));
        stream1.mostrarDetalle();
        stream2.mostrarDetalle();
    });

});
