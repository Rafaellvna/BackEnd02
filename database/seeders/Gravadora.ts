import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Gravadora from 'App/Models/Gravadora'

export default class extends BaseSeeder {
  public async run () {
    await Gravadora.createMany([
      {nome: 'A', endereco: '1', telefone: '11 99398-4015'},
      {nome: 'B', endereco: '2', telefone: '19 99125-6653'},
      {nome: 'C', endereco: '3', telefone: '19 99223-0383'},
      {nome: 'D', endereco: '4', telefone: '18 99116-5627'},
      {nome: 'E', endereco: '5', telefone: '19 98956-2929'},
      {nome: 'F', endereco: '6', telefone: '14 99627-9983'},
      {nome: 'G', endereco: '7', telefone: '19 3341-7877'},
      {nome: 'H', endereco: '8', telefone: '19 3341-4900'},
      {nome: 'I', endereco: '9', telefone: '62 99126-0208'},
      {nome: 'J', endereco: '10', telefone: '17 99234-7740'},
    ])
  }
}
