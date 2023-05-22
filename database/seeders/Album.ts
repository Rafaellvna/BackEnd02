import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Album from 'App/Models/Album'

export default class extends BaseSeeder {
  public async run () {
    await Album.createMany([
      {nome: 'Abbey Road', data_lancamento: new Date(1969, 9, 26), artistaId: 1, gravadoraId: 1},
      {nome: 'The Eminem Show', data_lancamento: new Date(2002, 5, 26), artistaId: 2, gravadoraId: 2},
      {nome: 'After Hours', data_lancamento: new Date(2020, 3, 20), artistaId: 3, gravadoraId: 3},
      {nome: 'Hybrid Theory', data_lancamento: new Date(2000, 10, 24), artistaId: 4, gravadoraId: 4},
      {nome: 'Appetite for Destruction', data_lancamento: new Date(1987, 7, 21), artistaId: 5, gravadoraId: 5},
      {nome: 'Acoustic', data_lancamento: new Date(2000, 10, 29), artistaId: 6, gravadoraId: 6},
      {nome: 'Doo-Wops & Hooligans', data_lancamento: new Date(2010, 10, 4), artistaId: 7, gravadoraId: 7},
      {nome: 'X', data_lancamento: new Date(2014, 6, 20), artistaId: 8, gravadoraId: 8},
      {nome: 'Back in Black', data_lancamento: new Date(1980, 7, 25), artistaId: 9, gravadoraId: 9},
      {nome: 'Jordi', data_lancamento: new Date(2021, 6, 11), artistaId: 10, gravadoraId: 10},
    ])
  }
}
