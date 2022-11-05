# Challenge 
## Abstract

Esta aplicación forma parte de challenge técnico. La misma se encuentra en progreso.

## Lo que se incluye hasta el momento.

* Arquitectura del proyecto basada en arquitectura hexagonal.
  * Layers
    * Application
    * Services
    * UI
    * Store
* Funcionalidad básica solicitada.

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
## En Backlog. 
* Test unitarios.
* Ajustes Visuales.
* Lint 

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