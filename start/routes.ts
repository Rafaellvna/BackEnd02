import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource('/albuns', 'AlbunsController').apiOnly();
Route.resource('/artistas', 'ArtistasController').apiOnly();
Route.resource('/contratos', 'ContratosController').apiOnly();
Route.resource('/generos', 'GenerosController').apiOnly();
Route.resource('/gravadoras', 'GravadorasController').apiOnly();
Route.resource('/musicasArtistas', 'MusicasArtistasController').apiOnly();
Route.resource('/musicas', 'MusicasController').apiOnly();
Route.resource('/musicasPlaylists', 'MusicasPlaylistsController').apiOnly();
Route.resource('/playlists', 'PlaylistsController').apiOnly();