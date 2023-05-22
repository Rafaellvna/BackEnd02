import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Musica from 'App/Models/Musica'

export default class extends BaseSeeder {
  public async run () {
    await Musica.createMany([
      {titulo: 'Come Together', duracao: 4.19, albumId: 1 , generoId: 1},
      {titulo: 'White America', duracao: 5.25, albumId: 2, generoId: 2},
      {titulo: 'Alone Again', duracao: 4.10 , albumId: 3, generoId: 3},
      {titulo: 'Papercut', duracao: 3.05, albumId: 4, generoId: 4},
      {titulo: 'Welcome to the Jungle', duracao: 4.33, albumId: 5, generoId: 5},
      {titulo: 'Sparks', duracao: 3.48, albumId: 6, generoId: 6},
      {titulo: 'Grenade', duracao: 3.42, albumId: 7, generoId: 7},
      {titulo: 'One', duracao: 4.13, albumId: 8, generoId: 8},
      {titulo: 'Hell Bells', duracao: 5.12, albumId: 9, generoId: 9},
      {titulo: 'Echo', duracao: 2.59, albumId: 10, generoId: 10},
    ])
  }
}
