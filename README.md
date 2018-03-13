# Songs search

Use of Redux on a simple app

## Usual suspects

- actions.js : the actions of the app (addSong, deleteSong, updateSong & searchSongs)
- reducers.js : the reducers for the app (only one reducer for managing songs list)
- Components
  - AddComponent
  - ListComponent and ConnectedListComponent (HOC)
  - SearchComponent (HOC with no need to be notified by change of the applicationState)
- index.js : initialization of store
- App.js : main React Component
- Page
  - MainPageComponent
  - AddFormPageComponent
  - EditFormPageComponent

## JSON model for a song

```js
{
    id: "songs_" + 1,
    title: "God only knows",
    category: "pop",
    album: "Pet Sounds",
    author: "The Beach Boys",
    year: 1969
},
```

## URL client

http://localhost:3000/
http://localhost:3000/search
http://localhost:3000/add

## URL serveur

http://127.0.0.1:8090/albums