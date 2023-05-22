import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import MusicasPlaylist from 'App/Models/MusicasPlaylist'

export default class extends BaseSeeder {
  public async run () {
    await MusicasPlaylist.createMany([
      {musicaId: 1, playlistId: 1},
      {musicaId: 2, playlistId: 1},
      {musicaId: 3, playlistId: 1},
      {musicaId: 4, playlistId: 1},
      {musicaId: 5, playlistId: 1},
      {musicaId: 6, playlistId: 1},
      {musicaId: 7, playlistId: 1},
      {musicaId: 8, playlistId: 1},
      {musicaId: 9, playlistId: 1},
      {musicaId: 10, playlistId: 1},
    ])
  }
}
