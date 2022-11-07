# Challenge 
## Abstract

Esta aplicación demostración de habilidades técnicas para front.

## Lo que se incluye hasta el momento.

* Arquitectura del proyecto basada en arquitectura hexagonal.
  * Layers
    * Application
    * Services
    * UI
    * Store
## Sobre las capas.
  * Application: Contiene los modelos de dominio y casos de usos.
  * Servicios: Responsable de las llamadas a las API externas.
  * Store: Implementación de Redux, se lo considera como una dependencia externa, por simplicidad, usa el mismo modelo
de dominio.
  * UI: Implementación de React, contiene, entre otros, de los módulos: components, pages, routes 

## Manejo de Cache.
A nivel de caso de uso se emplea un mapa para buscar elementos existentes de una manera rápida.
Sin embargo la responsabilidad del consumo, recae sobre el Service Worker.

## Algunas consideraciones sobre el armado del proyecto
El manejo de las dependencias entre capas fueron manejadas mediante HOF, como sustituto funcional para la inyección de dependencias.

```javascript
const useUseCasePodcast = () => {
    const dispatch = useDispatch();
    //se crean las dependencia para Redux dispatch
    const podcastRepository = podcastRepositoryAdapter(dispatch);
    const episodeRepository = episodeRepositoryAdapter(dispatch);
    //se inyectan las dependecias
    const _useCasePodcast = new UseCasePodcastStateFull(podcastRepository, episodeRepository)
    return {
        useCasePodcast: _useCasePodcast,
    }
}
export default useUseCasePodcast
```
El manejo de las interfaces se realizó mediante extensión de los prototipos declarados en el paquete port.


```javascript
const episodeRepositoryAdapter = (dispatch) => ({
    //se crea una estrutura a partir del prototipo port.
    ...episodeRepositoryPort,
    findAll: async (idPodcast) => {
        return repositoryRequestAdapter(dispatch)(findAllEpisodesAction(idPodcast))
    },
    select: async (episode) => {
        repositoryActionAdapter(selectEpisodeAction(episode));
    },
    getSelected: async () => {
        const {episodes} = storeInstance.getState();
        return episodes?.selected;
    },
    flush: async () => {
        repositoryActionAdapter(flushEpisodeStoreAction());
    }


});
```

## Dependencias externas al proyecto
    Se instalo plugins Moesif CORS en Chrome para el manejo de CORS.

## Versión de Node
    v16.18.0
## Consideraciones sobre dependencias internas.
Se empleó para el parse XML

    xml-js
Requiriendo instalar las siguientes dependencias adicionales para resolver conflictos con la versión de Node empleada
    
    "buffer": "^6.0.3",
    "stream": "^0.0.2",    
Para realizar la sobre carga de las configuraciones de WebPack, y evitar realizar un eject se empleó CRACO.

    "@craco/craco": "^7.0.0-alpha.9"

## Criterio para el manejo de Css y Styled Component.
Para todos los componentes que requirieron manejo dinámico o reutilizar bloques existentes de estilos,
se empleó Styled Component.

## Cómo correr la aplicación.
## Para desarrollo
* nvm use v16.18.0 (**Solo si emplea nvm para la gestion de versiones de node**)
* npm install
* npm start
## Para desplegar en prod
* npm build

La aplicacion puede ser provada empleando serve para desplegar en forma local o en cualquier servidor usando
el empaquetado generado en la carpeta build.

### Instalar serve
    npm isntall serve -g
### Desplegar localmente
    
    serve -s build

**Importante:** Para probar el funcionamiento del service worker es requerido desplegar el build, sea local o
en algún servidor.

## Sobre el branch model y git flow empleado.
Se siguio la siguiente estructura:

Todas las funcionalidades ramificaron desde develop, y se integraron a esta mediante PR. 

Los releases se crearon a partir de develop.
Se realizaron pruebas funcionales y los bugfix detectados sobre la release se ramifican de esta y se integraron luego
mediatne PR a ambas partes, release y develop.

No hay master en uso.

La rama de presentación es: release/presentacion-candidata.
