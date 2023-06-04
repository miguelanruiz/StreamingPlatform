# StreamingPlatform
## _Ejercicio de implementación sobre TypeScript_

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

z ![](RackMultipart20230523-1-c9lx73_html_aee28f194663e231.png)

**Contexto**

En este momento existe un auge de las plataformas digitales de generación de contenido, especialmente plataformas de streaming, donde personas comparten en tiempo real con una audiencia diferentes actividades.

Se quiere construir una aplicación que permita explorar todos los canales de todas las plataformas de streaming en un solo lugar.

Una plataforma tiene un nombre, un logo, una descripción y una empresa que la patrocina. Cada plataforma tiene un conjunto de canales. De cada canal se requiere su nombre, un banner, el nombre del streamer, y un espacio para agregar una descripción detallada.

Un streamer tiene un nickname, una descripción y una lista de redes sociales. Cada stream realizado por un streamer en un canal tiene una lista de categorías que facilitan la búsqueda. Las categorías se refieren a actividades que ocurren durante un stream como juegos; espacios en los que se realiza el stream (en estudio. o en un espacio abierto); y temas que se abordan (música, política) Las categorías tienen un nombre, una descripción y una imagen.

<p align="center">
  <img src="https://raw.githubusercontent.com/miguelanruiz/StreamingPlatform/master/UML.png" alt="Diagrama construido"/>
</p>

**Entregables**

Habrá tres entregas del proyecto así:

**Entrega 1 (primera sesión sincrónica de la semana 10)**

- Crear repositorio para el proyecto
- En la wiki del repositorio incluir un enlace al modelo conceptual que contiene clases, atributos, asociaciones y glosario de términos
- Subir a la actividad de Bloque Neón la dirección del repositorio

**Entrega 2 (segunda sesión sincrónica de la semana 10)**

- Clases en TypeScript con sus atributos y método constructor. Cada clase debe ir en un archivo individual
- Subir los cambios al repositorio

**Entrega 3 (tercera sesión sincrónica de la semana 10)**

- Implementar los siguientes métodos

1. Mostrar el listado de plataformas
2. Mostrar el detalle de una plataforma
3. Mostrar el listado de canales
4. Mostrar el detalle de un canal
5. Mostrar el listado de streamers
6. Ver el detalle de un streamer
7. Mostrar el listado de streams
8. Mostrar el detalle de un stream
9. Agregar una plataforma
10. Agregar un canal
11. Agregar un streamer
12. Agregar un stream
13. Agregar un canal a un streamer
14. Agregar un stream a un streamer

- Subir los cambios al repositorio

**Rúbrica Entrega 1**

| **Diagrama de clases** | El diagrama de clases tiene todas las clases del enunciado y sus atributos.
Existen asociaciones entre las clases. | El diagrama de clases tiene todas las clases del enunciado y sus atributos.
No existen asociaciones entre las clases. | El diagrama de clases tiene todas las clases del enunciado.
No tienen atributos ni asociaciones en las clases. | El diagrama de clases no tiene todas las clases. | No se desarrolló el diagrama de clases. |
| --- | --- | --- | --- | --- | --- |
| 4.5 | 3.5 | 2.5 | 1.5 | 0 |

| **Glosario de términos** | El glosario de términos tiene todas las entidades y relaciones del diagrama de clases. | El glosario de términos tiene todas las entidades del diagrama de clases, pero no las relaciones. | El glosario de términos tiene más de la mitad de las entidades del diagrama de clases. | El glosario de términos tiene menos de la mitad de las entidades del diagrama de clases. | No se desarrolló el glosario de términos. |
| --- | --- | --- | --- | --- | --- |
| 1.0 | 0.6 | 0.4 | 0.2 | 0 |

| **TOTAL** | **5.0** | **4.0** | **3.0** | **1.5** | **0** |
| --- | --- | --- | --- | --- | --- |

**Rúbrica Entrega 2**

**Por cada clase:**

| **Implement-ación de la clase** | La clase está creada y tiene los atributos y asociaciones correctas. | La clase está creada y tiene los atributos, pero no las asociaciones correctas. | La clase está creada pero no tiene los atributos ni asociaciones correctas. | La clase no está creada. |
| --- | --- | --- | --- | --- |
| 3.5 | 2.5 | 1.5 | 0 |

| **Constructor** | La clase tiene el constructor y recibe los atributos necesarios. | La clase no tiene constructor, o está incompleto. |
| --- | --- | --- |
| 0.5 | 0 |

| **Módulo** | La clase se encuentra modularizada. | La clase no se encuentra modularizada. |
| --- | --- | --- |
| 0.5 | 0 |

| **Ejecución / Compilación** | El código de la clase se ejecuta correctamente sin errores. | El código de la clase tiene errores de ejecución o compilación. |
| --- | --- | --- |
| 0.5 | 0 |

| **TOTAL** | **5.0 / N\*** | **4.0 / N\*** | **2.0 / N\*** | **0.0 / N\*** |
| --- | --- | --- | --- | --- |

**\*N** corresponde al número de clases del diagrama de clases del proyecto.

**Rúbrica Entrega 3**

Para cada método se realizan pruebas para comprobar que está funcionando.

| **Descripción** | El método está implementado y funciona correctamente. | El método está implementado, pero tiene errores leves. | El método está implementado, pero tiene errores graves. | El método no está implementado. |
| --- | --- | --- | --- | --- |
| **Método 1.** | 0.357 | 0.25 | 0.143 | 0 |
| **Método 2.** | 0.357 | 0.25 | 0.143 | 0 |
| **Método 3.** | 0.357 | 0.25 | 0.143 | 0 |
| **Método 4.** | 0.357 | 0.25 | 0.143 | 0 |
| **Método 5.** | 0.357 | 0.25 | 0.143 | 0 |
| **Método 6.** | 0.357 | 0.25 | 0.143 | 0 |
| **Método 7.** | 0.357 | 0.25 | 0.143 | 0 |
| **Método 8.** | 0.357 | 0.25 | 0.143 | 0 |
| **Método 9.** | 0.357 | 0.25 | 0.143 | 0 |
| **Método 10.** | 0.357 | 0.25 | 0.143 | 0 |
| **Método 11.** | 0.357 | 0.25 | 0.143 | 0 |
| **Método 12.** | 0.357 | 0.25 | 0.143 | 0 |
| **Método 13.** | 0.357 | 0.25 | 0.143 | 0 |
| **Método 14.** | 0.359 | 0.25 | 0.141 | 0 |

| **TOTAL** | **5.0** | **4.0** | **2.0** | **0.0** |
| --- | --- | --- | --- | --- |