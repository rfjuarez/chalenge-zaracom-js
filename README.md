# Challenge 
## Abstract

Esta aplicación forma parte de challenge técnico.
La misma se encuentra en progreso.

## Lo que se incluye hasta el momento.

* Arquitectura del proyecto basada en arquitectura exagonal.
  * Layers
    * Application
    * Services
    * UI
    * Store
* Funcionalidad basica solicitada.

## Algunas consideraciones sobre el armado del proyecto
El manejo de las dependencias entre capas fueron manejadas mediante HOF, comosustituto funcional para la inyección de 
dependencias.

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
El manejo de las interfaces se realizó mediante extensión de los prototipos declarados el el paquete port.


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
* Configuración de Services Workers con Workpack.
* Ajustes Visuales.
* Lint 

## Dependencias externas al proyecto
    Se instalo plugins Moesif CORS en Chrome para el manejo de CORS.

## ¡Importante! Versión de Node
    v16.18.0
## Problema de dependencias encontradas.
Se realizaron pruebas con varias librerias de parse XML obtando por.

    xml-js
Fue necesario instalar algunas dependecias adicionales y resolber conflictos con versiones de Node.
Esta son:
    
    "buffer": "^6.0.3",
    "stream": "^0.0.2",    

## Criterio para el manejo de Css y Styled Component.
Para todos los componentes que requirieron manejo dinámico o reutilizar bloques existente de estilos, se empleó
Styled Component.

Para todos los componentes que requerían ajustes mínimos se empleó css.

## Como correr la aplicacion.

* nvm use v16.18.0
* npm install
* npm start