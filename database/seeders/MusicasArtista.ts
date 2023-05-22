import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import MusicasArtista from 'App/Models/MusicasArtista'

export default class extends BaseSeeder {
  public async run () {
    await MusicasArtista.createMany([
      {musicaId: 1, artistaId: 1},
      {musicaId: 2, artistaId: 2},
      {musicaId: 3, artistaId: 3},
      {musicaId: 4, artistaId: 4},
      {musicaId: 5, artistaId: 5},
      {musicaId: 6, artistaId: 6},
      {musicaId: 7, artistaId: 7},
      {musicaId: 8, artistaId: 8},
      {musicaId: 9, artistaId: 9},
      {musicaId: 10, artistaId: 10},
    ])
  }
}
