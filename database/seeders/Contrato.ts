import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Contrato from 'App/Models/Contrato'

export default class extends BaseSeeder {
  public async run () {
    await Contrato.createMany([
      {artistaId: 1, gravadoraId: 1, data_inicio: new Date(1980, 5, 20), data_fim: new Date(1990, 5, 20)},
      {artistaId: 2, gravadoraId: 2, data_inicio: new Date(1995, 7, 16), data_fim: new Date(2000, 8, 23)},
      {artistaId: 3, gravadoraId: 3, data_inicio: new Date(2015, 10, 8), data_fim: new Date(2020, 10, 9)},
      {artistaId: 4, gravadoraId: 4, data_inicio: new Date(2008, 3, 30), data_fim: new Date(2018, 5, 22)},
      {artistaId: 5, gravadoraId: 5, data_inicio: new Date(1995, 2, 20), data_fim: new Date(2003, 3, 10)},
      {artistaId: 6, gravadoraId: 6, data_inicio: new Date(2001, 6, 18), data_fim: new Date(2007, 6, 17)},
      {artistaId: 7, gravadoraId: 7, data_inicio: new Date(2014, 8, 17), data_fim: new Date(2019, 8, 22)},
      {artistaId: 8, gravadoraId: 8, data_inicio: new Date(2010, 7, 28), data_fim: new Date(2015, 7, 14)},
      {artistaId: 9, gravadoraId: 9, data_inicio: new Date(1980, 12, 22), data_fim: new Date(1989, 12, 17)},
      {artistaId: 10, gravadoraId: 10, data_inicio: new Date(2001, 9, 8), data_fim: new Date(2006, 6, 15)},
    ])
  }
}
