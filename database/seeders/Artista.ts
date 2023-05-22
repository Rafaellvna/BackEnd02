import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Artista from 'App/Models/Artista'

export default class extends BaseSeeder {
  public async run () {
    await Artista.createMany([
      {nome: 'The Beatles', nascimento: new Date(1960), genero: 'Rock'},
      {nome: 'Eminem', nascimento: new Date(1988), genero: 'Rap'},
      {nome: 'The Weeknd', nascimento: new Date(2010), genero: 'R&B/Soul'},
      {nome: 'Linkin Park', nascimento: new Date(1996), genero: 'Rock'},
      {nome: 'Guns N Roses', nascimento: new Date(1985), genero: 'Rock'},
      {nome: 'Coldplay', nascimento: new Date(1996), genero: 'Rock Alternativo'},
      {nome: 'Bruno Mars', nascimento: new Date(2004), genero: 'R&B/Soul'},
      {nome: 'Ed Sheeran', nascimento: new Date(2005), genero: 'Pop'},
      {nome: 'AC/DC', nascimento: new Date(1973), genero: 'Rock'},
      {nome: 'Maroon 5', nascimento: new Date(1994), genero: 'Pop'},
    ])
  }
}
