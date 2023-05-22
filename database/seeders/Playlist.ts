import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Playlist from 'App/Models/Playlist'

export default class extends BaseSeeder {
  public async run () {
    await Playlist.createMany([
      {nome: 'Deboche 2022'}
    ])
  }
}
